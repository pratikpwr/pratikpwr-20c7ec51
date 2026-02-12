import { Smartphone, Globe } from 'lucide-react';

interface AppCardProps {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  demoLink?: string;
}

const AppCard = ({
  name,
  description,
  image,
  technologies,
  playStoreLink,
  appStoreLink,
  demoLink
}: AppCardProps) => {
  return (
    <div className="group clean-card overflow-hidden h-full">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} app screenshot`}
          className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-5 space-y-3">
        <h5 className="text-base font-semibold font-display tracking-tight">
          {name}
        </h5>
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {(playStoreLink || appStoreLink || demoLink) && (
          <div className="flex items-center gap-4 pt-2">
            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-xs"
                aria-label="View on Play Store"
              >
                <Smartphone size={14} />
                <span>Play Store</span>
              </a>
            )}
            {appStoreLink && (
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-xs"
                aria-label="View on App Store"
              >
                <Smartphone size={14} />
                <span>App Store</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-xs"
                aria-label="View demo"
              >
                <Globe size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCard;
