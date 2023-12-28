interface HeroTranslations {
  title: string;
  description: string;
}

const translations: { [language: string]: HeroTranslations } = {
  en: {
    title: 'Full-Stack developer.',
    description: 'Passionate about building responsive and dynamic web applications with React, Next.js, and Tailwind CSS.',
  },
  'pt-br': {
    title: 'Desenvolvedor Full-Stack.',
    description: 'Apaixonado por construir aplicações web responsivas e dinâmicas com React, Next.js e Tailwind CSS.',
  },
};

export default translations;
