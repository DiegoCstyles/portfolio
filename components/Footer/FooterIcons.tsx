import { useState, useEffect } from 'react';
import { TbPhoneCalling } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import React, { memo } from 'react';
import { RiFileCopyFill } from 'react-icons/ri';
import '../../app/styles/fadeIn.css';

const FooterIcons = () => {
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
          <p className={`${shouldApplyWidthClass ? 'flex-grow flex dark:text-blendedCyan w-[17.5rem] h-full text-blendedCyan border rounded-t-md border-primary px-6 pb-[2px] pt-1 text-xs leading-normal transition duration-150 ease-in-out hover:bg-opacity-10 focus:outline-none border-blendedCyan dark:border-blendedCyan focus:ring-0 dark:hover:bg-opacity-10' : 'flex-grow dark:text-blendedCyan w-[8rem] rounded-t-md h-full text-blendedCyan border border-primary px-3 pb-[2px] pt-1 text-xs leading-normal transition duration-150 ease-in-out hover:bg-opacity-10 focus:outline-none border-blendedCyan dark:border-blendedCyan focus:ring-0 dark:hover:bg-opacity-10'}`}>
            <span className={`${shouldApplyWidthClass ? 'text-black dark:text-white text-xs' : 'hidden'}`}>Send me a DM😎</span>
            <span className="ml-1 flex text-xs">{copiedValue} Copied<RiFileCopyFill className={`${shouldApplyWidthClass ? 'ml-1 visible w-4 h-4 text-xs' : 'hidden'}`} /></span>
          </p>
        )}
      </div>
      <button
        className={'flex border hover:border-blendedCyan hover:dark:border-blendedCyan rounded-t-md hover:underline overline dark:text-white hover:decoration-blendedCyan dark:hover:decoration-blendedCyan hover:underline-offset-4 border-black dark:border-white px-4 pb-[2px] pt-1 text-xs font-thin  uppercase leading-normal transition delay-100 duration-200 ease-in  focus:outline-none focus:ring-0 active:text-gray-400'}
        onClick={() => handleCopyToClipboard("+55(12)997263748", "Phone")}
      >
        <TbPhoneCalling className="lg:w-[1.2rem] lg:h-[1.2rem] md:w-[1.2rem] md:h-[1.2rem] sm:w-[1.2rem] sm:h-[1.2rem] w-[1.2rem] h-[1.2rem] transition-colors duration-200" />
        <span className="ml-1">Phone</span>
      </button>
      <button
        className={'flex border hover:border-blendedCyan hover:dark:border-blendedCyan rounded-t-md hover:underline overline dark:text-white  hover:decoration-blendedCyan dark:hover:decoration-blendedCyan hover:underline-offset-4 border-black dark:border-white hover:visible px-4 pb-[2px] pt-1 text-xs font-thin  uppercase leading-normal transition delay-100 duration-200 ease-in  focus:outline-none focus:ring-0 active:text-gray-400 '}
        onClick={() => handleCopyToClipboard("diegoe.r.c07@gmail.com", "Mail")}
      >
        <TfiEmail className="lg:w-[1rem] lg:h-[1rem] md:w-[1rem] md:h-[1rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem] transition-colors duration-200" />
        <span className="ml-1">Mail</span>
      </button>
    </div>
  );
};

export default memo(FooterIcons);
