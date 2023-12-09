import { memo, useEffect  } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Icon from '../Icon';
import '../../app/styles/fadeIn.css';
import ContactImage from './ContactImage.png';
import Image from 'next/image';

const Section = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate the amount of offset for the image (inverted direction)
      const offsetSection = scrollPosition * 0.1;
      const offsetImage = scrollPosition * 0.26;

      // Apply the offset to the image using CSS variables
      document.documentElement.style.setProperty('--section-offset', `${offsetSection}px`);
      document.documentElement.style.setProperty('--image-offset', `${offsetImage}px`);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section style={{ transform: 'translateY(var(--section-offset))' }} className="hero min-h-screen flex-auto py-24 flex items-center justify-center animate-fade-in">
      <div  className="mx-auto max-w-[44rem] text-center">
        {/* Geometric Wave Background */}
        {/* Heading */}
        <div className="flex flex-auto">
          <h1 className="text-blendedCyan glitch-effect1 dark:text-cyan-300 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
            Reach. Me. Out.
            <span className="glitch-effect2 text-red-600" data-text="Reach. Me. Out."></span>
            <span className="glitch-effect3 text-lime-400" data-text="Reach. Me. Out."></span>
          </h1>
        </div>

        {/* about */}
        <div className="border-black  dark:border-white rounded-t-md mt-10 p-4">
          <p className="text-sm text-justify leading-relaxed text-slate-600 dark:text-slate-400">
            I love chatting with interesting people. Get in touch with me <strong className="text-sm text-black dark:text-white">via social media or email</strong>.
          </p>
          <div className="flex mt-2">
            <Icon href="https://www.linkedin.com/in/diegoerc/" target="_blank" label="Instagram" classNameLink="group" icon={FaInstagram}></Icon>
            <Icon href="https://github.com/DiegoCstyles" target="_blank" label="Linkedin" classNameIcon="ml-2  " classNameLink="group" icon={FaLinkedin}></Icon>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-1 border-black dark:border-white rounded-b-md p-4">
          <form>
            <div className='flex'>
              <div className=" justify-between">
                <div className="flex justify-start mb-4">
                  <label htmlFor="name" className="block text-center p-1 text-black dark:text-black uppercase bg-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="text-xs w-full zoom-effect-input ml-2 px-7 py-2 h-8 border bg-transparent text-gray-700 dark:text-white border-black dark:border-white focus:outline-none focus:border-blendedCyan dark:focus:border-blendedCyan"
                    required
                  />
                </div>

                <div className="flex mb-4">
                  <label htmlFor="email" className="block text-center p-1 text-black dark:text-black uppercase bg-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="text-xs w-full zoom-effect-input ml-2 px-7 py-2 h-8 border bg-transparent text-gray-700 dark:text-white border-black dark:border-white focus:outline-none focus:border-blendedCyan dark:focus:border-blendedCyan"
                    required
                  />
                </div>
              </div>
              <div className="ml-4 mb-6 ">
                
                <textarea
                  id="message"
                  name="message"
                  className="text-xs w-full zoom-effect-input px-10 py-1.5 border bg-transparent text-gray-700 dark:text-white border-black dark:border-white rounded-t-md focus:outline-none focus:border-blendedCyan dark:focus:border-blendedCyan h-20 resize-none"
                  required
                ></textarea>

                <button type="submit" className="flex float-right zoom-effect border bg-blendedCyan/60 text-black dark:text-white hover:decoration-white dark:hover:decoration-white hover:underline-offset-4 dark:border-blendedCyan/60 hover:visible pb-[2px] pt-1 text-sm uppercase leading-normal transition delay-100 duration-200 ease-in focus:ring-0 active:text-gray-400 border-blendedCyan/60 hover:dark:border-blendedCyan/60 overline hover:underline underline-offset-8 px-6 py-4 font-lg focus:outline-none">
                  <span>Send Message</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              
            </div>
          </form>
        </div>
      </div>
      <div className="zoom-effect mx-auto ">
        <div className=" w-full h-full relative rounded-md overflow-hidden">
            <Image style={{ transform: 'translateY(var(--image-offset))' }} src={ContactImage} alt="me" className="object-cover inset-0 bg-transparent opacity-40" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default memo(Section);
