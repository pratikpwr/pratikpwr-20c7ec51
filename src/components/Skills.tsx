
import { 
  Code2, GitBranch, Database, Server, 
  LayoutPanelTop, Globe, Smartphone,
  RotateCw
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillsCategories = [
  {
    name: "Mobile Development",
    skills: ["Flutter", "Dart", "Android", "iOS"],
    icon: <Smartphone className="w-5 h-5 text-foreground" />
  },
  {
    name: "Architecture",
    skills: ["Clean Architecture", "TDD (Test-Driven Development)", "MVVM", "MVP", "MVC"],
    icon: <LayoutPanelTop className="w-5 h-5 text-foreground" />
  },
  {
    name: "APIs",
    skills: ["REST APIs", "GraphQL"],
    icon: <Globe className="w-5 h-5 text-foreground" />
  },
  {
    name: "Tools & Platforms",
    skills: ["Firebase", "CI/CD", "Git/Version Control", "FlutterFlow", "Jira", "Cursor", "Claude Code"],
    icon: <GitBranch className="w-5 h-5 text-foreground" />
  },
  {
    name: "State Management",
    skills: ["Bloc", "Provider", "Riverpod"],
    icon: <RotateCw className="w-5 h-5 text-foreground" />
  },
  {
    name: "Programming Languages",
    skills: ["Java", "Kotlin", "JavaScript", "Python"],
    icon: <Code2 className="w-5 h-5 text-foreground" />
  },
  {
    name: "Backend & Frameworks",
    skills: ["Flask", "Node.js"],
    icon: <Server className="w-5 h-5 text-foreground" />
  },
  {
    name: "Databases",
    skills: ["SQL lite", "Hive"],
    icon: <Database className="w-5 h-5 text-foreground" />
  }
];

const coreCompetencies = [
  "Mobile Application Development",
  "Payment Integration Systems",
  "UI/UX Design",
  "App Performance Optimization",
  "Agentic Development",
  "Project Setup & Architecture Planning",
  "Software Development Life Cycle",
  "Unit & Integration Testing",
  "Agile Methodologies"
];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-border">
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">Skills & Competencies</h2>
          <p className="section-subtitle">My technical expertise and core competencies</p>
        </ScrollReveal>
        
        {/* Technical Skills */}
        <div className="mt-10">
          <ScrollReveal delay={0.1}>
            <h3 className="text-2xl font-bold font-display tracking-tight mb-8">Technical Skills</h3>
          </ScrollReveal>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {skillsCategories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index * 0.08} direction="up">
                <div className="clean-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="text-base font-medium text-foreground">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        
        {/* Core Competencies */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold font-display tracking-tight mb-8">Core Competencies</h3>
          </ScrollReveal>
          
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreCompetencies.map((competency, index) => (
              <ScrollReveal key={index} delay={index * 0.06} direction="up">
                <div className="flex items-center p-4 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                  <p className="font-light text-foreground">{competency}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
