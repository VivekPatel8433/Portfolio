import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  featured = false,
  image,
}: ProjectCardProps) => {
  if (featured) {
    return (
      <div className="relative grid md:grid-cols-12 gap-4 items-center group">
        {/* Project Image */}
        <div className="md:col-span-7 relative rounded-lg overflow-hidden aspect-video bg-navy-light">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
              <Folder className="w-16 h-16 text-primary/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-navy/50 group-hover:bg-transparent transition-all duration-300" />
        </div>

        {/* Project Info */}
        <div className="md:col-span-5 md:absolute md:right-0 md:text-right z-10">
          <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
            {liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <div className="bg-navy-light p-6 rounded-lg shadow-lg mb-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap md:justify-end gap-3 mb-4 font-mono text-xs text-muted-foreground">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="flex md:justify-end gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Non-featured card
  return (
    <div className="bg-navy-light rounded-lg p-6 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 group border border-transparent hover:border-primary/30">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-primary" />
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tech Stack */}
      <ul className="flex flex-wrap gap-3 mt-6 font-mono text-xs text-muted-foreground">
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
