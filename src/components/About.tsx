const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte" },
  { value: "50+", label: "Kunden" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-heading">Über mich</p>
            <h2 className="section-title mb-8">Noe Tessmann</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Als diplomierte Übersetzerin mit über 15 Jahren Erfahrung verbinde ich 
                sprachliche Präzision mit kulturellem Feingefühl.
              </p>
              <p>
                Mein Studium der Romanistik und Germanistik an der Sorbonne und der 
                Humboldt-Universität Berlin bildet das Fundament für meine Arbeit an 
                der Schnittstelle zweier großer europäischer Kulturen.
              </p>
              <p>
                Ich glaube, dass gute Übersetzung mehr ist als Wortübertragung. Sie ist 
                die Kunst, Bedeutung, Ton und Intention über kulturelle Grenzen hinweg 
                zu transportieren – ohne dass dabei etwas verloren geht.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/5] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground">Foto</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary">
                  <span className="block text-3xl font-heading font-bold text-accent">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
