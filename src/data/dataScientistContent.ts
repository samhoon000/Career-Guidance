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

export const dataScientistModules: Module[] = [
  {
    id: "python-advanced",
    title: "Advanced Python for Data Science",
    description: "Master Python programming with focus on data science libraries and best practices",
    duration: "2 weeks",
    order: 1,
    videos: [
      {
        id: "python-1",
        title: "Python for Data Science - Complete Course",
        youtubeId: "LHBE6Q9XlzI",
        duration: "12:30:25",
        description: "Comprehensive Python tutorial covering NumPy, Pandas, and data structures",
        moduleId: "python-advanced",
      },
      {
        id: "python-2",
        title: "NumPy Complete Tutorial",
        youtubeId: "QUT1VHiLmmI",
        duration: "58:41",
        description: "Deep dive into NumPy arrays, operations, and vectorization",
        moduleId: "python-advanced",
      },
      {
        id: "python-3",
        title: "Pandas for Data Analysis",
        youtubeId: "vmEHCJofslg",
        duration: "1:00:27",
        description: "Master Pandas DataFrames and data manipulation techniques",
        moduleId: "python-advanced",
      },
      {
        id: "python-4",
        title: "Advanced NumPy Operations",
        youtubeId: "GB9ByFAIAH4",
        duration: "42:15",
        description: "Broadcasting, fancy indexing, and advanced array operations",
        moduleId: "python-advanced",
      },
      {
        id: "python-5",
        title: "Python Data Structures for Data Science",
        youtubeId: "R-HLU9Fl5ug",
        duration: "38:30",
        description: "Mastering lists, dictionaries, sets, and comprehensions",
        moduleId: "python-advanced",
      },
      {
        id: "python-6",
        title: "Object-Oriented Python for DS",
        youtubeId: "Ej_02ICOIgs",
        duration: "52:45",
        description: "Classes, objects, and OOP principles for data science projects",
        moduleId: "python-advanced",
      },
      {
        id: "python-7",
        title: "Python Best Practices",
        youtubeId: "Eun4N_7iJYY",
        duration: "35:20",
        description: "Code organization, testing, and documentation standards",
        moduleId: "python-advanced",
      },
    ],
    quiz: {
      id: "quiz-python-advanced",
      moduleId: "python-advanced",
      title: "Advanced Python Assessment",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is the primary advantage of using NumPy arrays over Python lists?",
          options: [
            "They use less memory",
            "They support vectorized operations and are faster",
            "They are easier to create",
            "They can store any data type",
          ],
          correctAnswer: 1,
          explanation: "NumPy arrays support vectorized operations which are much faster than looping through Python lists, and they use contiguous memory blocks for better performance.",
        },
        {
          id: "q2",
          question: "Which Pandas function is used to combine DataFrames horizontally?",
          options: ["merge()", "concat()", "join()", "All of the above"],
          correctAnswer: 3,
          explanation: "All three functions (merge, concat, and join) can be used to combine DataFrames horizontally, though they have different use cases and syntaxes.",
        },
        {
          id: "q3",
          question: "What does the `.loc[]` accessor in Pandas do?",
          options: [
            "Access by integer position",
            "Access by label/index",
            "Access the last row",
            "Lock the DataFrame",
          ],
          correctAnswer: 1,
          explanation: ".loc[] is used for label-based indexing, while .iloc[] is used for integer position-based indexing.",
        },
      ],
    },
  },
  {
    id: "statistics-ml",
    title: "Statistics & Probability for Machine Learning",
    description: "Build a solid foundation in statistics essential for machine learning",
    duration: "2 weeks",
    order: 2,
    videos: [
      {
        id: "stats-1",
        title: "Statistics for Data Science",
        youtubeId: "xxpc-HPKN28",
        duration: "8:17:33",
        description: "Complete statistics course covering descriptive and inferential statistics",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-2",
        title: "Probability for Machine Learning",
        youtubeId: "sEte4hXEgJ8",
        duration: "1:30:23",
        description: "Understanding probability distributions and their applications in ML",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-3",
        title: "Hypothesis Testing Explained",
        youtubeId: "0oc49DyA3hU",
        duration: "24:06",
        description: "Learn hypothesis testing, p-values, and statistical significance",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-4",
        title: "Probability Distributions",
        youtubeId: "rzFX5NWojp0",
        duration: "35:42",
        description: "Normal, binomial, and Poisson distributions in ML",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-5",
        title: "Linear Algebra for ML",
        youtubeId: "JnTa9XtvmfI",
        duration: "48:30",
        description: "Vectors, matrices, and eigenvalues in machine learning",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-6",
        title: "Bayesian Statistics",
        youtubeId: "HZGCoVF3YvM",
        duration: "55:15",
        description: "Bayesian inference and probabilistic programming",
        moduleId: "statistics-ml",
      },
      {
        id: "stats-7",
        title: "Statistical Learning Theory",
        youtubeId: "rVH9YN0fPKs",
        duration: "42:20",
        description: "Bias-variance tradeoff and model complexity",
        moduleId: "statistics-ml",
      },
    ],
    quiz: {
      id: "quiz-statistics-ml",
      moduleId: "statistics-ml",
      title: "Statistics & Probability Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is the Central Limit Theorem?",
          options: [
            "The mean of all samples equals the population mean",
            "Sample means approximate a normal distribution as sample size increases",
            "All data follows a normal distribution",
            "The center of data is always the median",
          ],
          correctAnswer: 1,
          explanation: "The Central Limit Theorem states that the distribution of sample means approximates a normal distribution as the sample size gets larger, regardless of the population's distribution.",
        },
        {
          id: "q2",
          question: "What does a p-value less than 0.05 typically indicate?",
          options: [
            "The null hypothesis is true",
            "The result is statistically significant",
            "There is a 5% chance of error",
            "The alternative hypothesis is false",
          ],
          correctAnswer: 1,
          explanation: "A p-value less than 0.05 (the common significance level) suggests that the observed result is statistically significant, and we reject the null hypothesis.",
        },
        {
          id: "q3",
          question: "What is the difference between variance and standard deviation?",
          options: [
            "They are the same",
            "Standard deviation is the square root of variance",
            "Variance is always larger",
            "Standard deviation measures spread, variance measures center",
          ],
          correctAnswer: 1,
          explanation: "Standard deviation is the square root of variance. Both measure spread, but standard deviation is in the same units as the data, making it more interpretable.",
        },
      ],
    },
  },
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    description: "Learn core ML algorithms and techniques including supervised and unsupervised learning",
    duration: "3 weeks",
    order: 3,
    videos: [
      {
        id: "ml-1",
        title: "Machine Learning Course for Beginners",
        youtubeId: "NWONeJKn6kc",
        duration: "2:45:57",
        description: "Introduction to machine learning concepts and algorithms",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-2",
        title: "Scikit-Learn Tutorial",
        youtubeId: "0B5eIE_1vpU",
        duration: "1:02:07",
        description: "Hands-on guide to using scikit-learn for ML tasks",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-3",
        title: "Linear Regression Explained",
        youtubeId: "7ArmBVF2dCs",
        duration: "32:10",
        description: "Deep dive into linear regression theory and implementation",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-4",
        title: "Classification Algorithms",
        youtubeId: "vsWrXfO3wWw",
        duration: "18:10",
        description: "Understanding logistic regression, decision trees, and random forests",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-5",
        title: "Ensemble Methods",
        youtubeId: "Un9zObFjBH0",
        duration: "52:30",
        description: "Random forests, boosting, and bagging techniques",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-6",
        title: "Feature Engineering",
        youtubeId: "6WDFfaYtN6s",
        duration: "45:32",
        description: "Creating and selecting features for better model performance",
        moduleId: "ml-fundamentals",
      },
      {
        id: "ml-7",
        title: "Model Evaluation and Hyperparameter Tuning",
        youtubeId: "TIgfjmp-4BA",
        duration: "38:45",
        description: "Cross-validation, metrics, and optimizing model parameters",
        moduleId: "ml-fundamentals",
      },
    ],
    quiz: {
      id: "quiz-ml-fundamentals",
      moduleId: "ml-fundamentals",
      title: "Machine Learning Fundamentals Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is the main difference between supervised and unsupervised learning?",
          options: [
            "Supervised learning uses labeled data, unsupervised doesn't",
            "Supervised learning is faster",
            "Unsupervised learning is more accurate",
            "They are the same",
          ],
          correctAnswer: 0,
          explanation: "Supervised learning algorithms learn from labeled training data (input-output pairs), while unsupervised learning finds patterns in unlabeled data.",
        },
        {
          id: "q2",
          question: "What is overfitting in machine learning?",
          options: [
            "When the model is too simple",
            "When the model performs well on training data but poorly on new data",
            "When training takes too long",
            "When the dataset is too large",
          ],
          correctAnswer: 1,
          explanation: "Overfitting occurs when a model learns the training data too well, including its noise and outliers, resulting in poor generalization to new data.",
        },
        {
          id: "q3",
          question: "What is cross-validation used for?",
          options: [
            "To train the model faster",
            "To assess how well a model will generalize to unseen data",
            "To clean the data",
            "To select features",
          ],
          correctAnswer: 1,
          explanation: "Cross-validation is a technique to evaluate how well a model will perform on unseen data by training and testing on different subsets of the data.",
        },
      ],
    },
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Neural Networks",
    description: "Master neural networks, CNNs, RNNs, and modern deep learning architectures",
    duration: "3 weeks",
    order: 4,
    videos: [
      {
        id: "dl-1",
        title: "Deep Learning Crash Course",
        youtubeId: "VyWAvY2CF9c",
        duration: "25:34",
        description: "Quick introduction to neural networks and deep learning concepts",
        moduleId: "deep-learning",
      },
      {
        id: "dl-2",
        title: "TensorFlow 2.0 Complete Course",
        youtubeId: "tPYj3fFJGjk",
        duration: "6:52:08",
        description: "Comprehensive guide to building neural networks with TensorFlow",
        moduleId: "deep-learning",
      },
      {
        id: "dl-3",
        title: "PyTorch Tutorial for Deep Learning",
        youtubeId: "c36lUUr864M",
        duration: "9:13:15",
        description: "Learn PyTorch from scratch for deep learning applications",
        moduleId: "deep-learning",
      },
      {
        id: "dl-4",
        title: "Convolutional Neural Networks (CNNs)",
        youtubeId: "YRhxdVk_sIs",
        duration: "41:12",
        description: "Understanding CNNs for image recognition and computer vision",
        moduleId: "deep-learning",
      },
      {
        id: "dl-5",
        title: "Recurrent Neural Networks (RNNs)",
        youtubeId: "AsNTP8Kwu80",
        duration: "48:25",
        description: "RNNs and LSTMs for sequence modeling",
        moduleId: "deep-learning",
      },
      {
        id: "dl-6",
        title: "Transfer Learning",
        youtubeId: "yofjFQddwHE",
        duration: "35:40",
        description: "Using pre-trained models for faster development",
        moduleId: "deep-learning",
      },
      {
        id: "dl-7",
        title: "Deep Learning Best Practices",
        youtubeId: "1waHlpKiNyY",
        duration: "38:50",
        description: "Regularization, batch normalization, and debugging techniques",
        moduleId: "deep-learning",
      },
    ],
    quiz: {
      id: "quiz-deep-learning",
      moduleId: "deep-learning",
      title: "Deep Learning Assessment",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is the purpose of activation functions in neural networks?",
          options: [
            "To speed up training",
            "To introduce non-linearity",
            "To reduce overfitting",
            "To normalize inputs",
          ],
          correctAnswer: 1,
          explanation: "Activation functions introduce non-linearity into the network, allowing it to learn complex patterns. Without them, the network would only be able to learn linear relationships.",
        },
        {
          id: "q2",
          question: "What is backpropagation?",
          options: [
            "A way to initialize weights",
            "The process of propagating errors backward to update weights",
            "A type of activation function",
            "A regularization technique",
          ],
          correctAnswer: 1,
          explanation: "Backpropagation is the algorithm used to calculate gradients and propagate errors backward through the network to update weights during training.",
        },
        {
          id: "q3",
          question: "What are CNNs primarily used for?",
          options: [
            "Time series prediction",
            "Image recognition and computer vision tasks",
            "Text generation",
            "Regression problems",
          ],
          correctAnswer: 1,
          explanation: "Convolutional Neural Networks (CNNs) are specifically designed for processing grid-like data such as images, making them ideal for computer vision tasks.",
        },
      ],
    },
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Learn text processing, sentiment analysis, and transformers for NLP tasks",
    duration: "2 weeks",
    order: 5,
    videos: [
      {
        id: "nlp-1",
        title: "NLP with Python",
        youtubeId: "X2vAabgKiuM",
        duration: "1:17:50",
        description: "Introduction to natural language processing with Python and NLTK",
        moduleId: "nlp",
      },
      {
        id: "nlp-2",
        title: "Text Preprocessing & Tokenization",
        youtubeId: "fNxaJsNG3-s",
        duration: "43:29",
        description: "Learn text cleaning, tokenization, and feature extraction",
        moduleId: "nlp",
      },
      {
        id: "nlp-3",
        title: "Transformers and BERT",
        youtubeId: "TQQlZhbC5ps",
        duration: "53:04",
        description: "Understanding transformers, attention mechanisms, and BERT",
        moduleId: "nlp",
      },
      {
        id: "nlp-4",
        title: "BERT and GPT Models",
        youtubeId: "xI0HHN5XKDo",
        duration: "45:30",
        description: "Pre-trained language models and fine-tuning",
        moduleId: "nlp",
      },
      {
        id: "nlp-5",
        title: "Text Classification",
        youtubeId: "VtRLrQ3Ev-U",
        duration: "42:15",
        description: "Sentiment analysis and document categorization",
        moduleId: "nlp",
      },
      {
        id: "nlp-6",
        title: "Named Entity Recognition",
        youtubeId: "gG8y9bwx3No",
        duration: "38:25",
        description: "Extracting entities and information from text",
        moduleId: "nlp",
      },
      {
        id: "nlp-7",
        title: "Question Answering Systems",
        youtubeId: "SZorAJ4I-sA",
        duration: "52:40",
        description: "Building QA systems with neural networks",
        moduleId: "nlp",
      },
    ],
    quiz: {
      id: "quiz-nlp",
      moduleId: "nlp",
      title: "NLP Fundamentals Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is tokenization in NLP?",
          options: [
            "Converting text to lowercase",
            "Breaking text into smaller units like words or sentences",
            "Removing stop words",
            "Translating text",
          ],
          correctAnswer: 1,
          explanation: "Tokenization is the process of breaking text into smaller units (tokens) such as words, subwords, or characters, which is a fundamental preprocessing step in NLP.",
        },
        {
          id: "q2",
          question: "What are stop words?",
          options: [
            "Words that stop the algorithm",
            "Common words that are often removed as they carry little meaning",
            "Words at the end of sentences",
            "Technical terminology",
          ],
          correctAnswer: 1,
          explanation: "Stop words are common words (like 'the', 'is', 'and') that are often removed during text preprocessing because they typically don't carry significant meaning for analysis.",
        },
        {
          id: "q3",
          question: "What is the key innovation of transformer models?",
          options: [
            "They are faster to train",
            "They use attention mechanisms to process entire sequences at once",
            "They require less data",
            "They don't use neural networks",
          ],
          correctAnswer: 1,
          explanation: "Transformers use self-attention mechanisms to process entire sequences in parallel, allowing them to capture long-range dependencies more effectively than RNNs.",
        },
      ],
    },
  },
  {
    id: "ml-deployment",
    title: "ML Model Deployment & MLOps",
    description: "Learn to deploy, monitor, and maintain machine learning models in production",
    duration: "2 weeks",
    order: 6,
    videos: [
      {
        id: "deploy-1",
        title: "Machine Learning Model Deployment",
        youtubeId: "6TI-gQhsf40",
        duration: "2:14:07",
        description: "Complete guide to deploying ML models with Flask and Docker",
        moduleId: "ml-deployment",
      },
      {
        id: "deploy-2",
        title: "MLOps Fundamentals",
        youtubeId: "9BgIDqAzfuA",
        duration: "27:34",
        description: "Introduction to MLOps practices and tools",
        moduleId: "ml-deployment",
      },
      {
        id: "deploy-3",
        title: "Building ML APIs with FastAPI",
        youtubeId: "7t2alSnE2-I",
        duration: "1:57:26",
        description: "Create production-ready ML APIs using FastAPI",
        moduleId: "ml-deployment",
      },
    ],
    quiz: {
      id: "quiz-ml-deployment",
      moduleId: "ml-deployment",
      title: "ML Deployment & MLOps Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is MLOps?",
          options: [
            "A machine learning algorithm",
            "Practices for deploying and maintaining ML models in production",
            "A Python library",
            "A type of neural network",
          ],
          correctAnswer: 1,
          explanation: "MLOps (Machine Learning Operations) is a set of practices that combines ML, DevOps, and data engineering to deploy and maintain ML models in production reliably and efficiently.",
        },
        {
          id: "q2",
          question: "Why is model monitoring important in production?",
          options: [
            "To make the model faster",
            "To detect model drift and performance degradation",
            "To reduce costs",
            "To train the model automatically",
          ],
          correctAnswer: 1,
          explanation: "Model monitoring is crucial to detect model drift (when the model's performance degrades due to changes in data distribution) and ensure the model continues to perform well in production.",
        },
        {
          id: "q3",
          question: "What is Docker used for in ML deployment?",
          options: [
            "Training models faster",
            "Containerizing applications for consistent deployment",
            "Data preprocessing",
            "Feature engineering",
          ],
          correctAnswer: 1,
          explanation: "Docker is used to containerize applications, including ML models, ensuring they run consistently across different environments from development to production.",
        },
      ],
    },
  },
];

