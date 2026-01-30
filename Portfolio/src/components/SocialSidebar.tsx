import { Github, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <div className="fixed bottom-0 left-6 lg:left-10 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <a
          href="https://github.com/VivekPatel8433"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/vivek-patel-6b493b336/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:vivekpatel8433@example.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Right Sidebar - Email */}
      <div className="fixed bottom-0 right-6 lg:right-10 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <a
          href="mailto:vivek@example.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-widest [writing-mode:vertical-rl]"
        >
          vivekpatel8433@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;
