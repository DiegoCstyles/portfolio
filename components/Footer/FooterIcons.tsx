import { useState, useEffect } from 'react';
import { TbPhoneCalling } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import React, { memo } from 'react';
import { RiFileCopyFill } from 'react-icons/ri';
import '../../app/styles/fadeIn.css';

interface FooterIconsProps {
    currentLanguage: string;
}

interface Translations {
  [language: string]: {
    copyMessage: string;
    copyValue: string;
    phone: string;
    mail: string;
  };
}

const FooterIcons = ({currentLanguage }: FooterIconsProps) => {
  const translations: Translations = {
    en: {
      copyMessage: 'Send me a DM',
      copyValue: 'Copied',
      phone: 'Phone',
      mail: 'Mail',
    },
    'pt-br': {
      copyMessage: 'Mande um DM',
      copyValue: 'Copiado',
      phone: 'Telefone',
      mail: 'Email',
    },
  };
  
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedValue, setCopiedValue] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleCopyToClipboard = (text: string, value: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setCopiedValue(value);

    // Reset the success message after a certain duration
    setTimeout(() => {
      setCopySuccess(false);
      setCopiedValue("");
    }, 3000);
  };

  useEffect(() => {
    // Update the screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldApplyWidthClass = screenWidth >= 481;

  return (
    <div className="flex h-full">
      <div className={`${!copySuccess && shouldApplyWidthClass ? 'w-[15.8rem]' : ''}`}>
        {copySuccess && (
          <p className={`${shouldApplyWidthClass ? 'flex-grow flex text-fuchsia-500 w-[17.5rem] h-full bg-white p-3 text-xs leading-normal transition duration-150 ease-in-out' : 'flex-grow text-fuchsia-500 w-[8rem] h-full bg-white p-3 text-xs leading-normal transition duration-150 ease-in-out'}`}>
            <span className={`${shouldApplyWidthClass ? 'text-slate-600 text-xs' : 'hidden'}`}>{translations[currentLanguage].copyMessage}😎</span>
            <span className="ml-1 flex text-xs">{copiedValue} {translations[currentLanguage].copyValue}<RiFileCopyFill className={`${shouldApplyWidthClass ? 'ml-1 visible w-4 h-4 text-xs' : 'hidden'}`} /></span>
          </p>
        )}
      </div>
        
      <button
        className={'flex hover:bg-fuchsia-600/50 text-white p-3 text-xs font-thin  uppercase leading-normal transition delay-100 duration-200 ease-in active:text-gray-400'}
        onClick={() => handleCopyToClipboard("+55(12)997263748", "Phone")}
      >
        <TbPhoneCalling className="lg:w-[1.2rem] lg:h-[1.2rem] md:w-[1.2rem] md:h-[1.2rem] sm:w-[1.2rem] sm:h-[1.2rem] w-[1.2rem] h-[1.2rem] transition-colors duration-200" />
        <span className="ml-1">{translations[currentLanguage].phone}</span>
      </button>
        
      <button
        className={'flex hover:bg-fuchsia-600/50 text-white p-3 text-xs font-thin uppercase leading-normal transition delay-100 duration-200 ease-in active:text-gray-400 '}
        onClick={() => handleCopyToClipboard("diegoe.r.c07@gmail.com", "Mail")}
      >
        <TfiEmail className="lg:w-[1rem] lg:h-[1rem] md:w-[1rem] md:h-[1rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem] transition-colors duration-200" />
        <span className="ml-1">{translations[currentLanguage].mail}</span>
      </button>
        
    </div>
  );
};

export default memo(FooterIcons);
