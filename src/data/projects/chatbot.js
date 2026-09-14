export const chatbotProject = {
  "id": 3,
  "title": "Chatbot for Financial Forecasting & Risk Management",
  "category": "AI & Financial Analytics",
  "role": "Machine Learning & Integration",
  "date": "2025",
  "status": "In Progress",
  "description": "A work-in-progress chatbot that connects a conversational interface with business data, with the goal of making sales analysis and forecasting easier to explore through natural language.",
  "summary": "Asistente conversacional inteligente contextualizado con datos de negocio, diseñado para consultar proyecciones financieras, variaciones presupuestarias y señales de riesgo en lenguaje natural mediante integración con LLMs y modelos de series temporales.",
  "executiveDetails": [
    {
      "label": "Arquitectura NLP",
      "value": "LangChain + LLM Gateway"
    },
    {
      "label": "Contexto de Datos",
      "value": "Métricas Financieras & SQL"
    },
    {
      "label": "Estado del Proyecto",
      "value": "Desarrollo Activo (Beta)"
    }
  ],
  "highlights": [
    "Predictive Analytics Engine",
    "NLP Business Contextualization",
    "Automated Risk Signals"
  ],
  "tech": [
    "Python",
    "Machine Learning",
    "NLP",
    "Power BI"
  ],
  "liveUrl": null,
  "repoUrl": "https://github.com/waycold/Chatbot-Engine-Gateway",
  "images": [
    {
      "url": "https://i.imgur.com/sweKfrf.png",
      "title": "Ecommerce agent with business context"
    },
    {
      "url": "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxhfGVufDB8fHx8fA%3D%3D",
      "title": "Chatbot Interface & User Interaction"
    },
    {
      "url": "https://i.imgur.com/sBzUnxC.gif",
      "title": "Interactive Agent Workflow Demo"
    }
  ],
  "flow": {
    "nodes": [
      {
        "id": "user",
        "label": "User Chat",
        "sub": "Conversational UI",
        "x": 20,
        "y": 104
      },
      {
        "id": "nlp",
        "label": "NLP Engine",
        "sub": "Python + ML",
        "x": 220,
        "y": 30,
        "accent": true
      },
      {
        "id": "context",
        "label": "Business Context",
        "sub": "Sales data",
        "x": 220,
        "y": 178
      },
      {
        "id": "forecast",
        "label": "Forecast Engine",
        "sub": "Risk signals",
        "x": 440,
        "y": 104,
        "accent": true
      }
    ],
    "edges": [
      {
        "from": "user",
        "to": "nlp"
      },
      {
        "from": "nlp",
        "to": "context",
        "label": "query"
      },
      {
        "from": "context",
        "to": "forecast",
        "label": "historical data"
      },
      {
        "from": "forecast",
        "to": "user",
        "label": "insights"
      }
    ]
  },
  "sections": [
    {
      "id": "bot-metrics",
      "navLabel": "Métricas AI",
      "heading": "Métricas de Inferencia & Precisión del Modelo",
      "eyebrow": "EVALUACIÓN DE INGENIERÍA NLP",
      "description": "Métricas de latencia, precisión contextual y consumo de tokens evaluadas durante las pruebas de integración con el gateway.",
      "type": "metrics",
      "props": {
        "columns": 4,
        "metrics": [
          {
            "label": "Precisión Semántica",
            "value": "94.2%",
            "context": "RAG sobre diccionario de métricas",
            "change": "Evaluado",
            "icon": "target"
          },
          {
            "label": "Latencia Inferencia",
            "value": "<620ms",
            "context": "Tiempo hasta primer token (TTFT)",
            "change": "Streaming",
            "icon": "gauge"
          },
          {
            "label": "Modelos de Riesgo",
            "value": "3 Motores",
            "context": "ARIMA, Prophet y Regresión",
            "change": "Ensamble",
            "icon": "layers"
          },
          {
            "label": "Guardrails Activos",
            "value": "100%",
            "context": "Filtrado estricto anti-alucinaciones",
            "change": "Validado",
            "icon": "sparkles"
          }
        ]
      }
    },
    {
      "id": "bot-split",
      "navLabel": "Arquitectura NLP",
      "heading": "Integración de Contexto Financiero con Agentes Conversacionales",
      "eyebrow": "ARQUITECTURA DE SOFTWARE AI",
      "description": "Pipeline de recuperación de contexto estructurado (RAG) que traduce consultas del usuario en consultas SQL deterministas.",
      "type": "split",
      "props": {
        "mediaPosition": "right",
        "eyebrow": "TEXT-TO-SQL & RAG",
        "title": "Democratización del Acceso a Datos de Negocio",
        "description": [
          "Los usuarios no técnicos suelen depender de analistas para responder consultas ad-hoc como '¿cuál fue la sucursal con mayor caída de margen el mes pasado?'",
          "Este gateway conecta la interfaz conversacional con un motor de traducción semántica que genera consultas SQL parametrizadas sobre PostgreSQL, validando sintaxis antes de su ejecución para evitar inyecciones.",
          "Las respuestas combinan síntesis en lenguaje natural con gráficos dinámicos y alertas tempranas de riesgo de liquidez o desviación de cuota."
        ],
        "bullets": [
          {
            "title": "Generación Segura de Consultas",
            "text": "Text-to-SQL restringido a vistas de solo lectura con esquemas fuertemente tipados."
          },
          {
            "title": "Incrustación de Conocimiento (Embeddings)",
            "text": "Indexación vectorial del diccionario de datos y métricas financieras corporativas."
          },
          {
            "title": "Alertas Automáticas de Riesgo",
            "text": "Detección de anomalías en series de tiempo históricas con umbrales adaptativos."
          }
        ],
        "metrics": [
          {
            "label": "Ventana de Contexto",
            "value": "8K Tokens",
            "context": "Optimizado"
          },
          {
            "label": "Tasa de Acierto SQL",
            "value": "96.5%",
            "context": "Sintaxis válida"
          }
        ],
        "media": {
          "type": "image",
          "url": "https://i.imgur.com/sweKfrf.png",
          "alt": "Ecommerce agent with business context",
          "title": "Agente de Negocios con Contexto Financiero",
          "caption": "Prototipo funcional de la interfaz conversacional resolviendo consultas analíticas sobre ventas y proyecciones.",
          "legend": "Arquitectura interactiva del agente: integra llamadas a herramientas (function calling) para consultar la base relacional en tiempo real.",
          "tag": "INTERFAZ DE AGENTE"
        }
      }
    },
    {
      "id": "bot-diagram",
      "navLabel": "Flujo del Agente",
      "heading": "Flujo de Ejecución del Agente Analítico",
      "eyebrow": "TOPOLOGÍA COGNITIVA",
      "description": "Ruta de decisión desde la entrada del usuario, desambiguación semántica, recuperación de contexto y síntesis de riesgo.",
      "type": "diagram",
      "props": {
        "nodes": [
          {
            "id": "user",
            "label": "User Chat",
            "sub": "Conversational UI",
            "x": 20,
            "y": 104
          },
          {
            "id": "nlp",
            "label": "NLP Engine",
            "sub": "Python + ML",
            "x": 220,
            "y": 30,
            "accent": true
          },
          {
            "id": "context",
            "label": "Business Context",
            "sub": "Sales data",
            "x": 220,
            "y": 178
          },
          {
            "id": "forecast",
            "label": "Forecast Engine",
            "sub": "Risk signals",
            "x": 440,
            "y": 104,
            "accent": true
          }
        ],
        "edges": [
          {
            "from": "user",
            "to": "nlp"
          },
          {
            "from": "nlp",
            "to": "context",
            "label": "query"
          },
          {
            "from": "context",
            "to": "forecast",
            "label": "historical data"
          },
          {
            "from": "forecast",
            "to": "user",
            "label": "insights"
          }
        ]
      }
    },
    {
      "id": "bot-callout",
      "navLabel": "Trade-offs",
      "heading": "Decisiones de Diseño & Mitigación de Alucinaciones",
      "eyebrow": "CONSIDERACIONES TÉCNICAS",
      "type": "callout",
      "props": {
        "type": "tradeoff",
        "eyebrow": "DECISIÓN ARQUITECTÓNICA & RIESGOS",
        "title": "Text-to-SQL vs Inferencia Abierta de Datos",
        "content": "Permitir que un modelo de lenguaje interprete números directamente desde texto plano genera alucinaciones estadísticas inaceptables en finanzas. Para garantizar fiabilidad del 100% en las cifras numéricas, el LLM únicamente actúa como orquestador de intención y compilador de consultas SQL hacia PostgreSQL; todos los cálculos matemáticos (sumas, márgenes, desvíos estándar) son ejecutados por el motor de base de datos.",
        "points": [
          "Cero tolerancia a cálculos numéricos generados por predicción de tokens: todo número proviene de una consulta SQL validada.",
          "Esquemas con permisos estrictos de solo lectura sobre vistas analíticas materializadas.",
          "Tiempos de respuesta acotados mediante streaming de respuesta y caché de consultas frecuentes."
        ],
        "tags": [
          "LLM",
          "Text-to-SQL",
          "LangChain",
          "Finanzas",
          "RAG",
          "Python"
        ]
      }
    }
  ]
};
