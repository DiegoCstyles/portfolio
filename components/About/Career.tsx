import translations from './Translations';

interface CareerProps {
  currentLanguage: string;
}

const Career = ({ currentLanguage }: CareerProps) => (
    <p className="mt-3">
      {translations[currentLanguage].careerP1}
      <strong className="text-black dark:text-white uppercase">
        {translations[currentLanguage].careerP2}
      </strong>
      {translations[currentLanguage].careerP3}
    </p>
);

export default Career;
