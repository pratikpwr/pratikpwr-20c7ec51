
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
        description: "Comprehensive restaurant management system with POS, inventory tracking, payments, menu managment.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Dart", "Card Readers", "Stripe", "Adyen", "Native Android/iOS"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.eatos.pos"
      },
      {
        id: "eatos-kds",
        name: "Kitchen Display System",
        description: "A KDS appplication for streamlining kitchen communication. Supports POS, POP, Kiost and Online Ordering system with synchronized ticketing.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Dart", "Websockets"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.poslabs.eoskds"
      },
      {
        id: "eatos-pop",
        name: "Point of Purchase",
        description: "eatOS Point of Purchase streamlines restaurant transactions with expert support and Handheld  Point of Sale technology. Speed up orders and payments on any iOS or Android device, improving guest experience and efficiency.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Dart", "Websockets"],
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
        id: "farmsetu-ecommerce",
        name: "FarmSetu Marketplace",
        description: "Agricultural e-commerce platform connecting farmers directly with buyers, featuring crop listings, price discovery, and logistics integration.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Firebase", "Razorpay", "Google Maps", "Analytics"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.farmsetu.marketplace"
      },
      {
        id: "farmsetu-learning",
        name: "FarmSetu Academy",
        description: "Educational platform providing agricultural courses, expert guidance, and community forums for farmers to enhance their farming techniques.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Video Streaming", "Firebase", "Push Notifications"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.farmsetu.academy"
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
        description: "Location-based discovery app helping users find nearby services, businesses, and events with real-time updates and user reviews.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Google Maps", "Firebase", "Location Services"],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.dreamcare.nearme"
      },
      {
        id: "police-patil",
        name: "Police Patil System",
        description: "Digital activity tracking system for village police officials with reporting, analytics, and administrative dashboard.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
        technologies: ["Flutter", "Web Dashboard", "Analytics", "Reporting"],
        demoLink: "https://policepatil.dreamcaredevelopers.com"
      }
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey in mobile application development</p>
        
        <div className="grid md:grid-cols-12 gap-8 mt-8">
          {/* Tabs - modified to prevent horizontal overflow on mobile */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex md:flex-col flex-wrap overflow-x-visible md:overflow-x-visible space-x-2 md:space-x-0 md:space-y-2 pb-4 md:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`px-3 py-2 md:px-4 md:py-3 text-left rounded-lg transition-all text-sm md:text-base ${
                    activeTab === exp.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-8 lg:col-span-9">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`space-y-6 transition-all ${
                  activeTab === exp.id ? "animate-fade-in-right block" : "hidden"
                }`}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display">{exp.role}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-md md:text-lg text-primary">{exp.company}</span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-muted-foreground">{exp.period}</span>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-muted-foreground">
                  <h4 className="font-medium text-foreground mb-2">Responsibilities:</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  {exp.achievements && (
                    <div className="mt-4">
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Apps & Projects */}
                {exp.apps && exp.apps.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-medium text-foreground mb-4">Apps & Projects:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exp.apps.map((app) => (
                        <AppCard
                          key={app.id}
                          name={app.name}
                          description={app.description}
                          image={app.image}
                          technologies={app.technologies}
                          playStoreLink={app.playStoreLink}
                          appStoreLink={app.appStoreLink}
                          demoLink={app.demoLink}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
