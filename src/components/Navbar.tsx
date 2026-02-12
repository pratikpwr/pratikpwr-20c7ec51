
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const htmlElement = section as HTMLElement;
        const sectionTop = htmlElement.offsetTop;
        const sectionHeight = htmlElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/349e46a0-86c6-433a-8b8a-dc4c45468c2d.png" 
              alt="Pratik Pawar Logo" 
              className="w-5 h-5"
            />
            <span className="text-sm font-display font-semibold tracking-tight">Pratik Pawar</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link text-muted-foreground ${
                  activeSection === link.href.substring(1) && link.name !== 'Home'
                    ? 'text-foreground after:w-full'
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-3 ml-4">
              <a 
                href="https://github.com/pratikpwr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratikpwr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1leXRA5M61I4nziQzX8AtsRccU00caiI7/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Resume"
              >
                <FileText size={18} />
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <a 
              href="https://drive.google.com/file/d/1leXRA5M61I4nziQzX8AtsRccU00caiI7/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mr-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText size={18} />
            </a>
            <ThemeToggle />
            <button 
              className="ml-2 text-foreground" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`block py-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors ${
                  activeSection === link.href.substring(1) && link.name !== 'Home'
                    ? 'text-foreground'
                    : ''
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 py-4">
              <a 
                href="https://github.com/pratikpwr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratikpwr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
