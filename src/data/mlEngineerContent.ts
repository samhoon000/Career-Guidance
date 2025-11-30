export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  description: string;
  moduleId: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  videos: Video[];
  quiz: Quiz;
}

export const mlEngineerModules: Module[] = [
  {
    id: "module-1",
    title: "Python for ML Engineering",
    description: "Master Python for production ML systems",
    duration: "Week 1-2",
    order: 1,
    videos: [
      {
        id: "video-1-1",
        title: "Advanced Python for ML",
        youtubeId: "rfscVS0vtbw",
        duration: "24:30",
        description: "Python best practices for ML engineering",
        moduleId: "module-1",
      },
      {
        id: "video-1-2",
        title: "Python Testing and Debugging",
        youtubeId: "dQw4w9WgXcQ",
        duration: "27:45",
        description: "Writing testable and maintainable ML code",
        moduleId: "module-1",
      },
      {
        id: "video-1-3",
        title: "Python Performance Optimization",
        youtubeId: "dQw4w9WgXcQ",
        duration: "22:15",
        description: "Optimizing Python code for ML workloads",
        moduleId: "module-1",
      },
    ],
    quiz: {
      id: "quiz-1",
      moduleId: "module-1",
      title: "Python ML Engineering Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1-1",
          question: "What is the purpose of virtual environments in Python?",
          options: [
            "To improve performance",
            "To isolate project dependencies",
            "To enable GPU acceleration",
            "To compress data",
          ],
          correctAnswer: 1,
          explanation: "Virtual environments isolate project dependencies to avoid conflicts between different projects.",
        },
        {
          id: "q1-2",
          question: "Which library is commonly used for numerical computing in Python?",
          options: ["Pandas", "NumPy", "Requests", "Flask"],
          correctAnswer: 1,
          explanation: "NumPy is the fundamental library for numerical computing and array operations in Python.",
        },
        {
          id: "q1-3",
          question: "What is the purpose of type hints in Python?",
          options: [
            "To make code faster",
            "To improve code readability and enable static type checking",
            "To compress files",
            "To enable GPU usage",
          ],
          correctAnswer: 1,
          explanation: "Type hints improve code readability and enable static type checking to catch errors early.",
        },
      ],
    },
  },
  {
    id: "module-2",
    title: "TensorFlow & Model Building",
    description: "Build neural networks with TensorFlow",
    duration: "Week 3-4",
    order: 2,
    videos: [
      {
        id: "video-2-1",
        title: "TensorFlow Fundamentals",
        youtubeId: "tPYj3fFJGjk",
        duration: "29:20",
        description: "Introduction to TensorFlow and Keras",
        moduleId: "module-2",
      },
      {
        id: "video-2-2",
        title: "Building Neural Networks",
        youtubeId: "aircAruvnKk",
        duration: "32:10",
        description: "Creating and training deep learning models",
        moduleId: "module-2",
      },
      {
        id: "video-2-3",
        title: "Transfer Learning with TensorFlow",
        youtubeId: "dQw4w9WgXcQ",
        duration: "27:45",
        description: "Leveraging pre-trained models",
        moduleId: "module-2",
      },
    ],
    quiz: {
      id: "quiz-2",
      moduleId: "module-2",
      title: "TensorFlow Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q2-1",
          question: "What is TensorFlow?",
          options: [
            "A database system",
            "An open-source machine learning framework",
            "A cloud platform",
            "A programming language",
          ],
          correctAnswer: 1,
          explanation: "TensorFlow is an open-source machine learning framework developed by Google.",
        },
        {
          id: "q2-2",
          question: "What is transfer learning?",
          options: [
            "Moving data between servers",
            "Using pre-trained models as a starting point for new tasks",
            "Converting file formats",
            "Deploying models to production",
          ],
          correctAnswer: 1,
          explanation: "Transfer learning leverages pre-trained models to solve new but related problems efficiently.",
        },
      ],
    },
  },
  {
    id: "module-3",
    title: "PyTorch Deep Learning",
    description: "Master PyTorch for deep learning",
    duration: "Week 5-6",
    order: 3,
    videos: [
      {
        id: "video-3-1",
        title: "PyTorch Basics",
        youtubeId: "c36lUUr864M",
        duration: "26:30",
        description: "Getting started with PyTorch",
        moduleId: "module-3",
      },
      {
        id: "video-3-2",
        title: "PyTorch Neural Networks",
        youtubeId: "dQw4w9WgXcQ",
        duration: "28:15",
        description: "Building models with PyTorch",
        moduleId: "module-3",
      },
      {
        id: "video-3-3",
        title: "PyTorch vs TensorFlow",
        youtubeId: "dQw4w9WgXcQ",
        duration: "22:40",
        description: "Comparing the two major frameworks",
        moduleId: "module-3",
      },
    ],
    quiz: {
      id: "quiz-3",
      moduleId: "module-3",
      title: "PyTorch Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q3-1",
          question: "What is PyTorch primarily used for?",
          options: [
            "Web development",
            "Deep learning and neural networks",
            "Database management",
            "Mobile development",
          ],
          correctAnswer: 1,
          explanation: "PyTorch is a deep learning framework widely used for building and training neural networks.",
        },
        {
          id: "q3-2",
          question: "What is autograd in PyTorch?",
          options: [
            "A visualization tool",
            "An automatic differentiation engine",
            "A cloud service",
            "A data preprocessing library",
          ],
          correctAnswer: 1,
          explanation: "Autograd is PyTorch's automatic differentiation engine that computes gradients automatically.",
        },
      ],
    },
  },
  {
    id: "module-4",
    title: "MLOps & Model Deployment",
    description: "Deploy ML models to production",
    duration: "Week 7-8",
    order: 4,
    videos: [
      {
        id: "video-4-1",
        title: "Introduction to MLOps",
        youtubeId: "dQw4w9WgXcQ",
        duration: "25:50",
        description: "Understanding ML operations and lifecycle",
        moduleId: "module-4",
      },
      {
        id: "video-4-2",
        title: "Model Versioning and Tracking",
        youtubeId: "dQw4w9WgXcQ",
        duration: "23:30",
        description: "Managing ML experiments with MLflow",
        moduleId: "module-4",
      },
      {
        id: "video-4-3",
        title: "Deploying Models with Docker",
        youtubeId: "dQw4w9WgXcQ",
        duration: "28:20",
        description: "Containerizing ML models for deployment",
        moduleId: "module-4",
      },
    ],
    quiz: {
      id: "quiz-4",
      moduleId: "module-4",
      title: "MLOps Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q4-1",
          question: "What is MLOps?",
          options: [
            "A programming language",
            "The practice of deploying and maintaining ML models in production",
            "A database technology",
            "A cloud provider",
          ],
          correctAnswer: 1,
          explanation: "MLOps combines ML, DevOps, and data engineering to deploy and maintain ML models reliably in production.",
        },
        {
          id: "q4-2",
          question: "Why is model versioning important?",
          options: [
            "To save storage space",
            "To track experiments and enable reproducibility",
            "To improve model accuracy",
            "To reduce training time",
          ],
          correctAnswer: 1,
          explanation: "Model versioning helps track experiments, compare results, and reproduce successful models.",
        },
      ],
    },
  },
  {
    id: "module-5",
    title: "REST APIs for ML Models",
    description: "Build APIs to serve ML predictions",
    duration: "Week 9-10",
    order: 5,
    videos: [
      {
        id: "video-5-1",
        title: "Flask for ML APIs",
        youtubeId: "qbLc5a9jdXo",
        duration: "28:15",
        description: "Building REST APIs with Flask",
        moduleId: "module-5",
      },
      {
        id: "video-5-2",
        title: "FastAPI for Production",
        youtubeId: "0sOvCWFmrtA",
        duration: "26:40",
        description: "High-performance APIs with FastAPI",
        moduleId: "module-5",
      },
      {
        id: "video-5-3",
        title: "API Security and Authentication",
        youtubeId: "dQw4w9WgXcQ",
        duration: "24:55",
        description: "Securing ML API endpoints",
        moduleId: "module-5",
      },
    ],
    quiz: {
      id: "quiz-5",
      moduleId: "module-5",
      title: "ML APIs Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q5-1",
          question: "What is a REST API?",
          options: [
            "A database",
            "An architectural style for building web services",
            "A machine learning algorithm",
            "A cloud platform",
          ],
          correctAnswer: 1,
          explanation: "REST (Representational State Transfer) is an architectural style for building web services.",
        },
        {
          id: "q5-2",
          question: "Why use FastAPI over Flask for ML APIs?",
          options: [
            "It's older and more stable",
            "It's faster and has automatic API documentation",
            "It requires less code",
            "It's easier to learn",
          ],
          correctAnswer: 1,
          explanation: "FastAPI offers better performance and automatic interactive API documentation compared to Flask.",
        },
      ],
    },
  },
  {
    id: "module-6",
    title: "Scaling ML Systems",
    description: "Build production-ready ML infrastructure",
    duration: "Week 11-12",
    order: 6,
    videos: [
      {
        id: "video-6-1",
        title: "Distributed Training",
        youtubeId: "dQw4w9WgXcQ",
        duration: "29:30",
        description: "Training models across multiple GPUs",
        moduleId: "module-6",
      },
      {
        id: "video-6-2",
        title: "Model Optimization Techniques",
        youtubeId: "dQw4w9WgXcQ",
        duration: "27:45",
        description: "Quantization, pruning, and compression",
        moduleId: "module-6",
      },
      {
        id: "video-6-3",
        title: "Kubernetes for ML",
        youtubeId: "dQw4w9WgXcQ",
        duration: "31:20",
        description: "Orchestrating ML workloads with Kubernetes",
        moduleId: "module-6",
      },
    ],
    quiz: {
      id: "quiz-6",
      moduleId: "module-6",
      title: "Scaling ML Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q6-1",
          question: "What is model quantization?",
          options: [
            "Adding more data",
            "Reducing model size by using lower precision",
            "Training faster",
            "Increasing accuracy",
          ],
          correctAnswer: 1,
          explanation: "Quantization reduces model size and inference time by using lower precision for weights and activations.",
        },
        {
          id: "q6-2",
          question: "What is the benefit of distributed training?",
          options: [
            "Smaller model size",
            "Faster training on large datasets using multiple GPUs",
            "Better accuracy",
            "Easier debugging",
          ],
          correctAnswer: 1,
          explanation: "Distributed training speeds up training by parallelizing computation across multiple GPUs or machines.",
        },
      ],
    },
  },
];

