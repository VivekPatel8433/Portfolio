import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Links - Mobile */}
        <div className="flex md:hidden gap-6 mb-4">
          <a
            href="https://github.com/vivekpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/vivekpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:vivek@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Credit */}
        <div className="text-center md:text-left">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by{" "}
            <span className="text-primary">Vivek Patel</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
