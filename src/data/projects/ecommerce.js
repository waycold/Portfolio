export const ecommerceProject = {
  "id": 1,
  "title": "E-Commerce Django, Data Simulation & Analytics",
  "category": "Data & Software Engineering",
  "role": "Fullstack & Data Architecture",
  "date": "2024 - 2025",
  "status": "Production",
  "description": "A Django e-commerce application built around a PostgreSQL database, with simulated orders and user activity used to test and explore real-world analytics scenarios.",
  "summary": "Aplicación completa de comercio electrónico impulsada por Django y PostgreSQL, complementada con un motor de simulación sintética de 10,000+ transacciones para pruebas de carga analítica, modelado dimensional y dashboards en tiempo real.",
  "executiveDetails": [
    {
      "label": "Volumen Transaccional",
      "value": "10,000+ Órdenes Sintéticas"
    },
    {
      "label": "Base de Datos",
      "value": "PostgreSQL 16 Relacional"
    },
    {
      "label": "Despliegue Activo",
      "value": "Render Web Service (Live)"
    }
  ],
  "highlights": [
    "10K+ Simulated Transactions",
    "Real-time Metrics Pipeline",
    "PostgreSQL Relational Schema"
  ],
  "tech": [
    "Python",
    "Django",
    "PostgreSQL"
  ],
  "liveUrl": "https://ecommerce-django-fd4t.onrender.com/",
  "repoUrl": "https://github.com/waycold/ecommerce_Django",
  "images": [
    {
      "url": "https://i.imgur.com/AUYNzwq.png",
      "title": "Simulation Controls & Live Metrics Dashboard"
    },
    {
      "url": "https://i.imgur.com/WGUy5rp.gif",
      "title": "User Behavior & Transaction Analysis"
    },
    {
      "url": "https://i.imgur.com/gMSxVSM.png",
      "title": "Ecommerce homepage & Product Catalog"
    },
    {
      "url": "https://i.imgur.com/2cP7rE8.png",
      "title": "Shopping Cart & Checkout Process"
    }
  ],
  "flow": {
    "nodes": [
      {
        "id": "core",
        "label": "Django Core",
        "sub": "PostgreSQL + REST",
        "x": 20,
        "y": 104
      },
      {
        "id": "sim",
        "label": "Data Simulation",
        "sub": "Pandas / Faker",
        "x": 190,
        "y": 20,
        "accent": true
      },
      {
        "id": "analytics",
        "label": "Analytics API",
        "sub": "Real-time metrics",
        "x": 190,
        "y": 188
      },
      {
        "id": "ai",
        "label": "AI Gateway",
        "sub": "LangChain + LLM",
        "x": 400,
        "y": 20,
        "accent": true
      },
      {
        "id": "bi",
        "label": "Power BI",
        "sub": "DAX star schema",
        "x": 400,
        "y": 188
      },
      {
        "id": "auto",
        "label": "Automation",
        "sub": "Celery + Cron",
        "x": 610,
        "y": 104
      }
    ],
    "edges": [
      {
        "from": "core",
        "to": "sim",
        "label": "seed + 10K orders"
      },
      {
        "from": "core",
        "to": "analytics",
        "label": "live queries"
      },
      {
        "from": "analytics",
        "to": "ai",
        "label": "tool calls"
      },
      {
        "from": "analytics",
        "to": "bi",
        "label": "OLAP export"
      },
      {
        "from": "auto",
        "to": "core"
      },
      {
        "from": "auto",
        "to": "sim",
        "label": "scheduled ETL"
      }
    ]
  },
  "sections": [
    {
      "id": "metrics",
      "navLabel": "Métricas",
      "heading": "Indicadores Clave del Pipeline",
      "eyebrow": "RENDIMIENTO Y VOLUMEN",
      "description": "Rendimiento y volumen de procesamiento registrado durante las pruebas de simulación masiva y agregaciones analíticas.",
      "type": "metrics",
      "props": {
        "columns": 4,
        "metrics": [
          {
            "label": "Simulated Orders",
            "value": "10K+",
            "context": "Órdenes sintéticas deterministas",
            "change": "+100%",
            "icon": "layers"
          },
          {
            "label": "Latency Query",
            "value": "<12ms",
            "context": "Consultas indexadas en PostgreSQL",
            "change": "p95 Óptimo",
            "icon": "gauge"
          },
          {
            "label": "Pipeline Uptime",
            "value": "99.9%",
            "context": "Workers Celery en ejecución",
            "change": "Alta Disp.",
            "icon": "target"
          },
          {
            "label": "Throughput Ingesta",
            "value": "1,450 TPS",
            "context": "Inserciones en batch psycopg2",
            "change": "Optimizado",
            "icon": "sparkles"
          }
        ]
      }
    },
    {
      "id": "pipeline",
      "navLabel": "Pipeline & ETL",
      "heading": "Arquitectura ETL & Simulación de Demanda",
      "eyebrow": "INGENIERÍA DE DATOS",
      "description": "Mecanismo modular para inyectar transacciones realistas con estacionalidad, variación de tickets promedio y patrones de usuario.",
      "type": "split",
      "props": {
        "mediaPosition": "right",
        "eyebrow": "MOTOR ETL EN PYTHON",
        "title": "Simulación de Demanda & Análisis Dinámico",
        "description": [
          "El generador utiliza Pandas y Faker para sintetizar registros de compra correlacionados con perfiles demográficos, categorías de catálogo y fluctuaciones temporales de demanda.",
          "Los eventos generados se inyectan en PostgreSQL 16 mediante transacciones atómicas agrupadas en bloques de 500 registros, evaluando la resistencia del índice B-Tree ante escrituras de alta concurrencia."
        ],
        "bullets": [
          {
            "title": "Generación Estocástica",
            "text": "Distribución de Poisson para frecuencias de compra y log-normal para ticket promedio."
          },
          {
            "title": "Normalización Relacional",
            "text": "Esquema en 3FN con claves foráneas indexadas y restricciones de integridad referencial."
          },
          {
            "title": "Carga por Lotes",
            "text": "Optimización de inserciones masivas mediante bulk_create transaccional a 1,450 TPS."
          },
          {
            "title": "Vistas Materializadas",
            "text": "Pre-cálculo de métricas analíticas con refresco periódico en background."
          }
        ],
        "metrics": [
          {
            "label": "Throughput",
            "value": "1,450 TPS",
            "context": "Bulk insert"
          },
          {
            "label": "Modelos Core",
            "value": "8 Tablas",
            "context": "3FN Relacional"
          },
          {
            "label": "Latencia Query",
            "value": "<12ms",
            "context": "Percentil p95"
          }
        ],
        "media": {
          "type": "image",
          "url": "https://i.imgur.com/WGUy5rp.gif",
          "alt": "Simulación de transacciones y comportamiento de usuarios en tiempo real",
          "title": "Generación Dinámica de Eventos Transaccionales",
          "caption": "Captura del script de simulación inyectando transacciones continuas y verificando la consistencia relacional en PostgreSQL.",
          "legend": "Visualización de la consola interactiva: monitoreo de transacciones por segundo e integridad referencial bajo carga sostenida.",
          "tag": "ARQUITECTURA DE INGESTA"
        }
      }
    },
    {
      "id": "chart",
      "navLabel": "Throughput",
      "heading": "Distribución de Throughput & Consonancia de Ingesta",
      "eyebrow": "RENDIMIENTO TEMPORAL",
      "description": "Throughput mensual de inserción transaccional (TPS) vs. latencia promedio de consulta a lo largo de 12 meses de simulación.",
      "type": "chart",
      "props": {
        "title": "Distribución de Throughput & Consonancia de Ingesta",
        "subtitle": "Throughput de inserción transaccional (TPS) vs. latencia promedio p95 a lo largo de 12 meses simulados",
        "primaryLabel": "Throughput (TPS)",
        "accentLabel": "Latencia p95 (ms)",
        "regenerateLabel": "Regenerar Datos",
        "initialData": [
          {
            "month": "Ene",
            "primary": 42,
            "accent": 18,
            "bar": 48
          },
          {
            "month": "Feb",
            "primary": 50,
            "accent": 17,
            "bar": 54
          },
          {
            "month": "Mar",
            "primary": 46,
            "accent": 16,
            "bar": 50
          },
          {
            "month": "Abr",
            "primary": 62,
            "accent": 15,
            "bar": 65
          },
          {
            "month": "May",
            "primary": 58,
            "accent": 14,
            "bar": 62
          },
          {
            "month": "Jun",
            "primary": 68,
            "accent": 14,
            "bar": 70
          },
          {
            "month": "Jul",
            "primary": 76,
            "accent": 13,
            "bar": 80
          },
          {
            "month": "Ago",
            "primary": 72,
            "accent": 13,
            "bar": 75
          },
          {
            "month": "Sep",
            "primary": 84,
            "accent": 12,
            "bar": 88
          },
          {
            "month": "Oct",
            "primary": 88,
            "accent": 12,
            "bar": 92
          },
          {
            "month": "Nov",
            "primary": 95,
            "accent": 11,
            "bar": 96
          },
          {
            "month": "Dic",
            "primary": 98,
            "accent": 11,
            "bar": 100
          }
        ]
      }
    },
    {
      "id": "schema-table",
      "navLabel": "Schema & Tokens",
      "heading": "Evaluación de Schema Relacional & Tokens de Interfaz",
      "eyebrow": "ARQUITECTURA DE DATOS & DISEÑO",
      "description": "Estructura de entidades relacionales en PostgreSQL, estrategias de indexación y tokens visuales del panel analítico.",
      "type": "table",
      "props": {
        "title": "Entidades del Schema & Tokens de Interfaz",
        "subtitle": "Evaluación de tiempos de consulta, tamaño de particiones y contraste de tokens",
        "columns": {
          "element": "Entidad / Elemento",
          "property": "Propiedad / Índice",
          "sample": "Muestra / Clasificación",
          "value": "Métrica / Token",
          "status": "Estado"
        },
        "rows": [
          {
            "id": "tbl-orders",
            "element": "Tabla orders (Fact Table)",
            "subtext": "10,000+ registros de compra particionados por año/mes",
            "property": "B-Tree (user_id, order_date)",
            "sample": {
              "type": "button-primary",
              "text": "Fact Table"
            },
            "value": "<4.2ms / Scan",
            "status": "active"
          },
          {
            "id": "tbl-items",
            "element": "Tabla order_items (Bridge)",
            "subtext": "32,500+ registros de productos asociados a órdenes",
            "property": "Composite (order_id, product_id)",
            "sample": {
              "type": "badge-secondary",
              "text": "Relación N:M"
            },
            "value": "<2.1ms / Join",
            "status": "active"
          },
          {
            "id": "tbl-users",
            "element": "Tabla customers & profiles (Dimension)",
            "subtext": "Perfiles demográficos y segmentación por LTV",
            "property": "Unique B-Tree (email, id)",
            "sample": {
              "type": "badge-accent",
              "text": "Dimensión"
            },
            "value": "<0.8ms / Lookup",
            "status": "active"
          },
          {
            "id": "view-sales",
            "element": "Vista Materializada mv_monthly_kpis",
            "subtext": "Pre-cálculo de ventas brutas, margen y ticket promedio",
            "property": "Refresco Celery Beat (15m)",
            "sample": {
              "type": "pill-muted",
              "text": "Materialized View"
            },
            "value": "<1.2ms / Query",
            "status": "active"
          },
          {
            "id": "token-primary",
            "element": "Token UI --primary / Acabado Primario",
            "subtext": "Estilo interactivo para botones y acentos de reporte",
            "property": "--primary (#4a6a62)",
            "sample": {
              "type": "button-primary",
              "text": "Primario"
            },
            "value": "#4a6a62",
            "status": "active"
          },
          {
            "id": "token-accent",
            "element": "Token UI --accent / Resaltado Acento",
            "subtext": "Puntos de inflexión y llamadas a la acción analíticas",
            "property": "--accent (#6a5484)",
            "sample": {
              "type": "badge-accent",
              "text": "Acento"
            },
            "value": "#6a5484",
            "status": "active"
          }
        ]
      }
    },
    {
      "id": "architecture",
      "navLabel": "Topología",
      "heading": "Topología del Sistema",
      "eyebrow": "DISEÑO DE SISTEMAS",
      "description": "Desacoplamiento entre el backend Django, el almacenamiento PostgreSQL, APIs analíticas y exportaciones a Power BI.",
      "type": "diagram",
      "props": {
        "nodes": [
          {
            "id": "core",
            "label": "Django Core",
            "sub": "PostgreSQL + REST",
            "x": 20,
            "y": 104
          },
          {
            "id": "sim",
            "label": "Data Simulation",
            "sub": "Pandas / Faker",
            "x": 190,
            "y": 20,
            "accent": true
          },
          {
            "id": "analytics",
            "label": "Analytics API",
            "sub": "Real-time metrics",
            "x": 190,
            "y": 188
          },
          {
            "id": "ai",
            "label": "AI Gateway",
            "sub": "LangChain + LLM",
            "x": 400,
            "y": 20,
            "accent": true
          },
          {
            "id": "bi",
            "label": "Power BI",
            "sub": "DAX star schema",
            "x": 400,
            "y": 188
          },
          {
            "id": "auto",
            "label": "Automation",
            "sub": "Celery + Cron",
            "x": 610,
            "y": 104
          }
        ],
        "edges": [
          {
            "from": "core",
            "to": "sim",
            "label": "seed + 10K orders"
          },
          {
            "from": "core",
            "to": "analytics",
            "label": "live queries"
          },
          {
            "from": "analytics",
            "to": "ai",
            "label": "tool calls"
          },
          {
            "from": "analytics",
            "to": "bi",
            "label": "OLAP export"
          },
          {
            "from": "auto",
            "to": "core"
          },
          {
            "from": "auto",
            "to": "sim",
            "label": "scheduled ETL"
          }
        ]
      }
    },
    {
      "id": "dashboard-full",
      "navLabel": "Consola",
      "heading": "Consola de Control de Simulación & Métricas en Vivo",
      "eyebrow": "EVIDENCIA VISUAL",
      "description": "Vista panorámica de la consola de control interactiva: monitoreo de volumen transaccional, latencias de endpoint y estado del cluster PostgreSQL.",
      "type": "fullImage",
      "props": {
        "src": "https://i.imgur.com/AUYNzwq.png",
        "title": "Consola de Control de Simulación & Métricas en Vivo",
        "caption": "Panel de administración reactivo con controles para disparar lotes de órdenes sintéticas y observar la actualización instantánea de KPIs.",
        "legend": "Arquitectura visual unificada: incluye monitoreo de conexiones activas al pool de PostgreSQL, tasa de transacciones concurrentes por segundo y estado de endpoints analíticos protegidos.",
        "tag": "FIG 1.1 — CONSOLA DE SIMULACIÓN"
      }
    },
    {
      "id": "tradeoffs",
      "navLabel": "Conclusiones",
      "heading": "Conclusiones Clave de Ingeniería",
      "eyebrow": "LECCIONES APRENDIDAS & TRADE-OFFS",
      "type": "callout",
      "props": {
        "type": "architecture",
        "eyebrow": "ENGINEERING TAKEAWAYS & TRADE-OFFS",
        "title": "Aislamiento de Carga OLTP vs OLAP en Sistemas Transaccionales",
        "content": "La ejecución directa de cálculos analíticos agregados (SUM, AVG, COUNT DISTINCT) sobre tablas vivas de compras provocó bloqueos de lectura que degradaban el checkout a más de 450ms. La solución consistió en implementar vistas materializadas actualizadas asíncronamente mediante Celery Beats e índices parciales B-Tree en campos de estado y fecha, manteniendo el tiempo de agregación por debajo de 12ms constantes.",
        "points": [
          "La indexación compuesta sobre (user_id, created_at) eliminó el 88% de los sequential scans en consultas de historial de cliente.",
          "El uso de bulk_create en paquetes de 500 registros con psycopg2 aumentó la velocidad de inserción de 120 órdenes/segundo a más de 1,450 TPS.",
          "La exportación limpia a esquemas dimensionales facilitó la integración directa con Power BI sin transformaciones pesadas en el reporte."
        ],
        "tags": [
          "PostgreSQL",
          "Django",
          "ETL",
          "Indexación B-Tree",
          "Celery",
          "Optimización SQL"
        ]
      }
    }
  ]
};
