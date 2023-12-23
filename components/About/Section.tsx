import { memo, useEffect, useState  } from 'react';

interface AboutProps {
currentLanguage: string;
}

interface AboutTranslations {
  h1: string;
  journeyP1: string;
  journeyP2: string;
  journeyP3: string;
  
  careerP1: string;
  careerP2: string;
  careerP3: string;
  
  freeTimeP1: string;
  freeTimeP2: string;
  freeTimeP3: string;

  h2Career: string,
  firstCareerTitle: string,
  firstCareerP1: string,
  firstCareerP2: string,
  secondCareerTitle: string,
  secondCareerP1: string,
  secondCareerP2: string,
  secondCareerP3: string,
  secondCareerP4: string,
  secondCareerP5: string,

  h2Education: string,
  firstAcademicTitle: string,
  firstAcademict: string,
  firstAcademic: string,
  secondAcademicTitle: string,
  secondAcademic: string,
  secondAcademicP1: string,
  secondAcademicP2: string,
  secondAcademicP3: string,
  secondAcademicP4: string,
  secondAcademicP5: string,
} 
//temporary solution for new languages(not ideal) 
const translations: { [language: string]: AboutTranslations } = {
  en: {
      h1: 'Create. Learn. Repeat.',
      journeyP1: 'I\'m Diego Costa, a software engineer.',
      journeyP2: ' My journey',
      journeyP3: ' in programming began with a curiosity to explore various technologies and languages. I dived into the world of coding by creating games, and during my time at university and technical school, I delved into a plethora of languages.',
      
      careerP1: 'As I progress in ', 
      careerP2: ' my career', 
      careerP3: ', I\'ve come to appreciate the value of specializing and building a strong foundation. So, I\'ve decided to focus on JavaScript using frameworks and libraries like React, Vue, and Angular, aiming to create remarkable products.', 
      
      freeTimeP1: 'Besides coding, I\'m a lover of sports, and in ',  
      freeTimeP2: 'my free time',  
      freeTimeP3: ', you can find me enjoying side projects, watching movies, and playing games with friends.',  

      h2Career: 'Career',
      firstCareerTitle: 'VBA Developer',
      firstCareerP1: 'Create, develop and maintain automation processes ',
      firstCareerP2: 'that accelerate the execution of complex tasks and business routines, saving time for the system user.',
      secondCareerTitle: 'IT auxiliary',
      secondCareerP1: 'Work on ',
      secondCareerP2: 'assembling and maintaining',
      secondCareerP3: ' computers, installing software and ',
      secondCareerP4: 'providing support',
      secondCareerP5: ' to users of two company units.',
    
      h2Education: 'Education',
      firstAcademicTitle: 'Computer Engineering',
      firstAcademict: 'Unisal - Salesian University Center of Sao Paulo',
      firstAcademic: ' With knowledge in hardware, software, computer networks and embedded systems. <strong className="text-black dark:text-blendedCyan">analytical and problem solving skills</strong>, I am always <strong className="text-black dark:text-blendedCyan">up to date on new technologies and market trends</strong>.',
      secondAcademicTitle: 'Internet IT Technician',   
      secondAcademic: 'Etec - State Technical School',  
      secondAcademicP1: 'Skills in ',
      secondAcademicP2: 'web development, responsive design, SEO, usability',
      secondAcademicP3: ' and knowledge in programming languages. Work is focused on ',
      secondAcademicP4: 'quality, performance and safety ',
      secondAcademicP5: 'of the projects developed.',
  },
  'pt-br': {
      h1: 'Criar. Aprender. Repitir.',
      journeyP1: 'Eu sou Diego Costa, um engenheiro de software. ',
      journeyP2: 'Minha jornada',
      journeyP3: ' na programação começou com uma curiosidade para explorar várias tecnologias e linguagens. Eu mergulhei no mundo da codificação criando jogos, e durante meu tempo na universidade e na escola técnica, me aprofundei em várias linguagens.',
      
      careerP1: 'À medida que avanço na ',
      careerP2: 'minha carreira',
      careerP3: ', aprendi a valorizar a importância de me especializar e construir uma base sólida. Então, decidi focar em JavaScript usando frameworks e bibliotecas como React, Vue e Angular, com o objetivo de criar produtos notáveis.',
      
      freeTimeP1: 'Além da programação, sou amante de esportes e, no ',
      freeTimeP2: 'meu tempo livre',
      freeTimeP3: ', você pode me encontrar aproveitando projetos pessoais, assistindo filmes e jogando com amigos.',

      h2Career: 'Carreira',
      firstCareerTitle: 'Desenvolvedor VBA',
      firstCareerP1: 'Criar, desenvolver e manter processos de automação ',
      firstCareerP2: 'que aceleram a execução de tarefas e rotinas de negócios complexas, economizando tempo do usuário do sistema.',
      secondCareerTitle: 'Auxiliar de TI', 
      secondCareerP1: 'Trabalho em ',
      secondCareerP2: 'montagem e manutenção',
      secondCareerP3: ' de computadores, instalação de software e ',
      secondCareerP4: 'fornecendo suporte',
      secondCareerP5: ' para usuários de duas unidades da empresa.',
    
      h2Education: 'Educação',
      firstAcademicTitle: 'Engenharia da Computação',
      firstAcademict: 'Unisal - Centro Universitário Salesiano de SP',
      firstAcademic: ' Com conhecimento em hardware, software, redes de computadores e sistemas embarcados. <strong className="text-black dark:text-blendedCyan">Habilidades analíticas e de resolução de problemas</strong>, estou sempre <strong className="text-black dark:text-blendedCyan">atualizado(a) sobre novas tecnologias e tendências de mercado</strong>.',
      secondAcademicTitle: 'Técnico de TI em Internet',  
      secondAcademic: 'Etec - Escola Técnica Estadual',
      secondAcademicP1: 'Habilidades em ',
      secondAcademicP2: 'desenvolvimento web, design responsivo, SEO, usabilidade',
      secondAcademicP3: ' e conhecimento em linguagens de programação. O trabalho é focado em ',
      secondAcademicP4: 'qualidade, desempenho e segurança ',
      secondAcademicP5: 'dos projetos desenvolvidos.',
  },
};

