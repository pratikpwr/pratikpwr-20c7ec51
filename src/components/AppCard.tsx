import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

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
    <Card className="group glass-card hover-card relative overflow-hidden">
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
      
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={`${name} app screenshot`}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Dark overlay on image for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-display group-hover:text-primary transition-colors duration-300">
            {name}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Links */}
          {(playStoreLink || appStoreLink || demoLink) && (
            <div className="flex items-center gap-4 pt-2 border-t border-border/50">
              {playStoreLink && (
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
                  aria-label="View on Play Store"
                >
                  <Smartphone size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="text-xs font-medium">Play Store</span>
                </a>
              )}
              {appStoreLink && (
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 group/link"
                  aria-label="View on App Store"
                >
                  <Smartphone size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="text-xs font-medium">App Store</span>
                </a>
              )}
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-secondary transition-colors duration-200 group/link"
                  aria-label="View demo"
                >
                  <Globe size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                  <span className="text-xs font-medium">Live Demo</span>
                </a>
              )}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default AppCard;