const references = [
  "Goethe-Institut",
  "Französische Botschaft",
  "Kunsthalle München",
  "European Parliament",
  "Arte",
  "Siemens",
  "Centre Pompidou",
  "Bundesministerium",
];

const References = () => {
  return (
    <section id="references" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="section-heading text-primary-foreground/60">Referenzen</p>
        <h2 className="section-title mb-16">
          Vertrauen verdient
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {references.map((reference) => (
            <div
              key={reference}
              className="flex items-center justify-center p-6 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
            >
              <span className="text-lg font-heading font-medium text-center">
                {reference}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
