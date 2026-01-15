const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-2xl font-semibold">
              architexte
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Übersetzungen Französisch – Deutsch
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#sectors"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fachgebiete
            </a>
            <a
              href="#references"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Referenzen
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Noe Tessmann. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
