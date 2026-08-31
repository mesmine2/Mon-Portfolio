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
    count: '5 techs',
    description: 'Bases solides & typage strict',
    items: [
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript (ES6+)', level: 'Expert' },
      { name: 'HTML5 Semantic', level: 'Expert' },
      { name: 'CSS3 / Modern UI', level: 'Avancé' },
      { name: 'Python', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Frameworks & Librairies',
    count: '4 techs',
    description: 'Architecture réactive & composants',
    items: [
      { name: 'Angular (17/18)', level: 'Expert' },
      { name: 'RxJS / Signals', level: 'Expert' },
      { name: 'Bootstrap', level: 'Expert' },
      { name: 'Node.js  ', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Outils & Environnement',
    count: '3 techs',
    description: 'Workflow, test & design-to-code',
    items: [
      { name: 'Git & GitHub CI', level: 'Avancé' },
      { name: 'Airtable', level: 'Avancé' },
      { name: 'Softr', level: 'Avancé' },
    ],
  },
];