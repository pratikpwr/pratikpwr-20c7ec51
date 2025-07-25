
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
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // offset to trigger earlier

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
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/349e46a0-86c6-433a-8b8a-dc4c45468c2d.png" 
              alt="Pratik Pawar Logo" 
              className="w-6 h-6"
            />
            <span className="text-xl font-display font-bold text-primary">Pratik Pawar</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`nav-link font-medium ${
                  activeSection === link.href.substring(1) && link.name !== 'Home'
                    ? 'text-primary after:w-full'
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Social links and Theme Toggle */}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="https://github.com/pratikpwr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratikpwr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1leXRA5M61I4nziQzX8AtsRccU00caiI7/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Resume"
              >
                <FileText size={20} />
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
              className="mr-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
            <ThemeToggle />
            <button 
              className="ml-2 text-foreground" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`block py-2 font-medium hover:text-primary transition-colors ${
                  activeSection === link.href.substring(1) && link.name !== 'Home'
                    ? 'text-primary'
                    : ''
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            
            {/* Social links */}
            <div className="flex items-center space-x-4 py-4">
              <a 
                href="https://github.com/pratikpwr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pratikpwr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
