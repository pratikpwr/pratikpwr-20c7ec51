
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-display font-bold tracking-tight">
              <span className="text-gradient">Pratik Pawar</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1 font-light">
              Building apps that make a difference ✨
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Journey</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Contact</a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light">
            © {currentYear} Pratik Pawar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-light">
            Crafted with <span className="text-red-500">❤️</span> & <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
