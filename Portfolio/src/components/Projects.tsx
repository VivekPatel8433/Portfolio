import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Shared Workspace Web App",
    description:
      "A Full-Stack Web Application That Enables Property Owners To List Workspaces And Co-Workers To Book Them. Implemented Secure User Authentication, Dynamic Dashboards For Owners And Co-Workers, CRUD Functionality For Workspace Listings, And Role-Based Access Control. ",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind CSS, REST APIs"],
    liveUrl: "https://github.com/VivekPatel8433/WorkSpace-Project",
    githubUrl: "https://github.com/VivekPatel8433/WorkSpace-Project",
    featured: true,
    image: "/Workspace.png"
  },
  {
    title: "Bella Vista Italian Restaurant Web App",
    description:
      "A Sleek, Modern, And Fully Responsive Web Application That Lets Users Effortlessly Book Restaurant Reservations With Real-Time API Integration And Booking System",
    techStack: ["React.js, JavaScript", "REST API", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://bella-vista-dun.vercel.app/",
    githubUrl: "https://github.com/VivekPatel8433/BellaVista",
    featured: true,
    image: "/BellaVista.png"
  },
    {
    title: "Flight Management System",
    description:
      " A Desktop Application Built With C# And WinForms That Enables Airline Staff To Manage Flights, Passengers, And Bookings Efficiently. Implemented Multi-Form Navigation, CRUD Functionality For Flights And Passengers, Basic User Authentication, And Data Validation Across Forms.",
    techStack: ["C#", "Winforms", "OOP", "Event Driven Programming", "Git"],
 
    liveUrl: "https://github.com/pedromolina1986/RAD_SODV2101_Final_Project",
    githubUrl: "https://github.com/pedromolina1986/RAD_SODV2101_Final_Project",
    featured: true,
    image:"/Flight.png"
  },
  {
    title: "Investment Dashboard",
    description:
      "A Dynamic Web Application Designed To Help Users Track, Visualize, And Manage Their Investments Efficiently. The Dashboard Provides Real-Time Insights Into Investment Performance, Allowing Users To Monitor Portfolio Growth, Compare Returns Across Different Assets, And Make Informed Financial Decisions.",
    techStack: ["JavaScript", "Tailwind CSS", "React.js", "UX/UI", "Charts"],
    liveUrl: "https://github.com/VivekPatel8433/InvestmentDashboard",
    githubUrl: "https://github.com/VivekPatel8433/InvestmentDashboard",
    featured: false,
  },
  {
    title: "Bank Database",
    description:
      "A Group Project Developed Using MySQL To Simulate The Core Operations Of A Banking Environment. The System Manages Customer Information, Accounts, Transactions, And Loan Details, Ensuring Data Integrity, Security, And Efficient Retrieval.",
    techStack: ["MySQL", "Database Design", "Normalization", "SQL Querying","Transaction Management", "ERDs"],
    liveUrl: "https://github.com/caroliantas2109/Bank-Database-",
    githubUrl: "https://github.com/caroliantas2109/Bank-Database-",
    featured: false,
  },
  {
    title: "Gabriel Services And Repair Website",
    description:
      "A Client-Focused Project Built On WordPress, Where I Focused On Debugging, Performance Optimization, And SEO Enhancements To Improve Site Reliability And Visibility. I Ensured The Website Runs Smoothly Across Devices And Is Optimized For Search Engines, Helping The Business Reach More Clients Online.",
    techStack: ["Wordpress Development", "Troubleshooting", "SEO Enhancements", "UX/UI Improvements"],
    liveUrl: "https://gabrielserviceandrepair.com",
    githubUrl: "https://gabrielserviceandrepair.com",
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-navy-light/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading" data-num="02.">
          Some Things I've Built
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={index % 2 === 1 ? "md:[direction:rtl] md:[&>*]:text-left" : ""}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-2">
           Noteworthy Projects
          </h3>
          <p className="text-muted-foreground text-sm">
            Check it out! 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
