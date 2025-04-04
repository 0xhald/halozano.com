export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string;
  solutions?: string;
  outcomes?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    slug: "ecommerce-dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights. Built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    github: "https://github.com",
    live: "https://example.com",
    fullDescription: "The E-Commerce Dashboard is a full-stack application designed to provide e-commerce business owners with a robust tool to manage their online store. It delivers a comprehensive view of business performance, inventory status, and customer behaviors in real-time, enabling data-driven decision making.",
    features: [
      "Real-time sales analytics with customizable date ranges",
      "Inventory management with low stock alerts and restocking suggestions",
      "Customer segmentation and behavior analysis",
      "Order processing and tracking system",
      "Responsive design optimized for desktop and mobile devices",
      "Dark mode and accessibility features"
    ],
    challenges: "One of the major challenges was designing a system that could handle large datasets efficiently without compromising performance. The dashboard needed to process thousands of orders and product records while maintaining a smooth user experience.",
    solutions: "We implemented efficient data indexing and pagination techniques in MongoDB to optimize query performance. For the frontend, we used React's virtual DOM along with memo and useMemo hooks to minimize rendering. We also implemented a service worker for caching frequently accessed data.",
    outcomes: "The dashboard resulted in a 30% increase in operational efficiency for businesses using it, as they could make faster, data-driven decisions. It also helped reduce inventory discrepancies by 35% through improved tracking and alerting systems."
  },
  {
    title: "Weather App",
    slug: "weather-app",
    description: "A sleek weather application that provides real-time weather updates, forecasts, and location-based weather data. Utilizes OpenWeather API and geolocation services.",
    technologies: ["JavaScript", "HTML/CSS", "Weather API", "Geolocation API", "Webpack"],
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74",
    github: "https://github.com",
    live: "https://example.com",
    fullDescription: "This weather application provides users with accurate, location-based weather information in a visually appealing interface. The app offers current conditions, hourly forecasts, and 7-day predictions with detailed meteorological data like humidity, wind speed, precipitation probability, and UV index.",
    features: [
      "Real-time weather updates using geolocation",
      "Interactive weather maps with radar overlays",
      "Severe weather alerts and notifications",
      "Weather history and trend visualization",
      "Customizable units (metric/imperial) and themes",
      "Offline functionality with cached data"
    ],
    challenges: "The main challenge was ensuring accurate location detection across different devices and browsers, while also providing a fallback mechanism when geolocation services were unavailable or denied. Additionally, we needed to optimize API calls to stay within rate limits while keeping data fresh.",
    solutions: "We implemented a hybrid location detection system that combines IP-based geolocation with browser's Geolocation API. For API optimization, we developed a smart caching system that refreshes data based on relevance - current conditions update more frequently than extended forecasts.",
    outcomes: "The application achieved over 10,000 active users within three months of launch, with an average session duration of 4 minutes. User feedback highlighted the app's accuracy and intuitive interface as standout features."
  },
  {
    title: "Task Management System",
    slug: "task-management-system",
    description: "A collaborative task management platform designed for teams with features like task assignment, progress tracking, and deadline notifications.",
    technologies: ["TypeScript", "React", "Firebase", "Material UI", "Redux"],
    image: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4",
    github: "https://github.com",
    live: "https://example.com",
    fullDescription: "The Task Management System is a collaborative platform that helps teams organize workflows, track progress, and meet deadlines efficiently. Built with TypeScript and React, it offers a robust yet intuitive interface for managing tasks from creation to completion.",
    features: [
      "Drag-and-drop Kanban boards for visual task management",
      "Time tracking and estimation features",
      "Role-based permissions and task assignments",
      "Recurring task automation and templates",
      "Real-time collaboration with comments and attachments",
      "Comprehensive reporting and analytics dashboard",
      "Integration with calendar apps and notification systems"
    ],
    challenges: "Creating a system that balanced feature richness with usability was our biggest challenge. We needed to provide powerful project management capabilities without overwhelming users with complexity. Additionally, ensuring real-time synchronization across multiple users editing the same data presented technical hurdles.",
    solutions: "We adopted a progressive disclosure approach to the UI, showing the most common features upfront while making advanced options accessible when needed. For real-time synchronization, we leveraged Firebase's Firestore database with optimistic UI updates and conflict resolution strategies.",
    outcomes: "Teams using the platform reported a 25% reduction in missed deadlines and a 40% improvement in cross-team visibility. The system now supports over 200 organizations with teams ranging from 5 to 100+ members."
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    description: "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set fitness goals with data visualization.",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB", "D3.js"],
    image: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18",
    github: "https://github.com",
    live: "https://example.com",
    fullDescription: "The Fitness Tracker is a comprehensive mobile application designed to help users achieve their health and fitness goals. It combines workout tracking, nutrition logging, and performance analytics in one intuitive platform, making it easier for users to monitor their progress and stay motivated.",
    features: [
      "Customizable workout plans with exercise library",
      "Progress tracking with visual charts and milestones",
      "Body metrics monitoring and trend analysis",
      "Nutrition tracking with macro and micronutrient breakdowns",
      "Social features for sharing achievements and friendly competitions",
      "Integration with wearable devices for automated activity tracking",
      "Personalized insights and recommendations"
    ],
    challenges: "Developing a cross-platform application that maintained high performance while processing and visualizing large datasets from various sources (manual entries, wearable devices, etc.) was our primary challenge. We also needed to ensure data accuracy while keeping the user input process streamlined and intuitive.",
    solutions: "We used React Native for a truly native experience on both iOS and Android platforms. For efficient data handling, we implemented GraphQL to minimize payload sizes and optimize API calls. The visualization layer uses D3.js with memoization techniques to render complex charts without performance degradation.",
    outcomes: "Users reported an average 30% longer adherence to their fitness routines compared to previous apps they'd used. The app maintains a 4.8/5 rating on both App Store and Google Play, with particular praise for its intuitive interface and motivating progress visualizations."
  }
];
