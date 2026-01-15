import i18next from "i18next";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t } = useTranslation();
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
    { href: "#about", key: "nav.about", num: "01" },
    { href: "#skills", key: "nav.skills", num: "02" },
    { href: "#projects", key: "nav.projects", num: "03" },
    { href: "#contact", key: "nav.contact", num: "04" },
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

  const currentLang = i18next.language?.startsWith("sv") ? "sv" : "en";

  const toggleLanguage = () => {
    const next = currentLang === "sv" ? "en" : "sv";
    i18next.changeLanguage(next);
    document.documentElement.lang = next;
  };

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

          {/* theme button */}
          <button
            onClick={toggleTheme}
            className="block cursor-pointer md:hidden px-4 py-2 rounded-full border-gradient text-xs font-medium hover:bg-card/50 transition-colors" >
            🌙 / ☀️
          </button>

          {/* language button */}
          <button
            onClick={toggleLanguage}
            className=" cursor-pointer px-4 py-2 rounded-full border-gradient text-xs font-medium hover:bg-card/50 transition-colors"
            aria-label="Change language"
          >
            {currentLang === "sv" ? "EN" : "SV"}
          </button>

          {/* CV button + Cv Modal */}
          <div className="relative">
            <button className="inline cursor-pointer hover:bg-linear-to-br hover:from-orange-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent" onClick={openCVmodal}>CV</button>
            <div className={isCvModalOpen ? "absolute p-7 w-60 md:w-100 top-10 right-0 md:left-10 flex flex-col justify-center items-center rounded-xl gap-2  animate-fade-in border-t border-border bg-background/80 backdrop-blur-xl border-b" : "hidden"}>
              <button className="ml-auto absolute top-1 right-0 flex justify-center w-8  p-1 rounded-2xl border border-border bg-card/30" onClick={closeCVmodal}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg></button>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 flex gap-2 items-center py-2 rounded-full border-gradient text-sm font-medium"
              >
                {t("nav.viewCv")} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                </svg>
              </a>
              <span>{t("nav.or")}</span>
              <a
                href={cvUrl} download="cv.pdf"
                className=" px-4 flex gap-2 items-center py-2 rounded-full border-gradient text-sm font-medium text-center hover:bg-card/50 transition-colors"
              >
                {t("nav.downloadCv")}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
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
                {t(link.key)}
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
                  {t(link.key)}
                </a>
              ))}


            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

