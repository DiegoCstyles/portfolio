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
  const { theme } = useTheme();
  const darkThemeColor = 'rgb(0, 0, 0)';
  const lightThemeColor = 'rgb(255, 255, 255)';
  const color;

  // Validate theme and set color accordingly
  if (theme === 'dark') {
    color = darkThemeColor;
  } else if (theme === 'light') {
    color = lightThemeColor;
  } else {
    color = lightThemeColor; // Default to light theme if the provided theme is invalid
  }

  return (
    <Link href={href} target={target} rel="noopener noreferrer" aria-label={label} className={classNameLink}>
      <div className="flex items-center " onClick={onClick}>
        {children}
        <Icon className={" w-6 h-6 md:w-5 md:h-5 lg:w-5 lg:h-5 opacity-80 group-hover:opacity-100 transition duration-300 " + classNameIcon} color={color} />
      </div>
    </Link>
  );
};

export default Icon;
