import FooterIcons from "./FooterIcons";
import FooterActions from "./FooterActions";
import React, { memo } from 'react';
import '../../app/styles/fadeIn.css';
import translations from './Translations';

interface FooterProps {
  currentLanguage: string;
}

const Footer = ({ currentLanguage }: FooterProps) => {
  
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-0.5 justify-center ">
      <div className="typewriter text-black dark:text-white text-sm mr-4">
        <h1>{translations[currentLanguage].h1}</h1>
      </div>
      <span className="flex-grow"></span>
      
      <div className="justify-center" >
        <FooterIcons currentLanguage={currentLanguage}/>
      </div>

      <div className="p-2 bg-fuchsia-500 hover:bounce">
        <FooterActions></FooterActions>
      </div>

    </div>
  );
};

export default memo(Footer);
