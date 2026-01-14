import fascom1 from "../imgs/fascomProject.png";
import fascom2 from "../imgs/fascomProject2.png";
import fascom3 from "../imgs/fascomProject3.jpeg";
import chatImg from "../imgs/project4.png";
import webshopImg from "../imgs/project3.png";
import todoImg from "../imgs/project1.png";
import findTime from "../imgs/projekt5.png";
import chatCSharp from "../imgs/project6.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Översättningsapplikation för FASCOM AB",
      description:
        "Ett projekt för Fascom AB där jag genomförde mitt examensarbete. Applikationen är utvecklad från grunden med fokus på responsiv och användarvänlig design. Jag arbetade med frontend i React och TypeScript samt integration mot ett REST API i samarbete med en backendutvecklare. Funktionalitet inkluderar hantering av språk, översättningsnycklar, filtrering och statistik, samt stöd för både ljus- och mörkt tema.",
      tech: ["React", "TypeScript", "TailwindCSS", "REST API", "Postman", "Användartester"],
      github: null,
      live: null,
      images: [fascom1, fascom2, fascom3],
      featured: true,
    },
    {
      title: "FindTime (Delad kalenderapplikation)",
      description:
        "En API för delad kalender projekt där användare kan skapa och hantera tillgänglighet för att hitta gemensamma tider. Projektet är byggt med fokus på datamodellering, API-struktur och databashantering.",
      tech: ["C#", "Entity Framework", "PostgreSQL"],
      github: "https://github.com/MonaAndre/FindTime-Backend.git",
      live: null,
      images: [findTime],
      featured: true,
    },
    {
      title: "Online Chat med C# och Socket.IO",
      description:
        "Online Chat med C# och Socket.IO",
      tech: ["SocketIO", "C#"],
      github: "https://github.com/MonaAndre/ChatExamination.git",
      live: null,
      images: [chatCSharp],
      featured: true,
    },
    {
      title: "Online Chat",
      description:
        "En realtidsbaserad onlinechatt där användare kan skapa konto, logga in och kommunicera med andra användare. Projektet består av både klient och server och inkluderar funktioner för autentisering, meddelandehantering och datalagring.",
      tech: ["JavaScript", "CSS", "Node.js", "MySQL"],
      github: "https://github.com/MonaAndre/chatstart-main.git",
      githubServer: "https://github.com/MonaAndre/chatstart-backend.git",
      live: null,
      images: [chatImg],
      featured: false,
    },
    {
      title: "Webbshop",
      description:
        "En webbshop med grundläggande e-handelsfunktionalitet såsom produktlista och varukorg. Användare kan lägga till och ta bort produkter, ändra antal och se den totala kostnaden i realtid.",
      tech: ["JavaScript", "SCSS", "Bootstrap"],
      github: "https://github.com/MonaAndre/the-webshop-team4.git",
      live: "https://webshopmonaandre.netlify.app",
      images: [webshopImg],
      featured: true,
    },
    {
      title: "To Do List",
      description:
        "En enkel och tydlig to do-list-applikation där användare kan lägga till uppgifter, markera dem som klara och ta bort dem. Fokus låg på struktur, typning med TypeScript och användarvänligt gränssnitt.",
      tech: ["TypeScript", "SCSS", "Bootstrap"],
      github: "https://github.com/MonaAndre/todos-MonaAndre.git",
      live: "https://todolistmonaandre.netlify.app",
      images: [todoImg],
      featured: true,
    }
  ];




  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-10 md:py-25 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono text-primary tracking-wider">03</span>
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Portfolio</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Utvalda <span className="bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">projekt</span>
        </h2>

        {/* Featured projects - large cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Project preview area */}
              <div className="aspect-video bg-linear-to-br from-card via-secondary to-card relative overflow-hidden">
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                        <path d="M12.318 1.30961C14.7048 -0.31279 15.7506 0.0303135 15.7506 0.0303135C16.437 1.74629 16.0004 3.02593 15.8756 3.33793C16.6709 4.21144 17.1539 5.31893 17.1539 6.69145C17.1539 11.4805 14.2373 12.5415 11.4605 12.8536C11.9129 13.2436 12.3023 13.9924 12.3023 15.1621C12.3023 16.7956 12.3517 18.0288 12.3043 19.4092C11.1045 19.7922 9.82638 20 8.4996 20C7.63992 20 6.80069 19.9124 5.98983 19.7471C5.9679 18.8748 6.06307 17.213 6.06307 16.2696C2.92793 16.8467 2.11651 15.5058 1.86679 14.8038C1.72642 14.445 1.11779 13.3378 0.587488 13.0411C0.150688 12.8071 -0.473337 12.2295 0.571863 12.2139C1.55448 12.1985 2.25684 13.1188 2.49081 13.4932C3.61402 15.3805 5.408 14.8501 6.12557 14.5225C6.23481 13.7116 6.56179 13.1655 6.9205 12.8536C4.14376 12.5415 1.24276 11.4649 1.24276 6.69145C1.24279 5.33452 1.72573 4.21144 2.52108 3.33793C2.39628 3.02593 1.9597 1.7463 2.64608 0.0303135C2.64608 0.0303135 3.6919 -0.29719 6.0787 1.30961C7.07685 1.02892 8.13732 0.888755 9.19784 0.888712C10.2585 0.888712 11.3197 1.02887 12.318 1.30961Z" fill="currentColor" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary text-primary-foreground hover:glow-accent transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects - list style */}
        <div className="border-t border-border pt-8">
          <h3 className="text-sm font-mono text-muted-foreground mb-8 uppercase tracking-wider">Fler projekt</h3>
          <div className="space-y-0">
            {otherProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.github ? project.github : "#"} target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-border hover:px-4 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(featuredProjects.length + index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


