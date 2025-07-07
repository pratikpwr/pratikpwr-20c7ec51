
import { useState } from 'react';
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
    id: "eigital",
    company: "Eigital (EatOS)",
    role: "Senior Flutter Developer",
    period: "July 2023 – Present",
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey in mobile application development</p>
        
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto mt-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-px"></div>
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div 
                    className={`glass-card hover-card cursor-pointer group transition-all duration-300 ${
                      expandedCard === exp.id 
                        ? 'ring-2 ring-primary/20 shadow-2xl scale-105' 
                        : 'hover:shadow-xl hover:-translate-y-1'
                    }`}
                    onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center mt-2 mb-3">
                            <span className="text-lg text-primary font-medium">{exp.company}</span>
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                            <span className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full font-medium border border-primary/20">
                              {exp.period}
                            </span>
                            <span className="text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Indicator */}
                        <div className={`ml-4 transform transition-all duration-300 ${
                          expandedCard === exp.id ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20">
                            <div className="w-4 h-4 border-r-2 border-b-2 border-primary transform rotate-45 -translate-y-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-700 ease-out ${
                      expandedCard === exp.id 
                        ? 'max-h-[2000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="bg-gradient-to-br from-muted/30 to-primary/5 rounded-2xl p-6 space-y-8">
                          {/* Responsibilities */}
                          <div className="space-y-4">
                            <h4 className="font-bold text-foreground text-lg flex items-center">
                              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                              Responsibilities
                            </h4>
                            <div className="space-y-3">
                              {exp.description.map((item, idx) => (
                                <div key={idx} className="flex items-start bg-background/60 rounded-xl p-4 hover:bg-background/80 transition-colors">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          {exp.achievements && (
                            <div className="space-y-4">
                              <h4 className="font-bold text-foreground text-lg flex items-center">
                                <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mr-3"></div>
                                Key Achievements
                              </h4>
                              <div className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <div key={idx} className="flex items-start bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                                    <div className="text-secondary mr-4 mt-1 text-lg flex-shrink-0">★</div>
                                    <span className="text-foreground leading-relaxed font-medium">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Apps & Projects */}
                          {exp.apps && exp.apps.length > 0 && (
                            <div className="space-y-6">
                              <h4 className="font-bold text-foreground text-lg flex items-center">
                                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                                Apps & Projects
                              </h4>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {exp.apps.map((app, appIdx) => (
                                  <div key={app.id} className={`transform transition-all duration-500 ${
                                    expandedCard === exp.id ? 'animate-fade-in scale-100' : 'scale-95'
                                  }`} style={{ animationDelay: `${appIdx * 100}ms` }}>
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
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
