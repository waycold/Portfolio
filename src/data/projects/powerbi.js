export const powerbiProject = {
  "id": 2,
  "title": "Business Dashboard in PowerBI",
  "category": "Business Intelligence & Data Analytics",
  "role": "Data Analyst & BI Developer",
  "date": "2024",
  "status": "Production",
  "description": "A Power BI report built to explore sales performance, revenue, customer behavior, and other business metrics across different dimensions.",
  "summary": "Tablero de control ejecutivo integral desarrollado en Power BI sobre un modelo Star Schema en SQL. Conecta datos de ventas, márgenes comerciales, cohortes de clientes y dispersión geográfica con más de 45 medidas DAX optimizadas en el motor VertiPaq para análisis interactivo y proyecciones de demanda.",
  "executiveDetails": [
    {
      "label": "Registros Analizados",
      "value": "500,000+ Filas de Ventas"
    },
    {
      "label": "Motor de Análisis",
      "value": "DAX en VertiPaq Star Schema"
    },
    {
      "label": "Despliegue",
      "value": "Power BI Service (Embed Live)"
    }
  ],
  "highlights": [
    "Multi-dimensional DAX Models",
    "Executive KPI Tracking",
    "Automated Trend Forecasting"
  ],
  "tech": [
    "Power BI",
    "DAX",
    "SQL"
  ],
  "liveUrl": "https://app.powerbi.com/view?r=eyJrIjoiOGRmNDViMzktNDUyMi00ZmQzLThmYTEtMWNiMmZiYzQzZjMwIiwidCI6IjI0ODRhMTEyLTFlZTUtNGJhNi05MGQ1LTdmZWExMGJmZjUyYSJ9",
  "repoUrl": null,
  "images": [
    {
      "url": "https://i.imgur.com/B7j6xnE.png",
      "title": "Executive KPI & Growth Summary"
    },
    {
      "url": "https://i.imgur.com/qCIEK3s.png",
      "title": "Regional Sales & Performance Breakdown"
    },
    {
      "url": "https://i.imgur.com/25C6hJm.png",
      "title": "Customer Retention & Historical Insights"
    }
  ],
  "flow": {
    "nodes": [
      {
        "id": "source",
        "label": "SQL Source",
        "sub": "Sales + CRM data",
        "x": 20,
        "y": 104
      },
      {
        "id": "pq",
        "label": "Power Query",
        "sub": "ETL transform",
        "x": 220,
        "y": 104,
        "accent": true
      },
      {
        "id": "model",
        "label": "Star Schema",
        "sub": "DAX measures",
        "x": 420,
        "y": 104,
        "accent": true
      },
      {
        "id": "report",
        "label": "Executive Report",
        "sub": "KPI dashboards",
        "x": 620,
        "y": 104
      }
    ],
    "edges": [
      {
        "from": "source",
        "to": "pq"
      },
      {
        "from": "pq",
        "to": "model",
        "label": "load"
      },
      {
        "from": "model",
        "to": "report",
        "label": "DAX"
      }
    ]
  },
  "sections": [
    {
      "id": "bi-metrics",
      "navLabel": "Métricas BI",
      "heading": "Indicadores de Rendimiento del Modelo Analítico",
      "eyebrow": "RENDIMIENTO & MOTOR VERTIPAQ",
      "description": "Métricas cuantitativas de optimización de memoria, velocidad de cálculo DAX y volumen de datos procesados.",
      "type": "metrics",
      "props": {
        "columns": 4,
        "metrics": [
          {
            "label": "Total Filas Analizadas",
            "value": "500K+",
            "context": "Transacciones de venta históricas",
            "change": "Star Schema",
            "icon": "layers"
          },
          {
            "label": "Medidas DAX",
            "value": "45+",
            "context": "Time Intelligence y márgenes",
            "change": "Vectorizado",
            "icon": "gauge"
          },
          {
            "label": "Compresión VertiPaq",
            "value": "7.8x",
            "context": "Reducción de cardinalidad en RAM",
            "change": "-64% RAM",
            "icon": "target"
          },
          {
            "label": "Tiempo de Render",
            "value": "<1.4s",
            "context": "Evaluación visual en PBI Service",
            "change": "Sub-segundo",
            "icon": "sparkles"
          }
        ]
      }
    },
    {
      "id": "bi-split",
      "navLabel": "Modelado DAX",
      "heading": "Modelado Dimensional & Segmentación Regional",
      "eyebrow": "ARQUITECTURA DE DATOS BI",
      "description": "Estructuración de datos heterogéneos de facturación en un esquema en estrella optimizado para consultas de alta velocidad.",
      "type": "split",
      "props": {
        "mediaPosition": "left",
        "eyebrow": "STAR SCHEMA & POWER QUERY",
        "title": "Desglose de Ventas y Márgenes por Territorio",
        "description": [
          "Los datos crudos de facturación y CRM presentaban duplicidades y granularidades mixtas que dificultaban el cálculo preciso de márgenes comerciales y retención de cohortes.",
          "Se diseñó una arquitectura Star Schema con una tabla de hechos (Fact_Sales) y cinco dimensiones normalizadas (Dim_Customer, Dim_Product, Dim_Date, Dim_Geography, Dim_Channel), eliminando ambigüedades en relaciones N:M.",
          "Se formularon medidas DAX dinámicas con CALCULATE, USERELATIONSHIP y Time Intelligence (YoY, YTD, MTD) para permitir navegación drill-down fluida desde visión país hasta nivel de sucursal."
        ],
        "bullets": [
          {
            "title": "Tabla Calendario Automatizada",
            "text": "Generación continua mediante DAX (CALENDARAUTO) con marcadores de ejercicio fiscal y feriados."
          },
          {
            "title": "Transición de Contexto Segura",
            "text": "Uso riguroso de CALCULATE y KEEPFILTERS para preservar el contexto de filtro sin efectos secundarios."
          },
          {
            "title": "Seguridad a Nivel de Fila (RLS)",
            "text": "Filtros dinámicos basados en USERPRINCIPALNAME para restringir visibilidad a directores regionales."
          },
          {
            "title": "Reducción de Huella en Memoria",
            "text": "Eliminación de columnas no utilizadas y redondeo de tipos de cambio, reduciendo el archivo de 84MB a 19MB."
          }
        ],
        "metrics": [
          {
            "label": "Dimensiones",
            "value": "5 Tablas",
            "context": "Star Schema"
          },
          {
            "label": "Granularidad",
            "value": "Día / SKU",
            "context": "Nivel transaccional"
          },
          {
            "label": "Reducción PBIX",
            "value": "-77%",
            "context": "De 84MB a 19MB"
          }
        ],
        "media": {
          "type": "image",
          "url": "https://i.imgur.com/qCIEK3s.png",
          "alt": "Desglose de Ventas Regionales y Rendimiento por Territorio",
          "title": "Análisis Regional de Ventas & Márgenes",
          "caption": "Matriz interactiva de rendimiento geográfico y dispersión de ticket promedio con selectores sincronizados.",
          "legend": "Visual interactivo de segmentación territorial: permite a los gerentes de área cruzar volumen de unidades con rentabilidad neta.",
          "tag": "ANÁLISIS REGIONAL"
        }
      }
    },
    {
      "id": "bi-chart",
      "navLabel": "Facturación",
      "heading": "Evolución Mensual de Facturación & Margen Operativo",
      "eyebrow": "ANÁLISIS DE TENDENCIAS",
      "description": "Comportamiento estacional de ingresos netos frente al porcentaje de margen de contribución a lo largo del ejercicio fiscal.",
      "type": "chart",
      "props": {
        "title": "Evolución Mensual de Facturación & Margen Operativo",
        "subtitle": "Facturación bruta ($K USD) vs. ratio de margen de contribución porcentual (%)",
        "primaryLabel": "Facturación ($K)",
        "accentLabel": "Margen (%)",
        "regenerateLabel": "Actualizar Muestra",
        "initialData": [
          {
            "month": "Ene",
            "primary": 40,
            "accent": 28,
            "bar": 45
          },
          {
            "month": "Feb",
            "primary": 45,
            "accent": 31,
            "bar": 50
          },
          {
            "month": "Mar",
            "primary": 42,
            "accent": 30,
            "bar": 48
          },
          {
            "month": "Abr",
            "primary": 55,
            "accent": 33,
            "bar": 58
          },
          {
            "month": "May",
            "primary": 60,
            "accent": 34,
            "bar": 65
          },
          {
            "month": "Jun",
            "primary": 65,
            "accent": 35,
            "bar": 70
          },
          {
            "month": "Jul",
            "primary": 70,
            "accent": 37,
            "bar": 76
          },
          {
            "month": "Ago",
            "primary": 68,
            "accent": 36,
            "bar": 74
          },
          {
            "month": "Sep",
            "primary": 78,
            "accent": 38,
            "bar": 82
          },
          {
            "month": "Oct",
            "primary": 82,
            "accent": 38,
            "bar": 86
          },
          {
            "month": "Nov",
            "primary": 90,
            "accent": 40,
            "bar": 94
          },
          {
            "month": "Dic",
            "primary": 96,
            "accent": 41,
            "bar": 100
          }
        ]
      }
    },
    {
      "id": "bi-table",
      "navLabel": "Medidas DAX",
      "heading": "Catálogo de Medidas DAX Core & Evaluación en VertiPaq",
      "eyebrow": "DICCIONARIO ANALÍTICO",
      "description": "Definición técnica de las medidas analíticas clave, patrones de formulación en DAX y evaluación en DAX Studio.",
      "type": "table",
      "props": {
        "title": "Catálogo de Medidas DAX & Tiempos de Motor",
        "subtitle": "Evaluación de tiempo de ejecución del Storage Engine (SE) y Formula Engine (FE)",
        "columns": {
          "element": "Medida DAX / Indicador",
          "property": "Fórmula / Patrón DAX",
          "sample": "Capa / Tipo",
          "value": "Evaluación SE / Memoria",
          "status": "Estado"
        },
        "rows": [
          {
            "id": "dax-revenue",
            "element": "Total Ventas Netas (Revenue)",
            "subtext": "Agregación base sin IVA ni descuentos comerciales",
            "property": "SUMX(Fact_Sales, Fact_Sales[Qty] * Fact_Sales[Price])",
            "sample": {
              "type": "button-primary",
              "text": "Base KPI"
            },
            "value": "100% Storage Engine / <8ms",
            "status": "active"
          },
          {
            "id": "dax-yoy",
            "element": "Crecimiento Interanual (YoY %)",
            "subtext": "Comparativa de variación porcentual contra mismo período año previo",
            "property": "DIVIDE([Total Ventas] - [Ventas SPLY], [Ventas SPLY])",
            "sample": {
              "type": "badge-secondary",
              "text": "Time Intelligence"
            },
            "value": "SE Cache Hit / <14ms",
            "status": "active"
          },
          {
            "id": "dax-margin",
            "element": "Margen de Contribución (%)",
            "subtext": "Utilidad bruta sobre facturación total por línea de producto",
            "property": "DIVIDE([Total Ventas] - [Costo Total], [Total Ventas])",
            "sample": {
              "type": "badge-accent",
              "text": "Rentabilidad"
            },
            "value": "<12ms / Vectorizado",
            "status": "active"
          },
          {
            "id": "dax-retention",
            "element": "Tasa de Retención de Clientes",
            "subtext": "Clientes recurrentes con compras en ventanas consecutivas de 90 días",
            "property": "CALCULATE(DISTINCTCOUNT(Fact_Sales[CustID]), Filter(...))",
            "sample": {
              "type": "pill-muted",
              "text": "Cohortes"
            },
            "value": "Formula Engine / <22ms",
            "status": "active"
          },
          {
            "id": "token-pbi-teal",
            "element": "Color Corporativo --primary",
            "subtext": "Tono principal de barras y KPIs aprobado por dirección",
            "property": "--primary (#4a6a62)",
            "sample": {
              "type": "button-primary",
              "text": "Kpi Teal"
            },
            "value": "#4a6a62",
            "status": "active"
          }
        ]
      }
    },
    {
      "id": "bi-flow",
      "navLabel": "Pipeline ETL",
      "heading": "Flujo de Transformación & Capas de Datos",
      "eyebrow": "PIPELINE BI",
      "description": "Recorrido de la información desde la extracción en bases SQL hasta la presentación ejecutiva.",
      "type": "diagram",
      "props": {
        "nodes": [
          {
            "id": "source",
            "label": "SQL Source",
            "sub": "Sales + CRM data",
            "x": 20,
            "y": 104
          },
          {
            "id": "pq",
            "label": "Power Query",
            "sub": "ETL transform",
            "x": 220,
            "y": 104,
            "accent": true
          },
          {
            "id": "model",
            "label": "Star Schema",
            "sub": "DAX measures",
            "x": 420,
            "y": 104,
            "accent": true
          },
          {
            "id": "report",
            "label": "Executive Report",
            "sub": "KPI dashboards",
            "x": 620,
            "y": 104
          }
        ],
        "edges": [
          {
            "from": "source",
            "to": "pq"
          },
          {
            "from": "pq",
            "to": "model",
            "label": "load"
          },
          {
            "from": "model",
            "to": "report",
            "label": "DAX"
          }
        ]
      }
    },
    {
      "id": "bi-fullimage",
      "navLabel": "Dashboard",
      "heading": "Tablero Ejecutivo & Resumen de Crecimiento",
      "eyebrow": "REPORTE INTERACTIVO",
      "description": "Pantalla principal del reporte en Power BI con tarjetas KPI de alto nivel, cascada de variación y tendencias temporales.",
      "type": "fullImage",
      "props": {
        "src": "https://i.imgur.com/B7j6xnE.png",
        "title": "Executive KPI & Growth Summary Dashboard",
        "caption": "Visualización consolidada para directores generales con indicadores de rentabilidad, objetivos alcanzados y márgenes por división.",
        "legend": "Dashboard ejecutivo con filtros sincronizados de fecha y segmento. Las alertas visuales integradas notifican desviaciones presupuestarias superiores al 5%.",
        "tag": "FIG 2.1 — TABLERO EJECUTIVO"
      }
    },
    {
      "id": "bi-callout",
      "navLabel": "Conclusiones",
      "heading": "Impacto en Negocio & Optimización de DAX",
      "eyebrow": "LECCIONES APRENDIDAS & MEJORES PRÁCTICAS",
      "type": "callout",
      "props": {
        "type": "insight",
        "eyebrow": "BI INSIGHTS & MEJORES PRÁCTICAS",
        "title": "Optimización VertiPaq & Gobernanza de Datos",
        "content": "La optimización de cardinalidad en el modelo de Power BI (descartando columnas timestamp no utilizadas y dividiendo fechas de horas) redujo el tamaño del archivo en un 77% (de 84MB a 19MB). La sustitución de columnas calculadas por medidas DAX permitió que el 90% de los cálculos se procesaran directamente en el Storage Engine con ejecución columnar en memoria ultra rápida.",
        "points": [
          "La eliminación del filtrado bidireccional entre dimensiones evitó ambigüedades en el grafo del modelo y aceleró el tiempo de respuesta visual a menos de 1.4s.",
          "El análisis de retención por cohortes reveló una oportunidad de re-enganche en clientes con ticket superior a $250 que se encontraban inactivos tras 60 días.",
          "La gobernanza de métricas mediante un catálogo centralizado de medidas aseguró consistencia total en los reportes de ventas y finanzas."
        ],
        "tags": [
          "Power BI",
          "DAX",
          "VertiPaq",
          "Star Schema",
          "Power Query",
          "Data Modeling"
        ]
      }
    }
  ]
};
