import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative section-padding pt-32">
      <div className="container-narrow">
        {/* Accent Line */}
        <div className="accent-line mb-8 animate-fade-up opacity-0" />

        {/* Main Heading */}
        <h1 className="heading-display text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
          Präzise. Menschlich.
          <br />
          <span className="text-accent">Engagiert.</span>
        </h1>

        {/* Subheading */}
        <p className="text-body max-w-2xl mb-12 animate-fade-up opacity-0 animation-delay-200">
          Übersetzungen und Texte für Kultur, Politik und Technik – 
          mit über 25 Jahren Erfahrung. Deutsch aus dem Französischen, 
          Englischen, Niederländischen und Portugiesischen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-foreground font-medium text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Leistungen entdecken
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-400">
        <a
          href="#leistungen"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Entdecken</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;
