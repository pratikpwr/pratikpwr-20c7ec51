
import { Github, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "safepass",
    title: "SafePass",
    description: "SafePass is a secure and offline password manager built with Flutter. It allows users to store and manage their passwords locally with encryption, ensuring maximum security. The app also features an easy-to-use random password generator.",
    image: "/lovable-uploads/10341517-6741-49e8-9cc7-508f61b20068.png",
    technologies: ["Flutter", "Dart", "Bloc", "Encrypt", "Hive"],
    github: "https://github.com/pratikpwr/safepass"
  },
  {
    id: "collegebuddy",
    title: "College Buddy",
    description: "An app that allows college students to access their timetable, view current and upcoming lectures, and enables teachers to upload timetables, assignments, and important notices, streamlining communication between faculty and students.",
    image: "/lovable-uploads/2ff2c74b-1974-439b-a2b6-ee32897458ac.png",
    technologies: ["Flutter", "Dart", "Bloc", "Flask", "Python"],
    github: "https://github.com/pratikpwr/TimeTable-APP"
  },
  {
    id: "swipeup",
    title: "SwipeUp News App",
    description: "A user-friendly news app with category-based search and detailed article views, integrated with NewsAPI.org for real-time updates, ensuring a dynamic and up-to-date user experience.",
    image: "/lovable-uploads/3668c377-1405-458c-8793-aa2f3bc123b4.png",
    technologies: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/pratikpwr/SwipeUp-News"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="gradient-blob w-72 h-72 bottom-20 -right-36 opacity-10" style={{ animationDelay: '-10s' }} />
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">
            Side <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">Things I build for fun and to explore new ideas 💡</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15} direction="up">
              <div className="group gradient-card border border-border overflow-hidden h-full rounded-2xl">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm group/link"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
