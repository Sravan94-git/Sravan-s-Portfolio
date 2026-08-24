import profileImg from '../images/profile.png'
import project1 from '../images/project-1.jpg'
import project2 from '../images/project-2.jpg'
import project3 from '../images/project-3.jpg'
import project4 from '../images/project-4.jpg'
import project5 from '../images/project-5.jpg'
import project6 from '../images/project-6.jpg'
import project7 from '../images/project-7.jpg'
import project8 from '../images/project-8.jpg'
import project9 from '../images/project-9.jpg'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#projects' },
  { label: 'Resume', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const heroData = {
  name: 'Sravan',
  title: 'A Software Engineer & AI Developer based in India',
  subtitle: 'Building scalable backend systems, full-stack applications, and AI-driven products with precision.',
  roles: ['Backend Specialist', 'Full-Stack Developer', 'AI / ML Engineer', 'API Architect'],
  cvLink: '/resume.pdf',
  profileImage: profileImg,
}

export const stats = [
  { value: '9+', label: 'Projects Completed' },
  { value: '20+', label: 'Technologies' },
  { value: '10+', label: 'GitHub Repositories' },
  { value: '4+', label: 'Years of Learning' },
]

export const services = [
  {
    number: '01',
    title: 'Backend & API Engineering',
    description: 'Architecting high-throughput, secure RESTful APIs and microservices using ASP.NET Core, FastAPI, C#, and SQL Server.',
    tags: ['ASP.NET Core', 'FastAPI', 'REST APIs', 'SQL Server'],
  },
  {
    number: '02',
    title: 'Full-Stack Web Applications',
    description: 'Building responsive, pixel-perfect, interactive web apps using React, TypeScript, Tailwind CSS, and state management.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    number: '03',
    title: 'AI & Machine Learning Solutions',
    description: 'Developing NLP models, sentiment analysis engines, recommendation systems, and computer vision pipelines.',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'YOLOv8'],
  },
  {
    number: '04',
    title: 'Cloud & DevOps Systems',
    description: 'Containerizing services with Docker, deploying resilient cloud infrastructures on AWS/Azure, and automating workflows.',
    tags: ['AWS', 'Docker', 'PostgreSQL', 'Git', 'CI/CD'],
  },
]

