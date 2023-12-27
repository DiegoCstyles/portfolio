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

export default translations;
