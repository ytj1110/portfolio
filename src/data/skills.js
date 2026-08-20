// Central source of truth for the Skills section.
// Keep UI components dumb — they just render whatever lives here.

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    comment: '// what the user touches',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Bootstrap', 'jQuery'],
  },
  {
    id: 'backend',
    label: 'Backend',
    comment: '// what powers it',
    skills: ['PHP', 'Laravel'],
  },
  {
    id: 'database',
    label: 'Database',
    comment: '// where it lives',
    skills: ['MySQL' , 'Query Optimization' ],
  },
  {
    id: 'programming',
    label: 'Programming',
    comment: '// how it is structured',
    skills: ['OOP' , 'REST APIs' , 'Ajex'],
  },
  {
    id: 'tools',
    label: 'Tools',
    comment: '// how it ships',
    skills: ['Git', 'GitHub' , , 'Postman' , 'Figma' , 'VS Code'],
  },
]
