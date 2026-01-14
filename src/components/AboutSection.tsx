export const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-25 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-gradient rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl transform -rotate-3 overflow-hidden bg-img">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center absolute bottom-4">
                    <span className="text-2xl md:text-4xl font-bold text-white">{"{Mona Andreeva}"}</span>
                    <p className="text-muted-foreground font-mono text-sm mt-4">dev.portfolio</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 px-3 py-2 bg-primary text-primary-foreground rounded-full text-xs font-mono">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-2 bg-accent text-accent-foreground rounded-full text-xs font-mono">
                .NET
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-primary tracking-wider">01</span>
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Om mig</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Kreativ utvecklare med öga för <span className="bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">
                detaljer
              </span>

            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jag är en passionerad frontend-utvecklare som fördjupar mina kunskaper
                inom systemutveckling med fokus på .NET-ekosystemet.
              </p>
              <p>
                Kombinerar kreativitet med teknisk kompetens för att bygga moderna
                webbapplikationer som både ser bra ut och fungerar felfritt.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl border-gradient bg-card/30">
                <span className="text-4xl font-bold bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">3+</span>
                <p className="text-sm text-muted-foreground mt-2">År erfarenhet</p>
              </div>
              <div className="p-6 rounded-2xl border-gradient bg-card/30">
                <span className="text-4xl font-bold bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">10+</span>
                <p className="text-sm text-muted-foreground mt-2">Avslutade projekt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
