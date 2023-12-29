interface Translations {
  [language: string]: {
    about: string;
    projects: string;
  };
}

const translations: Translations = {
  en: {
    about: 'About',
    projects: 'Projects',
  },
  'pt-br': {
    about: 'Sobre',
    projects: 'Projetos',
  },
};

export default translations;
