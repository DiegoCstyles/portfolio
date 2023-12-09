import React, { memo } from 'react';
import { BsPlus } from 'react-icons/Bs';
import Icon from '../Icon';
import '../../app/styles/bounceAnim.css';

const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js

const ReturnButton = () => {
  const handleReturnButtonClick = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Icon
        href="#top"
        label="return"
        classNameIcon="hover:pulse hover:border-lime-600 hover:dark:border-blendedCyan lg:w-[1.5rem] lg:h-[1.7rem] md:w-[1.5rem] md:h-[1.7rem] w-[1.5rem] h-[1.7rem]  rounded-sm rounded-tl-sm border-black dark:border-white hover:bg-opacity-10 focus:border-white dark:hover:bg-opacity-10"
        classNameLink="group"
        icon={BsPlus}
        onClick={handleReturnButtonClick}
      />
    </>
  );
};

export default memo(ReturnButton);
