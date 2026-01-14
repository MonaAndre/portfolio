import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  const navLinks = [
    { href: "#about", label: "Om", num: "01" },
    { href: "#skills", label: "Skills", num: "02" },
    { href: "#projects", label: "Projekt", num: "03" },
    { href: "#contact", label: "Kontakt", num: "04" },
  ];

  const openCVmodal = () => {
    setIsCvModalOpen(true);
  };

  const closeCVmodal = () => {
    setIsCvModalOpen(false);
  };

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/60 backdrop-blur-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              MA
            </span>
            <span className="font-medium tracking-tight group-hover:text-primary transition-colors">
              Portfolio
            </span>
          </a>
          <button
            onClick={toggleTheme}
            className="block cursor-pointer md:hidden px-4 py-2 rounded-full border-gradient text-xs font-medium hover:bg-card/50 transition-colors" >
            🌙 / ☀️
          </button>

          <div className="relative">
            <button className="inline hover:bg-linear-to-br hover:from-orange-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent" onClick={openCVmodal}>CV</button>
            <div className={isCvModalOpen ? "absolute p-7 top-10 right-0 flex flex-col justify-center items-center rounded-xl gap-2  animate-fade-in border-t border-border bg-background/80 backdrop-blur-xl border-b" : "hidden"}>
              <button className="ml-auto absolute top-1 right-0 flex justify-center w-8  p-1 rounded-2xl border border-border bg-card/30" onClick={closeCVmodal}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg></button>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4  py-2 rounded-full border-gradient text-sm font-medium"
              >
                Preview CV
              </a>
              <span>eller</span>
              <a
                href={cvUrl} download="cv.pdf"
                className=" px-4 py-2 rounded-full border-gradient text-sm font-medium text-center hover:bg-card/50 transition-colors"
              >
                Ladda CV
              </a>
            </div>
          </div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Button */}
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="cursor-pointer px-4 py-2 ml-4 rounded-full border-gradient text-xs font-medium hover:bg-card/50 transition-colors " >
              🌙 / ☀️
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden p-2 flex flex-col justify-center gap-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`h-0.5 w-5 bg-black dark:bg-white transition-all duration-300
      ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-black dark:bg-white transition-all duration-300
      ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-black dark:bg-white transition-all duration-300
      ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>

        </div>


        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-8 animate-fade-in border-t border-border bg-background/80 backdrop-blur-xl border-b">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs font-mono text-primary">{link.num}</span>
                  {link.label}
                </a>
              ))}


            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

