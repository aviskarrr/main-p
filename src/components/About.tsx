import { Card } from '@/components/ui/card';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Problem Solving',
      description: 'Finding practical solutions to technical challenges'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating ideas clearly'
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to continuous learning and improvement'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text hover-lift inline-block">Get to know me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate Computer Engineering student with a love for creating 
              innovative solutions.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="group relative p-6 backdrop-blur-md bg-background/30 hover:bg-background/40 
                         border border-border/20 hover:border-primary/50
                         transition-all duration-500 cursor-pointer overflow-hidden rounded-xl
                         flex items-center gap-6 hover:shadow-lg"
              >
                {/* Enhanced glass shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-white/5 to-secondary/10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
                </div>

                {/* Gloss overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-[-200%] bg-primary/5 rotate-45 translate-x-[60%] translate-y-[-90%] blur-2xl" />
                  <div className="absolute inset-[-200%] bg-secondary/5 rotate-45 translate-x-[60%] translate-y-[90%] blur-2xl" />
                </div>

                {/* Large icon container with enhanced glass effect */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-2xl backdrop-blur-md bg-primary/20 
                              flex items-center justify-center border border-primary/30
                              transform group-hover:scale-105 group-hover:bg-primary/30 
                              transition-all duration-500 group-hover:shadow-glow
                              relative z-10 overflow-hidden">
                    {/* Icon shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-[-100%] bg-white/10 rotate-45 translate-x-[60%] group-hover:translate-y-[-60%] blur-md transition-transform duration-1000" />
                    </div>
                    
                    <item.icon className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 relative z-10" />
                  </div>
                </div>

                {/* Content section with enhanced hover effects */}
                <div className="flex-1 relative z-10 transform group-hover:translate-x-2 transition-transform duration-500">
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary 
                              transition-colors duration-500 flex items-center gap-2">
                    {item.title}
                    <div className="h-px flex-1 bg-border/30 group-hover:bg-primary/50 transition-colors duration-500" />
                  </h4>
                  <p className="text-base text-muted-foreground group-hover:text-foreground 
                             leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Enhanced glossy highlights */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;