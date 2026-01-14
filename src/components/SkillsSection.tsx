export const SkillsSection = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React & Vue", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
            color: "primary" as const
        },
        {
            category: "Backend",
            items: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "PostgreSql", "MongoDB"],
            color: "accent" as const
        },
        {
            category: "Verktyg",
            items: ["Git", "VS Code", "Rider", "Docker", "DataGrip & Mongo Compass"],
            color: "primary" as const
        },
    ];
    return (
        <section id="skills" className="py-10 md:py-25 px-6 bg-card/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-100 h-100 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-75 h-75 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono text-primary tracking-wider">02</span>
                    <div className="w-12 h-px bg-primary" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Kompetenser</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
                    Mina tekniska <span className="bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">stack</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.category}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 h-full">
                                {/* Category header */}
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className={`text-lg font-semibold ${skill.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                                        {skill.category}
                                    </h3>
                                    <span className="text-xs font-mono text-muted-foreground">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Skills list */}
                                <ul className="space-y-4">
                                    {skill.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${skill.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech marquee */}
                <div className="mt-16 pt-16 border-t border-border overflow-hidden">
                    <div className="flex gap-8 animate-[slide_20s_linear_infinite]">
                        {["React", "TypeScript", "C#", ".NET", "PostgreSQL", "Tailwind", "Git", "Docker","Figma", "MongoDB"].map((tech) => (
                            <span
                                key={tech}
                                className="text-2xl font-bold text-muted-foreground/20 whitespace-nowrap hover:text-primary transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


