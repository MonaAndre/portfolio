import { useTranslation } from "react-i18next";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              MA
            </span>
            <span className="font-medium">Portfolio</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear}
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {t("footer.backToUp")} ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
