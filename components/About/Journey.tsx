import translations from './Translations';

interface JourneyProps {
  currentLanguage: string;
}

const Journey = ({ currentLanguage }: JourneyProps) => (
    <p className="mt-10">
      {translations[currentLanguage].journeyP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].journeyP2}
      </strong>
      {translations[currentLanguage].journeyP3}
    </p>
);

export default Journey;
