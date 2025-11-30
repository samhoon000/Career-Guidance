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
  order: number;
}

export const modules: Module[] = [
  {
    id: "excel-fundamentals",
    title: "Excel Fundamentals",
    description: "Master Excel basics including formulas, functions, and data visualization",
    order: 1,
  },
  {
    id: "sql-essentials",
    title: "SQL Essentials",
    description: "Learn to query and manipulate databases with SQL",
    order: 2,
  },
  {
    id: "python-data-analysis",
    title: "Python for Data Analysis",
    description: "Use Python and Pandas for data manipulation and analysis",
    order: 3,
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description: "Create compelling visualizations with Matplotlib, Seaborn, and Tableau",
    order: 4,
  },
  {
    id: "statistics-fundamentals",
    title: "Statistics Fundamentals",
    description: "Understanding statistical concepts for data analysis",
    order: 5,
  },
  {
    id: "bi-tools",
    title: "Business Intelligence Tools",
    description: "Master Tableau and Power BI for interactive dashboards",
    order: 6,
  },
];

export const videos: Video[] = [
  // Excel Fundamentals
  {
    id: "excel-1",
    title: "Introduction to Excel for Data Analysis",
    youtubeId: "O1QfG5SXRkM",
    duration: "12:09",
    description: "Learn Excel basics and essential features for data analysis",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-2",
    title: "Excel Formulas and Functions",
    youtubeId: "Jl0Qk63z2ZY",
    duration: "22:30",
    description: "Master essential Excel formulas like VLOOKUP, IF, SUMIF",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-3",
    title: "Pivot Tables and Charts",
    youtubeId: "UsdedFoTA68",
    duration: "13:22",
    description: "Create dynamic pivot tables and professional charts",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-4",
    title: "Advanced Excel Functions",
    youtubeId: "ZyFVqnkPBMA",
    duration: "28:30",
    description: "Master INDEX-MATCH, array formulas, and conditional formatting",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-5",
    title: "Excel Data Analysis Tools",
    youtubeId: "k-E6URiLeLU",
    duration: "32:45",
    description: "Learn Power Query, What-If Analysis, and Solver",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-6",
    title: "Excel Macros and VBA Basics",
    youtubeId: "G05TrN7nt6k",
    duration: "35:20",
    description: "Automate tasks with Excel macros and VBA programming",
    moduleId: "excel-fundamentals",
  },
  {
    id: "excel-7",
    title: "Excel Dashboard Design",
    youtubeId: "K74_FNnlIF8",
    duration: "42:15",
    description: "Build interactive dashboards with advanced visualization",
    moduleId: "excel-fundamentals",
  },
  // SQL Essentials
  {
    id: "sql-1",
    title: "SQL Tutorial for Beginners",
    youtubeId: "HXV3zeQKqGY",
    duration: "60:00",
    description: "Complete introduction to SQL and relational databases",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-2",
    title: "SQL JOINs Explained",
    youtubeId: "9yeOJ0ZMUYw",
    duration: "15:30",
    description: "Understanding INNER, LEFT, RIGHT, and OUTER JOINs",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-3",
    title: "SQL Aggregation and GROUP BY",
    youtubeId: "RSBg-vr_wVU",
    duration: "12:45",
    description: "Learn aggregate functions and data grouping",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-4",
    title: "SQL Subqueries and CTEs",
    youtubeId: "m1KcNV-Zhmc",
    duration: "18:30",
    description: "Master subqueries and Common Table Expressions",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-5",
    title: "SQL Window Functions",
    youtubeId: "Ww71knvhQ-s",
    duration: "22:15",
    description: "Learn ROW_NUMBER, RANK, and analytical functions",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-6",
    title: "SQL Database Design",
    youtubeId: "ztHopE5Wnpc",
    duration: "28:45",
    description: "Understanding normalization and database schema design",
    moduleId: "sql-essentials",
  },
  {
    id: "sql-7",
    title: "SQL Performance Optimization",
    youtubeId: "BHwzDmr6d7s",
    duration: "25:30",
    description: "Query optimization techniques and index strategies",
    moduleId: "sql-essentials",
  },
  // Python for Data Analysis
  {
    id: "python-1",
    title: "Python for Data Analysis - Full Course",
    youtubeId: "GPVsHOlRBBI",
    duration: "180:00",
    description: "Complete Python course covering NumPy, Pandas, and more",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-2",
    title: "Pandas for Data Analysis",
    youtubeId: "vmEHCJofslg",
    duration: "60:00",
    description: "Master Pandas library for data manipulation",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-3",
    title: "Data Cleaning with Python",
    youtubeId: "bDhvCp3_lYw",
    duration: "45:00",
    description: "Learn techniques for cleaning messy datasets",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-4",
    title: "NumPy for Data Science",
    youtubeId: "QUT1VHiLmmI",
    duration: "58:30",
    description: "Master NumPy arrays and numerical operations",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-5",
    title: "Advanced Pandas Techniques",
    youtubeId: "tcRGa2soc-c",
    duration: "52:15",
    description: "GroupBy, merge, pivot, and reshaping data",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-6",
    title: "Time Series Analysis with Python",
    youtubeId: "e8Yw4alG16Q",
    duration: "48:45",
    description: "Working with datetime and time series data",
    moduleId: "python-data-analysis",
  },
  {
    id: "python-7",
    title: "Python Data Analysis Projects",
    youtubeId: "r-uOLxNrNk8",
    duration: "90:00",
    description: "Real-world data analysis project walkthroughs",
    moduleId: "python-data-analysis",
  },
  // Data Visualization
  {
    id: "viz-1",
    title: "Data Visualization Principles",
    youtubeId: "KW1bF_YxH9g",
    duration: "20:30",
    description: "Learn the fundamentals of effective data visualization",
    moduleId: "data-visualization",
  },
  {
    id: "viz-2",
    title: "Matplotlib Tutorial",
    youtubeId: "3Xc3CA655Y4",
    duration: "50:00",
    description: "Create charts and plots with Matplotlib",
    moduleId: "data-visualization",
  },
  {
    id: "viz-3",
    title: "Tableau Full Course",
    youtubeId: "aHaOIvR00So",
    duration: "120:00",
    description: "Complete Tableau course for beginners",
    moduleId: "data-visualization",
  },
  {
    id: "viz-4",
    title: "Seaborn Data Visualization",
    youtubeId: "6GUZXDef2U0",
    duration: "45:30",
    description: "Create statistical visualizations with Seaborn",
    moduleId: "data-visualization",
  },
  {
    id: "viz-5",
    title: "Plotly Interactive Charts",
    youtubeId: "GGL6U0k8WYA",
    duration: "38:15",
    description: "Build interactive and animated visualizations",
    moduleId: "data-visualization",
  },
  {
    id: "viz-6",
    title: "Power BI Data Visualization",
    youtubeId: "TmhQCQr_DCA",
    duration: "55:45",
    description: "Create professional reports and dashboards in Power BI",
    moduleId: "data-visualization",
  },
  {
    id: "viz-7",
    title: "Storytelling with Data",
    youtubeId: "8EMW7io4rSI",
    duration: "42:30",
    description: "Communicate insights effectively through visualization",
    moduleId: "data-visualization",
  },
  // Statistics Fundamentals
  {
    id: "stats-1",
    title: "Statistics for Data Science",
    youtubeId: "Vfo5le26IhY",
    duration: "75:00",
    description: "Essential statistics concepts for data analysts",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-2",
    title: "Hypothesis Testing Explained",
    youtubeId: "0oc49DyA3hU",
    duration: "30:00",
    description: "Understanding hypothesis testing and p-values",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-3",
    title: "Correlation and Regression",
    youtubeId: "yQhTtdq_y9M",
    duration: "40:00",
    description: "Learn correlation analysis and linear regression",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-4",
    title: "Probability Distributions",
    youtubeId: "rzFX5NWojp0",
    duration: "35:20",
    description: "Understanding normal, binomial, and Poisson distributions",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-5",
    title: "Confidence Intervals and Sampling",
    youtubeId: "TqOeMYtOc1w",
    duration: "28:45",
    description: "Learn sampling methods and confidence interval estimation",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-6",
    title: "ANOVA and Chi-Square Tests",
    youtubeId: "NF5_btOaCig",
    duration: "32:15",
    description: "Comparing multiple groups and categorical data analysis",
    moduleId: "statistics-fundamentals",
  },
  {
    id: "stats-7",
    title: "Statistical Analysis with Python",
    youtubeId: "11unm2hmvOQ",
    duration: "48:30",
    description: "Implementing statistical tests using SciPy and statsmodels",
    moduleId: "statistics-fundamentals",
  },
  // BI Tools
  {
    id: "bi-1",
    title: "Power BI Full Course",
    youtubeId: "AGrl-H87pRU",
    duration: "150:00",
    description: "Complete Power BI training for beginners",
    moduleId: "bi-tools",
  },
  {
    id: "bi-2",
    title: "Creating Interactive Dashboards",
    youtubeId: "77yS-sJFLmY",
    duration: "45:00",
    description: "Build professional interactive dashboards",
    moduleId: "bi-tools",
  },
  {
    id: "bi-3",
    title: "Advanced Analytics in Power BI",
    youtubeId: "6c-RLNPEwRY",
    duration: "60:00",
    description: "Master advanced analytics and DAX functions",
    moduleId: "bi-tools",
  },
  {
    id: "bi-4",
    title: "Tableau Advanced Features",
    youtubeId: "jEgVto5QME8",
    duration: "55:30",
    description: "Advanced calculations, parameters, and level of detail expressions",
    moduleId: "bi-tools",
  },
  {
    id: "bi-5",
    title: "Power BI Service and Sharing",
    youtubeId: "TmhQCQr_DCA",
    duration: "42:15",
    description: "Publishing reports and creating workspaces in Power BI Service",
    moduleId: "bi-tools",
  },
  {
    id: "bi-6",
    title: "Data Modeling in BI Tools",
    youtubeId: "sYQxnTF_YIY",
    duration: "48:45",
    description: "Creating relationships and star schemas for efficient reporting",
    moduleId: "bi-tools",
  },
  {
    id: "bi-7",
    title: "BI Dashboard Best Practices",
    youtubeId: "HXV3zeQKqGY",
    duration: "38:30",
    description: "Design principles for effective business intelligence dashboards",
    moduleId: "bi-tools",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-excel",
    moduleId: "excel-fundamentals",
    title: "Excel Fundamentals Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Which function would you use to find a value in a table based on a lookup value?",
        options: ["SUMIF", "VLOOKUP", "COUNT", "AVERAGE"],
        correctAnswer: 1,
        explanation: "VLOOKUP searches for a value in the first column of a table and returns a value in the same row from another column.",
      },
      {
        id: "q2",
        question: "What does a Pivot Table allow you to do?",
        options: [
          "Create formulas",
          "Summarize and analyze large datasets",
          "Format cells",
          "Create macros",
        ],
        correctAnswer: 1,
        explanation: "Pivot Tables are powerful tools for summarizing, analyzing, and presenting large amounts of data.",
      },
      {
        id: "q3",
        question: "Which of these is NOT a valid cell reference format in Excel?",
        options: ["A1", "$A$1", "A$1", "1A"],
        correctAnswer: 3,
        explanation: "Excel cell references start with a column letter followed by a row number (e.g., A1), not the other way around.",
      },
      {
        id: "q4",
        question: "What does the IF function do?",
        options: [
          "Adds numbers together",
          "Returns one value if true and another if false",
          "Counts cells",
          "Finds the average",
        ],
        correctAnswer: 1,
        explanation: "The IF function performs logical tests and returns different values based on whether the condition is true or false.",
      },
      {
        id: "q5",
        question: "What is the purpose of using $ in cell references like $A$1?",
        options: [
          "To make the reference absolute",
          "To add currency formatting",
          "To multiply values",
          "To create a named range",
        ],
        correctAnswer: 0,
        explanation: "The $ symbol creates absolute references that won't change when copied to other cells.",
      },
    ],
  },
  {
    id: "quiz-sql",
    moduleId: "sql-essentials",
    title: "SQL Essentials Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Which SQL clause is used to filter rows?",
        options: ["SELECT", "WHERE", "FROM", "ORDER BY"],
        correctAnswer: 1,
        explanation: "The WHERE clause filters rows based on specified conditions.",
      },
      {
        id: "q2",
        question: "What type of JOIN returns all rows from both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correctAnswer: 3,
        explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match.",
      },
      {
        id: "q3",
        question: "Which function counts the number of rows?",
        options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
        correctAnswer: 2,
        explanation: "COUNT() returns the number of rows that match the specified criteria.",
      },
      {
        id: "q4",
        question: "What does GROUP BY do?",
        options: [
          "Sorts the results",
          "Groups rows with same values",
          "Joins tables",
          "Filters data",
        ],
        correctAnswer: 1,
        explanation: "GROUP BY groups rows that have the same values in specified columns, often used with aggregate functions.",
      },
      {
        id: "q5",
        question: "Which keyword removes duplicate rows from results?",
        options: ["UNIQUE", "DISTINCT", "REMOVE", "SINGLE"],
        correctAnswer: 1,
        explanation: "DISTINCT is used in SELECT statements to return only different (distinct) values.",
      },
    ],
  },
  {
    id: "quiz-python",
    moduleId: "python-data-analysis",
    title: "Python Data Analysis Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Which library is primarily used for data manipulation in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
        correctAnswer: 1,
        explanation: "Pandas is the primary library for data manipulation and analysis in Python.",
      },
      {
        id: "q2",
        question: "What is a DataFrame in Pandas?",
        options: [
          "A 1-dimensional array",
          "A 2-dimensional labeled data structure",
          "A plotting function",
          "A file format",
        ],
        correctAnswer: 1,
        explanation: "A DataFrame is a 2-dimensional labeled data structure with columns that can be of different types.",
      },
      {
        id: "q3",
        question: "Which method is used to read a CSV file in Pandas?",
        options: ["read_csv()", "load_csv()", "import_csv()", "open_csv()"],
        correctAnswer: 0,
        explanation: "pd.read_csv() is the standard method to read CSV files into a Pandas DataFrame.",
      },
      {
        id: "q4",
        question: "What does the head() method do?",
        options: [
          "Returns the last rows",
          "Returns the first rows",
          "Counts rows",
          "Sorts data",
        ],
        correctAnswer: 1,
        explanation: "The head() method returns the first n rows (default is 5) of a DataFrame.",
      },
      {
        id: "q5",
        question: "Which method handles missing values by removing them?",
        options: ["fillna()", "dropna()", "remove()", "delete()"],
        correctAnswer: 1,
        explanation: "dropna() removes rows or columns with missing (NaN) values from a DataFrame.",
      },
    ],
  },
  {
    id: "quiz-viz",
    moduleId: "data-visualization",
    title: "Data Visualization Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Which chart type is best for showing trends over time?",
        options: ["Pie chart", "Line chart", "Scatter plot", "Bar chart"],
        correctAnswer: 1,
        explanation: "Line charts are ideal for displaying trends and changes over continuous periods of time.",
      },
      {
        id: "q2",
        question: "What is the purpose of data visualization?",
        options: [
          "To make data look pretty",
          "To communicate insights effectively",
          "To hide data",
          "To complicate analysis",
        ],
        correctAnswer: 1,
        explanation: "Data visualization helps communicate insights and patterns in data in an easily understandable way.",
      },
      {
        id: "q3",
        question: "Which Python library is built on top of Matplotlib?",
        options: ["Pandas", "NumPy", "Seaborn", "SciPy"],
        correctAnswer: 2,
        explanation: "Seaborn is built on top of Matplotlib and provides a high-level interface for statistical graphics.",
      },
      {
        id: "q4",
        question: "What type of chart shows the relationship between two variables?",
        options: ["Pie chart", "Bar chart", "Scatter plot", "Histogram"],
        correctAnswer: 2,
        explanation: "Scatter plots show the relationship or correlation between two numerical variables.",
      },
      {
        id: "q5",
        question: "In Tableau, what is a calculated field?",
        options: [
          "A field from the data source",
          "A field created using a formula",
          "A dimension",
          "A filter",
        ],
        correctAnswer: 1,
        explanation: "Calculated fields are new fields created using formulas based on existing fields in your data.",
      },
    ],
  },
  {
    id: "quiz-stats",
    moduleId: "statistics-fundamentals",
    title: "Statistics Fundamentals Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What does the mean represent?",
        options: [
          "The most frequent value",
          "The middle value",
          "The average value",
          "The range",
        ],
        correctAnswer: 2,
        explanation: "The mean is the average of all values, calculated by summing all values and dividing by the count.",
      },
      {
        id: "q2",
        question: "What is the null hypothesis?",
        options: [
          "The hypothesis we want to prove",
          "The hypothesis of no effect or difference",
          "A hypothesis about null values",
          "An incorrect hypothesis",
        ],
        correctAnswer: 1,
        explanation: "The null hypothesis assumes there is no effect or no difference in the population.",
      },
      {
        id: "q3",
        question: "What does a p-value indicate?",
        options: [
          "The probability the null hypothesis is true",
          "The strength of the relationship",
          "The probability of observing results at least as extreme if null is true",
          "The percentage of variance explained",
        ],
        correctAnswer: 2,
        explanation: "The p-value is the probability of obtaining results as extreme as observed, assuming the null hypothesis is true.",
      },
      {
        id: "q4",
        question: "What does correlation measure?",
        options: [
          "Causation between variables",
          "The strength and direction of relationship between variables",
          "The average of two variables",
          "The difference between variables",
        ],
        correctAnswer: 1,
        explanation: "Correlation measures the strength and direction of the linear relationship between two variables.",
      },
      {
        id: "q5",
        question: "In a normal distribution, what percentage of data falls within one standard deviation?",
        options: ["50%", "68%", "95%", "99%"],
        correctAnswer: 1,
        explanation: "In a normal distribution, approximately 68% of data falls within one standard deviation of the mean.",
      },
    ],
  },
  {
    id: "quiz-bi",
    moduleId: "bi-tools",
    title: "Business Intelligence Tools Quiz",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is the primary purpose of a BI dashboard?",
        options: [
          "To store data",
          "To visualize KPIs and metrics",
          "To clean data",
          "To write queries",
        ],
        correctAnswer: 1,
        explanation: "BI dashboards are designed to visualize key performance indicators and metrics for decision-making.",
      },
      {
        id: "q2",
        question: "What does DAX stand for in Power BI?",
        options: [
          "Data Analysis Expressions",
          "Dynamic Analytics eXtension",
          "Database Access eXtension",
          "Digital Analytics eXecutor",
        ],
        correctAnswer: 0,
        explanation: "DAX (Data Analysis Expressions) is a formula language used in Power BI, Power Pivot, and Analysis Services.",
      },
      {
        id: "q3",
        question: "What is a data source in BI tools?",
        options: [
          "A visualization",
          "A connection to where data is stored",
          "A type of chart",
          "A filter",
        ],
        correctAnswer: 1,
        explanation: "A data source is a connection to where your data is stored, such as databases, files, or APIs.",
      },
      {
        id: "q4",
        question: "What is the difference between a measure and a dimension?",
        options: [
          "There is no difference",
          "Measures are numerical aggregates; dimensions are categorical attributes",
          "Dimensions are numerical; measures are categorical",
          "Measures are filters; dimensions are visualizations",
        ],
        correctAnswer: 1,
        explanation: "Measures are numerical values that can be aggregated (sum, average), while dimensions are categorical attributes used to slice data.",
      },
      {
        id: "q5",
        question: "What is drill-down functionality?",
        options: [
          "Creating new data",
          "Exploring data at more detailed levels",
          "Deleting data",
          "Exporting data",
        ],
        correctAnswer: 1,
        explanation: "Drill-down allows users to explore data at increasingly detailed levels, from summary to granular views.",
      },
    ],
  },
];

export const projects = [
  {
    level: "Beginner",
    items: [
      {
        title: "Excel Sales Dashboard",
        youtube: "https://youtu.be/m13o5aqeCbM?si=W2dNdlqkeoxSv6tT"
      },
      {
        title: "SQL - Data Exploration Project",
        youtube: "https://youtu.be/qfyynHBFOsM?si=TiuQs5PjvdHuUlIB"
      }
    ]
  },
  {
    level: "Intermediate",
    items: [
      {
        title: "Power BI Sales Insights Project",
        youtube: "https://youtu.be/BLxW9ZSuuVI?si=i0zuVFZYvMJ_7AU2"
      },
      {
        title: "Exploratory Data Analysis (EDA) in Python",
        youtube: "https://youtu.be/xi0vhXFPegw?si=ADoPxd3-SBNqVfE5"
      }
    ]
  },
  {
    level: "Advanced",
    items: [
      {
        title: "Machine Learning Churn Prediction",
        youtube: "https://youtu.be/MSBY28IJ47U?si=4uQ0h9-7QHOXV2Py"
      },
      {
        title: "Time Series Forecasting Project",
        youtube: "https://youtu.be/fxx_E0ojKrc?si=tZWlr5On3SkZyYVg"
      }
    ]
  }
];

