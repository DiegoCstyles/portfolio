import FooterIcons from "./FooterIcons";
import FooterActions from "./FooterActions";
import React, { memo } from 'react';
import '../../app/styles/fadeIn.css';

interface FooterProps {
  currentLanguage: string;
}

interface FooterTranslations {
  h1: string;
}

const translations: { [language: string]: FooterTranslations } = {
  en: {
      h1: 'crafting delightful web experiences',
    },
    'pt-br': {
      h1: 'criando experiências web magníficas',
    },
};


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

      <div className="p-2 bg-fuchsia-500">
        <FooterActions></FooterActions>
      </div>

    </div>
  );
};

export default memo(Footer);
