const sectors = [
  {
    title: "Kultur",
    subtitle: "Kunst & Kulturvermittlung",
    description:
      "Übersetzungen für Museen, Galerien, Kulturinstitutionen und Verlage. Von Ausstellungskatalogen bis zu Pressemitteilungen.",
    examples: ["Ausstellungstexte", "Kataloge", "Kunstkritik", "Kulturprogramme"],
  },
  {
    title: "Politik & Institutionen",
    subtitle: "Öffentlicher Sektor",
    description:
      "Präzise Übersetzungen für politische Institutionen, NGOs und internationale Organisationen. Diplomatische Sensibilität garantiert.",
    examples: ["Berichte", "Policy Papers", "Reden", "Pressemitteilungen"],
  },
  {
    title: "Technologie",
    subtitle: "Innovation & Industrie",
    description:
      "Fachübersetzungen für technische Dokumentationen, Softwarelokalisierung und industrielle Kommunikation.",
    examples: ["Technische Docs", "UI/UX-Texte", "Whitepapers", "Patente"],
  },
];

const Sectors = () => {
  return (
    <section id="sectors" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="section-heading">Fachgebiete</p>
        <h2 className="section-title mb-16">
          Expertise in drei Welten
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className="group relative p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <span className="absolute top-8 right-8 text-6xl font-heading font-bold text-secondary">
                0{index + 1}
              </span>
              
              <h3 className="text-2xl font-heading font-semibold mb-2 relative">
                {sector.title}
              </h3>
              <p className="text-sm text-accent mb-4">{sector.subtitle}</p>
              <p className="text-muted-foreground mb-6 relative">
                {sector.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {sector.examples.map((example) => (
                  <span
                    key={example}
                    className="text-xs px-3 py-1 bg-secondary text-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
