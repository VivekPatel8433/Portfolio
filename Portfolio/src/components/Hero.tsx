import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-4xl">
        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-5 opacity-0 animate-fade-up delay-100">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-up delay-200">
          Vivek Patel.
        </h1>

        {/* Tagline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 opacity-0 animate-fade-up delay-300">
           Where Code Meets Craft.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up delay-400">
          I’m a Software Developer building dynamic, user-friendly web and cloud solutions, as well as accessible digital tools. I focus on clean, maintainable code and human-centered experiences that solve real problems across platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-500">
          <Button
            variant="heroPrimary"
            size="lg"
            onClick={() => scrollTo("#projects")}
          >
            View Projects
          </Button>
          <Button variant="hero" size="lg" onClick={() => scrollTo("#contact")}>
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-0 animate-fade-in delay-500">
        <button
          onClick={() => scrollTo("#about")}
          className="text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
