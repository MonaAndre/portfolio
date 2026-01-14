export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-50 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-75 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="max-w-4xl relative z-10 ">
        <div className="space-y-3 mt-10">
          {/* Status badge */}
          <div className="text-start mb-6">
            <div className="inline-flex ml-auto items-center gap-2 px-4 py-2 rounded-full border-gradient bg-card/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Öppen för jobb</span>
            </div>
          </div>


          {/* Name with unique typography */}
          <div className="space-y-4 text-start">
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-foreground">Frontend</span>
              <br />
              <span className="text-gradient"><span className="text-white dark:text-black p-2">Utvecklare</span></span>
            </h1>
          </div>

          {/* Subtitle with accent */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed text-start">
            Hej! Jag heter Mona Andreeva. Jag är frontend utvecklare som  skapar digitala upplevelser med passion för detaljer
            och studerar <span className="text-primary font-medium">.NET Systemutveckling</span>.
          </p>

          {/* CTA with unique design */}
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:glow-accent transition-all duration-300"
            >
              Se projekt
              <span className="group-hover:translate-x-1 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 border-gradient rounded-full text-foreground hover:bg-card/50 transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Social with unique hover */}
          <div className="flex items-center gap-4 pt-8">
            <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Hitta mig</span>
            <div className="w-12 h-px bg-border" />
            <a
              href="https://github.com/MonaAndre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                <path d="M12.318 1.30961C14.7048 -0.31279 15.7506 0.0303135 15.7506 0.0303135C16.437 1.74629 16.0004 3.02593 15.8756 3.33793C16.6709 4.21144 17.1539 5.31893 17.1539 6.69145C17.1539 11.4805 14.2373 12.5415 11.4605 12.8536C11.9129 13.2436 12.3023 13.9924 12.3023 15.1621C12.3023 16.7956 12.3517 18.0288 12.3043 19.4092C11.1045 19.7922 9.82638 20 8.4996 20C7.63992 20 6.80069 19.9124 5.98983 19.7471C5.9679 18.8748 6.06307 17.213 6.06307 16.2696C2.92793 16.8467 2.11651 15.5058 1.86679 14.8038C1.72642 14.445 1.11779 13.3378 0.587488 13.0411C0.150688 12.8071 -0.473337 12.2295 0.571863 12.2139C1.55448 12.1985 2.25684 13.1188 2.49081 13.4932C3.61402 15.3805 5.408 14.8501 6.12557 14.5225C6.23481 13.7116 6.56179 13.1655 6.9205 12.8536C4.14376 12.5415 1.24276 11.4649 1.24276 6.69145C1.24279 5.33452 1.72573 4.21144 2.52108 3.33793C2.39628 3.02593 1.9597 1.7463 2.64608 0.0303135C2.64608 0.0303135 3.6919 -0.29719 6.0787 1.30961C7.07685 1.02892 8.13732 0.888755 9.19784 0.888712C10.2585 0.888712 11.3197 1.02887 12.318 1.30961Z" fill="currentColor" />
              </svg>

            </a>
            <a
              href="https://www.linkedin.com/in/mona-andreeva/"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="43"
                viewBox="0 0 16 16"
                fill="none">


                <circle cx="8" cy="8" r="8" fill="" />

                <g transform="scale(0.82) translate(1.75 1.75)">
                  <path fill="currentColor"
                    d="M4.943 6.169H2.542v7.225h2.401V6.169z
         M3.743 3.934c.837 0 1.358-.554 1.358-1.248
         -.015-.709-.52-1.248-1.342-1.248S2.4 1.977
         2.4 2.685c0 .694.521 1.248 1.327 1.248z
         M8.451 13.394V9.359c0-.216.016-.432.08-.586
         .173-.431.568-.878 1.232-.878.869 0
         1.216.662 1.216 1.634v3.865h2.401V9.25
         c0-2.22-1.184-3.252-2.764-3.252-1.274 0
         -1.845.7-2.165 1.193v.025h-.016l.016-.025
         V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </g>
              </svg>


            </a>
          </div>
        </div>
      </div>

    </section>
  );
};


