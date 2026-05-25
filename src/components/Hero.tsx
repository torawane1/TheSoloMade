import { ArrowDown, MapPin, Mail } from 'lucide-react';
import TypingEffect from './TypingEffect';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const typingTexts = [
    'DevOps Engineer',
    'Platform Engineer',
    'Infrastructure Specialist',
    'Automation Expert',
    'Kubernetes Enthusiast',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-in-up">
            <div className="terminal-window max-w-2xl">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-muted-foreground text-sm">terminal — bash</span>
              </div>
              <div className="terminal-body space-y-4">
                <div>
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-secondary">whoami</span>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="text-foreground">Umesh </span>
                  <span className="text-primary glow-text">Torawane</span>
                </div>
                
                <div className="h-8">
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-secondary">echo $ROLE</span>
                  <div className="mt-1 text-xl md:text-2xl">
                    <TypingEffect texts={typingTexts} />
                  </div>
                </div>

                <div className="pt-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">Copenhagen, Denmark</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    <a href="mailto:torawane.umesh@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      torawane.umesh@gmail.com
                    </a>
                  </div>

                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <a href="#contact" className="btn-terminal">
                    <span>$ contact --me</span>
                  </a>
                  <a href="#experience" className="btn-outline-terminal">
                    <span>$ view --resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-50" />
              
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden border-2 border-primary/50 max-w-md">
                <img 
                  src={profileImage} 
                  alt="Umesh Torawane - DevOps Engineer" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Status indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {/* <span className="text-xs text-primary">Available for opportunities</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 opacity-0 animate-fade-in-up animation-delay-600">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">scroll down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
