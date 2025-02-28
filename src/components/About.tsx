
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Technology-driven professional with 3 years of experience in Mobile Application Development</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70"></div>
              <div className="relative glass-card p-1 overflow-hidden">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/1ef5d162-32de-4d50-a713-8c82b1ce5ce3.png" 
                    alt="Pratik Pawar speaking at Flutter Nashik event" 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Profile Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dynamic Mobile Application Developer Professional with a strong focus on Flutter Development, seeking to leverage extensive
                  experience in creating high-performance applications within innovative tech environments, particularly in the realms of 
                  ecommerce, AgriTech and digital solutions.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Currently working as Senior Flutter Developer at Eigital (EatOS), focusing on the integration of sophisticated payment systems
                  to enhance transaction efficiency and user satisfaction.</li>
                  <li>Gained expertise in various aspects of Mobile Development, including payment gateway integrations, performance
                  optimization, and cross-platform application enhancements.</li>
                  <li>Proven track record of elevating the crash-free rate of applications significantly from 82% to 94% by implementing thorough
                  debugging processes and optimization strategies.</li>
                  <li>Proficient in utilizing CI/CD pipelines for efficient app delivery, automated testing, and version control using Git, ensuring fast,
                  reliable, and scalable app releases.</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Education</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>B.E. in Computer Science Engineering</p>
                <p>SITRC Nashik, 2018 - 2022</p>
                <p>CGPA: 8.8</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Highlights</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Speaker at Flutter Nashik Event: Delivered an in-depth presentation on the Flutter learning roadmap, offering valuable insights to aspiring developers.</p>
                <p>• Host of Tech Meetups: Organized and facilitated multiple tech meetups, fostering a collaborative local tech community and promoting knowledge sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
