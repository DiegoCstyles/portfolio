interface AboutTranslations {
  h1: string;
  journeyP1: string;
  journeyP2: string;
  journeyP3: string;
  
  careerP1: string;
  careerP2: string;
  careerP3: string;
  
  freeTimeP1: string;
  freeTimeP2: string;
  freeTimeP3: string;

  h2Career: string,
  firstCareerTitle: string,
  firstCareerP1: string,
  firstCareerP2: string,
  secondCareerTitle: string,
  secondCareerP1: string,
  secondCareerP2: string,
  secondCareerP3: string,
  secondCareerP4: string,
  secondCareerP5: string,

  h2Education: string,
  firstAcademicTitle: string,
  firstAcademict: string,
  firstAcademicP1: string,
  firstAcademicP2: string,
  firstAcademicP3: string,
  firstAcademicP4: string,
  secondAcademicTitle: string,
  secondAcademic: string,
  secondAcademicP1: string,
  secondAcademicP2: string,
  secondAcademicP3: string,
  secondAcademicP4: string,
  secondAcademicP5: string,
} 
//temporary solution for new languages(not ideal) 
const translations: { [language: string]: AboutTranslations } = {
  en: {
      h1: 'Create. Learn. Repeat.',
      journeyP1: 'I\'m Diego Costa, a software engineer.',
      journeyP2: ' My journey',
      journeyP3: ' in programming began with a curiosity to explore various technologies and languages. I dived into the world of coding by creating games, and during my time at university and technical school, I delved into a plethora of languages.',
      
      careerP1: 'As I progress in ', 
      careerP2: ' my career', 
      careerP3: ', I\'ve come to appreciate the value of specializing and building a strong foundation. So, I\'ve decided to focus on JavaScript using frameworks and libraries like React, Vue, and Angular, aiming to create remarkable products.', 
      
      freeTimeP1: 'Besides coding, I\'m a lover of sports, and in ',  
      freeTimeP2: 'my free time',  
      freeTimeP3: ', you can find me enjoying side projects, watching movies, and playing games with friends.',  

      h2Career: 'Career',
      firstCareerTitle: 'VBA Developer',
      firstCareerP1: 'Create, develop and maintain automation processes ',
      firstCareerP2: 'that accelerate the execution of complex tasks and business routines, saving time for the system user.',
      secondCareerTitle: 'IT auxiliary',
      secondCareerP1: 'Work on ',
      secondCareerP2: 'assembling and maintaining',
      secondCareerP3: ' computers, installing software and ',
      secondCareerP4: 'providing support',
      secondCareerP5: ' to users of two company units.',
    
      h2Education: 'Education',
      firstAcademicTitle: 'Computer Engineering',
      firstAcademict: 'Unisal - Salesian University Center of Sao Paulo',
      firstAcademicP1: ' With knowledge in hardware, software, computer networks and embedded systems.',
      firstAcademicP2: ' Analytical and problem solving skills',
      firstAcademicP3: ', I am always ',
      firstAcademicP4: 'up to date on new technologies and market trends.',
      secondAcademicTitle: 'Internet IT Technician',   
      secondAcademic: 'Etec - State Technical School',  
      secondAcademicP1: 'Skills in ',
      secondAcademicP2: 'web development, responsive design, SEO, usability',
      secondAcademicP3: ' and knowledge in programming languages. Work is focused on ',
      secondAcademicP4: 'quality, performance and safety ',
      secondAcademicP5: 'of the projects developed.',
  },
  'pt-br': {
      h1: 'Criar. Aprender. Repitir.',
      journeyP1: 'Eu sou Diego Costa, um engenheiro de software. ',
      journeyP2: 'Minha jornada',
      journeyP3: ' na programação começou com uma curiosidade para explorar várias tecnologias e linguagens. Eu mergulhei no mundo da codificação criando jogos, e durante meu tempo na universidade e na escola técnica, me aprofundei em várias linguagens.',
      
      careerP1: 'À medida que avanço na ',
      careerP2: 'minha carreira',
      careerP3: ', aprendi a valorizar a importância de me especializar e construir uma base sólida. Então, decidi focar em JavaScript usando frameworks e bibliotecas como React, Vue e Angular, com o objetivo de criar produtos notáveis.',
      
      freeTimeP1: 'Além da programação, sou amante de esportes e, no ',
      freeTimeP2: 'meu tempo livre',
      freeTimeP3: ', você pode me encontrar aproveitando projetos pessoais, assistindo filmes e jogando com amigos.',

      h2Career: 'Carreira',
      firstCareerTitle: 'Desenvolvedor VBA',
      firstCareerP1: 'Criar, desenvolver e manter processos de automação ',
      firstCareerP2: 'que aceleram a execução de tarefas e rotinas de negócios complexas, economizando tempo do usuário do sistema.',
      secondCareerTitle: 'Auxiliar de TI', 
      secondCareerP1: 'Trabalho em ',
      secondCareerP2: 'montagem e manutenção',
      secondCareerP3: ' de computadores, instalação de software e ',
      secondCareerP4: 'fornecendo suporte',
      secondCareerP5: ' para usuários de duas unidades da empresa.',
    
      h2Education: 'Educação',
      firstAcademicTitle: 'Engenharia da Computação',
      firstAcademict: 'Unisal - Centro Universitário Salesiano de SP',
      firstAcademicP1: ' Com conhecimento em hardware, software, redes de computadores e sistemas embarcados.',
      firstAcademicP2: ' Habilidades analíticas e de resolução de problemas', 
      firstAcademicP3: ', estou sempre ', 
      firstAcademicP4: 'atualizado sobre novas tecnologias e tendências de mercado.', 
      secondAcademicTitle: 'Técnico de TI em Internet',  
      secondAcademic: 'Etec - Escola Técnica Estadual',
      secondAcademicP1: 'Habilidades em ',
      secondAcademicP2: 'desenvolvimento web, design responsivo, SEO, usabilidade',
      secondAcademicP3: ' e conhecimento em linguagens de programação. O trabalho é focado em ',
      secondAcademicP4: 'qualidade, desempenho e segurança ',
      secondAcademicP5: 'dos projetos desenvolvidos.',
  },
};

export default translations;
