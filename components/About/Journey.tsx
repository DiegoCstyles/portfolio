import translations from './Translations';

interface JourneyProps {
  currentLanguage: string;
}

const Journey = ({ currentLanguage }: JourneyProps) => (
  <div className="text-sm tracking-tight font-medium leading-relaxed text-white dark:text-black">
    <p className="mt-10">
      {translations[currentLanguage].journeyP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].journeyP2}
      </strong>
      {translations[currentLanguage].journeyP3}
    </p>
    <p className="mt-3">
      {translations[currentLanguage].careerP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].careerP2}
      </strong>
      {translations[currentLanguage].careerP3}
    </p>
    <p className="mt-3">
      {translations[currentLanguage].freeTimeP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].freeTimeP2}
      </strong>
      {translations[currentLanguage].freeTimeP3}
    </p>
  </div>
);

export default Journey;
