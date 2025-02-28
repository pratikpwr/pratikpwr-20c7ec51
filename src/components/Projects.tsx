
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
    id: "collegebuddy",
    title: "College Buddy",
    description: "An app that allows college students to access their timetable, view current and upcoming lectures, and enables teachers to upload timetables, assignments, and important notices, streamlining communication between faculty and students.",
    image: "/lovable-uploads/2ff2c74b-1974-439b-a2b6-ee32897458ac.png",
    technologies: ["Flutter", "Dart", "Bloc", "Flask", "Python"],
    github: "#",
    link: "#"
  },
  {
    id: "swipeup",
    title: "SwipeUp News App",
    description: "A user-friendly news app with category-based search and detailed article views, integrated with NewsAPI.org for real-time updates, ensuring a dynamic and up-to-date user experience.",
    image: "/lovable-uploads/3668c377-1405-458c-8793-aa2f3bc123b4.png",
    technologies: ["Flutter", "Dart", "REST API"],
    github: "#",
    link: "#"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Personal Projects</h2>
        <p className="section-subtitle">A selection of my personal Flutter applications</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card overflow-hidden hover-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
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
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
