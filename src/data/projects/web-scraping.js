export const webScrapingProject = {
  "id": 5,
  "title": "Automated Web Scraping Engine",
  "category": "Automation & Data Scraping",
  "role": "Python Automation Specialist",
  "date": "2024 - 2025",
  "status": "In Progress",
  "description": "A work-in-progress Python scraper for collecting data from websites and turning the extracted information into structured datasets ready for analysis.",
  "summary": "Motor modular de extracción automatizada de datos web desarrollado en Python con Selenium y BeautifulSoup. Diseñado para recopilar información de catálogos y precios dinámicos, eludir bloqueos antibot mediante rotación de headers y pausas gaussianas, y entregar datasets curados listos para análisis en Pandas y bases relacionales.",
  "executiveDetails": [
    {
      "label": "Stack de Extracción",
      "value": "Python, Selenium, BS4"
    },
    {
      "label": "Throughput",
      "value": "45 Páginas / Minuto"
    },
    {
      "label": "Formato de Salida",
      "value": "Parquet, CSV, PostgreSQL"
    }
  ],
  "highlights": [
    "Automated Data Pipelines",
    "Anti-Bot Bypassing",
    "Pandas Clean ETL Export"
  ],
  "tech": [
    "Python",
    "Selenium",
    "BeautifulSoup",
    "Pandas"
  ],
  "liveUrl": null,
  "repoUrl": "https://github.com/waycold/",
  "images": [
    {
      "url": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      "title": "Extraction Pipeline Architecture"
    },
    {
      "url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "title": "Automated Export & Logging Interface"
    }
  ],
  "flow": {
    "nodes": [
      {
        "id": "sites",
        "label": "Target Sites",
        "sub": "HTML sources",
        "x": 20,
        "y": 104
      },
      {
        "id": "scraper",
        "label": "Selenium / BS4",
        "sub": "Scraping engine",
        "x": 220,
        "y": 104,
        "accent": true
      },
      {
        "id": "clean",
        "label": "Pandas ETL",
        "sub": "Clean & normalize",
        "x": 420,
        "y": 104,
        "accent": true
      },
      {
        "id": "export",
        "label": "Structured Export",
        "sub": "CSV / dataset",
        "x": 620,
        "y": 104
      }
    ],
    "edges": [
      {
        "from": "sites",
        "to": "scraper"
      },
      {
        "from": "scraper",
        "to": "clean",
        "label": "raw rows"
      },
      {
        "from": "clean",
        "to": "export"
      }
    ]
  },
  "sections": [
    {
      "id": "scrape-metrics",
      "navLabel": "Extracción",
      "heading": "Métricas de Extracción & Resiliencia del Scraper",
      "eyebrow": "RENDIMIENTO DE AUTOMATIZACIÓN",
      "description": "Métricas de rendimiento obtenidas durante la ejecución de scraping masivo y procesamiento ETL.",
      "type": "metrics",
      "props": {
        "columns": 4,
        "metrics": [
          {
            "label": "Páginas Extraídas",
            "value": "50K+",
            "context": "Registros de catálogo estructurados",
            "change": "Auditado",
            "icon": "layers"
          },
          {
            "label": "Tasa de Éxito",
            "value": "98.6%",
            "context": "Sin bloqueos IP ni captchas",
            "change": "Alta Resiliencia",
            "icon": "target"
          },
          {
            "label": "Velocidad Extracción",
            "value": "45 pág/min",
            "context": "Concurrencia multihilo con pool",
            "change": "Optimizado",
            "icon": "gauge"
          },
          {
            "label": "Limpieza de Datos",
            "value": "100%",
            "context": "Validación de tipos con Pandas",
            "change": "Normalizado",
            "icon": "sparkles"
          }
        ]
      }
    },
    {
      "id": "scrape-split",
      "navLabel": "Técnicas Antibot",
      "heading": "Extracción Resiliente & Normalización de Datos",
      "eyebrow": "AUTOMATIZACIÓN WEB",
      "description": "Mecanismos avanzados para sortear páginas renderizadas por JavaScript dinámico y prevenir bloqueos de tasa.",
      "type": "split",
      "props": {
        "mediaPosition": "left",
        "eyebrow": "PIPELINE RESILIENTE",
        "title": "Evasión de Huella Digital y Extracción Headless",
        "description": [
          "Los sitios modernos con Single Page Applications (SPA) y contenido renderizado por cliente requieren instancias de navegador real para ejecutar JavaScript y disparar llamadas XHR.",
          "El scraper utiliza Selenium en modo headless optimizado con desactivación de flags de automatización (navigator.webdriver) y rotación dinámica de User-Agents entre solicitudes.",
          "Una vez extraído el DOM crudo, BeautifulSoup y expresiones regulares extraen campos clave (precios, stock, atributos) y Pandas ejecuta pipelines de limpieza para imputar nulos y detectar valores atípicos."
        ],
        "bullets": [
          {
            "title": "Pausas Gaussianas",
            "text": "Tiempos de espera aleatorios distribuidos normalmente para emular el comportamiento de navegación humana."
          },
          {
            "title": "Manejo de Reintentos con Backoff",
            "text": "Estrategia exponencial de reintento ante errores 429 (Too Many Requests) o 503."
          },
          {
            "title": "Exportación Multi-Destino",
            "text": "Almacenamiento columnar en formato Parquet para compresión y carga directa en PostgreSQL."
          }
        ],
        "metrics": [
          {
            "label": "Campos por Fila",
            "value": "18 Atributos",
            "context": "Completitud >99%"
          },
          {
            "label": "Formato Salida",
            "value": "Parquet/SQL",
            "context": "Optimizado OLAP"
          }
        ],
        "media": {
          "type": "image",
          "url": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
          "alt": "Extraction Pipeline Architecture",
          "title": "Arquitectura de Extracción & Transformación",
          "caption": "Esquema del flujo de recolección de datos desde fuentes web dinámicas hasta almacenamiento estructurado.",
          "legend": "Proceso integral de ETL: el scraper recolecta el HTML crudo, normaliza caracteres y valida tipos antes de persistir.",
          "tag": "FLUJO DE EXTRACCIÓN"
        }
      }
    },
    {
      "id": "scrape-diagram",
      "navLabel": "Pipeline de Datos",
      "heading": "Flujo de Extracción, Transformación y Carga",
      "eyebrow": "INGENIERÍA DE DATOS",
      "description": "Canalización de datos desde los sitios objetivo hasta los datasets finales listos para análisis.",
      "type": "diagram",
      "props": {
        "nodes": [
          {
            "id": "sites",
            "label": "Target Sites",
            "sub": "HTML sources",
            "x": 20,
            "y": 104
          },
          {
            "id": "scraper",
            "label": "Selenium / BS4",
            "sub": "Scraping engine",
            "x": 220,
            "y": 104,
            "accent": true
          },
          {
            "id": "clean",
            "label": "Pandas ETL",
            "sub": "Clean & normalize",
            "x": 420,
            "y": 104,
            "accent": true
          },
          {
            "id": "export",
            "label": "Structured Export",
            "sub": "CSV / dataset",
            "x": 620,
            "y": 104
          }
        ],
        "edges": [
          {
            "from": "sites",
            "to": "scraper"
          },
          {
            "from": "scraper",
            "to": "clean",
            "label": "raw rows"
          },
          {
            "from": "clean",
            "to": "export"
          }
        ]
      }
    },
    {
      "id": "scrape-callout",
      "navLabel": "Buenas Prácticas",
      "heading": "Ética, Rate Limiting y Resiliencia en Scraping",
      "eyebrow": "MEJORES PRÁCTICAS",
      "type": "callout",
      "props": {
        "type": "warning",
        "eyebrow": "CONSIDERACIÓN ÉTICA & DE INFRAESTRUCTURA",
        "title": "Respeto a Servidores Destino & Cumplimiento de robots.txt",
        "content": "Un web scraper profesional debe ser ante todo respetuoso de los recursos del servidor web objetivo. La implementación de limitadores de tasa de peticiones (rate limiting con token bucket) y el respeto a directivas robots.txt no solo evita la saturación innecesaria de la infraestructura externa, sino que garantiza la sostenibilidad operativa del pipeline a largo plazo sin bloqueos de IP.",
        "points": [
          "Límites de concurrencia estrictos: máximo 2 peticiones concurrentes por dominio objetivo.",
          "Caché local de páginas visitadas para evitar descargas redundantes durante re-ejecuciones de desarrollo.",
          "Estructuración de esquemas resilientes que toleran cambios menores en selectores CSS del DOM."
        ],
        "tags": [
          "Python",
          "Web Scraping",
          "Selenium",
          "Pandas",
          "ETL",
          "Buenas Prácticas"
        ]
      }
    }
  ]
};
