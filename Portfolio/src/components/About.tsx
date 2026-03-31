import { Code2, Database, Palette, Server } from "lucide-react";

const skills = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Firebase",
  "REST APIs",
  "Git & GitHub",
  "Deployment Tools",
  "C#",
  "PHP",
  "Java",
  "Kotlin",
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernates", 
  "CI/CD"
  
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-num="01.">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Vivek, a passionate Software Developer based in
              Calgary. I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is
              to always build products that provide pixel-perfect, performant
              experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've had the privilege of working on a variety of projects - from
              building{" "}
              <span className="text-primary">web applications</span>{" "}
              to creating{" "}
              <span className="text-primary">real-time systems</span>. I'm
              always excited to learn new technologies and solve complex
              problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Skills List */}
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Image / Avatar Placeholder */}
          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-secondary to-navy-light flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30"><img src="profile.png"></img></span>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Code2, label: "Frontend", desc: "HTML5 & CSS3, Tailwind CSS, React, TypeScipt, Next.js." },
            { icon: Server, label: "Backend", desc: "Node.js, Express, APIs, C#, PHP, Java." },
            { icon: Database, label: "Database", desc: "MongoDB, Firebase, AWS, MySQL." },
            { icon: Palette, label: "Design", desc: "Responsive UI, Canvas" },
          ].map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{label}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
