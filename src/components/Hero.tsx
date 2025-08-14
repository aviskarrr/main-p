import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary">
              Hello, I'm
            </span>
          </div>

          {/* Main title with typewriter effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="gradient-text">Aviskar Poudel</span>
          </h1>

          {/* Subtitle with typewriter effect */}
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light opacity-0 animate-fade-in-up"
               style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div style={{ display: 'inline-block', width: 'fit-content' }}>
              <span className="typing-effect">Computer Engineering Student</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up leading-relaxed"
             style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Passionate about creating innovative solutions through code. 
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up"
               style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 opacity-0 animate-fade-in-up"
               style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a 
              href="https://github.com/aviskarrr" 
              className="p-3 rounded-full glass-card hover-lift hover-invert group"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aviskarpoudel/" 
              className="p-3 rounded-full glass-card hover-lift hover-invert group"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors" />
            </a>
            <a 
              href="mailto:aviskarp1@gmail.com" 
              className="p-3 rounded-full glass-card hover-lift hover-invert group"
              aria-label="Email"
              target="_blank"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full glass-card hover-lift hover-invert group"
          aria-label="Scroll to About"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;