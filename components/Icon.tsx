import { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface IconProps {
  href: string;
  label: string;
  target?: string;
  classNameLink?: string;
  classNameIcon?: string;
  icon: IconType;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Icon = ({
  href,
  label,
  target,
  classNameLink,
  classNameIcon,
  icon: Icon,
  onClick,
  children,
}: IconProps) => {
  const { resolvedTheme } = useTheme();
  const darkThemeColor = 'rgb(255, 255, 255)';
  const lightThemeColor = 'rgb(0, 0, 0)';
  const [color, setColor] = useState(lightThemeColor);

  useEffect(() => {
    // Update color based on the resolved theme
    if (resolvedTheme === 'dark') {
      setColor(darkThemeColor);
    } else if (resolvedTheme === 'light') {
      setColor(lightThemeColor);
    } else {
      setColor(lightThemeColor); // Default to light theme if the provided theme is invalid
    }
  }, [resolvedTheme]);
    
  return (
    <Link href={href} target={target} rel="noopener noreferrer" aria-label={label} className={classNameLink}>
      <div className="flex items-center" onClick={onClick}>
        {children}
        <Icon className={" w-5 h-5 opacity-80 group-hover:opacity-100 transition duration-300" + classNameIcon} style={{ color }} />
      </div>
    </Link>
  );
};

export default Icon;
