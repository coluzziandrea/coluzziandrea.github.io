import React from 'react'
import { FaThreads } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaHashnode } from 'react-icons/fa6'
import { FaDev } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { IoPeople } from 'react-icons/io5'
import { GrProjects } from 'react-icons/gr'

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <FaGithub />
    case 'Threads':
      return <FaThreads />
    case 'Linkedin':
      return <FaLinkedin />
    case 'Twitter':
      return <FaXTwitter />
    case 'YouTube':
      return <FaYoutube />
    case 'Twitch':
      return <FaTwitch />
    case 'DEV':
      return <FaDev />
    case 'Hashnode':
      return <FaHashnode />
    case 'Projects':
      return <GrProjects />
    case 'About':
      return <FaUser />
    case 'Experience':
      return <MdOutlineWork />
    case 'Community':
      return <IoPeople />
    default:
      return <FaExternalLinkAlt />
  }
}

export default Icon
