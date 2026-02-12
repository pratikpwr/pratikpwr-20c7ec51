
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Technology-driven professional with 5+ years of experience in Mobile Application Development</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="scale" delay={0.2} className="order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/4eb24dff-f123-487e-a900-2cf73b2ed0c8.png" 
                alt="Pratik Pawar speaking at Flutter Nashik event" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <ScrollReveal direction="up" delay={0.3} className="order-1 md:order-2">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Profile Summary</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Dynamic Mobile Application Developer Professional with a strong focus on Flutter Development, seeking to leverage extensive
                  experience in creating high-performance applications within innovative tech environments, particularly in the realms of 
                  ecommerce, AgriTech and digital solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Education</h3>
                <div className="space-y-1 text-muted-foreground font-light">
                  <p>B.E. in Computer Science Engineering</p>
                  <p>SITRC Nashik, 2018 - 2022</p>
                  <p>CGPA: 8.8</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Highlights</h3>
                <div className="space-y-3 text-muted-foreground font-light leading-relaxed">
                  <p>• Speaker at Flutter Nashik Event: Delivered an in-depth presentation on the Flutter learning roadmap, offering valuable insights to aspiring developers.</p>
                  <p>• Host of Tech Meetups: Organized and facilitated multiple tech meetups, fostering a collaborative local tech community and promoting knowledge sharing.</p>
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