export const getTotalVideos = () => {
  return dataScientistModules.reduce((total, module) => total + module.videos.length, 0);
};

export const getTotalQuizzes = () => {
  return dataScientistModules.length;
};

export const projects = [
  {
    level: "Beginner",
    items: [
      {
        title: "Titanic Survival Prediction",
        youtube: "https://youtu.be/I3FBJdiExcg?si=_ilIRewyUFdYbXTk"
      },
      {
        title: "House Price Prediction",
        youtube: "https://youtu.be/Wqmtf9SA_kk?si=EL2oULwnfraXChIW"
      }
    ]
  },
  {
    level: "Intermediate",
    items: [
      {
        title: "Customer Segmentation using K-Means Clustering",
        youtube: "https://youtu.be/4jv1pUrG0Zk?si=Q99alwOCUs3aIHay"
      },
      {
        title: "Credit Card Fraud Detection (ML + Imbalanced Data)",
        youtube: "https://youtu.be/frM_7UMD_-A?si=Cue79UWbqjSLb9zW"
      }
    ]
  },
  {
    level: "Advanced",
    items: [
      {
        title: "Time Series Forecasting – Stock Price Prediction (LSTM)",
        youtube: "https://youtu.be/H6du_pfuznE?si=6DdEr1ElvwdpbNcz"
      },
      {
        title: "End-to-End NLP Project – Text Classification with BERT",
        youtube: "https://youtu.be/p7V4Aa7qEpw?si=Sw70j6He9d2vibmv"
      }
    ]
  }
];