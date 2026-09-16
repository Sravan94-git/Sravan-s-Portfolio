import profileImg from '../images/profile.png'
import project1 from '../images/project-1.png'
import project3 from '../images/project-3.jpg'
import project4 from '../images/project-4.jpg'
import project5 from '../images/project-5.jpg'
import project6 from '../images/project-6.jpg'
import project7 from '../images/project-7.jpg'
import project8 from '../images/project-8.jpg'
import project9 from '../images/project-9.jpg'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Works', href: '#projects' },
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

export const projects = [
  {
    id: 'cinesense',
    name: 'CineSense',
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
    demo: 'https://movie-frontend-plum.vercel.app/',
  },
  {
    id: 'finpulse',
    name: 'FinPulse',
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
    name: 'RentAPlace',
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
    name: 'AutoSight',
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
    name: 'Flotect',
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
    name: 'Alzheimer\'s',
    category: 'AI / ML',
    description: 'An AI-based medical imaging system that analyzes brain MRI scans to support Alzheimer\'s disease classification with explainable deep learning predictions.',
    highlights: [
      'Convolutional neural networks trained on brain MRI scans',
      'Explainable AI heatmap overlays for clinician verification',
      'Interactive diagnostic reporting interface',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    image: project7,
    github: 'https://github.com',
  },
  {
    id: 'telugu_legal',
    name: 'Cross-Lingual Telugu Legal Documents Classifier',
    category: 'AI / ML',
    description: 'A cross-lingual NLP system that classifies Telugu legal documents into meaningful categories using multilingual FastText embeddings and transfer learning.',
    highlights: [
      'FastText multilingual embeddings fine-tuned on legal corpora',
      'Multiclass document categorization for legal precedents',
      'REST API endpoint for high-throughput batch evaluation',
    ],
    technologies: ['Python', 'FastText', 'Scikit-learn', 'NLP', 'Machine Learning'],
    image: project8,
    github: 'https://github.com',
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