export const projects = [
  {
    id: 'cinesense',
    name: 'CineSense: AI Movie Recommendation System',
    category: 'AI / ML',
    description: 'An AI-powered movie recommendation platform that analyzes review sentiment to recommend movies based on user mood.',
    highlights: [
      'Sentiment analysis engine built with Linear SVC & TF-IDF',
      'Real-time movie data integration using TMDB API & BeautifulSoup',
      'FastAPI backend paired with a sleek React UI',
    ],
    technologies: ['React', 'FastAPI', 'Scikit-learn', 'Linear SVC', 'NLTK', 'Tailwind CSS', 'TMDB API'],
    image: project1,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'talentra',
    name: 'Talentra – Multi-Tenant Recruitment Platform',
    category: 'Full Stack',
    description: 'A production-ready SaaS ATS with secure multi-tenant workflows, role-based access control, and recruitment pipeline tracking.',
    highlights: [
      'Multi-tenant database isolation & JWT OAuth2 authentication',
      'Complex query handling with SQLAlchemy & TanStack Query',
      'Automated candidate status pipelines and metrics dashboard',
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'OAuth2', 'Tailwind CSS'],
    image: project2,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'finpulse',
    name: 'FinPulse: AI Credit Risk Analysis Platform',
    category: 'Backend',
    description: 'A cloud-based credit risk prediction system using big data and machine learning to estimate loan default risk accurately.',
    highlights: [
      'ASP.NET Core Web API with Azure Cosmos DB & PySpark pipeline',
      'Secure credential handling with Azure Key Vault & JWT',
      'Real-time risk score calculation and report generation',
    ],
    technologies: ['ASP.NET Core', 'Azure', 'Cosmos DB', 'PySpark', 'Hadoop', 'Scikit-learn', 'React'],
    image: project3,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'rentaplace',
    name: 'RentAPlace : Rental Management System',
    category: 'Full Stack',
    description: 'A full-stack property rental platform for listing management, booking workflows, direct messaging, and secure tenant access.',
    highlights: [
      'ASP.NET Core Web API with Entity Framework Core & SQL Server',
      'Angular frontend with interactive booking calendar and filters',
      'Secure auth and automated invoice processing',
    ],
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'EF Core', 'JWT', 'Tailwind CSS'],
    image: project4,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'autosight',
    name: 'AutoSight – Real-Time Vehicle Detection',
    category: 'AI / ML',
    description: 'A real-time AI transportation system that detects and classifies vehicles with a two-stage deep learning pipeline.',
    highlights: [
      'YOLOv8n + MobileViT deep learning detection pipeline',
      'OpenCV real-time stream processing & classification',
      'Flask API backend with low-latency video inference',
    ],
    technologies: ['Python', 'TensorFlow', 'YOLOv8n', 'MobileViT', 'OpenCV', 'Flask'],
    image: project5,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'flotect',
    name: 'Flotect: Floating Trash Detection System',
    category: 'AI / ML',
    description: 'An AI-powered environmental monitoring system that detects and classifies floating waste in water bodies in real time.',
    highlights: [
      'YOLOv8 custom-trained image recognition model',
      'Flask backend server with live video bounding box overlays',
      'Environmental analytics dashboard',
    ],
    technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'HTML', 'CSS'],
    image: project6,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'alzheimers',
    name: 'Alzheimer\'s Diagnosis via Explainable AI',
    category: 'AI / ML',
    description: 'An AI-based medical imaging system that diagnoses Alzheimer\'s disease with explainable deep learning predictions.',
    highlights: [
      'Convolutional neural networks trained on brain MRI scans',
      'Explainable AI heatmap overlays for clinician verification',
      'Interactive diagnostic reporting interface',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    image: project7,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'telugu_legal',
    name: 'Cross-Lingual Telugu Legal Text Classifier',
    category: 'AI / ML',
    description: 'A cross-lingual NLP system that classifies Telugu legal documents using FastText embeddings and transfer learning.',
    highlights: [
      'FastText multilingual embeddings fine-tuned on legal corpora',
      'Multiclass document categorization for legal precedents',
      'REST API endpoint for high-throughput batch evaluation',
    ],
    technologies: ['Python', 'FastText', 'Scikit-learn', 'NLP', 'Machine Learning'],
    image: project8,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'translator',
    name: 'Real-Time Speech-to-Speech Language Translator',
    category: 'Full Stack',
    description: 'A real-time speech translation application that converts spoken input into translated audio output instantaneously.',
    highlights: [
      'Low-latency speech-to-text recognition pipeline',
      'Google Translate API integration for 50+ languages',
      'Text-to-speech audio playback synthesis with Streamlit UI',
    ],
    technologies: ['Python', 'Streamlit', 'SpeechRecognition', 'Google Translate API', 'gTTS'],
    image: project9,
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
]

export const educationItems = [
  {
    period: '2018 — 2022',
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'University College of Engineering',
    detail: 'Core computer science foundation focused on software engineering, data structures, algorithm design, and artificial intelligence.',
  },
  {
    period: '2024 — 2025',
    title: 'Advanced AI & Cloud Certifications',
    institution: 'Professional Specialization',
    detail: 'Completed advanced tracks in ASP.NET Core microservices, cloud deployment on AWS, and deep learning pipelines.',
  },
]

export const experienceItems = [
  {
    period: '2023 — Present',
    title: 'Software Engineer',
    company: 'Product Engineering Team',
    detail: 'Architecting scalable backend microservices, RESTful APIs, and AI feature integrations with high performance and reliability.',
  },
  {
    period: '2022 — 2023',
    title: 'Software & Machine Learning Intern',
    company: 'Technology Solutions Lab',
    detail: 'Built full-stack web applications, backend services, and machine learning models for real-world client workflows.',
  },
]

export const skillsList = [
  { name: 'ASP.NET Core', category: 'Backend', percentage: 95, icon: 'dotnet' },
  { name: 'FastAPI / Python', category: 'Backend', percentage: 92, icon: 'python' },
  { name: 'React & TypeScript', category: 'Frontend', percentage: 90, icon: 'react' },
  { name: 'C# Programming', category: 'Languages', percentage: 95, icon: 'csharp' },
  { name: 'SQL & PostgreSQL', category: 'Database', percentage: 88, icon: 'sql' },
  { name: 'Docker & AWS', category: 'DevOps', percentage: 85, icon: 'cloud' },
  { name: 'AI & NLP Pipelines', category: 'AI / ML', percentage: 88, icon: 'brain' },
  { name: 'REST API Architecture', category: 'Backend', percentage: 94, icon: 'api' },
]

export const testimonials = [
  {
    quote: 'Sravan delivered exceptional backend performance and reliable API architecture.',
    name: 'Alex Vance',
    role: 'Lead Architect @ TechCorp',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
]

export const faqs = [
  {
    question: 'What is your primary engineering specialization?',
    answer: 'I specialize in backend and full-stack software development.',
  },
]
