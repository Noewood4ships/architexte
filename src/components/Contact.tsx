import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="heading-section text-foreground mb-6">Kontakt</h2>
            <p className="text-body mb-10">
              Haben Sie ein Projekt? Ich freue mich auf Ihre Anfrage und 
              antworte in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:kontakt@architexte.eu"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="text-foreground font-medium">kontakt@architexte.eu</p>
                </div>
              </a>

              <a
                href="tel:+43123456789"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="text-foreground font-medium">Auf Anfrage</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Standort</p>
                  <p className="text-foreground font-medium">Wien, Österreich</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 border border-border">
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              Anfrage senden
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none text-foreground"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
