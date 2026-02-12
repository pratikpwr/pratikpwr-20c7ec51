
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
    icon: <Smartphone className="w-5 h-5 text-primary" />,
    color: "from-primary/10 to-secondary/10"
  },
  {
    name: "Architecture",
    skills: ["Clean Architecture", "TDD", "MVVM", "MVP", "MVC"],
    icon: <LayoutPanelTop className="w-5 h-5 text-primary" />,
    color: "from-secondary/10 to-primary/10"
  },
  {
    name: "APIs",
    skills: ["REST APIs", "GraphQL"],
    icon: <Globe className="w-5 h-5 text-primary" />,
    color: "from-primary/10 to-secondary/10"
  },
  {
    name: "Tools & Platforms",
    skills: ["Firebase", "CI/CD", "Git", "FlutterFlow", "Jira", "Cursor", "Claude Code"],
    icon: <GitBranch className="w-5 h-5 text-primary" />,
    color: "from-secondary/10 to-primary/10"
  },
  {
    name: "State Management",
    skills: ["Bloc", "Provider", "Riverpod"],
    icon: <RotateCw className="w-5 h-5 text-primary" />,
    color: "from-primary/10 to-secondary/10"
  },
  {
    name: "Languages",
    skills: ["Java", "Kotlin", "JavaScript", "Python"],
    icon: <Code2 className="w-5 h-5 text-primary" />,
    color: "from-secondary/10 to-primary/10"
  },
  {
    name: "Backend",
    skills: ["Flask", "Node.js"],
    icon: <Server className="w-5 h-5 text-primary" />,
    color: "from-primary/10 to-secondary/10"
  },
  {
    name: "Databases",
    skills: ["SQLite", "Hive"],
    icon: <Database className="w-5 h-5 text-primary" />,
    color: "from-secondary/10 to-primary/10"
  }
];

const coreCompetencies = [
  "Mobile Application Development",
  "Payment Integration Systems",
  "UI/UX Design",
  "App Performance Optimization",
  "Agentic Development",
  "Project Setup & Architecture",
  "Software Development Life Cycle",
  "Unit & Integration Testing",
  "Agile Methodologies"
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="gradient-blob w-96 h-96 -bottom-48 -left-48 opacity-10" style={{ animationDelay: '-8s' }} />
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="section-subtitle">The technologies and practices I use to bring ideas to life 🛠️</p>
        </ScrollReveal>
        
        {/* Technical Skills - Interactive Grid */}
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillsCategories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index * 0.08} direction="up">
                <div className={`gradient-card border border-border p-6 h-full rounded-2xl bg-gradient-to-br ${category.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {category.icon}
                    </div>
                    <h4 className="text-base font-semibold text-foreground">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
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
            <h3 className="text-2xl font-bold font-display tracking-tight mb-8">
              What I <span className="text-gradient">Excel</span> At
            </h3>
          </ScrollReveal>
          
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreCompetencies.map((competency, index) => (
              <ScrollReveal key={index} delay={index * 0.06} direction="up">
                <div className="flex items-center p-4 border-l-2 border-primary/30 hover:border-primary hover:bg-accent/50 rounded-r-lg transition-all duration-300">
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
