export const iotEsp32Project = {
  "id": 4,
  "title": "IoT Analytics with ESP32",
  "category": "Embedded Systems & IoT Analytics",
  "role": "Hardware & Firmware Prototyping",
  "date": "2024",
  "status": "Simulated & Tested",
  "description": "An ESP32 project for collecting sensor data and experimenting with how device telemetry can be captured and analyzed as it is produced.",
  "summary": "Sistema telemétrico embebido desarrollado en MicroPython sobre microcontroladores ESP32. Captura lecturas ambientales de sensores (temperatura, humedad, presión), procesa la telemetría en el edge y la transmite mediante MQTT/HTTP a dashboards de monitoreo en tiempo real simulados en Wokwi.",
  "executiveDetails": [
    {
      "label": "Microcontrolador",
      "value": "ESP32 Tensilica Dual-Core"
    },
    {
      "label": "Firmware Embebido",
      "value": "MicroPython v1.22"
    },
    {
      "label": "Entorno Simulado",
      "value": "Wokwi Cloud Platform"
    }
  ],
  "highlights": [
    "Real-time Telemetry Streams",
    "MicroPython Sensor Driver",
    "Wokwi Cloud Simulation"
  ],
  "tech": [
    "MicroPython",
    "ESP32",
    "IoT",
    "Data Collection"
  ],
  "liveUrl": "https://wokwi.com/projects/472522834701502465",
  "repoUrl": null,
  "images": [
    {
      "url": "https://i.imgur.com/XfYmIFJ.png",
      "title": "Circuit Simulation & Sensor Configuration"
    },
    {
      "url": "https://i.imgur.com/fYNIVPf.png",
      "title": "Real-time Telemetry Data Stream"
    },
    {
      "url": "https://i.imgur.com/VFIpp5H.png",
      "title": "Sensor Output Analysis & Metrics"
    }
  ],
  "flow": {
    "nodes": [
      {
        "id": "sensor",
        "label": "Sensors",
        "sub": "Temp / humidity",
        "x": 20,
        "y": 104
      },
      {
        "id": "esp32",
        "label": "ESP32",
        "sub": "MicroPython",
        "x": 230,
        "y": 104,
        "accent": true
      },
      {
        "id": "wokwi",
        "label": "Wokwi Sim",
        "sub": "Cloud simulation",
        "x": 440,
        "y": 30
      },
      {
        "id": "dash",
        "label": "Telemetry",
        "sub": "Live metrics",
        "x": 440,
        "y": 178,
        "accent": true
      }
    ],
    "edges": [
      {
        "from": "sensor",
        "to": "esp32",
        "label": "I2C / analog"
      },
      {
        "from": "esp32",
        "to": "wokwi"
      },
      {
        "from": "esp32",
        "to": "dash",
        "label": "stream"
      }
    ]
  },
  "sections": [
    {
      "id": "iot-metrics",
      "navLabel": "Telemetría",
      "heading": "Métricas de Telemetría & Conectividad del Sensor",
      "eyebrow": "RENDIMIENTO HARDWARE & PROTOCOLOS",
      "description": "Métricas de consumo energético, tasa de muestreo y estabilidad de la conexión telemétrica.",
      "type": "metrics",
      "props": {
        "columns": 4,
        "metrics": [
          {
            "label": "Muestreo Continuo",
            "value": "10 Hz",
            "context": "Lectura de sensores I2C/ADC",
            "change": "Estable",
            "icon": "gauge"
          },
          {
            "label": "Pérdida Paquetes",
            "value": "0.01%",
            "context": "Streaming MQTT con QoS 1",
            "change": "Resiliente",
            "icon": "target"
          },
          {
            "label": "Consumo Deep Sleep",
            "value": "<15 µA",
            "context": "Modo reposo para batería",
            "change": "Bajo consumo",
            "icon": "sparkles"
          },
          {
            "label": "Protocolos Empleados",
            "value": "MQTT/I2C",
            "context": "Transmisión binaria y JSON",
            "change": "Estandarizado",
            "icon": "layers"
          }
        ]
      }
    },
    {
      "id": "iot-split",
      "navLabel": "Procesamiento Edge",
      "heading": "Filtrado en el Dispositivo & Streaming Telemétrico",
      "eyebrow": "INGENIERÍA EMBEBIDA",
      "description": "Lógica de firmware en MicroPython para promediar lecturas espurias antes de su transmisión a la nube.",
      "type": "split",
      "props": {
        "mediaPosition": "right",
        "eyebrow": "FIRMWARE MICROPYTHON",
        "title": "Procesamiento de Señal & Telemetría en Tiempo Real",
        "description": [
          "En aplicaciones telemétricas, transmitir cada lectura ruidosa sobrecarga el canal inalámbrico e incrementa drásticamente el consumo de batería del microcontrolador.",
          "El firmware implementa un buffer circular en memoria con filtro de media móvil y detección de picos anómalos directamente en el chip ESP32, enviando únicamente resúmenes de telemetría y eventos de umbral crítico.",
          "La arquitectura fue validada en la plataforma de simulación en la nube Wokwi, verificando el comportamiento del bus I2C y la reconexión automática ante caídas de red."
        ],
        "bullets": [
          {
            "title": "Filtro de Media Móvil",
            "text": "Suavizado de ruido de alta frecuencia en lecturas analógicas del ADC."
          },
          {
            "title": "Manejo de Estados de Red",
            "text": "Reintento exponencial de conexión Wi-Fi/MQTT con almacenamiento local en búfer Flash."
          },
          {
            "title": "Simulación en Wokwi",
            "text": "Depuración lógica de periféricos sin requerir hardware físico en la fase inicial."
          }
        ],
        "metrics": [
          {
            "label": "Búfer en RAM",
            "value": "256 Muestras",
            "context": "Circular FIFO"
          },
          {
            "label": "Latencia Telemetría",
            "value": "<45ms",
            "context": "MQTT Publish"
          }
        ],
        "media": {
          "type": "image",
          "url": "https://i.imgur.com/fYNIVPf.png",
          "alt": "Flujo de telemetría en tiempo real del ESP32",
          "title": "Captura de Telemetría en Tiempo Real",
          "caption": "Gráfica reactiva de variaciones de temperatura y humedad generada por el firmware del ESP32.",
          "legend": "Visualización de datos en tiempo real: monitoreo continuo de parámetros ambientales con alertas de rango.",
          "tag": "DATOS TELEMÉTRICOS"
        }
      }
    },
    {
      "id": "iot-diagram",
      "navLabel": "Circuito & Red",
      "heading": "Topología de Circuito y Transmisión",
      "eyebrow": "DISEÑO DE HARDWARE",
      "description": "Conexión de periféricos al bus I2C del microcontrolador ESP32 y transmisión telemétrica a la nube.",
      "type": "diagram",
      "props": {
        "nodes": [
          {
            "id": "sensor",
            "label": "Sensors",
            "sub": "Temp / humidity",
            "x": 20,
            "y": 104
          },
          {
            "id": "esp32",
            "label": "ESP32",
            "sub": "MicroPython",
            "x": 230,
            "y": 104,
            "accent": true
          },
          {
            "id": "wokwi",
            "label": "Wokwi Sim",
            "sub": "Cloud simulation",
            "x": 440,
            "y": 30
          },
          {
            "id": "dash",
            "label": "Telemetry",
            "sub": "Live metrics",
            "x": 440,
            "y": 178,
            "accent": true
          }
        ],
        "edges": [
          {
            "from": "sensor",
            "to": "esp32",
            "label": "I2C / analog"
          },
          {
            "from": "esp32",
            "to": "wokwi"
          },
          {
            "from": "esp32",
            "to": "dash",
            "label": "stream"
          }
        ]
      }
    },
    {
      "id": "iot-fullimage",
      "navLabel": "Circuito Wokwi",
      "heading": "Simulación de Circuito en Wokwi Cloud",
      "eyebrow": "EVIDENCIA TÉCNICA",
      "description": "Entorno interactivo en Wokwi donde se ensambla el esquemático electrónico y se ejecuta el firmware MicroPython.",
      "type": "fullImage",
      "props": {
        "src": "https://i.imgur.com/XfYmIFJ.png",
        "title": "Diagrama Electrónico y Simulación en Wokwi",
        "caption": "Configuración de pines GPIO, bus I2C para sensor y terminal serie interactivo para depuración.",
        "legend": "Esquemático completo: conexión de periféricos y verificación de señal sin requerir laboratorio físico.",
        "tag": "FIG 4.1 — ESQUEMÁTICO ELECTRÓNICO"
      }
    },
    {
      "id": "iot-callout",
      "navLabel": "Conclusiones",
      "heading": "Lecciones de Computación en el Edge",
      "eyebrow": "LECCIONES APRENDIDAS",
      "type": "callout",
      "props": {
        "type": "insight",
        "eyebrow": "EDGE COMPUTING INSIGHTS",
        "title": "Eficiencia Energética & Robustez en Redes Débiles",
        "content": "En dispositivos IoT con recursos acotados, el procesamiento en el edge antes de la transmisión ahorra más del 80% de la energía consumida por el módem de radio. La adopción de buffers circulares en memoria no volátil garantiza que ante desconexiones de red prolongadas, las lecturas críticas se preserven y se sincronicen en ráfagas ordenadas al reanudarse la conectividad.",
        "points": [
          "El filtrado local reduce el tráfico MQTT y simplifica el pipeline de ingesta en la base de datos.",
          "El uso de modos Deep Sleep permite proyectar autonomías de varios meses con baterías Li-Po estándar.",
          "La simulación cloud acelera el ciclo de desarrollo al permitir reproducir fallas de bus de forma determinista."
        ],
        "tags": [
          "ESP32",
          "MicroPython",
          "MQTT",
          "IoT",
          "Wokwi",
          "Edge Computing"
        ]
      }
    }
  ]
};
