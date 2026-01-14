const sectors = [
  {
    title: "Kultur",
    description: "Museen, Galerien, Theater, Verlage und Kulturinstitutionen",
    examples: ["Ausstellungskataloge", "Audioguides", "Pressemitteilungen"],
  },
  {
    title: "Politik & Institutionen",
    description: "EU-Institutionen, NGOs, Gewerkschaften und öffentliche Einrichtungen",
    examples: ["Politische Kommunikation", "Berichte", "Strategiedokumente"],
  },
  {
    title: "Technik",
    description: "Technische Dokumentation für Industrie und Forschung",
    examples: ["Handbücher", "Produktdokumentation", "Normen"],
  },
];

const Sectors = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-section text-foreground mb-4">Fachgebiete</h2>
          <p className="text-body max-w-xl mx-auto">
            Spezialisierung auf Bereiche, in denen Sprache besonders zählt.
          </p>
        </div>

        {/* Sectors */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {sectors.map((sector, index) => (
            <div key={sector.title} className="text-center md:text-left">
              <span className="text-accent font-serif text-5xl font-light opacity-30">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground mt-2 mb-3">
                {sector.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {sector.description}
              </p>
              <ul className="space-y-1">
                {sector.examples.map((example) => (
                  <li
                    key={example}
                    className="text-sm text-foreground/80 flex items-center justify-center md:justify-start gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
