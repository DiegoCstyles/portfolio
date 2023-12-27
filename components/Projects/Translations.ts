interface ProjectTranslation {
  title: string;
  description: string;
}

interface ProjectsTranslations {
  h1: string;
  h2: string;
  projects: {
    [key: string]: ProjectTranslation;
  };
}

const translations: { [language: string]: ProjectsTranslations } = {
  en: {
    h1: 'Work. Hobby. Discovery.',
    h2: 'Featured Projects',
    projects: {
      'Last Defenders': {
        title: 'Last Defenders',
        description: 'Classic game style with modern features',
      },
      'Check System': {
        title: 'Check System',
        description: 'Risk Management with Integrated Management System - IMS',
      },
      'BeachLord': {
        title: 'BeachLord',
        description: 'Based on a game for resort tycoon (Work in Progress..)',
      },
    },
  },
  'pt-br': {
    h1: 'Trabalhar. Hobby. Descoberta.',
    h2: 'Projetos em destaque',
    projects: {
      'Last Defenders': {
        title: 'Last Defenders',
        description: 'Estilo clássico de jogo com recursos modernos',
      },
      'Check System': {
        title: 'Check System',
        description: 'Gestão de riscos com Sistema de Gestão Integrado - SGI',
      },
      'BeachLord': {
        title: 'BeachLord',
        description: 'Baseado em um jogo para resort tycoon (Trabalho em andamento..)',
      },
    },
  },
};

export default translations;
