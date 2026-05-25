import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'torawane.umesh@gmail.com',
      href: 'mailto:torawane.umesh@gmail.com',
    },

    {
      icon: MapPin,
      label: 'Location',
      value: 'Copenhagen, Denmark',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">curl</span> --contact
        </h2>

        <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-muted-foreground text-sm">contact-info.json</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-muted-foreground">{'{'}</div>
                {contactInfo.map((item, index) => (
                  <div key={item.label} className="ml-4">
                    <span className="text-secondary">"{item.label.toLowerCase()}"</span>
                    <span className="text-muted-foreground">: </span>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-primary hover:underline"
                      >
                        "{item.value}"
                      </a>
                    ) : (
                      <span className="text-foreground">"{item.value}"</span>
                    )}
                    {index < contactInfo.length - 1 && <span className="text-muted-foreground">,</span>}
                  </div>
                ))}
                <div className="text-muted-foreground">{'}'}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="terminal-window p-6">
              <h3 className="text-sm text-muted-foreground mb-4">
                <span className="text-secondary">$</span> find /social --links
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/umeshtorawane/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/torawane1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="terminal-window p-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                {/*<span className="text-sm text-foreground">
                  Currently open to new opportunities
                </span> */}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
