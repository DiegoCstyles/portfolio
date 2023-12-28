import { memo, useState  } from 'react';
import translations from './Translations';

interface AboutProps {
  currentLanguage: string;
}
const Section = ({ currentLanguage }: AboutProps) => {
  const [hoveredSpan, setHoveredSpan] = useState<string | null>(null);

  const handleSpanHover = (spanName: string | null) => {
    setHoveredSpan(spanName);
  };

  return (
      <section className=" hero flex-auto py-24 flex items-center justify-center animate-fade-in bg-fuchsia-500 dark:bg-fuchsia-500">
        
        <div className="mx-auto max-w-[80rem] text-center">
            {/* Heading */}
            <div className="justify-center items-center">
              <h1 className="light:text-black dark:text-white mt-3 text-9xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight uppercase font-black">
                {translations[currentLanguage].h1}
              </h1>
            </div>

            {/* about */}
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
          
            {/* timeline */}
            <div style={{ transform: 'translateY(var(--timeline-offset))' }} className="mt-36 font-medium">
              
              <div className="flex items-start mt-3 text-base leading-relaxed text-black dark:text-white">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Career} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('firstSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'firstSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-96"> • {translations[currentLanguage].firstCareerTitle}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">AtendeiTi</p>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">2022 - 2023</p>
                </div>
                {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs text-justify p-2'>
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstCareerP1}
                  </strong>
                  {translations[currentLanguage].firstCareerP2} 
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className="border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-96"> • {translations[currentLanguage].secondCareerTitle}</p>
                    
                  </div>
                    <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">Objetivo Lorena</p>
                    <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">2021 - 2022</p>                 
                </div> 
                {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs text-justify p-2'>
                  {translations[currentLanguage].secondCareerP1}
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].secondCareerP2}
                  </strong>
                  {translations[currentLanguage].secondCareerP3}
                  <strong className="text-black dark:text-white mr-1">
                    {translations[currentLanguage].secondCareerP4}
                  </strong> 
                  {translations[currentLanguage].secondCareerP5}
                </span>}
              </div>

              <div className=" flex items-start mt-20 text-base leading-relaxed text-black dark:text-white">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Education} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-96"> • {translations[currentLanguage].firstAcademicTitle}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">{translations[currentLanguage].firstAcademict}</p>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">2019 - 2023</p>
                </div>
                {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs text-justify p-2'>
                  {translations[currentLanguage].firstAcademicP1}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstAcademicP2}
                  </strong>
                  {translations[currentLanguage].firstAcademicP3}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstAcademicP4}
                  </strong>
              </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-96"> • {translations[currentLanguage].secondAcademicTitle}</p>

                  </div>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">{translations[currentLanguage].secondAcademic}</p>
                  <p className="mt-1 text-xs font-medium text-center text-white dark:text-black">2016 - 2018</p>
                </div>
                {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs text-justify p-2 light:text-black dark:text-white'>
                  {translations[currentLanguage].secondAcademicP1}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].secondAcademicP2}
                  </strong>
                  {translations[currentLanguage].secondAcademicP3}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].secondAcademicP4}
                  </strong>
                  {translations[currentLanguage].secondAcademicP5}
                </span>}
              </div>
            </div>
            
        </div>
      </section>
  );
};

export default memo(Section);
