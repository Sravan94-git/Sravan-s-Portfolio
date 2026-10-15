import profileImg from '../images/profile.png'
import cinesenseImg from '../images/project-1.png'
import flotectImg from '../images/project-2.png'
import rentalImg from '../images/project-3.png'

export interface Project {
  id: string
  name: string
  category: string
  description: string
  highlights: string[]
  technologies: string[]
  image?: string
  github?: string
  demo?: string
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const heroData = {
  name: 'Sravan Kumar',
  shortName: 'Sravan',
  title: 'Software Engineer & Full-Stack Developer',
  subtitle: 'Building scalable REST APIs, full-stack applications, and AI-driven systems with Java, Python, AWS, and Docker.',
  roles: ['Backend Specialist', 'Full-Stack Developer', 'AI / ML Engineer', 'API Architect'],
  profileImage: profileImg,
}

export const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '20+', label: 'Technologies' },
  { value: '10+', label: 'GitHub Repositories' },
  { value: '4+', label: 'Years of Learning' },
]

export const projects: Project[] = [
  {
    id: 'cinesense',
    name: 'Sentiment-based Movie Recommendation System',
    category: 'AI / ML',
    description: 'An AI-powered movie recommendation platform that analyzes review sentiment to recommend movies based on user mood.',
    highlights: [
      'Sentiment analysis engine built with Linear SVC & TF-IDF',
      'Real-time movie data integration using TMDB API & BeautifulSoup',
      'FastAPI backend paired with a sleek React UI',
    ],
    technologies: ['React', 'FastAPI', 'Scikit-learn', 'Linear SVC', 'NLTK', 'Tailwind CSS', 'TMDB API'],
    image: cinesenseImg,
    github: 'https://github.com/Sravan94-git/Sentiment-based-Movie-recommendation-system',
    demo: 'https://sentiment-based-movie-recommendatio.vercel.app/',
  },
  {
    id: 'rentaplace',
    name: 'Property Rental Management System',
    category: 'Full Stack',
    description: 'A full-stack property rental platform for listing management, booking workflows, direct messaging, and secure tenant access.',
    highlights: [
      'ASP.NET Core Web API with Entity Framework Core & SQL Server',
      'Angular frontend with interactive booking calendar and filters',
      'Secure auth and automated invoice processing',
    ],
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'EF Core', 'JWT', 'Tailwind CSS'],
    image: rentalImg,
    github: 'https://github.com/Sravan94-git/Property-Rental-Management-System',
    demo: 'https://property-rental-management-system-tau.vercel.app/',
  },
  {
    id: 'flotect',
    name: 'Floating Trash Detection & Classification',
    category: 'Computer Vision',
    description: 'An AI-powered environmental monitoring system that detects and classifies floating waste in water bodies in real time.',
    highlights: [
      'YOLOv8 custom-trained image recognition model',
      'Flask backend server with live video bounding box overlays',
      'Environmental analytics dashboard',
    ],
    technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'HTML', 'CSS'],
    image: flotectImg,
    github: 'https://github.com/Sravan94-git/Floating-trash-detection-and-classification',
    demo: 'https://floating-trash-detection-and-classi.vercel.app/',
  },
  {
    id: 'finpulse',
    name: 'Credit Risk Analysis',
    category: 'FinTech / ML',
    description: 'A cloud-based credit risk prediction system using big data and machine learning to estimate loan default risk accurately.',
    highlights: [
      'ASP.NET Core Web API with Azure Cosmos DB & PySpark pipeline',
      'Secure credential handling with Azure Key Vault & JWT',
      'Real-time risk score calculation and report generation',
    ],
    technologies: ['ASP.NET Core', 'Azure', 'Cosmos DB', 'PySpark', 'Hadoop', 'Scikit-learn', 'React'],
    github: 'https://github.com/Sravan94-git/Credit-Risk-Analysis',
  },
  {
    id: 'autosight',
    name: 'Indian Vehicle Detection & Classification',
    category: 'Computer Vision',
    description: 'A real-time AI transportation system that detects and classifies vehicles with a two-stage deep learning pipeline.',
    highlights: [
      'YOLOv8n + MobileViT deep learning detection pipeline',
      'OpenCV real-time stream processing & classification',
      'Flask API backend with low-latency video inference',
    ],
    technologies: ['Python', 'TensorFlow', 'YOLOv8n', 'MobileViT', 'OpenCV', 'Flask'],
    github: 'https://github.com/Sravan94-git/Indian-Vehicle-Detection-and-Classification',
    demo: 'https://indian-vehicle-detection-and-classi.vercel.app/',
  },
  {
    id: 'translator',
    name: 'Real-Time Language Translator',
    category: 'Speech & AI',
    description: 'A real-time speech translation application that converts spoken input into translated audio output instantaneously.',
    highlights: [
      'Low-latency speech-to-text recognition pipeline',
      'Google Translate API integration for 50+ languages',
      'Text-to-speech audio playback synthesis with Streamlit UI',
    ],
    technologies: ['Python', 'Streamlit', 'SpeechRecognition', 'Google Translate API', 'gTTS'],
    github: 'https://github.com/Sravan94-git/Real-time-language-translator',
    demo: 'https://languagetranslator-black.vercel.app/',
  },
  {
    id: 'alzheimers',
    name: 'Alzheimer\'s Disease Detection',
    category: 'Medical AI',
    description: 'An AI-based medical imaging system that analyzes brain MRI scans to support Alzheimer\'s disease classification with explainable deep learning predictions.',
    highlights: [
      'Convolutional neural networks trained on brain MRI scans',
      'Explainable AI heatmap overlays for clinician verification',
      'Interactive diagnostic reporting interface',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Sravan94-git/Alzheimers-disease-detection',
  },
  {
    id: 'telugu_legal',
    name: 'Domain Classification of Legal Documents',
    category: 'NLP / ML',
    description: 'A cross-lingual NLP system that classifies Telugu legal documents into meaningful categories using multilingual FastText embeddings and transfer learning.',
    highlights: [
      'FastText multilingual embeddings fine-tuned on legal corpora',
      'Multiclass document categorization for legal precedents',
      'REST API endpoint for high-throughput batch evaluation',
    ],
    technologies: ['Python', 'FastText', 'Scikit-learn', 'NLP', 'Machine Learning'],
    github: 'https://github.com/Sravan94-git/Domain-classification-of-legal-documents',
  },
]

