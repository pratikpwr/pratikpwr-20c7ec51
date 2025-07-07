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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={`${name} app screenshot`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-display">{name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Links */}
        {(playStoreLink || appStoreLink || demoLink) && (
          <div className="flex items-center gap-3 pt-2">
            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on Play Store"
              >
                <Smartphone size={18} />
              </a>
            )}
            {appStoreLink && (
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on App Store"
              >
                <Smartphone size={18} />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View demo"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AppCard;