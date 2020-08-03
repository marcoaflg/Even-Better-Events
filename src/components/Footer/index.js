import React from 'react';
import './styles.css';


import FacebookIcon from '@material-ui/icons/Facebook';

import YouTubeIcon from '@material-ui/icons/YouTube';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

import InstagramIcon from '@material-ui/icons/Instagram';

import TwitterIcon from '@material-ui/icons/Twitter';



function Footer() {

    return (
     
        <footer>
          <div className="conteudo-footer">
            <div className="container flex">
              <ul id="navegacao" className="footer-links flex">
                <li><a href="#/">Ajuda e contato</a></li>
                <li><a href="#/">Cadastrar Evento</a></li>
                <li><a href="#/">Sobre Certificação</a></li>
                <li><a href="#/">Empresas parceiras</a></li>
              </ul>
              <ul id="redes-sociais" className="footer-links">
                <li><a href="#/"><FacebookIcon  fontSize='large'/></a></li>
                <li><a href="#/"><YouTubeIcon  fontSize='large'/></a></li>
                <li><a href="#/"><LinkedInIcon  fontSize='large'/></a></li>
                <li><a href="#/"><InstagramIcon  fontSize='large'/></a></li>
                <li><a href="#/"><TwitterIcon  fontSize='large'/></a></li>
              </ul>
            </div>
          </div>

        </footer>
      
    );
}

export default Footer;