export interface TechIcon {
  label: string;
  color: string;
}

const TECH_MAP: Record<string, TechIcon> = {
  typescript: { label: 'TS', color: '#3178C6' },
  javascript: { label: 'JS', color: '#F0DB4F' },
  'javascript (es6+)': { label: 'JS', color: '#F0DB4F' },
  'html5 semantic': { label: '5', color: '#E34F26' },
  html: { label: '5', color: '#E34F26' },
  'css3 / modern ui': { label: '3', color: '#1572B6' },
  css: { label: '3', color: '#1572B6' },
  angular: { label: 'ng', color: '#DD0031' },
  'angular (17/18)': { label: 'ng', color: '#DD0031' },
  'rxjs / signals': { label: 'Rx', color: '#B7178C' },
  rxjs: { label: 'Rx', color: '#B7178C' },
  signals: { label: 'Rx', color: '#B7178C' },
  'ngrx store': { label: 'ngRx', color: '#BA2BD2' },
  ngrx: { label: 'ngRx', color: '#BA2BD2' },
  'tailwind css': { label: '~', color: '#38BDF8' },
  tailwind: { label: '~', color: '#38BDF8' },
  'graphql / apollo': { label: 'GQL', color: '#E535AB' },
  graphql: { label: 'GQL', color: '#E535AB' },
  'node.js / express': { label: 'Nd', color: '#3C873A' },
  node: { label: 'Nd', color: '#3C873A' },
  'git & github ci': { label: 'Git', color: '#F05032' },
  git: { label: 'Git', color: '#F05032' },
  github: { label: 'Git', color: '#181717' },
  'figma to code': { label: 'Fg', color: '#A259FF' },
  figma: { label: 'Fg', color: '#A259FF' },
  'jest / karma tests': { label: 'Jt', color: '#C21325' },
  jest: { label: 'Jt', color: '#C21325' },
  'postman / rest apis': { label: 'Po', color: '#FF6C37' },
  postman: { label: 'Po', color: '#FF6C37' },
  'rest api': { label: 'API', color: '#6b7280' },
  'mongodb database': { label: 'Mo', color: '#47A248' },
  mongodb: { label: 'Mo', color: '#47A248' },
  vercel: { label: '▲', color: '#000000' },
  'vercel ci/cd': { label: '▲', color: '#000000' },
  'github actions': { label: 'GA', color: '#2088FF' },
};

export function getTechIcon(name: string): TechIcon {
  const key = name.toLowerCase().trim();
  if (TECH_MAP[key]) return TECH_MAP[key];
  const found = Object.entries(TECH_MAP).find(([k]) => key.includes(k) || k.includes(key));
  if (found) return found[1];
  return { label: name.slice(0, 2).toUpperCase(), color: '#7b2ff7' };
}