const Footer = () => {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-accent text-xl font-serif font-semibold">A</span>
            <span className="font-serif text-lg font-medium text-foreground">
              rchitexte
            </span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#leistungen"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#referenzen"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Referenzen
            </a>
            <a
              href="#ueber-mich"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Über mich
            </a>
            <a
              href="#kontakt"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Architexte. Noe Tessmann.
          </p>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Impressum
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Datenschutz
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            AGB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
