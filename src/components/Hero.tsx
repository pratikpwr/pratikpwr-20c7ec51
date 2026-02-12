
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import flutterIcon from '@/assets/icons/flutter.svg';
import dartIcon from '@/assets/icons/dart.svg';
import androidIcon from '@/assets/icons/android.svg';
import appleIcon from '@/assets/icons/apple.svg';
import cursorLightIcon from '@/assets/icons/cursor-light.svg';
import cursorDarkIcon from '@/assets/icons/cursor-dark.svg';
import claudeIcon from '@/assets/icons/claude.svg';

const getOrbitingTools = (isDark: boolean) => [
  { name: 'Flutter', icon: flutterIcon },
  { name: 'Dart', icon: dartIcon },
  { name: 'Android', icon: androidIcon },
  { name: 'iOS', icon: appleIcon },
  { name: 'Cursor', icon: isDark ? cursorDarkIcon : cursorLightIcon },
  { name: 'Claude', icon: claudeIcon },
];

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const orbitingTools = getOrbitingTools(isDark);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      {/* Gradient blobs for visual warmth */}
      <div className="gradient-blob w-96 h-96 -top-48 -right-48" />
      <div className="gradient-blob w-72 h-72 bottom-20 -left-36" style={{ animationDelay: '-5s' }} />

      <div className="section-container relative w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image with Orbiting Icons */}
            <div className="flex justify-center md:justify-start animate-scale-fade reveal-delay-1 order-1 md:order-1">
              <div className="relative">
                {/* Orbit ring */}
                <div className="orbit-container">
                  {orbitingTools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="orbit-icon"
                      style={{
                        '--orbit-delay': `${-(index * (20 / orbitingTools.length))}s`,
                        '--orbit-index': index,
                      } as React.CSSProperties}
                    >
                      <div className="orbit-icon-inner">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-9 h-9 md:w-11 md:h-11"
                          title={tool.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative h-64 w-64 md:h-80 md:w-80 profile-img rounded-full overflow-hidden border-2 border-primary/20 glow-primary">
                  <img 
                    src="/lovable-uploads/400afafe-afd6-48ef-b1ae-4454b493c39a.png" 
                    alt="Pratik Pawar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-8 text-center md:text-left order-2 md:order-2">
              {/* Greeting badge */}
              <div className="inline-block animate-fade-in reveal-delay-1">
                <div className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium tracking-wide flex items-center gap-2 w-fit mx-auto md:mx-0">
                  <Sparkles size={14} className="text-primary" />
                  Hey there! I'm a
                </div>
              </div>
              
              {/* Main heading */}
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tighter animate-text-reveal reveal-delay-2">
                  <span className="text-gradient">Flutter</span>{' '}
                  Developer
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl font-light text-muted-foreground animate-text-reveal reveal-delay-3 leading-relaxed">
                  I'm <span className="font-medium text-foreground">Pratik Pawar</span> — I build beautiful, high-performance mobile apps that people love to use ✨
                </p>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-4 animate-fade-in reveal-delay-4">
                <a 
                  href="#contact" 
                  className="btn-gradient"
                >
                  Let's Work Together
                </a>
                <a 
                  href="#projects" 
                  className="group flex items-center gap-2 px-4 py-3.5 font-medium text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  See My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex justify-center md:justify-start gap-8 pt-4 animate-fade-in reveal-delay-5">
                <div>
                  <p className="text-2xl font-bold text-gradient">5+</p>
                  <p className="text-xs text-muted-foreground">Years Exp</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient">10+</p>
                  <p className="text-xs text-muted-foreground">Apps Built</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient">4</p>
                  <p className="text-xs text-muted-foreground">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
