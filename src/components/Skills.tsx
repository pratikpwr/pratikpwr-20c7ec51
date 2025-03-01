import React from 'react';
import { Rocket, Code, CheckCircle } from 'lucide-react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', experience: '3 years' },
    { name: 'Next.js', experience: '2 years' },
    { name: 'Flutter', experience: '3 years' },
    { name: 'Dart', experience: '3 years' },
    { name: 'JavaScript', experience: '3 years' },
    { name: 'TypeScript', experience: '2 years' },
    { name: 'HTML', experience: '3 years' },
    { name: 'CSS', experience: '3 years' },
    { name: 'Tailwind CSS', experience: '2 years' },
  ];

  const backendSkills = [
    { name: 'Node.js', experience: '2 years' },
    { name: 'Express.js', experience: '2 years' },
    { name: 'Firebase', experience: '2 years' },
    { name: 'Supabase', experience: '1 year' },
    { name: 'PostgreSQL', experience: '1 year' },
    { name: 'MongoDB', experience: '1 year' },
  ];

  const toolsSkills = [
    { name: 'Git', experience: '3 years' },
    { name: 'GitHub', experience: '3 years' },
    { name: 'VS Code', experience: '3 years' },
    { name: 'Docker', experience: '1 year' },
    { name: 'Figma', experience: '2 years' },
    { name: 'Postman', experience: '2 years' },
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A concise overview of my technical proficiencies and areas of expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Frontend Development */}
          <div className="group">
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold font-display">Frontend Development</h3>
              </div>
              
              <div className="space-y-3 mt-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="relative flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-xl shadow-sm h-full group-hover:transform group-hover:-translate-y-1 transition-transform">
                    <div className="flex-grow">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.experience} Experience</p>
                    </div>
                    <CheckCircle className="text-green-500 h-5 w-5 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="group">
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-secondary h-6 w-6" />
                <h3 className="text-xl font-semibold font-display">Backend Development</h3>
              </div>
              
              <div className="space-y-3 mt-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="relative flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-xl shadow-sm h-full group-hover:transform group-hover:-translate-y-1 transition-transform">
                    <div className="flex-grow">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.experience} Experience</p>
                    </div>
                    <CheckCircle className="text-green-500 h-5 w-5 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="group">
            <div className="flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-secondary h-6 w-6" />
                <h3 className="text-xl font-semibold font-display">Tools & Others</h3>
              </div>
              
              <div className="space-y-3 mt-4">
                {toolsSkills.map((skill) => (
                  <div key={skill.name} className="relative flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-xl shadow-sm h-full group-hover:transform group-hover:-translate-y-1 transition-transform">
                    <div className="flex-grow">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.experience} Experience</p>
                    </div>
                    <CheckCircle className="text-green-500 h-5 w-5 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
