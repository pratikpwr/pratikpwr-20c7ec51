
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            {/* Badge */}
            <div className="inline-block animate-fade-in reveal-delay-1">
              <div className="px-4 py-1.5 rounded-full border border-border bg-muted/80 backdrop-blur-sm text-sm font-medium">
                Sr. Flutter Developer
              </div>
            </div>
            
            {/* Main heading */}
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-text-reveal reveal-delay-2">
                Pratik Pawar
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-muted-foreground animate-text-reveal reveal-delay-3">
                Crafting exceptional mobile experiences with Flutter
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 animate-fade-in reveal-delay-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover-card shadow-md"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-background border border-border font-medium hover-card shadow-sm"
              >
                View Projects
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in reveal-delay-5">
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-medium mb-2">Scroll down</span>
              <ArrowDownCircle className="animate-bounce" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
