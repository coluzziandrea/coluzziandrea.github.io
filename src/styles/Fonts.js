import { css } from 'styled-components'

import MonolisaRegularttf from '../fonts/MonoLisa-Basic-2.012/ttf/MonoLisa-Regular.ttf'
import MonolisaBoldttf from '../fonts/MonoLisa-Basic-2.012/ttf/MonoLisa-Bold.ttf'

import MonolisaRegularItalicttf from '../fonts/MonoLisa-Basic-2.012/ttf/MonoLisa-RegularItalic.ttf'
import MonolisaBoldItalicttf from '../fonts/MonoLisa-Basic-2.012/ttf/MonoLisa-BoldItalic.ttf'

import JetBrainsRegularttf from '../fonts/JetBrains/JetBrainsMono-Regular.ttf'
import JetBrainsMediumttf from '../fonts/JetBrains/JetBrainsMono-Medium.ttf'
import JetBrainsBoldttf from '../fonts/JetBrains/JetBrainsMono-Bold.ttf'

import JetBrainsRegularItalicttf from '../fonts/JetBrains/JetBrainsMono-Italic.ttf'
import JetBrainsMediumItalicttf from '../fonts/JetBrains/JetBrainsMono-MediumItalic.ttf'
import JetBrainsBoldItalicttf from '../fonts/JetBrains/JetBrainsMono-BoldItalic.ttf'

const MonolisaNormalWeights = {
  400: MonolisaRegularttf,
  500: MonolisaRegularttf,
  600: MonolisaBoldttf
}

const MonolisaItalicWeights = {
  400: MonolisaRegularItalicttf,
  500: MonolisaRegularItalicttf,
  600: MonolisaBoldItalicttf
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

const Monolisa = {
  name: 'Monolisa',
  normal: MonolisaNormalWeights,
  italic: MonolisaItalicWeights
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

const MonolisaNormal = createFontFaces(Monolisa)
const MonolisaItalic = createFontFaces(Monolisa, 'italic')

const JetBrainsNormal = createFontFaces(JetBrains)
const JetBrainsItalic = createFontFaces(JetBrains, 'italic')

const Fonts = css`
  ${MonolisaNormal + MonolisaItalic + JetBrainsNormal + JetBrainsItalic}
`

export default Fonts
