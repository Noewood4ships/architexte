const references = [
  "Europäische Kommission",
  "Europäisches Parlament",
  "Rat der Europäischen Union",
  "Europäischer Rechnungshof",
  "Wirtschafts- und Sozialausschuss",
  "Kunsthistorisches Museum Wien",
  "Albertina",
  "MuseumsQuartier Wien",
  "Jüdisches Museum Berlin",
  "Centre Pompidou",
  "Deutsches Historisches Museum",
  "Friedrich-Ebert-Stiftung",
];

const References = () => {
  return (
    <section id="referenzen" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
          <h2 className="heading-section mb-4">Referenzen</h2>
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto">
            Vertrauen von führenden Institutionen in Kultur und Politik.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {references.map((reference) => (
            <div
              key={reference}
              className="text-center py-4 border-b border-primary-foreground/10 hover:border-accent/50 transition-colors"
            >
              <span className="text-sm font-medium text-primary-foreground/90">
                {reference}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <p className="text-center text-primary-foreground/60 text-sm mt-12">
          Und viele weitere Museen, NGOs, Agenturen und Unternehmen.
        </p>
      </div>
    </section>
  );
};

export default References;