export const educationItems = [
  {
    period: 'Oct 2021 — Jun 2025',
    title: 'B.Tech in Computer Science and Technology',
    institution: 'Amrita Vishwa Vidyapeetham, Bangalore, Karnataka',
    detail: 'Built a foundation in operating systems, object-oriented programming, data structures and algorithms, DBMS, machine learning, and software engineering.',
  },
]

export const experienceItems = [
  {
    period: 'Jan 2025 — Jan 2026',
    title: 'Fullstack AI Developer',
    company: 'Aayog Solutions LLC',
    detail: 'Developed a multi-tenant AI-powered recruitment platform with secure API and database-level data isolation, OAuth2/JWT authentication, OTP verification, automated hiring workflows, PostgreSQL, Docker, GitHub Actions, and Nginx deployment pipelines.',
  },
  {
    period: 'Mar 2026 — Present',
    title: 'Project Engineer',
    company: 'Wipro',
    detail: 'Working on enterprise software delivery across full-stack development, API integration, automation, testing, and production-ready engineering practices.',
  },
]

export const skillsList = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
  { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'NumPy', logo: 'https://cdn.simpleicons.org/numpy' },
  { name: 'Pandas', logo: 'https://cdn.simpleicons.org/pandas' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
  { name: 'OpenCV', logo: 'https://cdn.simpleicons.org/opencv' },
  { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws' },
]

export const certifications = [
  {
    title: 'Data Structures & Backend Development with Java',
    issuer: 'Board Infinity (Coursera)',
    date: 'June 2025',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University (Coursera)',
    date: 'April 2024',
  },
]

export const publication = {
  title: 'Real-Time Multilingual Speech Translation and Communication Enhancement Tool',
  venue: 'ICIMSSS-24 International Conference',
  date: 'December 2024',
}