const Section = ({ currentLanguage }: AboutProps) => {
  const [hoveredSpan, setHoveredSpan] = useState<string | null>(null);

  const handleSpanHover = (spanName: string | null) => {
    setHoveredSpan(spanName);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate the amount of offset for the image (inverted direction)
      const offsetTimeline = scrollPosition * (-0.10);

      // Apply the offset to the image using CSS variables
      document.documentElement.style.setProperty('--timeline-offset', `${offsetTimeline}px`);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <section className=" hero flex-auto py-24 flex items-center justify-center animate-fade-in bg-purple-500">
        
        <div className="mx-auto max-w-[44rem] text-center">
            {/* Heading */}
            <div className="flex flex-auto">
              <h1 className=" text-white dark:text-white glitch-effect1 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
                {translations[currentLanguage].h1}
                <span className="glitch-effect2 text-black dark:text-black" data-text={translations[currentLanguage].h1}></span>
                <span className="glitch-effect3 text-white dark:text-white" data-text={translations[currentLanguage].h1}></span>
              </h1>
            </div>

            {/* about */}
            <div className="text-sm tracking-tight font-medium leading-relaxed text-black dark:text-black">
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
              
              <div className="flex items-start mt-3 text-base leading-relaxed text-black dark:text-black">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Career} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('firstSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'firstSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-white dark:text-white text-center w-80 "> • {translations[currentLanguage].firstCareerTitle}</p>
                  </div>
                  <p className="mt-1 text-xs text-center">AtendeiTi</p>
                  <p className="mt-1 text-xs text-center">2022 - 2023</p>
                </div>
                {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs text-justify bg-black/30 rounded-md p-1.5'>
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].firstCareerP1}
                  </strong>
                  {translations[currentLanguage].firstCareerP2} 
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className="border border-black dark:border-white rounded-md text-white dark:text-white text-center w-80"> • {translations[currentLanguage].secondCareerTitle}</p>
                    
                  </div>
                    <p className="mt-1 text-xs text-center">Objetivo Lorena</p>
                    <p className="mt-1 text-xs text-center">2021 - 2022</p>                 
                </div> 
                {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs text-justify bg-black/30 rounded-md p-1.5'>
                  {translations[currentLanguage].secondCareerP1}
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].secondCareerP2}
                  </strong>
                  {translations[currentLanguage].secondCareerP3}
                  <strong className="text-white dark:text-white mr-1">
                    {translations[currentLanguage].secondCareerP4}
                  </strong> 
                  {translations[currentLanguage].secondCareerP5}
                </span>}
              </div>

              <div className=" flex items-start mt-20 text-base leading-relaxed text-black dark:text-black">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Education} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-white dark:text-white text-center w-80"> • {translations[currentLanguage].firstAcademicTitle}</p>
                  </div>
                  <p className="mt-1 text-xs text-center">{translations[currentLanguage].firstAcademict}</p>
                  <p className="mt-1 text-xs text-center">2019 - 2023</p>
                </div>
                {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs text-justify bg-black/30 rounded-md p-1.5' dangerouslySetInnerHTML={{ __html: translations[currentLanguage].firstAcademic }}>
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-white dark:text-white text-center w-80"> • {translations[currentLanguage].secondAcademicTitle}</p>

                  </div>
                  <p className="mt-1 text-xs text-center">{translations[currentLanguage].secondAcademic}</p>
                  <p className="mt-1 text-xs text-center">2016 - 2018</p>
                </div>
                {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs text-justify bg-black/30  rounded-md p-1.5'>
                  {translations[currentLanguage].secondAcademicP1}
                  
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].secondAcademicP2}
                  </strong>
                  {translations[currentLanguage].secondAcademicP3}
                  
                  <strong className="text-white dark:text-white">
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
