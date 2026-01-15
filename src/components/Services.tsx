import { FileText, Languages, BookOpen, Edit3 } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Übersetzung",
    description:
      "Präzise Übersetzungen vom Französischen ins Deutsche für anspruchsvolle Texte aus Kultur, Politik und Technologie.",
  },
  {
    icon: Edit3,
    title: "Lektorat",
    description:
      "Sorgfältige Überarbeitung Ihrer Texte für sprachliche Klarheit, stilistische Konsistenz und inhaltliche Präzision.",
  },
  {
    icon: FileText,
    title: "Fachübersetzung",
    description:
      "Spezialisierte Übersetzungen für technische Dokumentationen, wissenschaftliche Publikationen und institutionelle Kommunikation.",
  },
  {
    icon: BookOpen,
    title: "Kulturelle Adaption",
    description:
      "Anpassung von Texten an den kulturellen Kontext des Zielmarktes für authentische und wirkungsvolle Kommunikation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <p className="section-heading">Leistungen</p>
        <h2 className="section-title mb-16">
          Vom Wort zur Wirkung
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card hover:shadow-elegant transition-all duration-300"
            >
              <service.icon
                size={32}
                className="text-accent mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-heading font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
