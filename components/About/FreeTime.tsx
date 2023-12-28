import translations from './Translations';

interface FreeTimeProps {
  currentLanguage: string;
}

const FreeTime = ({ currentLanguage }: FreeTimeProps) => (
    <p className="mt-3">
      {translations[currentLanguage].freeTimeP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].freeTimeP2}
      </strong>
      {translations[currentLanguage].freeTimeP3}
    </p>
);

export default FreeTime;
