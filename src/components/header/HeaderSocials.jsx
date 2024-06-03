import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/venkat-kommineni-2a9640214" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/kommineni-venkat" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/venky__chowdhary/" target="_blank" rel="noreferrer" ><FaInstagram /></a>

    </div>
  )
}

export default HeaderSocials