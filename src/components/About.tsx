
import { Heart, Mic, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="gradient-blob w-80 h-80 top-20 -right-40 opacity-10" />
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">
            A Little About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">Not your typical "About" section — here's the real me 👋</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="scale" delay={0.2} className="order-2 md:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glow-primary">
              <img 
                src="/lovable-uploads/4eb24dff-f123-487e-a900-2cf73b2ed0c8.png" 
                alt="Pratik Pawar speaking at Flutter Nashik event" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <ScrollReveal direction="up" delay={0.3} className="order-1 md:order-2">
            <div className="space-y-8">
              <div className="gradient-card border border-border p-6 rounded-2xl">
                <p className="text-lg text-foreground font-light leading-relaxed">
                  I'm a Mobile App Developer who fell in love with Flutter from day one. 
                  Over the past <span className="font-semibold text-gradient">5+ years</span>, 
                  I've been turning ideas into pixel-perfect, high-performance apps — from AgriTech platforms 
                  serving thousands of farmers to restaurant POS systems processing real payments. 🚀
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mic size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Speaker & Community Builder</h4>
                    <p className="text-sm text-muted-foreground">Spoke at Flutter Nashik on learning roadmaps. I love sharing knowledge!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Tech Meetup Host</h4>
                    <p className="text-sm text-muted-foreground">Organized multiple meetups to foster our local dev community.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">B.E. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">SITRC Nashik, 2018–2022 • CGPA: 8.8</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
