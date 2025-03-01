
import { 
  Code2, GitBranch, Database, Server, 
  LayoutPanelTop, Globe, Smartphone, Fingerprint 
} from 'lucide-react';

const skillsCategories = [
  {
    name: "Mobile Development",
    skills: ["Flutter", "Dart", "Android", "iOS"],
    icon: <Smartphone className="w-6 h-6 text-primary" />
  },
  {
    name: "Architecture",
    skills: ["Clean Architecture", "TDD (Test-Driven Development)", "MVVM", "MVP", "MVC"],
    icon: <LayoutPanelTop className="w-6 h-6 text-primary" />
  },
  {
    name: "APIs",
    skills: ["REST APIs", "GraphQL"],
    icon: <Globe className="w-6 h-6 text-primary" />
  },
  {
    name: "Tools & Platforms",
    skills: ["Firebase", "CI/CD", "Git/Version Control", "FlutterFlow", "Jira"],
    icon: <GitBranch className="w-6 h-6 text-primary" />
  },
  {
    name: "State Management",
    skills: ["Bloc", "Provider", "Riverpod"],
    icon: <Database className="w-6 h-6 text-primary" />
  },
  {
    name: "Programming Languages",
    skills: ["Java", "Kotlin", "JavaScript", "Python"],
    icon: <Code2 className="w-6 h-6 text-primary" />
  },
  {
    name: "Backend & Frameworks",
    skills: ["Flask", "Node.js"],
    icon: <Server className="w-6 h-6 text-primary" />
  },
  {
    name: "Databases",
    skills: ["SQL lite", "Hive"],
    icon: <Database className="w-6 h-6 text-primary" />
  }
];

const coreCompetencies = [
  "Mobile Application Development",
  "Payment Integration Systems",
  "UI/UX Design",
  "App Performance Optimization",
  "Bug Fixing and App Stability",
  "Project Setup & Architecture Planning",
  "Software Development Life Cycle",
  "Unit & Integration Testing",
  "Agile Methodologies"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="section-container">
        <h2 className="section-title">Skills & Competencies</h2>
        <p className="section-subtitle">My technical expertise and core competencies</p>
        
        {/* Technical Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold font-display text-center mb-6">Technical Skills</h3>
          
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            {skillsCategories.map((category, index) => (
              <div 
                key={category.name}
                className="glass-card p-6 hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-medium text-primary">{category.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Core Competencies - Updated background color for dark mode */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-display text-center mb-6">Core Competencies</h3>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm h-full group-hover:transform group-hover:-translate-y-1 transition-transform">
                  <p className="font-medium">{competency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
