
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-muted/50 dark:bg-gray-900/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <p className="text-lg font-medium font-display">Pratik Pawar</p>
          <p className="text-muted-foreground mt-1">Sr. Flutter Developer</p>
          
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pratik Pawar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
