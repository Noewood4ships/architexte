import { FileText, PenTool, Languages, Sparkles } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Übersetzung",
    description:
      "Fachübersetzungen aus dem Französischen, Englischen, Niederländischen und Portugiesischen ins Deutsche. Präzise und kontextsensibel.",
  },
  {
    icon: Sparkles,
    title: "Transkreation",
    description:
      "Kreative Anpassung von Marketingtexten und Kampagnen für den deutschsprachigen Markt – mehr als bloße Übersetzung.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description:
      "Professionelle deutsche Texte für Web, Print und Social Media. Von der Idee bis zum fertigen Text.",
  },
  {
    icon: FileText,
    title: "Lektorat",
    description:
      "Sorgfältige Überarbeitung und Korrektur Ihrer deutschen Texte für maximale sprachliche Qualität.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h2 className="heading-section text-foreground mb-4">Leistungen</h2>
          <p className="text-body max-w-xl">
            Maßgeschneiderte Sprachdienstleistungen für anspruchsvolle Kunden 
            aus Kultur, Politik und Wirtschaft.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon
                size={28}
                className="text-accent mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
