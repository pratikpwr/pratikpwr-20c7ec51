
import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1fb6ec4f-af5f-49d4-870e-28eed2430339',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Contact Form Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="section-container">
        <ScrollReveal direction="blur">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hello? Feel free to reach out!</p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
          {/* Contact Form */}
          <ScrollReveal direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 focus:outline-none transition-colors duration-300 font-light"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 focus:outline-none transition-colors duration-300 font-light"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 focus:outline-none transition-colors duration-300 resize-none font-light"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-sm tracking-wide hover:opacity-90 transition-opacity duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
          
          {/* Contact Info */}
          <ScrollReveal direction="up" delay={0.3} className="order-first md:order-last">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold font-display tracking-tight mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail size={20} className="text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <a 
                        href="mailto:pratiksatishpawar@gmail.com" 
                        className="font-light hover:text-primary transition-colors"
                      >
                        pratiksatishpawar@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone size={20} className="text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                      <a 
                        href="tel:+917218172664" 
                        className="font-light hover:text-primary transition-colors"
                      >
                        +91 7218172664
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow me on</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/pratikpwr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/pratikpwr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/impratikpwr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
