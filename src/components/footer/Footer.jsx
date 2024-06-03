import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Kommineni Venkat Rao</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Expercience</a></li>
        <li><a href="#contact">Contact</a></li>

        
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/venkat-kommineni-2a9640214" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.github.com/kommineni-venkat" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/venky__chowdhary/" target="_blank" rel="noreferrer" ><FaInstagram /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Venkat 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer