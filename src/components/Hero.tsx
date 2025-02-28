
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container relative w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image - Changed order to be first in mobile view */}
            <div className="flex justify-center md:justify-start animate-fade-in reveal-delay-1 order-1 md:order-1">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-secondary/20 blur-lg"></div>
                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/lovable-uploads/400afafe-afd6-48ef-b1ae-4454b493c39a.png" 
                    alt="Pratik Pawar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left order-2 md:order-2">
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
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-6 animate-fade-in reveal-delay-4">
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
          </div>
        </div>
        
        {/* Scroll indicator - only visible on larger screens */}
        <div className="hidden md:block md:absolute md:bottom-10 md:left-0 md:right-0 md:mx-auto md:w-fit animate-fade-in reveal-delay-5">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-medium mb-2">Scroll down</span>
            <ArrowDownCircle className="animate-bounce" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
