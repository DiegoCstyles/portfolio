interface HeroTranslations {
  title: string;
  description: string;
}

const translations: { [language: string]: HeroTranslations } = {
  en: {
    title: 'Frontend developer.',
    description: 'Passionate about building responsive and dynamic web applications with React, Next.js, and Tailwind CSS.',
  },
  'pt-br': {
    title: 'Desenvolvedor Frontend.',
    description: 'Apaixonado por construir aplicações web responsivas e dinâmicas com React, Next.js e Tailwind CSS.',
  },
};

export default translations;
