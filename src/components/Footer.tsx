
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="text-center">
          <p className="text-sm font-display font-medium tracking-tight">Pratik Pawar</p>
          <p className="text-xs text-muted-foreground mt-1 font-light">Sr. Flutter Developer</p>
          
          <div className="mt-8 flex justify-center space-x-8">
            <a href="#home" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Home</a>
            <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">About</a>
            <a href="#experience" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Experience</a>
            <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Projects</a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Contact</a>
          </div>
          
          <div className="mt-10">
            <p className="text-muted-foreground text-xs font-light">
              Crafted with <span className="text-red-500">❤️</span> <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a>
            </p>
            <p className="text-muted-foreground text-xs mt-1 font-light">
              © {currentYear} Pratik Pawar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
