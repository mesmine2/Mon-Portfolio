export interface Skill {
  name: string;
  level: 'Avancé' | 'Expert' | 'Intermédiaire';
}
export interface SkillGroup {
  title: string;
  count: string;
  description: string;
  items: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Langages',
    count: '4 techs',
    description: 'Bases solides & typage strict',
    items: [
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript (ES6+)', level: 'Expert' },
      { name: 'HTML5 Semantic', level: 'Expert' },
      { name: 'CSS3 / Modern UI', level: 'Avancé' },
    ],
  },
  {
    title: 'Frameworks & Librairies',
    count: '6 techs',
    description: 'Architecture réactive & composants',
    items: [
      { name: 'Angular (17/18)', level: 'Expert' },
      { name: 'RxJS / Signals', level: 'Expert' },
      { name: 'NgRx Store', level: 'Avancé' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'GraphQL / Apollo', level: 'Intermédiaire' },
      { name: 'Node.js / Express', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Outils & Environnement',
    count: '5 techs',
    description: 'Workflow, test & design-to-code',
    items: [
      { name: 'Git & GitHub CI', level: 'Avancé' },
      { name: 'Figma to Code', level: 'Avancé' },
      { name: 'Jest / Karma Tests', level: 'Avancé' },
      { name: 'Postman / REST APIs', level: 'Expert' },
      { name: 'MongoDB Database', level: 'Intermédiaire' },
    ],
  },
];