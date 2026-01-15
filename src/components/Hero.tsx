import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="max-w-5xl">
        <p className="section-heading animate-fade-up opacity-0">
          Übersetzungen Französisch – Deutsch
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-[1.1] mb-8 animate-fade-up opacity-0 animation-delay-100">
          Sprache ist Architektur.
          <br />
          <span className="text-accent">Präzise. Elegant. Tragfähig.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-up opacity-0 animation-delay-200">
          Professionelle Übersetzungen für Kultur, Politik und Technologie. 
          Jeder Text verdient eine Struktur, die trägt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Projekt anfragen
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Leistungen entdecken
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-400">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
