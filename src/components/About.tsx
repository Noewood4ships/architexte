const About = () => {
  return (
    <section id="ueber-mich" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <span className="font-serif text-6xl text-accent/30">NT</span>
                  <p className="text-muted-foreground text-sm mt-4">Noe Tessmann</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="accent-line mb-6" />
            <h2 className="heading-section text-foreground mb-6">Über mich</h2>
            
            <div className="space-y-4 text-body">
              <p>
                Seit über 25 Jahren übersetze ich Texte ins Deutsche – mit Leidenschaft 
                für Sprache und Präzision im Detail. Mein Schwerpunkt liegt auf Texten 
                aus Kultur, Politik und Technik.
              </p>
              <p>
                Als staatlich geprüfter Übersetzer für Französisch und Englisch arbeite 
                ich für renommierte Institutionen wie die Europäische Kommission, 
                führende Museen und internationale Organisationen.
              </p>
              <p>
                Mein Ansatz: Jeder Text verdient individuelle Aufmerksamkeit. 
                Ich übersetze nicht nur Worte, sondern vermittle Bedeutung, 
                Ton und kulturellen Kontext.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <span className="font-serif text-3xl text-accent">25+</span>
                <p className="text-sm text-muted-foreground mt-1">Jahre Erfahrung</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-accent">4</span>
                <p className="text-sm text-muted-foreground mt-1">Sprachen</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-accent">100+</span>
                <p className="text-sm text-muted-foreground mt-1">Auftraggeber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
