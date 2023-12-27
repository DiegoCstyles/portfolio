interface Translations {
  [language: string]: {
    about: string;
    projects: string;
    contact: string;
  };
}

const translations: Translations = {
  en: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  'pt-br': {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
  },
};

export default translations;
