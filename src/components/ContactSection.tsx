

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-95 h-125 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute top-1/4 right-30 w-75 h-75 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono text-primary tracking-wider">04</span>
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Kontakt</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - CTA */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Låt oss bygga något <span className=" bg-linear-to-br from-orange-500 to-fuchsia-500 bg-clip-text text-transparent">fantastiskt</span> tillsammans
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Har du ett projekt i åtanke? Jag är alltid öppen för att diskutera nya möjligheter.
            </p>

            <a
              href="mailto:monaelizabet@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
            >
              <span className="p-4 rounded-full bg-primary text-primary-foreground group-hover:glow-accent transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </span>
              monaelizabet@gmail.com
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg></span>
            </a>
          </div>

          {/* Right side - Links card */}
          <div className="p-8 md:p-12 rounded-3xl border-gradient bg-background/50 backdrop-blur-sm">
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">
              Följ mig
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/MonaAndre"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center gap-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                <path d="M12.318 1.30961C14.7048 -0.31279 15.7506 0.0303135 15.7506 0.0303135C16.437 1.74629 16.0004 3.02593 15.8756 3.33793C16.6709 4.21144 17.1539 5.31893 17.1539 6.69145C17.1539 11.4805 14.2373 12.5415 11.4605 12.8536C11.9129 13.2436 12.3023 13.9924 12.3023 15.1621C12.3023 16.7956 12.3517 18.0288 12.3043 19.4092C11.1045 19.7922 9.82638 20 8.4996 20C7.63992 20 6.80069 19.9124 5.98983 19.7471C5.9679 18.8748 6.06307 17.213 6.06307 16.2696C2.92793 16.8467 2.11651 15.5058 1.86679 14.8038C1.72642 14.445 1.11779 13.3378 0.587488 13.0411C0.150688 12.8071 -0.473337 12.2295 0.571863 12.2139C1.55448 12.1985 2.25684 13.1188 2.49081 13.4932C3.61402 15.3805 5.408 14.8501 6.12557 14.5225C6.23481 13.7116 6.56179 13.1655 6.9205 12.8536C4.14376 12.5415 1.24276 11.4649 1.24276 6.69145C1.24279 5.33452 1.72573 4.21144 2.52108 3.33793C2.39628 3.02593 1.9597 1.7463 2.64608 0.0303135C2.64608 0.0303135 3.6919 -0.29719 6.0787 1.30961C7.07685 1.02892 8.13732 0.888755 9.19784 0.888712C10.2585 0.888712 11.3197 1.02887 12.318 1.30961Z" fill="currentColor" />
              </svg>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">Mina projekt</p>
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg></span>
              </a>

              <a
                href="https://www.linkedin.com/in/mona-andreeva/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-border hover:border-accent/50 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center gap-4">
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
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professionellt nätverk</p>
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg></span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                📍 Stockholm, Sverige
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
