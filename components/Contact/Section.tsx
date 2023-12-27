import { memo, useEffect  } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Icon from '../Icon';
import '../../app/styles/fadeIn.css';

interface ContactProps {
currentLanguage: string;
}

interface ContactTranslations {
  h1: string;
  name: string;
  message: string;
  p1: string;
  p2: string;
  send: string;
}

const translations: { [language: string]: ContactTranslations } = {
  en: {
      h1: 'Reach. Me. Out.',
      name: 'Name',
      message: 'Message',
      p1: 'I love chatting with interesting people. Get in touch with me ',
      p2: 'via social media or email',
      send: 'Send Message',
  },
  'pt-br': {
      h1: 'Entre. Em. Contato.',
      name: 'Nome',
      message: 'Mensagem',
      p1: 'Adoro conversar com pessoas interessantes. Entre em contato comigo ',
      p2: 'via mídia social ou email',
      send: 'Enviar Mensagem',
  },
};

const Section = ({ currentLanguage }: ContactProps) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = (event.target as HTMLFormElement).elements;
  
    const name = (formElements.namedItem('name') as HTMLInputElement)?.value;
    const email = (formElements.namedItem('email') as HTMLInputElement)?.value;
    const message = (formElements.namedItem('message') as HTMLTextAreaElement)?.value;

   const subject = 'Contact Form Submission';
   const body = `
      **Name:** ${name}
      
      **Email:** ${email}
      
      **Message:**
      ${message}
      
      ---

      This message was sent via the contact form on Diego Costa Portfolio. Please respond promptly.
    `;

    // Create the mailto link
    const mailtoLink = `mailto:Diegoe.r.c07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };
  
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
    <section className="hero min-h-screen flex-auto py-24 flex items-center justify-center animate-fade-in">
      <div  className="mx-auto max-w-[55rem] text-center">
        {/* Geometric Wave Background */}

        {/* about */}
        <div className="border-black  dark:border-white rounded-t-md mt-10 p-4">
          <h1 className="light:text-black dark:text-fuchsia-600 glitch-effect1 dark:text-cyan-300 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
            {translations[currentLanguage].h1}
            <span className="glitch-effect2 light:text-white dark:text-white" data-text={translations[currentLanguage].h1}></span>
            <span className="glitch-effect3 light:text-black dark:text-fuchsia-400" data-text={translations[currentLanguage].h1}></span>
          </h1>
          
          <p className="text-xs text-justify leading-relaxed text-slate-600 dark:text-slate-400">
            {translations[currentLanguage].p1}<strong className="font-light text-sm text-black dark:text-white">{translations[currentLanguage].p2}</strong>.
          </p>
          <div className="flex mt-1.5">
            <Icon href="https://www.linkedin.com/in/diegoerc/" target="_blank" label="Instagram" classNameLink="group" icon={FaLinkedin}></Icon>
            <Icon href="https://github.com/DiegoCstyles" target="_blank" label="Linkedin" classNameIcon="ml-2  " classNameLink="group" icon={FaGithub}></Icon>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-1 border-black dark:border-white rounded-b-md p-4">
          <form onSubmit={handleFormSubmit}>
            <div className='flex flex-col'>
              <div className="flex justify-center item-center text-center mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={translations[currentLanguage].name}
                  className="text-xs light:bg-white w-full zoom-effect-input px-7 py-2 h-8 border-b bg-transparent bg-black/5 text-black dark:text-white border-black dark:border-white focus:outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500"
                  required
                />
              </div>

              <div className="flex justify-center item-center text-center mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="text-xs light:bg-white w-full zoom-effect-input px-7 py-2 h-8 border-b bg-transparent bg-black/5 text-black dark:text-white border-black dark:border-white focus:outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500"
                  required
                />
              </div>

              <textarea
                id="message"
                name="message"
                placeholder={translations[currentLanguage].message}
                className="mb-4 text-xs light:bg-white w-full zoom-effect-input px-7 py-2 border-b bg-transparent bg-black/5 text-black dark:text-white border-black dark:border-white focus:outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500 h-28 resize-none"
                required
              ></textarea>

              <button type="submit" className="flex flex-col items-center justify-center zoom-effect bg-fuchsia-500/60 dark:bg-fuchsia-500/60 text-black dark:text-white hover:visible pb-[2px] pt-1 text-xs uppercase leading-normal transition delay-100 duration-200 ease-in active:text-gray-400 px-6 py-3 font-lg">
                <span className="text-center">{translations[currentLanguage].send}</span>
              </button>

            </div>
            <div className="flex items-center justify-center">
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Section);
