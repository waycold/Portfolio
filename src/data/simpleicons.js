/**
 * Fallback icon URLs (via Iconify, https://api.iconify.design) for
 * brands/tools devicon doesn't cover. Used by TechIcon as a second tier
 * after devicon, before the initials fallback. Iconify mirrors Simple
 * Icons (mostly monochrome, recolored via the `color` query param to the
 * brand's official hex) plus other icon sets like vscode-icons for
 * full-color file-type glyphs.
 */
export const ICON_FALLBACK_URLS = {
  'Power BI': 'https://api.iconify.design/simple-icons/powerbi.svg?color=%23F2C811',
  Excel: 'https://api.iconify.design/vscode-icons/file-type-excel.svg',
  Vercel: 'https://api.iconify.design/simple-icons/vercel.svg?color=%23000000',
  Notion: 'https://api.iconify.design/simple-icons/notion.svg?color=%23000000',
  Jira: 'https://api.iconify.design/simple-icons/jira.svg?color=%232684FF',
  FastAPI: 'https://api.iconify.design/simple-icons/fastapi.svg?color=%23009688',
  Celery: 'https://api.iconify.design/simple-icons/celery.svg?color=%2337814A',
  'Chart.js': 'https://api.iconify.design/simple-icons/chartdotjs.svg?color=%23FF6384',
  LangChain: 'https://api.iconify.design/simple-icons/langchain.svg?color=%231C3C3C',
};

export function getFallbackIconUrl(name) {
  return ICON_FALLBACK_URLS[name] ?? null;
}
