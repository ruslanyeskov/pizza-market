import React from 'react';
import { ReactComponent as Telegram } from './img/telegram.svg';
import { ReactComponent as Instagram } from './img/instagram.svg';
import { ReactComponent as Youtube } from './img/youtube.svg';
import { ReactComponent as Github } from './img/github.svg';

const Socials = () => {
  return (
    <div className="Social_list">
      <a href="https://t.me/SomeChannelTG" target="blank" className="social_link">
        <Telegram alt="Telegram" className="social_img"/>
      </a>     
      <a href="https://www.instagram.com/ruslanyeskov" target="blank" className="social_link">
        <Instagram alt="Instagram" className="social_img"/>
      </a>
      <a href="https://www.youtube.com/@ruslaneskov" target="blank" className="social_link">
        <Youtube alt="Youtube" className="social_img"/>
      </a>
      <a href="https://github.com/ruslanyeskov" target="blank" className="social_link">
        <Github alt="Github" className="social_img"/>
      </a>                  
    </div>  
  )
}

export default Socials;