export const projects = [
  {
    level: "Beginner",
    items: [
      {
        title: "Iris Classification (Complete ML Pipeline)",
        youtube: "https://youtu.be/pTjsr_0YWas?si=THdJrlNb31uhfA4q"
      },
      {
        title: "House Price Prediction (ML Regression Pipeline)",
        youtube: "https://youtu.be/Wqmtf9SA_kk?si=EL2oULwnfraXChIW"
      }
    ]
  },
  {
    level: "Intermediate",
    items: [
      {
        title: "Credit Card Fraud Detection",
        youtube: "https://youtu.be/frM_7UMD_-A?si=Cue79UWbqjSLb9zW"
      },
      {
        title: "Demand Forecasting for Retail",
        youtube: "https://youtu.be/grtQYI4KVpo?si=bIOjJWHKuJy80PSL"
      }
    ]
  },
  {
    level: "Advanced",
    items: [
      {
        title: "NLP Ticket Classification using BERT (End-to-End Transformers Project)",
        youtube: "https://youtu.be/p7V4Aa7qEpw?si=Sw70j6He9d2vibmv"
      },
      {
        title: "End-to-End ML Project with MLOps",
        youtube: "https://youtu.be/o6vbe5G7xNo?si=MydICd3-_IiuIYGK"
      }
    ]
  }
];