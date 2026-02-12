
import { ExternalLink } from 'lucide-react';
import AppCard from './AppCard';

interface AppItem {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  demoLink?: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  description: string[];
  achievements?: string[];
  apps?: AppItem[];
}

const experiences: ExperienceItem[] = [
  {
    id: "incubyte",
    company: "Incubyte",
    role: "Software Crafter II",
    period: "Aug 2025 – Present",
    location: "India (Remote)",
    link: "https://www.incubyte.co/",
    description: [
      "Effectively managed technical requirements, translating complex needs into actionable tickets and providing clear client communication.",
      "Proactively identified and mitigated potential risks by raising technical and project concerns during client communication.",
      "Led and facilitated Scrum ceremonies, including retrospectives, to drive continuous team improvement and project efficiency."
    ],
    achievements: [
      "Significantly improved the development workflow by creating a custom GraphQL Network DevTools Extension and publishing it to Pub.dev, enabling easier debugging of GraphQL requests for the Flutter team.",
      "Accelerated code quality and review cycles by implementing an AI agent to analyze previous Pull Request comments, sharing the learnings and best practices within the mobile guild.",
      "Enhanced application quality by maintaining high test coverage and implementing Test-Driven Development (TDD) practices, leveraging AI tools."
    ]
  },
  {
    id: "eigital",
    company: "Eigital (EatOS)",
    role: "Senior Flutter Developer",
    period: "July 2023 – June 2025",
    location: "USA (Remote)",
    link: "https://www.eatos.com/",
    description: [
      "Focusing on implementing new features and enhancements for the core application, including integrating diverse payment gateways to support international markets such as the UK and USA.",
      "Handling the implementation of both native code and method channels for seamless integration of payment systems and other essential functionalities.",
      "Resolving complex technical issues that other team members are unable to address, ensuring smooth app functionality and efficient problem resolution.",
      "Continuously improving app performance and functionality by optimizing existing features and addressing technical debt.",
      "Assisting the team in prioritizing daily tasks and clearing blockers when the team leader is unavailable, ensuring smooth progress on critical tasks."
    ],
    achievements: [
      "Integrated multiple physical card readers for payment processing, enabling merchants to choose more cost-effective payment platforms, resulting in a 12% reduction in transaction costs."
    ],
    apps: [
      {
        id: "eatos-pos",
        name: "EatOS POS",
        description: "Comprehensive restaurant management system with POS, inventory tracking, payments, menu managment, employee managment.",
        image: "/lovable-uploads/a7d45038-3e04-457c-a547-5fdf42e7114f.png",
        technologies: ["Flutter", "Dart", "Stripe", "Adyen", "Native Android/iOS"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.eatos.pos"
      },
      {
        id: "eatos-kds",
        name: "Kitchen Display System",
        description: "A KDS appplication for streamlining kitchen communication. Supports POS, POP, Kiost and Online Ordering system with synchronized ticketing.",
        image: "/lovable-uploads/5961ccef-af0f-45d3-a9d1-9bf51f46c602.png",
        technologies: ["Flutter", "Dart", "Websockets"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.poslabs.eoskds"
      },
      {
        id: "eatos-pop",
        name: "Point of Purchase",
        description: "A application for handheld devices streamlines restaurant transactions by speeding up orders and payments on any iOS or Android device, improving guest experience and efficiency.",
        image: "/lovable-uploads/89bef589-3fbb-4258-a66d-08bb004a2eca.png",
        technologies: ["Flutter", "Dart", "Card Readers", "NFC Payments"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.eatos.pos"
      }
    ]
  },
  {
    id: "farmsetu",
    company: "FarmSetu Technologies",
    role: "Mobile Application Developer",
    period: "Dec 2021 – July 2023",
    location: "Nashik, India",
    link: "https://www.farmsetu.co/",
    description: [
      "Led the initial project setup, incorporating key components such as flavors, analytics, Sentry, notifications, and payment integrations to establish a solid foundation for app development.",
      "Developed a custom Mason template for Dart code generation, reducing boilerplate coding time from 1 hour to just 5 minutes, significantly streamlining the development process and improving overall productivity.",
      "Spearheaded the development of high-impact launchpads, including e-commerce and e-learning platforms, which resulted in a 30% increase in weekly active users, driving both engagement and business growth."
    ],
    apps: [
      {
        id: "farmsetu-setufarm",
        name: "SetuFarm",
        description: "Farmer facing application consisting multiple launchpads such as E-commerce, Farm's Finance & Operations managment, Weather, Articles and Courses for Farmers.",
        image: "/lovable-uploads/7ce714b9-8917-48b6-b901-41fc405ec5d0.png",
        technologies: ["Flutter", "Dart", "Pay U", "Google Maps", "Analytics", "Clean Architecture"],
        playStoreLink: "https://play.google.com/store/apps/details?id=co.setu.farm"
      },
      {
        id: "farmsetu-setutrade",
        name: "SetuTrade",
        description: "Buyers and Retail consumer facing application for recording incoming commodity trades for dedicated markets",
        image: "/lovable-uploads/5ea66a78-0d88-415f-82e0-7d6b3d95aaa8.png",
        technologies: ["Flutter", "Dart", "Firebase", "Push Notifications", "GraphQl"],
        playStoreLink: "https://play.google.com/store/apps/details?id=co.setu.trade"
      }
    ]
  },
  {
    id: "dreamcare",
    company: "DreamCare Developers",
    role: "Software Developer",
    period: "Jan 2021 – Nov 2021",
    location: "Pune, India",
    link: "https://dreamcaredevelopers.com/",
    description: [
      "Enhanced the Nearme Flutter app by identifying and resolving key issues, while adding new features to improve app performance by 20%, thereby optimizing user experience and retention.",
      "Designed and developed the Police Patil project, a solution for digitalizing activity tracking for village-assigned individuals, streamlining operations and improving efficiency.",
      "Created an intuitive, user-friendly Flutter web dashboard for police administrators, enabling more efficient management. Additionally, implemented SEO optimizations in the Nearme web app, boosting site visibility and driving an increase in user acquisition and engagement."
    ],
    apps: [
      {
        id: "nearme-app",
        name: "Nearme",
        description: "Home Axis Nearme is a unified platform for all the services like home cleaning, plumbing, carpentry, repairs, painting, etc.",
        image: "/lovable-uploads/2a2af9bb-2f1a-4e31-8013-20547be51585.png",
        technologies: ["Flutter", "Google Maps", "Rest APIs", "Bloc/Provider"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dcdevelopers.nearme"
      },
      {
        id: "police-patil",
        name: "Police Patil System",
        description: "Digital activity tracking system for village police officials with reporting, analytics, and administrative dashboard.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Web Dashboard", "Analytics", "Bloc"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dcdevelopers.policepatil"
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey in mobile application development</p>
        
        {/* Experience Grid */}
        <div className="flex flex-col gap-8 mt-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card hover-card transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Company Header */}
              <div className="relative p-8 pb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-display text-primary mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-semibold text-foreground">{exp.role}</span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-medium shadow-lg">
                          {exp.period}
                        </span>
                        <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full font-medium">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="px-8 pb-8 space-y-8">
                {/* Responsibilities */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                    Key Responsibilities
                  </h4>
                  <div className="grid gap-3">
                    {exp.description.map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-background/80 to-muted/30 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-foreground flex items-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-secondary to-primary rounded-full mr-3"></div>
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 transition-colors">
                          <div className="flex items-start">
                            <div className="text-secondary mr-4 mt-1 text-xl flex-shrink-0">★</div>
                            <span className="text-foreground leading-relaxed font-medium">{achievement}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Apps & Projects */}
                {exp.apps && exp.apps.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-foreground flex items-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                      Featured Apps & Projects ({exp.apps.length})
                    </h4>
                    <div className={`grid gap-6 ${
                      index === 0 && exp.apps.length >= 3 
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                        : 'grid-cols-1 lg:grid-cols-2'
                    }`}>
                      {exp.apps.map((app, appIdx) => (
                        <div 
                          key={app.id} 
                          className="transform transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${(index * 200) + (appIdx * 100)}ms` }}
                        >
                          <AppCard
                            name={app.name}
                            description={app.description}
                            image={app.image}
                            technologies={app.technologies}
                            playStoreLink={app.playStoreLink}
                            appStoreLink={app.appStoreLink}
                            demoLink={app.demoLink}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
