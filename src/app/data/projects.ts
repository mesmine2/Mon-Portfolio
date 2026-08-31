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
    title: 'Bilanko — Plateforme SaaS de Gestion Commerciale & Génération Fiscale',
    description: 'Bilanko est une application web conçue pour simplifier la gestion quotidienne des commerces et petites entreprises au Cameroun. Elle comble le fossé entre la tenue de caisse informelle et les exigences des institutions financières en transformant automatiquement les opérations de vente en documents bancaires et fiscaux conformes.',
    techs: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Vercel', 'Bootstrap'],
    demoUrl: 'https://bilanko-frontend.vercel.app/',
    githubUrl: 'https://github.com/Bilanko-Angular/bilanko-frontend',
    images: ['assets/projets/bilanko1.webp', 'assets/projets/bilanko2.webp'],
  },
  {
    category: 'Application Web',
    title: 'Délices de Douala – Guide Culinaire & Plateforme de Notation',
    description: 'Délices de Douala est une application web interactive conçue pour valoriser la richesse gastronomique de la ville de Douala. Elle permet aux utilisateurs de découvrir une sélection de restaurants locaux, de consulter leurs spécialités (comme le Ndolé aux crevettes) et d\'évaluer leur expérience grâce à un système de notation dynamique à 5 étoiles.',
    techs: ['Angular', 'TypeScript', 'Bootstrp', 'Signals', 'Vercel CI/CD'],
    demoUrl: 'https://delices-douala.vercel.app/',
    githubUrl: 'https://github.com/mesmine2/Delices-Douala',
    images: ['assets/projets/delice1.webp', 'assets/projets/delice2.webp'],
  },
  {
    category: 'Outil / Utilitaire web',
    title: 'Convertisseur FCFA',
    description: 'Une application Angular à deux pages : un convertisseur en temps réel avec tableau des taux actuels, et un historique consultable des conversions effectuées, avec statistiques (nombre de conversions, total converti). Le calcul passe par le FCFA comme devise pivot, et l\'état est centralisé dans un service partagé entre les deux pages via le Router Angular.',
    techs: ['Angular', 'TypeScript', 'Figma', 'GitHub Actions', 'Vercel'],
    demoUrl: 'https://convertisseurs-monnaie.vercel.app/',
    githubUrl: 'https://github.com/mesmine2/convertisseurs_monnaie',
    images: ['assets/projets/convertisseur1.webp', 'assets/projets/convertisseur2.webp'],
  },
];