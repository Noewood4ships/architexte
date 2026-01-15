import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <p className="section-heading">Kontakt</p>
        <h2 className="section-title mb-16">Lassen Sie uns sprechen</h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Haben Sie ein Projekt? Ich freue mich auf Ihre Anfrage und melde 
              mich in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:kontakt@architexte.eu"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Mail size={24} />
                <span>kontakt@architexte.eu</span>
              </a>
              <a
                href="tel:+491234567890"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Phone size={24} />
                <span>+49 123 456 7890</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin size={24} />
                <span>Berlin, Deutschland</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Betreff"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border focus:border-accent focus:outline-none transition-colors"
              required
            />
            <textarea
              placeholder="Ihre Nachricht"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border focus:border-accent focus:outline-none transition-colors resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
