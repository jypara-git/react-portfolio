import React from 'react';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/jypara-git" target="_blank" ><AiFillGithub style={{ color: '#2b738d', marginRight: '20px' }} /></a>
            <a href="https://www.linkedin.com/in/zhypara-abdieva-907746203/" target="_blank"><AiOutlineLinkedin style={{ color: '#2b738d'}} /></a>
            <a href="mailto:zhyparaabdieva@gmail.com"><HiOutlineMail style={{ color: '#2b738d', marginLeft: '20px' }} /></a>
        </footer>
    )
}

export default Footer;