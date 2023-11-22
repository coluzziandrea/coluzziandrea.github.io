import { css } from 'styled-components'

import UbuntuRegularttf from '../fonts/Ubuntu/Ubuntu-Regular.ttf'
import UbuntuMediumttf from '../fonts/Ubuntu/Ubuntu-Medium.ttf'
import UbuntuBoldttf from '../fonts/Ubuntu/Ubuntu-Bold.ttf'

import UbuntuRegularItalicttf from '../fonts/Ubuntu/Ubuntu-Italic.ttf'
import UbuntuMediumItalicttf from '../fonts/Ubuntu/Ubuntu-MediumItalic.ttf'
import UbuntuBoldItalicttf from '../fonts/Ubuntu/Ubuntu-BoldItalic.ttf'

import JetBrainsRegularttf from '../fonts/JetBrains/JetBrainsMono-Regular.ttf'
import JetBrainsMediumttf from '../fonts/JetBrains/JetBrainsMono-Medium.ttf'
import JetBrainsBoldttf from '../fonts/JetBrains/JetBrainsMono-Bold.ttf'

import JetBrainsRegularItalicttf from '../fonts/JetBrains/JetBrainsMono-Italic.ttf'
import JetBrainsMediumItalicttf from '../fonts/JetBrains/JetBrainsMono-MediumItalic.ttf'
import JetBrainsBoldItalicttf from '../fonts/JetBrains/JetBrainsMono-BoldItalic.ttf'

const UbuntuNormalWeights = {
  400: UbuntuRegularttf,
  500: UbuntuMediumttf,
  600: UbuntuBoldttf
}

const UbuntuItalicWeights = {
  400: UbuntuRegularItalicttf,
  500: UbuntuMediumItalicttf,
  600: UbuntuBoldItalicttf
}

const JetBrainsNormalWeights = {
  400: JetBrainsRegularttf,
  500: JetBrainsMediumttf,
  600: JetBrainsBoldttf
}

const JetBrainsItalicWeights = {
  400: JetBrainsRegularItalicttf,
  500: JetBrainsMediumItalicttf,
  600: JetBrainsBoldItalicttf
}

const Ubuntu = {
  name: 'Ubuntu',
  normal: UbuntuNormalWeights,
  italic: UbuntuItalicWeights
}

const JetBrains = {
  name: 'JetBrains',
  normal: JetBrainsNormalWeights,
  italic: JetBrainsItalicWeights
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, format] of Object.entries(family[style])) {
    const ttf = format

    styles += `
      ../font-face {
        font-family: '${family.name}';
        src: url(${ttf}) format('ttf');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }

  return styles
}

const UbuntuNormal = createFontFaces(Ubuntu)
const UbuntuItalic = createFontFaces(Ubuntu, 'italic')

const JetBrainsNormal = createFontFaces(JetBrains)
const JetBrainsItalic = createFontFaces(JetBrains, 'italic')

const Fonts = css`
  ${UbuntuNormal + UbuntuItalic + JetBrainsNormal + JetBrainsItalic}
`

export default Fonts
