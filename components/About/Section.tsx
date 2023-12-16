  import { memo, useEffect, useState  } from 'react';
  import '../../app/styles/fadeIn.css';
  

  const Section = () => {
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
                <h1 className=" text-green-600 dark:text-lime-600 glitch-effect1 dark:text-cyan-300 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
                  Create. Learn. Repeat.
                  <span className="glitch-effect2 text-red-500 dark:text-red-600" data-text="Create. Learn. Repeat."></span>
                  <span className="glitch-effect3 text-green-400 dark:text-lime-400" data-text="Create. Learn. Repeat."></span>
                </h1>
              </div>


              {/* about */}
              <p className="mt-10 text-sm leading-relaxed text-slate-600 dark:text-slate-400">I&apos;m Diego Costa, a software engineer. <strong className="text-black dark:text-white uppercase">My journey</strong> in programming began with a curiosity to explore various technologies and languages. I dived into the world of coding by creating games, and during my time at university and technical school, I delved into a plethora of languages.</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">As I progress in <strong className="text-black dark:text-white uppercase">my career</strong>, I&apos;ve come to appreciate the value of specializing and building a strong foundation. So, I&apos;ve decided to focus on JavaScript using frameworks and libraries like React, Vue, and Angular, aiming to create remarkable products.</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Besides coding, I&apos;m a lover of sports, and in <strong className="text-black dark:text-white uppercase">my free time</strong>, you can find me enjoying side projects, watching movies, and playing games with friends.</p>

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
                      <p className=" border dark:border-black rounded-md text-green-500 dark:text-blendedCyan text-center w-80 "> • VBA Developer</p>
                    </div>
                    <p className="mt-1 text-xs text-center">AtendeiTi</p>
                    <p className="mt-1 text-xs text-center">2022 - 2023</p>
                  </div>
                  {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs text-justify'><strong className="text-black dark:text-blendedCyan">Create, develop and maintain automation processes</strong> that accelerate the execution of 
                  complex tasks and business routines, saving time for the system user.
                  </span>}
                </div>
                <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                  <div className='text-left'>
                    <div className='flex'>
                      <p className=" border light:border-white dark:border-black rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • IT auxiliary</p>
                      
                    </div>
                      <p className="mt-1 text-xs text-center">Objetivo Lorena</p>
                      <p className="mt-1 text-xs text-center">2021 - 2022</p>                 
                  </div>
                  {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs text-justify'>Work on <strong className="text-black dark:text-blendedCyan">assembling and maintaining</strong> computers, installing software and <strong className="text-black dark:text-blendedCyan mr-1">providing support</strong> 
                  to users of two company units.</span>}
                </div>

                <div className=" flex items-start mt-20 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  <div>
                    <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">Education /&gt;</h2>
                  </div>
                </div>
                <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                  <div className='text-left'>
                    <div className='flex'>
                      <p className=" border dark:border-black rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • Computer Engineering </p>
                    </div>
                    <p className="mt-1 text-xs text-center">Unisal - Salesian University Center of Sao Paulo</p>
                    <p className="mt-1 text-xs text-center">2019 - 2023</p>
                  </div>
                  {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs text-justify'>With knowledge in hardware, software, computer networks and embedded systems. <strong className="text-black dark:text-blendedCyan">analytical and problem solving skills</strong>, I am always <strong className="text-black dark:text-blendedCyan">up to date on new technologies and market trends</strong>.
                  </span>}
                </div>
                <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 $ {hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                  <div className='text-left'>
                    <div className='flex'>
                      <p className=" border dark:border-black rounded-md text-green-500 dark:text-blendedCyan text-center w-80"> • Internet IT Technician </p>

                    </div>
                    <p className="mt-1 text-xs text-center">Etec - State Technical School</p>
                    <p className="mt-1 text-xs text-center">2016 - 2018</p>
                  </div>
                  {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs text-justify'>Skills in <strong className="text-black dark:text-blendedCyan">web development, responsive design, SEO, usability</strong> and knowledge in programming languages. Work is focused on <strong className="text-black dark:text-blendedCyan">quality, performance and safety</strong> of the projects developed.
                  </span>}
                </div>
              </div>
              
          </div>
        </section>
    );
  };

  export default memo(Section);
