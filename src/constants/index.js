import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  threejs,
  python,
  fastapi,
  tensorflow,
  pytorch,
  sklearn,
  opencv,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Generative AI & AI Agents",
    icon: "/services/genai.svg",
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "/services/machinelearning.svg",
  },
  {
    title: "Computer Vision & OCR",
    icon: "/services/computervision.svg",
  },
  {
    title: "Data Science & Predictive Analytics",
    icon: "/services/datascience.svg",
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Data Analyst – Offshore Structural Engineering",
    company_name: "Larsen & Toubro Hydrocarbon Engineering · Surat, Gujarat",
    icon: "/company/lnt.svg",
    iconBg: "#FFD400",
    date: "Jul 2023 - April 2024",
    points: [
      "Validated structural integrity of jackets/modules for IOCL, ARAMCO & LINDE projects in MS Excel.",
      "Verified joint entries & material specs in Staad Pro under seismic loads, cutting design errors by 15%.",
      "Designed structural components in AutoCAD & Tekla for offshore platform load capacity and durability.",
    ],
  },
];

const education = [
  {
    degree: "M.Tech in Data Science",
    institution: "Indian Institute of Information Technology, Bhopal",
    icon: "/education/iiit-bhopal.png",
    score: "CGPA: 8.38",
    date: "Aug 2024 - Mar 2026",
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "Birsa Institute of Technology Sindri, Dhanbad",
    icon: "/education/bit-sindri.png",
    score: "CGPA: 8.55",
    date: "Apr 2019 - May 2023",
  },
  {
    degree: "CBSE Class 12",
    institution: "Delhi Public School, Ranchi",
    icon: "/education/dps-ranchi.png",
    score: "84% (2019)",
    date: "2019",
  },
  {
    degree: "CBSE Class 10",
    institution: "Notre Dame School, Gumla",
    icon: "/education/notre-dame-gumla.png",
    score: "CGPA: 10.0 (2017)",
    date: "2017",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Global Connect – Multilingual Voice Platform",
    description:
      "Built a multilingual voice-cloning & TTS platform for global teams, preserving brand voice across languages. Designed multi-speaker meeting simulation (Speaker_1/Speaker_2 tags) for cross-language collaboration. Deployed a companion brand site through Google Pomelli for marketing/landing-page presentation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Gradio",
        color: "green-text-gradient",
      },
      {
        name: "Hugging Face",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/global-connect.svg",
    source_code_link: "https://huggingface.co/spaces/Kumarharsh1/global-connect",
    live_link: "https://labs.google.com/pomelli/website/8mDpbMJZWh48knlUPg34nd",
  },
  {
    name: "GeoAI Smart City Platform",
    description:
      "Built a geospatial analytics platform on real OpenStreetMap data for emergency routing and traffic-hotspot detection via degree centrality. Scored road-network density to flag underserved rural areas and measure reachability to hospitals/schools/markets. FastAPI backend with in-memory caching; deployed on Render (API) & Netlify (UI). Deployed a companion brand site through Google Pomelli.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Leaflet.js",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/geoai.svg",
    source_code_link: "https://classy-cendol-b8581c.netlify.app/",
    live_link: "https://labs.google.com/pomelli/website/8mBbB1Kz_ZH2-Wi7QN7_oh",
  },
  {
    name: "Doctor Prescription Reader",
    description:
      "Built an OCR + NER pipeline extracting Patient, Doctor, Medicines, Dosage & Frequency from prescriptions in Bangla, Hindi, and English. Stores extractions in an Excel database for history tracking; supports large-scale uploads via Google Drive.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "PaddleOCR",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/doctor-prescription.svg",
    source_code_link: "https://doctor-prescriptionapp.streamlit.app/",
  },
  {
    name: "PersonaMetrics – Age, Gender & Emotion Detection",
    description:
      "100% browser-based real-time face detection, age/gender classification & 7-class emotion recognition. SSD MobileNet + 68-point landmarks for head-pose estimation; 30+ FPS via WebGL, fully client-side.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "Real-time AI",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/personametrics.svg",
    source_code_link: "https://kumarharshpersonmetrics.netlify.app/",
  },
  {
    name: "Veg-Mandi – Crop Market Price Forecasting Platform",
    description:
      "Built a price forecasting system for agri commodities, trained on 2+ years of real mandi price data. FastAPI /forecast (N-day horizon) & /healthz endpoints; backtesting pipeline validates accuracy via MAE/RMSE/MAPE.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/veg-mandi.svg",
    source_code_link: "https://vegmandi.netlify.app/",
  },
  {
    name: "Argus Vision – Real-Time Object Detection",
    description:
      "100% browser-based live webcam detection of 80+ object classes via YOLOv8 exported to ONNX. Custom NMS on ONNX operator for accurate, non-overlapping boxes; zero-infrastructure static deployment.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "green-text-gradient",
      },
      {
        name: "ONNX Runtime",
        color: "pink-text-gradient",
      },
    ],
    image: "/project-images/argus-vision.svg",
    source_code_link: "https://object-detection12ww.netlify.app/",
  },
];

export { services, technologies, experiences, education, testimonials, projects };
