/**
 * Maps known technology names (as used in content.js) to a devicon slug
 * served from jsdelivr. Not every technology has an official devicon —
 * TechIcon falls back to an initials chip on a missing entry or a failed
 * image load (see src/components/common/TechIcon.jsx).
 */
export const DEVICONS = {
  Python: 'python/python-original',
  Django: 'django/django-plain',
  PostgreSQL: 'postgresql/postgresql-original',
  C: 'c/c-original',
  Git: 'git/git-original',
  GitHub: 'github/github-original',
  Pandas: 'pandas/pandas-original',
  NumPy: 'numpy/numpy-original',
  JavaScript: 'javascript/javascript-original',
  TypeScript: 'typescript/typescript-original',
  HTML5: 'html5/html5-original',
  CSS3: 'css3/css3-original',
  React: 'react/react-original',
  Docker: 'docker/docker-original',
  Linux: 'linux/linux-original',
  Bash: 'bash/bash-original',
  Redis: 'redis/redis-original',
  MySQL: 'mysql/mysql-original',
  MongoDB: 'mongodb/mongodb-original',
  GraphQL: 'graphql/graphql-plain',
  FastAPI: 'fastapi/fastapi-original',
  Selenium: 'selenium/selenium-original',
  Vercel: 'vercel/vercel-original',
  Notion: 'notion/notion-original',
  Jira: 'jira/jira-original',
};

export function getDeviconSlug(name) {
  return DEVICONS[name] ?? null;
}
