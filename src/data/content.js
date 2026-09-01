export const cvData = {
  personalInfo: {
    name: "Facundo Rizzato",
    title: "Data Analyst & Automation",
    email: "facurizzato2012@gmail.com", // Update with your main email
    linkedin: "https://www.linkedin.com/in/facundo-rizzato-63a055259/",
    github: "https://github.com/waycold",
    cvPdfUrl: "/cv.pdf", // Update when you have the final PDF
  },
  hero: {
    headline: "Transforming complex data into strategic decisions.",
    description: "Informatics Engineering student specializing in data pipelines, SQL analytics, and automated business intelligence.",
  },
  about: {
    bio: [
      "Informatics Engineering student at Universidad Nacional de La Matanza (UNLaM) with a focus on data analytics and process automation. I design relational database schemas, build automated ETL pipelines in Python and SQL, and develop interactive Power BI dashboards for executive decision-making.",
      "Experienced in transforming raw transactional data into clear, actionable business insights. Seeking Data Analyst and Automation Engineering opportunities to optimize data workflows and drive measurable impact."
    ],
    details: [
      { label: "Education", value: "Informatics Engineering, UNLaM" },
      { label: "Specialization", value: "Data Analysis, Automation & BI" },
      { label: "Location", value: "Buenos Aires, Argentina" },
    ]
  },
  stack: [
    { category: "Data & Analytics", technologies: ["SQL", "PostgreSQL", "Python", "Pandas", "Power BI", "Excel"] },
    { category: "Software Engineering", technologies: ["C", "Django", "Git", "GitHub"] },
    { category: "Deployment & Management", technologies: ["Vercel", "Notion", "Jira"] },
    { category: "Languages", technologies: ["English (B2)", "Spanish (Native)"] }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Django, Data Simulation & Analytics",
      description: "Backend platform developed in Django that integrates transactional data simulation to generate analytical metrics for users and purchases.",
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
          url: "https://i.imgur.com/in353v2.png",
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
      ]
    },
    {
      id: 2,
      title: "Business Dashboard in PowerBI",
      description: "Power BI report with interactive data visualizations for tracking key performance indicators and revenue growth.",
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
      ]
    },
    {
      id: 3,
      title: "Chatbot for Financial Forecasting & Risk Management",
      status: "In Progress",
      description: "Interactive chatbot designed to assist in financial forecasting and risk management. Utilizes predictive analytics to provide insights and recommendations.",
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
          url: "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Chatbot Interface & User Interaction"
        }
      ]
    },
    {
      id: 4,
      title: "IoT Analytics with ESP32",
      description: "Hardware automation and data collection project using ESP32 microcontrollers. Simulates data streams that are captured and analyzed in real-time.",
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
      ]
    },
    {
      id: 5,
      title: "Automated Web Scraping Engine",
      status: "In Progress",
      description: "Scalable web scraping solution designed to extract large volumes of data from various sources. Built with anti-bot bypassing and automated pipeline exporting.",
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
      ]
    },
  ]
};