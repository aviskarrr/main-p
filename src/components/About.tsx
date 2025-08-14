import { Card } from '@/components/ui/card';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code with best practices'
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
              <span className="gradient-text">Get to know me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate Computer Engineering student with a love for creating 
              innovative solutions and pushing the boundaries of technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a Computer Engineering student, I've developed a deep fascination 
                  with the intersection of hardware and software. My journey began with 
                  curiosity about how things work, and has evolved into a passion for 
                  building solutions that make a difference.
                </p>
                <p>
                  I specialize in modern web technologies and enjoy working on projects 
                  that challenge me to learn new skills. From frontend development to 
                  system design, I'm always eager to expand my knowledge and tackle 
                  complex problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or brainstorming the next big idea 
                  with fellow developers.
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 glass-card hover-lift hover-invert group cursor-pointer"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2 group-hover:text-current transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground group-hover:text-current/80 leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Learning' },
              { number: '15+', label: 'Projects Built' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Passion' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;