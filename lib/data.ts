export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  highlights?: string[];
  skills?: string[];
  featured?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior AI/ML Engineer",
    org: "Express Analytics",
    location: "Pune District, India · Remote",
    period: "Jan 2026 — Present",
    featured: true,
    highlights: [
      "Leading a team of engineers building kAInet, Express Analytics' agentic marketing platform — architecture, multi-agent orchestration, and evaluation",
      "Designing agentic systems for end-to-end prospect marketing, automating campaign strategy and execution pipelines",
      "Partnering directly with enterprise clients on AI strategy and technical pre-sales",
      "Leading technical hiring and interviews for the AI/ML team",
    ],
    skills: ["Agentic AI Development", "LangGraph", "Multi-Agent Orchestration"],
  },
  {
    role: "Data Scientist",
    org: "Express Analytics",
    location: "Irvine, California · Remote",
    period: "Jan 2025 — Jan 2026",
    featured: true,
    highlights: [
      "Built Oyster, a web-based analytics platform integrating Lookalike Modeling, RFM, CLTV, VOCA (GenAI-powered), MMM, and MTA",
      "Developed and maintained scalable FastAPI backend services with full test/review ownership before production deployment",
      "Designed custom conversational AI chatbots for client websites",
      "Developed a HIPAA-compliant AI solution for medical Review of Records — record splitting, classification, and report generation with domain-specific GenAI models",
    ],
    skills: ["Python", "FastAPI", "Statistical Data Analysis", "GenAI"],
  },
  {
    role: "Software Engineer",
    org: "Zuro",
    location: "San Francisco, California · Remote",
    period: "Jul 2024 — Dec 2024",
    featured: true,
    highlights: [
      "Contributed to AI-powered chat systems using modern frameworks",
      "Built microservices and APIs for system integration",
      "Developed and maintained a Chrome extension improving product accessibility",
    ],
    skills: ["Python", "Large Language Models", "Microservices"],
  },
  {
    role: "Artificial Intelligence Researcher",
    org: "Max-Planck-Institut für Radioastronomie",
    location: "Bonn, Germany · Remote",
    period: "Jan 2024 — May 2024",
    highlights: ["Applied Support Vector Machines and linear models to research problems in radio astronomy"],
    skills: ["SVM", "Linear Models"],
  },
  {
    role: "Java Software Developer",
    org: "Sanctus Technologies",
    location: "Coimbatore, India · Hybrid",
    period: "Jan 2023 — Apr 2023",
    highlights: ["Backend development with Java and MongoDB, integrated with a React.js frontend"],
    skills: ["Java", "MongoDB", "React"],
  },
  {
    role: "Real Time Systems Developer",
    org: "Sanctus Technologies",
    location: "Coimbatore, India · Remote",
    period: "Jun 2023 — Aug 2023",
  },
  {
    role: "Training Program",
    org: "NielsenIQ",
    location: "Remote",
    period: "Jun 2023 — Jul 2023",
  },
  {
    role: "Secretary, ATOM",
    org: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore, India",
    period: "Jun 2023 — Apr 2024",
  },
  {
    role: "Student Coordinator, MS Center for AI & Data Science",
    org: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore, India",
    period: "Sep 2022 — Jun 2023",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href: string;
  cta: string;
};

export const projects: Project[] = [
  {
    title: "kAInet",
    description:
      "Agentic marketing platform built at Express Analytics — describe campaign goals and it handles targeting, budgets, copy, and creatives across Google and Meta Ads in about 15 minutes. Leading architecture and multi-agent orchestration.",
    tags: ["LangGraph", "Multi-Agent", "Agentic AI"],
    href: "https://expressanalytics.com",
    cta: "About Express Analytics",
  },
  {
    title: "Computer Vision Food Recognition App",
    description:
      "Inspector Diet analyzes a photo of a plate of food and returns nutritional value per item. YOLOv8 and YOLOv5 models served via a Django REST API, consumed by a native Android app.",
    tags: ["YOLOv8", "Django", "Android"],
    image: "/images/InspectorDiet.avif",
    href: "https://github.com/RichieSK/InspectorDiet",
    cta: "View Project",
  },
  {
    title: "Nuriel — JupyterLab Extension",
    description:
      "A JupyterLab server extension for code optimization, summarization, and explanation — at the cell level and across an entire notebook.",
    tags: ["JupyterLab", "LLM Tooling"],
    image: "/images/JupyterLab.jpg",
    href: "https://github.com/CalebStephen18/Nuriel",
    cta: "View Project",
  },
  {
    title: "LangChain RAG Application",
    description:
      "A Flask app for chatting with an LLM or uploading documents and querying them directly, built on LangChain, Ollama embeddings, and Chroma vector store.",
    tags: ["LangChain", "RAG", "Chroma"],
    image: "/images/rag_icon.png",
    href: "https://github.com/CalebStephen18/Langchain-RAG-Application",
    cta: "View Project",
  },
  {
    title: "Brain Computer Interface",
    description:
      "Funded research project building a machine learning model to classify EEG signals into predefined action classes. Patent published; only a sample test version is public.",
    tags: ["EEG", "Signal Processing", "Patent"],
    image: "/images/BCI.webp",
    href: "https://github.com/CalebStephen18/Brain-Computer-Interface--Test",
    cta: "View Project",
  },
  {
    title: "U.S. Election Data Visualization",
    description:
      "An interactive Tableau dashboard visualizing the 2016 U.S. Presidential Election results, sourced from government data.",
    tags: ["Tableau", "Data Visualization"],
    image: "/images/Tableau.png",
    href: "https://public.tableau.com/app/profile/caleb.stephen1826/viz/IA3DV/Story1",
    cta: "View Project",
  },
];

export const stats = [
  { label: "Senior AI/ML Engineer" },
  { label: "7 Papers Published" },
  { label: "1 Patent" },
  { label: "2+ Yrs Production AI" },
];

export const terminalLines = [
  { command: "whoami", output: "Senior AI/ML Engineer, Express Analytics" },
  { command: "current --focus", output: "kAInet — agentic marketing platform" },
  { command: "stack", output: "LangGraph · multi-agent orchestration" },
  { command: "research --prior", output: "Max-Planck-Institut für Radioastronomie" },
];

export const social = {
  email: "calebss018@gmail.com",
  linkedin: "https://www.linkedin.com/in/caleb-stephen-ai/",
  github: "https://github.com/CalebStephen18",
  location: "Bengaluru, Karnataka, India",
};
