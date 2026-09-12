export const cvData = {
  personalInfo: {
    name: "Facundo Rizzato",
    title: "Data & Automation",
    email: "facurizzato2012@gmail.com",
    linkedin: "https://www.linkedin.com/in/facundo-rizzato-63a055259/",
    github: "https://github.com/waycold",
    cvPdfUrl: "Resume.pdf",
  },
  hero: {
    headline: "Hi, I'm Facundo — Software Engineering student.",
    description: "I specialize in data analytics, automation, and software development. Explore my projects below.",
  },
 about: {
    bio: [
      "I'm a Software Engineering student at Universidad Nacional de La Matanza (UNLaM), with a growing focus on data analytics and automation. Most of my projects sit between software and data: designing relational databases, generating and processing data with Python and SQL, and building Power BI reports to make that data easier to understand.",
      "I enjoy taking a project from the data model all the way to something you can actually use. For example, my e-commerce project combines a Django backend, PostgreSQL, simulated transactional data, and analytics in the same system. I'm currently looking for opportunities where I can keep building in data, automation, and software engineering."
    ],
    details: [
      { label: "Education", value: "Software Engineering, UNLaM", subtitle: "In progress" },
      { label: "Courses", value: "AI for Data Analytics", subtitle: "Google" },
      { label: "Courses", value: "Django", subtitle: "Coderhouse" },
      { label: "Location", value: "Buenos Aires, Argentina" },
    ]
  },
  stack: [
    { category: "Data & Analytics", technologies: ["SQL", "PostgreSQL", "Python", "Pandas", "Power BI", "Excel"] },
    { category: "Software Engineering", technologies: ["C", "Django", "Git", "GitHub"] },
    { category: "Deployment & Management", technologies: [] },
    { category: "Languages", technologies: ["English (B2)", "Spanish (Native)"] }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Django, Data Simulation & Analytics",
      description: "A Django e-commerce application built around a PostgreSQL database, with simulated orders and user activity used to test and explore real-world analytics scenarios.",
      highlights: ["10K+ Simulated Transactions", "Real-time Metrics Pipeline", "PostgreSQL Relational Schema"],
      tech: ["Python", "Django", "PostgreSQL"],
      liveUrl: "https://ecommerce-django-fd4t.onrender.com/",
      repoUrl: "https://github.com/waycold/ecommerce_Django",
      images: [
        {
          url: "https://i.imgur.com/AUYNzwq.png",
          title: "Simulation Controls & Live Metrics Dashboard"
        },
        {
          url: "https://i.imgur.com/WGUy5rp.gif",
          title: "User Behavior & Transaction Analysis"
        },
        {
          url: "https://i.imgur.com/gMSxVSM.png",
          title: "Ecommerce homepage & Product Catalog"
        },
        {
          url: "https://i.imgur.com/2cP7rE8.png",
          title: "Shopping Cart & Checkout Process"
        }
      ],
      flow: {
        nodes: [
          { id: "core", label: "Django Core", sub: "PostgreSQL + REST", x: 20, y: 104 },
          { id: "sim", label: "Data Simulation", sub: "Pandas / Faker", x: 190, y: 20, accent: true },
          { id: "analytics", label: "Analytics API", sub: "Real-time metrics", x: 190, y: 188 },
          { id: "ai", label: "AI Gateway", sub: "LangChain + LLM", x: 400, y: 20, accent: true },
          { id: "bi", label: "Power BI", sub: "DAX star schema", x: 400, y: 188 },
          { id: "auto", label: "Automation", sub: "Celery + Cron", x: 610, y: 104 },
        ],
        edges: [
          { from: "core", to: "sim", label: "seed + 10K orders" },
          { from: "core", to: "analytics", label: "live queries" },
          { from: "analytics", to: "ai", label: "tool calls" },
          { from: "analytics", to: "bi", label: "OLAP export" },
          { from: "auto", to: "core" },
          { from: "auto", to: "sim", label: "scheduled ETL" },
        ],
      },
    },
    {
      id: 2,
      title: "Business Dashboard in PowerBI",
      description: "A Power BI report built to explore sales performance, revenue, customer behavior, and other business metrics across different dimensions.",
      highlights: ["Multi-dimensional DAX Models", "Executive KPI Tracking", "Automated Trend Forecasting"],
      tech: ["Power BI", "DAX", "SQL"],
      liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGRmNDViMzktNDUyMi00ZmQzLThmYTEtMWNiMmZiYzQzZjMwIiwidCI6IjI0ODRhMTEyLTFlZTUtNGJhNi05MGQ1LTdmZWExMGJmZjUyYSJ9",
      repoUrl: null,
      images: [
        {
          url: "https://i.imgur.com/B7j6xnE.png",
          title: "Executive KPI & Growth Summary"
        },
        {
          url: "https://i.imgur.com/qCIEK3s.png",
          title: "Regional Sales & Performance Breakdown"
        },
        {
          url: "https://i.imgur.com/25C6hJm.png",
          title: "Customer Retention & Historical Insights"
        }
      ],
      flow: {
        nodes: [
          { id: "source", label: "SQL Source", sub: "Sales + CRM data", x: 20, y: 104 },
          { id: "pq", label: "Power Query", sub: "ETL transform", x: 220, y: 104, accent: true },
          { id: "model", label: "Star Schema", sub: "DAX measures", x: 420, y: 104, accent: true },
          { id: "report", label: "Executive Report", sub: "KPI dashboards", x: 620, y: 104 },
        ],
        edges: [
          { from: "source", to: "pq" },
          { from: "pq", to: "model", label: "load" },
          { from: "model", to: "report", label: "DAX" },
        ],
      },
    },
    {
      id: 3,
      title: "Chatbot for Financial Forecasting & Risk Management",
      status: "In Progress",
      description: "A work-in-progress chatbot that connects a conversational interface with business data, with the goal of making sales analysis and forecasting easier to explore through natural language.",
      highlights: ["Predictive Analytics Engine", "NLP Business Contextualization", "Automated Risk Signals"],
      tech: ["Python", "Machine Learning", "NLP", "Power BI"],
      liveUrl: null,
      repoUrl: "https://github.com/waycold/Chatbot-Engine-Gateway",
      images: [
        {
          url: "https://i.imgur.com/sweKfrf.png",
          title: "Ecommerce agent with bussiness context"
        },
        {
          url: "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxhfGVufDB8fHx8fA%3D%3D",
          title: "Chatbot Interface & User Interaction"
        },
        {
          url: "https://i.imgur.com/sBzUnxC.gif",
          title: "Test"
        },
      ],
      flow: {
        nodes: [
          { id: "user", label: "User Chat", sub: "Conversational UI", x: 20, y: 104 },
          { id: "nlp", label: "NLP Engine", sub: "Python + ML", x: 220, y: 30, accent: true },
          { id: "context", label: "Business Context", sub: "Sales data", x: 220, y: 178 },
          { id: "forecast", label: "Forecast Engine", sub: "Risk signals", x: 440, y: 104, accent: true },
        ],
        edges: [
          { from: "user", to: "nlp" },
          { from: "nlp", to: "context", label: "query" },
          { from: "context", to: "forecast", label: "historical data" },
          { from: "forecast", to: "user", label: "insights" },
        ],
      },
    },
    {
      id: 4,
      title: "IoT Analytics with ESP32",
      description: "An ESP32 project for collecting sensor data and experimenting with how device telemetry can be captured and analyzed as it is produced.",
      highlights: ["Real-time Telemetry Streams", "MicroPython Sensor Driver", "Wokwi Cloud Simulation"],
      tech: ["MicroPython", "ESP32", "IoT", "Data Collection"],
      liveUrl: "https://wokwi.com/projects/472522834701502465",
      repoUrl: null,
      images: [
        {
          url: "https://i.imgur.com/XfYmIFJ.png",
          title: "Circuit Simulation & Sensor Configuration"
        },
        {
          url: "https://i.imgur.com/fYNIVPf.png",
          title: "Real-time Telemetry Data Stream"
        },
        {
          url: "https://i.imgur.com/VFIpp5H.png",
          title: "Sensor Output Analysis & Metrics"
        }
      ],
      flow: {
        nodes: [
          { id: "sensor", label: "Sensors", sub: "Temp / humidity", x: 20, y: 104 },
          { id: "esp32", label: "ESP32", sub: "MicroPython", x: 230, y: 104, accent: true },
          { id: "wokwi", label: "Wokwi Sim", sub: "Cloud simulation", x: 440, y: 30 },
          { id: "dash", label: "Telemetry", sub: "Live metrics", x: 440, y: 178, accent: true },
        ],
        edges: [
          { from: "sensor", to: "esp32", label: "I2C / analog" },
          { from: "esp32", to: "wokwi" },
          { from: "esp32", to: "dash", label: "stream" },
        ],
      },
    },
    {
      id: 5,
      title: "Automated Web Scraping Engine",
      status: "In Progress",
      description: "A work-in-progress Python scraper for collecting data from websites and turning the extracted information into structured datasets ready for analysis.",
      highlights: ["Automated Data Pipelines", "Anti-Bot Bypassing", "Pandas Clean ETL Export"],
      tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      liveUrl: null,
      repoUrl: "https://github.com/waycold/",
      images: [
        {
          url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
          title: "Extraction Pipeline Architecture"
        },
        {
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
          title: "Automated Export & Logging Interface"
        }
      ],
      flow: {
        nodes: [
          { id: "sites", label: "Target Sites", sub: "HTML sources", x: 20, y: 104 },
          { id: "scraper", label: "Selenium / BS4", sub: "Scraping engine", x: 220, y: 104, accent: true },
          { id: "clean", label: "Pandas ETL", sub: "Clean & normalize", x: 420, y: 104, accent: true },
          { id: "export", label: "Structured Export", sub: "CSV / dataset", x: 620, y: 104 },
        ],
        edges: [
          { from: "sites", to: "scraper" },
          { from: "scraper", to: "clean", label: "raw rows" },
          { from: "clean", to: "export" },
        ],
      },
    },
  ]
};