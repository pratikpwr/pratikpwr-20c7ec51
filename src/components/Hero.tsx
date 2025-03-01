import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Default typing speed
  const [pauseDuration, setPauseDuration] = useState(1500); // Pause duration after each word
  const toRotate = ["Mobile App Developer", "Problem Solver", "Tech Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker: NodeJS.Timeout;

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (isDeleting) {
        setTypingSpeed(30); // Adjust deleting speed
      }

      if (!isDeleting && text === fullText) {
        clearInterval(ticker);
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(30);
          ticker = setInterval(tick, typingSpeed);
        }, pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        clearInterval(ticker);
        setTimeout(() => {
          setTypingSpeed(150); // Reset typing speed
          ticker = setInterval(tick, typingSpeed);
        }, 500);
      }
    };

    ticker = setInterval(tick, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [text, isDeleting, loopNum, typingSpeed, pauseDuration, toRotate]);

  return (
    <section id="home" className="py-20 min-h-[85vh] flex items-center justify-center gradient-bg">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-center md:text-left mb-4">
              Hi, I'm <span className="text-primary">Pratik Pawar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display text-center md:text-left mb-6 text-muted-foreground">
              I'm a <span className="text-white ml-2">{text}</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center md:text-left mb-8">
              A passionate mobile app developer dedicated to crafting innovative solutions and creating seamless user experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#projects" className="group relative h-12 w-48 overflow-hidden rounded-lg bg-secondary text-sm font-medium text-white">
                <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white">
                  Explore Projects
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:animate-ping" />
                </span>
              </a>
              <a href="#contact" className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-white">
                <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-white">
                  Contact Me
                  <ArrowDown className="inline-block ml-2 h-4 w-4 group-hover:animate-bounce" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 blur-2xl opacity-50 animate-float"></div>
                <div className="relative rounded-full overflow-hidden h-80 w-80 md:h-96 md:w-96">
                  <img
                    src="/lovable-uploads/4eb24dff-f123-487e-a900-2cf73b2ed0c8.png"
                    alt="Pratik Pawar"
                    className="w-full h-full object-cover profile-img"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
