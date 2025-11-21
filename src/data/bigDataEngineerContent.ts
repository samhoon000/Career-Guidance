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

export const bigDataEngineerModules: Module[] = [
  {
    id: "module-1",
    title: "Hadoop Ecosystem Fundamentals",
    description: "Learn the basics of Hadoop and distributed computing",
    duration: "Week 1-2",
    order: 1,
    videos: [
      {
        id: "video-1-1",
        title: "Introduction to Big Data and Hadoop",
        youtubeId: "jKCj4BxGTi8",
        duration: "25:30",
        description: "Understanding big data challenges and Hadoop architecture",
        moduleId: "module-1",
      },
      {
        id: "video-1-2",
        title: "HDFS - Hadoop Distributed File System",
        youtubeId: "d2xeNpfzsYI",
        duration: "18:45",
        description: "Deep dive into HDFS architecture and data storage",
        moduleId: "module-1",
      },
      {
        id: "video-1-3",
        title: "MapReduce Programming Model",
        youtubeId: "SqvAaB3vK8U",
        duration: "22:15",
        description: "Learn MapReduce concepts and implementation",
        moduleId: "module-1",
      },
    ],
    quiz: {
      id: "quiz-1",
      moduleId: "module-1",
      title: "Hadoop Fundamentals Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1-1",
          question: "What is the primary function of HDFS in Hadoop?",
          options: [
            "Data processing",
            "Distributed storage of large datasets",
            "Resource management",
            "Job scheduling",
          ],
          correctAnswer: 1,
          explanation: "HDFS (Hadoop Distributed File System) is designed for distributed storage of large datasets across multiple machines.",
        },
        {
          id: "q1-2",
          question: "What are the two main phases of MapReduce?",
          options: [
            "Read and Write",
            "Input and Output",
            "Map and Reduce",
            "Store and Retrieve",
          ],
          correctAnswer: 2,
          explanation: "MapReduce consists of two main phases: Map (processing and filtering) and Reduce (aggregating results).",
        },
        {
          id: "q1-3",
          question: "What is the default replication factor in HDFS?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          explanation: "HDFS uses a default replication factor of 3 to ensure data reliability and availability.",
        },
      ],
    },
  },
  {
    id: "module-2",
    title: "Apache Spark Essentials",
    description: "Master Spark for fast data processing",
    duration: "Week 3-4",
    order: 2,
    videos: [
      {
        id: "video-2-1",
        title: "Introduction to Apache Spark",
        youtubeId: "zC9cnh8rJd0",
        duration: "28:20",
        description: "Understanding Spark architecture and RDDs",
        moduleId: "module-2",
      },
      {
        id: "video-2-2",
        title: "Spark DataFrames and SQL",
        youtubeId: "XrpSRCwISdk",
        duration: "32:10",
        description: "Working with structured data in Spark",
        moduleId: "module-2",
      },
      {
        id: "video-2-3",
        title: "Spark Streaming Basics",
        youtubeId: "dQw4w9WgXcQ",
        duration: "26:45",
        description: "Real-time data processing with Spark Streaming",
        moduleId: "module-2",
      },
    ],
    quiz: {
      id: "quiz-2",
      moduleId: "module-2",
      title: "Apache Spark Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q2-1",
          question: "What is an RDD in Apache Spark?",
          options: [
            "Random Data Distribution",
            "Resilient Distributed Dataset",
            "Rapid Data Deployment",
            "Real-time Data Database",
          ],
          correctAnswer: 1,
          explanation: "RDD stands for Resilient Distributed Dataset, the fundamental data structure in Spark.",
        },
        {
          id: "q2-2",
          question: "Which Spark component is used for structured data processing?",
          options: ["Spark Core", "Spark SQL", "Spark MLlib", "Spark GraphX"],
          correctAnswer: 1,
          explanation: "Spark SQL provides APIs for working with structured and semi-structured data.",
        },
      ],
    },
  },
  {
    id: "module-3",
    title: "Apache Kafka & Stream Processing",
    description: "Build real-time data pipelines with Kafka",
    duration: "Week 5-6",
    order: 3,
    videos: [
      {
        id: "video-3-1",
        title: "Kafka Architecture Fundamentals",
        youtubeId: "aj9CDZm0Glc",
        duration: "24:30",
        description: "Understanding Kafka topics, partitions, and brokers",
        moduleId: "module-3",
      },
      {
        id: "video-3-2",
        title: "Producers and Consumers in Kafka",
        youtubeId: "R873BlNVUB4",
        duration: "20:15",
        description: "Building Kafka producers and consumers",
        moduleId: "module-3",
      },
      {
        id: "video-3-3",
        title: "Kafka Streams API",
        youtubeId: "dQw4w9WgXcQ",
        duration: "27:40",
        description: "Stream processing with Kafka Streams",
        moduleId: "module-3",
      },
    ],
    quiz: {
      id: "quiz-3",
      moduleId: "module-3",
      title: "Kafka Stream Processing Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q3-1",
          question: "What is a Kafka topic?",
          options: [
            "A storage location",
            "A category or feed name to which records are published",
            "A data processing function",
            "A consumer group",
          ],
          correctAnswer: 1,
          explanation: "A Kafka topic is a category or feed name to which records are published by producers.",
        },
        {
          id: "q3-2",
          question: "What ensures fault tolerance in Kafka?",
          options: [
            "Load balancing",
            "Replication",
            "Compression",
            "Encryption",
          ],
          correctAnswer: 1,
          explanation: "Kafka uses replication to ensure fault tolerance by maintaining copies of data across multiple brokers.",
        },
      ],
    },
  },
  {
    id: "module-4",
    title: "Data Warehousing & ETL",
    description: "Design and implement data warehouses",
    duration: "Week 7-8",
    order: 4,
    videos: [
      {
        id: "video-4-1",
        title: "Data Warehouse Concepts",
        youtubeId: "dQw4w9WgXcQ",
        duration: "22:50",
        description: "Understanding data warehouse architecture",
        moduleId: "module-4",
      },
      {
        id: "video-4-2",
        title: "ETL Pipeline Design",
        youtubeId: "dQw4w9WgXcQ",
        duration: "28:30",
        description: "Building Extract, Transform, Load pipelines",
        moduleId: "module-4",
      },
      {
        id: "video-4-3",
        title: "Apache Airflow for Workflow Management",
        youtubeId: "dQw4w9WgXcQ",
        duration: "25:20",
        description: "Orchestrating data pipelines with Airflow",
        moduleId: "module-4",
      },
    ],
    quiz: {
      id: "quiz-4",
      moduleId: "module-4",
      title: "Data Warehousing Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q4-1",
          question: "What does ETL stand for?",
          options: [
            "Execute, Test, Launch",
            "Extract, Transform, Load",
            "Evaluate, Transfer, Link",
            "Export, Transmit, Load",
          ],
          correctAnswer: 1,
          explanation: "ETL stands for Extract, Transform, Load - the process of moving data from sources to a data warehouse.",
        },
        {
          id: "q4-2",
          question: "What is a star schema?",
          options: [
            "A cloud storage pattern",
            "A dimensional modeling approach with a central fact table",
            "A security protocol",
            "A data compression technique",
          ],
          correctAnswer: 1,
          explanation: "Star schema is a dimensional modeling approach with a central fact table connected to dimension tables.",
        },
      ],
    },
  },
  {
    id: "module-5",
    title: "Scala for Big Data",
    description: "Learn Scala programming for Spark",
    duration: "Week 9-10",
    order: 5,
    videos: [
      {
        id: "video-5-1",
        title: "Scala Basics for Big Data",
        youtubeId: "DzFt0YkZo8M",
        duration: "30:15",
        description: "Introduction to Scala programming language",
        moduleId: "module-5",
      },
      {
        id: "video-5-2",
        title: "Functional Programming in Scala",
        youtubeId: "dQw4w9WgXcQ",
        duration: "26:40",
        description: "Understanding functional programming concepts",
        moduleId: "module-5",
      },
      {
        id: "video-5-3",
        title: "Spark with Scala",
        youtubeId: "dQw4w9WgXcQ",
        duration: "28:55",
        description: "Writing Spark applications in Scala",
        moduleId: "module-5",
      },
    ],
    quiz: {
      id: "quiz-5",
      moduleId: "module-5",
      title: "Scala Programming Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q5-1",
          question: "What type of programming paradigm does Scala support?",
          options: [
            "Only object-oriented",
            "Only functional",
            "Both object-oriented and functional",
            "Only procedural",
          ],
          correctAnswer: 2,
          explanation: "Scala is a multi-paradigm language that supports both object-oriented and functional programming.",
        },
        {
          id: "q5-2",
          question: "Why is Scala preferred for Apache Spark?",
          options: [
            "It's the easiest language",
            "Spark is written in Scala and offers best performance",
            "It's required by Hadoop",
            "It's the only supported language",
          ],
          correctAnswer: 1,
          explanation: "Spark is written in Scala, which provides the best performance and native integration.",
        },
      ],
    },
  },
  {
    id: "module-6",
    title: "Big Data Architecture & Best Practices",
    description: "Design scalable big data solutions",
    duration: "Week 11-12",
    order: 6,
    videos: [
      {
        id: "video-6-1",
        title: "Big Data Architecture Patterns",
        youtubeId: "dQw4w9WgXcQ",
        duration: "27:30",
        description: "Lambda and Kappa architectures explained",
        moduleId: "module-6",
      },
      {
        id: "video-6-2",
        title: "Performance Optimization",
        youtubeId: "dQw4w9WgXcQ",
        duration: "24:45",
        description: "Optimizing big data pipelines for performance",
        moduleId: "module-6",
      },
      {
        id: "video-6-3",
        title: "Data Quality & Governance",
        youtubeId: "dQw4w9WgXcQ",
        duration: "22:20",
        description: "Ensuring data quality in big data systems",
        moduleId: "module-6",
      },
    ],
    quiz: {
      id: "quiz-6",
      moduleId: "module-6",
      title: "Big Data Architecture Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q6-1",
          question: "What is Lambda Architecture?",
          options: [
            "A cloud service",
            "A data processing architecture with batch and streaming layers",
            "A programming paradigm",
            "A storage solution",
          ],
          correctAnswer: 1,
          explanation: "Lambda Architecture combines batch and stream processing to handle large-scale data processing.",
        },
        {
          id: "q6-2",
          question: "What is data lineage?",
          options: [
            "Data storage capacity",
            "The lifecycle and flow of data through systems",
            "Data compression ratio",
            "Data security protocol",
          ],
          correctAnswer: 1,
          explanation: "Data lineage tracks the lifecycle and flow of data from its origin through various transformations.",
        },
      ],
    },
  },
];
