import { memo, useEffect, useState  } from 'react';
import '../../app/styles/fadeIn.css';

interface AboutProps {
currentLanguage: string;
}

interface AboutTranslations {
  h1: string;
  journey: string;
  career: string;
  freeTime: string;
  firstCareerP1: string,
  firstCareerP2: string,
  secondCareerP1: string,
  secondCareerP2: string,
  secondCareerP3: string,
  secondCareerP4: string,
  secondCareerP5: string,
  firstAcademict: string,
  firstAcademic: string,
  secondAcademic: string,
  secondAcademicP1: string,
  secondAcademicP2: string,
  secondAcademicP3: string,
  secondAcademicP4: string,
} 

const translations: { [language: string]: AboutTranslations } = {
  en: {
      h1: 'Create. Learn. Repeat.',
      journey: 'I&apos;m Diego Costa, a software engineer. <strong className="text-black dark:text-white uppercase">My journey</strong> in programming began with a curiosity to explore various technologies and languages. I dived into the world of coding by creating games, and during my time at university and technical school, I delved into a plethora of languages.',
      career: 'As I progress in <strong className="text-black dark:text-white uppercase">my career</strong>, I&apos;ve come to appreciate the value of specializing and building a strong foundation. So, I&apos;ve decided to focus on JavaScript using frameworks and libraries like React, Vue, and Angular, aiming to create remarkable products.', 
      freeTime: 'Besides coding, I&apos;m a lover of sports, and in <strong className="text-black dark:text-white uppercase">my free time</strong>, you can find me enjoying side projects, watching movies, and playing games with friends.',  
      firstCareerP1: 'Create, develop and maintain automation processes ',
      firstCareerP2: 'that accelerate the execution of complex tasks and business routines, saving time for the system user.',
      secondCareerP1: 'Work on ',
      secondCareerP2: 'assembling and maintaining',
      secondCareerP3: ' computers, installing software and ',
      secondCareerP4: 'providing support',
      secondCareerP5: ' to users of two company units.',
      firstAcademict: 'Unisal - Salesian University Center of Sao Paulo',
      firstAcademic: ' With knowledge in hardware, software, computer networks and embedded systems. <strong className="text-black dark:text-blendedCyan">analytical and problem solving skills</strong>, I am always <strong className="text-black dark:text-blendedCyan">up to date on new technologies and market trends</strong>.',
      secondAcademic: 'Etec - State Technical School',  
      secondAcademicP1: 'Skills in',
      secondAcademicP2: 'web development, responsive design, SEO, usability',
      secondAcademicP3: ' and knowledge in programming languages. Work is focused on ',
      secondAcademicP4: 'quality, performance and safety</strong> of the projects developed.',
  },
  'pt-br': {
      h1: 'Criar. Aprender. Repitir.',
      journey: 'Eu sou Diego Costa, um engenheiro de software. <strong className="text-black dark:text-white uppercase">Minha jornada</strong> na programação começou com uma curiosidade para explorar várias tecnologias e linguagens. Eu mergulhei no mundo da codificação criando jogos, e durante meu tempo na universidade e na escola técnica, me aprofundei em várias linguagens.',
      career: 'À medida que avanço na <strong className="text-black dark:text-white uppercase">minha carreira</strong>, aprendi a valorizar a importância de me especializar e construir uma base sólida. Então, decidi focar em JavaScript usando frameworks e bibliotecas como React, Vue e Angular, com o objetivo de criar produtos notáveis.',
      freeTime: 'Além da programação, sou amante de esportes e, no <strong className="text-black dark:text-white uppercase">meu tempo livre</strong>, você pode me encontrar aproveitando projetos pessoais, assistindo filmes e jogando com amigos.',
      firstCareerP1: 'Criar, desenvolver e manter processos de automação ',
      firstCareerP2: 'que aceleram a execução de tarefas e rotinas de negócios complexas, economizando tempo do usuário do sistema.',
      secondCareerP1: 'Trabalho em ',
      secondCareerP2: 'montagem e manutenção',
      secondCareerP3: ' de computadores, instalação de software e ',
      secondCareerP4: 'fornecendo suporte',
      secondCareerP5: ' para usuários de duas unidades da empresa.',
      firstAcademict: 'Unisal - Centro Universitário Salesiano de São Paulo',
      firstAcademic: ' Com conhecimento em hardware, software, redes de computadores e sistemas embarcados. <strong className="text-black dark:text-blendedCyan">Habilidades analíticas e de resolução de problemas</strong>, estou sempre <strong className="text-black dark:text-blendedCyan">atualizado(a) sobre novas tecnologias e tendências de mercado</strong>.',
      secondAcademic: 'Etec - Escola Técnica Estadual',
      secondAcademicP1: 'Skills in',
      secondAcademicP2: 'web development, responsive design, SEO, usability',
      secondAcademicP3: ' and knowledge in programming languages. Work is focused on ',
      secondAcademicP4: 'quality, performance and safety</strong> of the projects developed.',
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
      const offsetTimeline = scrollPosition * (-0.19);

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
      <section className=" hero min-h-screen flex-auto py-24 flex items-center justify-center animate-fade-in">
        
        <div className="mx-auto max-w-[44rem] text-center">
            {/* Heading */}
            <div className="flex flex-auto">
              <h1 className=" text-green-600 dark:text-cyan-300 glitch-effect1 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
                {translations[currentLanguage].h1}
                <span className="glitch-effect2 text-red-500 dark:text-red-600" data-text={translations[currentLanguage].h1}></span>
                <span className="glitch-effect3 text-green-400 dark:text-lime-400" data-text={translations[currentLanguage].h1}></span>
              </h1>
            </div>


            {/* about */}
            <p className="mt-10 text-sm leading-relaxed text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: translations[currentLanguage].journey }}></p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: translations[currentLanguage].career }}></p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: translations[currentLanguage].freeTime }}></p>

            {/* timeline */}
            <div style={{ transform: 'translateY(var(--timeline-offset))' }} className="mt-36">
              
              <div className="flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">Career /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('firstSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${hoveredSpan === 'firstSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-green-500 dark:text-blendedCyan text-center w-80 "> • VBA Developer</p>
                  </div>
                  <p className="mt-1 text-xs text-center">AtendeiTi</p>
                  <p className="mt-1 text-xs text-center">2022 - 2023</p>
                </div>
                {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs text-justify'><strong className="text-black dark:text-blendedCyan">{translations[currentLanguage].firstCareerP1}</strong>{translations[currentLanguage].firstCareerP2} 
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className="border border-black dark:border-white rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • IT auxiliary</p>
                    
                  </div>
                    <p className="mt-1 text-xs text-center">Objetivo Lorena</p>
                    <p className="mt-1 text-xs text-center">2021 - 2022</p>                 
                </div>
                {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs text-justify'>
                  {translations[currentLanguage].secondCareerP1}
                  <strong className="text-black dark:text-blendedCyan">
                    {translations[currentLanguage].secondCareerP2}
                  </strong>
                  {translations[currentLanguage].secondCareerP3}
                  <strong className="text-black dark:text-blendedCyan mr-1">
                    {translations[currentLanguage].secondCareerP4}
                  </strong> 
                  {translations[currentLanguage].secondCareerP5}
                </span>}
              </div>

              <div className=" flex items-start mt-20 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">Education /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • Computer Engineering </p>
                  </div>
                  <p className="mt-1 text-xs text-center">{translations[currentLanguage].firstAcademict}</p>
                  <p className="mt-1 text-xs text-center">2019 - 2023</p>
                </div>
                {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs text-justify' dangerouslySetInnerHTML={{ __html: translations[currentLanguage].firstAcademic }}>
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 $ {hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • Internet IT Technician </p>

                  </div>
                  <p className="mt-1 text-xs text-center">{translations[currentLanguage].secondAcademic}</p>
                  <p className="mt-1 text-xs text-center">2016 - 2018</p>
                </div>
                {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs text-justify'>{translations[currentLanguage].secondAcademicP1}<strong className="text-black dark:text-blendedCyan">{translations[currentLanguage].secondAcademicP2}</strong>{translations[currentLanguage].secondAcademicP3}<strong className="text-black dark:text-blendedCyan">{translations[currentLanguage].secondAcademicP4}
                </span>}
              </div>
            </div>
            
        </div>
      </section>
  );
};

export default memo(Section);
