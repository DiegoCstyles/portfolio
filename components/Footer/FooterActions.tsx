import React, { memo } from 'react';
import { MdOutlineArrowDropUp } from 'react-icons/md';
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
        classNameIcon="hover:bounce hover:border-green-500 hover:dark:border-blendedCyan lg:w-[1.5rem] lg:h-[1.7rem] md:w-[1.5rem] md:h-[1.7rem] w-[1.5rem] h-[1.7rem] border rounded-t-md border-black dark:border-white hover:bg-opacity-10 focus:border-white dark:hover:bg-opacity-10"
        classNameLink="group"
        icon={MdOutlineArrowDropUp}
        onClick={handleReturnButtonClick}
      />
    </>
  );
};

export default memo(ReturnButton);
