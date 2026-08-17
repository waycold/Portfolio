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
    description: "Informatics Engineering student focused on data analysis and automation. Specialized in extracting value from information and optimizing processes through efficient code.",
  },
  about: {
    bio: [
      "As an Informatics Engineering student at Universidad Nacional de La Matanza (UNLaM), I apply a solid analytical foundation to problem-solving. My focus is on bridging the gap between raw data and strategic decision-making.",
      "I have experience managing databases and developing automation solutions. I use tools like Python, Pandas, SQL, and Power BI to structure, clean, and visualize information in a clear and actionable way.",
      "Currently, I am developing business-applied analytical projects and seeking new professional opportunities as a Data Analyst. I am detail-oriented and constantly refining my technical and communication skills."
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
      title: "Comprehensive Sales Analysis",
      description: "Commercial sales data analysis project. Includes data cleaning, structuring, and visualization through interactive dashboards to uncover market trends and key metrics.",
      tech: ["Python", "Pandas", "SQL", "Power BI"],
      liveUrl: "#", // Replace if you publish a dashboard online (e.g., NovyPro)
      repoUrl: "https://github.com/waycold/",
      images: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          title: "Sales Performance & Revenue Overview"
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
          title: "Conversion Trends & Market Metrics"
        }
      ]
    },
    {
      id: 2,
      title: "E-Commerce Django, Data Simulation & Analytics",
      description: "Backend platform developed in Django that integrates transactional data simulation to generate analytical metrics for users and purchases.",
      tech: ["Python", "Django", "PostgreSQL"],
      liveUrl: "https://ecommerce-django-fd4t.onrender.com/",
      repoUrl: "https://github.com/waycold/ecommerce", 
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
          url: "https://i.imgur.com/WzXV5YG.png",
          title: "Database Pipeline & Event Stream"
        }
      ]
    },
    {
      id: 3,
      title: "Automated Web Scraping Engine",
      description: "Scalable web scraping solution designed to extract large volumes of data from various sources. Built with anti-bot bypassing and automated pipeline exporting.",
      tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      liveUrl: "#",
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
    {
      id: 4,
      title: "Business Dashboard in PowerBI",
      description: "Power BI report with interactive data visualizations for tracking key performance indicators and revenue growth.",
      tech: ["Power BI", "DAX", "SQL"],
      liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGRmNDViMzktNDUyMi00ZmQzLThmYTEtMWNiMmZiYzQzZjMwIiwidCI6IjI0ODRhMTEyLTFlZTUtNGJhNi05MGQ1LTdmZWExMGJmZjUyYSJ9",
      repoUrl: "#", 
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
      id: 5,
      title: "Financial Dashboard PowerBI",
      description: "External Power BI report link focusing on financial forecasting and risk management models.",
      tech: ["Power BI", "Data Modeling"],
      liveUrl: "https://app.powerbi.com/reportEmbed?reportId=7bf26a0b-0785-4522-a42f-b4487211c815&autoAuth=true&ctid=659e1dba-b3cc-4dcc-8730-d23877e7ab7b",
      repoUrl: "#", 
      images: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          title: "Financial Risk & Forecast Modeling"
        }
      ]
    },
    {
      id: 6,
      title: "IoT Analytics with ESP32",
      description: "Hardware automation and data collection project using ESP32 microcontrollers. Simulates data streams that are captured and analyzed in real-time.",
      tech: ["MicroPython", "ESP32", "IoT", "Data Collection"],
      liveUrl: "https://wokwi.com/projects/472522834701502465",
      repoUrl: "#", 
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
    }
  ]
};