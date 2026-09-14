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
  DAX: 'https://api.iconify.design/carbon/function-math.svg?color=%23F2C811',
  SQL: 'https://api.iconify.design/vscode-icons/file-type-sql.svg',
  Excel: 'https://api.iconify.design/vscode-icons/file-type-excel.svg',
  Vercel: 'https://api.iconify.design/simple-icons/vercel.svg?color=%23000000',
  Notion: 'https://api.iconify.design/simple-icons/notion.svg?color=%23000000',
  Jira: 'https://api.iconify.design/simple-icons/jira.svg?color=%232684FF',
  FastAPI: 'https://api.iconify.design/simple-icons/fastapi.svg?color=%23009688',
  Celery: 'https://api.iconify.design/simple-icons/celery.svg?color=%2337814A',
  'Chart.js': 'https://api.iconify.design/simple-icons/chartdotjs.svg?color=%23FF6384',
  LangChain: 'https://api.iconify.design/simple-icons/langchain.svg?color=%231C3C3C',
  ESP32: 'https://api.iconify.design/simple-icons/espressif.svg?color=%23E7352C',
  MicroPython: 'https://api.iconify.design/simple-icons/micropython.svg?color=%232B2728',
  Selenium: 'https://api.iconify.design/simple-icons/selenium.svg?color=%2343B02A',
  'Machine Learning': 'https://api.iconify.design/carbon/machine-learning-model.svg?color=%237EA68E',
  NLP: 'https://api.iconify.design/carbon/language.svg?color=%237EA68E',
};

export function getFallbackIconUrl(name) {
  return ICON_FALLBACK_URLS[name] ?? null;
}
