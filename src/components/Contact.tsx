import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast - can be connected to backend later
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
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

          {/* Contact Form */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="ml-4 text-muted-foreground text-sm">send-message.sh</span>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-secondary">$</span> NAME=
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-secondary">$</span> EMAIL=
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  <span className="text-secondary">$</span> MESSAGE=
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-terminal w-full justify-center">
                <Send className="w-4 h-4" />
                <span>$ ./send-message.sh</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
