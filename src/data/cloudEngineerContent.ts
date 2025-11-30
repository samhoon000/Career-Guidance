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

export const cloudEngineerModules: Module[] = [
  {
    id: "module-1",
    title: "Cloud Computing Fundamentals",
    description: "Learn cloud computing basics and service models",
    duration: "Week 1-2",
    order: 1,
    videos: [
      {
        id: "video-1-1",
        title: "Introduction to Cloud Computing",
        youtubeId: "usYySG1nbfI",
        duration: "22:30",
        description: "Understanding IaaS, PaaS, and SaaS models",
        moduleId: "module-1",
      },
      {
        id: "video-1-2",
        title: "AWS, Azure, and GCP Overview",
        youtubeId: "dQw4w9WgXcQ",
        duration: "28:45",
        description: "Comparing major cloud providers",
        moduleId: "module-1",
      },
      {
        id: "video-1-3",
        title: "Cloud Security Basics",
        youtubeId: "dQw4w9WgXcQ",
        duration: "24:15",
        description: "Understanding cloud security fundamentals",
        moduleId: "module-1",
      },
    ],
    quiz: {
      id: "quiz-1",
      moduleId: "module-1",
      title: "Cloud Fundamentals Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q1-1",
          question: "What does IaaS stand for?",
          options: [
            "Internet as a Service",
            "Infrastructure as a Service",
            "Integration as a Service",
            "Interface as a Service",
          ],
          correctAnswer: 1,
          explanation: "IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet.",
        },
        {
          id: "q1-2",
          question: "Which is NOT a major cloud provider?",
          options: ["AWS", "Azure", "GCP", "MySQL"],
          correctAnswer: 3,
          explanation: "MySQL is a database system, not a cloud provider. AWS, Azure, and GCP are the major cloud platforms.",
        },
        {
          id: "q1-3",
          question: "What is the shared responsibility model in cloud computing?",
          options: [
            "Splitting costs between teams",
            "Division of security responsibilities between provider and customer",
            "Sharing cloud resources",
            "Collaborative development",
          ],
          correctAnswer: 1,
          explanation: "The shared responsibility model defines which security tasks are handled by the cloud provider vs. the customer.",
        },
      ],
    },
  },
  {
    id: "module-2",
    title: "AWS Core Services",
    description: "Master essential AWS services",
    duration: "Week 3-4",
    order: 2,
    videos: [
      {
        id: "video-2-1",
        title: "EC2 - Elastic Compute Cloud",
        youtubeId: "iHX-jtKIVNA",
        duration: "26:20",
        description: "Deploying and managing virtual servers",
        moduleId: "module-2",
      },
      {
        id: "video-2-2",
        title: "S3 - Simple Storage Service",
        youtubeId: "tfU0JEZjcsg",
        duration: "22:10",
        description: "Object storage and data management",
        moduleId: "module-2",
      },
      {
        id: "video-2-3",
        title: "VPC and Networking",
        youtubeId: "fpxDGU2KdkA",
        duration: "28:45",
        description: "Virtual Private Cloud configuration",
        moduleId: "module-2",
      },
    ],
    quiz: {
      id: "quiz-2",
      moduleId: "module-2",
      title: "AWS Services Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q2-1",
          question: "What is Amazon EC2?",
          options: [
            "A database service",
            "A virtual server service",
            "A storage service",
            "A networking service",
          ],
          correctAnswer: 1,
          explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud.",
        },
        {
          id: "q2-2",
          question: "What type of storage is Amazon S3?",
          options: [
            "Block storage",
            "File storage",
            "Object storage",
            "Database storage",
          ],
          correctAnswer: 2,
          explanation: "S3 is an object storage service designed for storing and retrieving any amount of data.",
        },
      ],
    },
  },
  {
    id: "module-3",
    title: "Docker & Containerization",
    description: "Package applications with Docker",
    duration: "Week 5-6",
    order: 3,
    videos: [
      {
        id: "video-3-1",
        title: "Docker Fundamentals",
        youtubeId: "pTFZFxd4hOI",
        duration: "25:30",
        description: "Understanding containers and Docker basics",
        moduleId: "module-3",
      },
      {
        id: "video-3-2",
        title: "Creating Docker Images",
        youtubeId: "SnSH8Ht3MIc",
        duration: "21:15",
        description: "Building and optimizing Docker images",
        moduleId: "module-3",
      },
      {
        id: "video-3-3",
        title: "Docker Compose for Multi-Container Apps",
        youtubeId: "HG6yIjZapSA",
        duration: "23:40",
        description: "Managing multiple containers with Docker Compose",
        moduleId: "module-3",
      },
    ],
    quiz: {
      id: "quiz-3",
      moduleId: "module-3",
      title: "Docker Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q3-1",
          question: "What is a Docker container?",
          options: [
            "A virtual machine",
            "A lightweight, standalone executable package",
            "A cloud service",
            "A programming language",
          ],
          correctAnswer: 1,
          explanation: "A Docker container is a lightweight, standalone package that includes everything needed to run an application.",
        },
        {
          id: "q3-2",
          question: "What file defines a Docker image?",
          options: ["docker.json", "Dockerfile", "container.yaml", "image.cfg"],
          correctAnswer: 1,
          explanation: "A Dockerfile is a text file containing instructions to build a Docker image.",
        },
      ],
    },
  },
  {
    id: "module-4",
    title: "Kubernetes Orchestration",
    description: "Manage containers at scale with Kubernetes",
    duration: "Week 7-8",
    order: 4,
    videos: [
      {
        id: "video-4-1",
        title: "Kubernetes Architecture",
        youtubeId: "X48VuDVv0do",
        duration: "27:50",
        description: "Understanding K8s components and architecture",
        moduleId: "module-4",
      },
      {
        id: "video-4-2",
        title: "Deployments and Services",
        youtubeId: "qmDzcu5uY1I",
        duration: "29:30",
        description: "Deploying applications in Kubernetes",
        moduleId: "module-4",
      },
      {
        id: "video-4-3",
        title: "Kubernetes Networking and Storage",
        youtubeId: "dQw4w9WgXcQ",
        duration: "26:20",
        description: "Managing networking and persistent storage",
        moduleId: "module-4",
      },
    ],
    quiz: {
      id: "quiz-4",
      moduleId: "module-4",
      title: "Kubernetes Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q4-1",
          question: "What is a Kubernetes Pod?",
          options: [
            "A storage volume",
            "The smallest deployable unit that can contain one or more containers",
            "A networking component",
            "A monitoring tool",
          ],
          correctAnswer: 1,
          explanation: "A Pod is the smallest deployable unit in Kubernetes that can contain one or more containers.",
        },
        {
          id: "q4-2",
          question: "What does a Kubernetes Service do?",
          options: [
            "Stores data",
            "Provides networking and load balancing for Pods",
            "Monitors performance",
            "Manages security",
          ],
          correctAnswer: 1,
          explanation: "A Service provides stable networking and load balancing to access Pods.",
        },
      ],
    },
  },
  {
    id: "module-5",
    title: "Infrastructure as Code with Terraform",
    description: "Automate infrastructure provisioning",
    duration: "Week 9-10",
    order: 5,
    videos: [
      {
        id: "video-5-1",
        title: "Terraform Basics",
        youtubeId: "l5k1ai_GBDE",
        duration: "31:15",
        description: "Introduction to Infrastructure as Code",
        moduleId: "module-5",
      },
      {
        id: "video-5-2",
        title: "Terraform with AWS",
        youtubeId: "SLB_c_ayRMo",
        duration: "27:40",
        description: "Provisioning AWS resources with Terraform",
        moduleId: "module-5",
      },
      {
        id: "video-5-3",
        title: "Terraform State Management",
        youtubeId: "dQw4w9WgXcQ",
        duration: "24:55",
        description: "Managing Terraform state and workspaces",
        moduleId: "module-5",
      },
    ],
    quiz: {
      id: "quiz-5",
      moduleId: "module-5",
      title: "Terraform Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q5-1",
          question: "What is Infrastructure as Code (IaC)?",
          options: [
            "Writing application code",
            "Managing infrastructure through code rather than manual processes",
            "Cloud security protocols",
            "Database management",
          ],
          correctAnswer: 1,
          explanation: "IaC is the practice of managing and provisioning infrastructure through machine-readable files.",
        },
        {
          id: "q5-2",
          question: "What file extension does Terraform use?",
          options: [".yaml", ".json", ".tf", ".xml"],
          correctAnswer: 2,
          explanation: "Terraform configuration files use the .tf extension.",
        },
      ],
    },
  },
  {
    id: "module-6",
    title: "CI/CD & DevOps Practices",
    description: "Implement continuous integration and deployment",
    duration: "Week 11-12",
    order: 6,
    videos: [
      {
        id: "video-6-1",
        title: "CI/CD Pipeline Fundamentals",
        youtubeId: "scEDHsr3APg",
        duration: "28:30",
        description: "Understanding continuous integration and deployment",
        moduleId: "module-6",
      },
      {
        id: "video-6-2",
        title: "GitHub Actions for CI/CD",
        youtubeId: "R8_veQiYBjI",
        duration: "25:45",
        description: "Building automated pipelines with GitHub Actions",
        moduleId: "module-6",
      },
      {
        id: "video-6-3",
        title: "Monitoring and Logging",
        youtubeId: "dQw4w9WgXcQ",
        duration: "23:20",
        description: "Implementing observability in cloud applications",
        moduleId: "module-6",
      },
    ],
    quiz: {
      id: "quiz-6",
      moduleId: "module-6",
      title: "DevOps Quiz",
      passingScore: 70,
      questions: [
        {
          id: "q6-1",
          question: "What does CI/CD stand for?",
          options: [
            "Code Integration / Code Delivery",
            "Continuous Integration / Continuous Deployment",
            "Cloud Infrastructure / Cloud Development",
            "Container Integration / Container Distribution",
          ],
          correctAnswer: 1,
          explanation: "CI/CD stands for Continuous Integration and Continuous Deployment/Delivery.",
        },
        {
          id: "q6-2",
          question: "What is the purpose of monitoring in cloud applications?",
          options: [
            "To increase costs",
            "To track performance, detect issues, and ensure reliability",
            "To slow down deployments",
            "To reduce security",
          ],
          correctAnswer: 1,
          explanation: "Monitoring helps track application performance, detect issues early, and ensure system reliability.",
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
        title: "Deploy a Static Website on AWS S3 + CloudFront",
        youtube: "https://youtu.be/-l83oqcaTHg?si=6imfSf3HO5F5ijSU"
      },
      {
        title: "EC2 Web Server Deployment (Apache / Nginx)",
        youtube: "https://youtu.be/9t9Mp0BGnyI?si=KBfXdcGu97yjHGH5"
      }
    ]
  },
  {
    level: "Intermediate",
    items: [
      {
        title: "Deploy a Docker App on AWS ECS",
        youtube: "https://youtu.be/AiiFbsAlLaI?si=lqGUrw3tcAfweRk_"
      },
      {
        title: "Build a CI/CD Pipeline using AWS CodePipeline",
        youtube: "https://youtu.be/40X6abe5wv0?si=kWGP74WkuN-Q_0D-"
      }
    ]
  },
  {
    level: "Advanced",
    items: [
      {
        title: "Serverless Application using AWS Lambda + API Gateway + DynamoDB",
        youtube: "https://youtu.be/pK52mfm69i0?si=1OXw4j8LwZ_sUKTG"
      },
      {
        title: "Kubernetes Deployment on AWS EKS (Full Microservices App)",
        youtube: "https://youtu.be/RRCrY12VY_s?si=uMg-EublmRugGI10"
      }
    ]
  }
];