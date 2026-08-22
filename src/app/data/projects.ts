export interface Project {
  category: string;
  title: string;
  description: string;
  techs: string[];
  demoUrl: string;
  githubUrl: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    category: 'Application Web',
    title: 'Délices de Douala – Guide Culinaire & Plateforme de Notation',
    description: 'Délices de Douala est une application web interactive conçue pour valoriser la richesse gastronomique de la ville de Douala. Elle permet aux utilisateurs de découvrir une sélection de restaurants locaux, de consulter leurs spécialités (comme le Ndolé aux crevettes) et d\'évaluer leur expérience grâce à un système de notation dynamique à 5 étoiles.',
    techs: ['Angular', 'TypeScript', 'Bootstrp', 'Signals', 'Vercel CI/CD'],
    demoUrl: 'https://delices-douala.vercel.app/',
    githubUrl: 'https://github.com/mesmine2/Delices-Douala',
    images: ['assets/projets/delice1.png', 'assets/projets/delice2.png'],
  },
  {
    category: 'Application Web',
    title: 'Bilanko — Plateforme SaaS de Gestion Commerciale & Génération Fiscale',
    description: 'Bilanko est une application web conçue pour simplifier la gestion quotidienne des commerces et petites entreprises au Cameroun. Elle comble le fossé entre la tenue de caisse informelle et les exigences des institutions financières en transformant automatiquement les opérations de vente en documents bancaires et fiscaux conformes.',
    techs: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Vercel', 'Bootstrap'],
    demoUrl: 'https://bilanko-frontend.vercel.app/',
    githubUrl: 'https://github.com/Bilanko-Angular/bilanko-frontend',
    images: ['assets/projets/bilanko1.png', 'assets/projets/bilanko2.png'],
  },
  {
    category: 'FinTech & Solutions de Paiement • Projet #3',
    title: 'PayLink — Portail FinTech & Facturation',
    description: 'Projet fil rouge final du module Angular Talent Lab 2026. Permet aux commerçants et indépendants à Douala et en Afrique francophone d\'émettre des liens de paiement et de suivre leurs soldes instantanément.',
    techs: ['Angular', 'TypeScript', 'REST API', 'Figma', 'GitHub Actions', 'Vercel'],
    demoUrl: 'https://convertisseurs-monnaie.vercel.app/',
    githubUrl: 'https://github.com/mesmine2/convertisseurs_monnaie',
    images: ['assets/projets/paylink-1.png', 'assets/projets/paylink-2.png'],
  },
];