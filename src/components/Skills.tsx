import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Cloud,
  Brain,
  Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript']
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">What I bring to the table</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set built through hands-on projects, 
              continuous learning, and real-world application.
            </p>
          </div>

          {/* Skills Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 glass-card group hover:shadow-xl transition-all duration-500">
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      {category.title}
                      <div className="h-px flex-1 bg-primary/20" />
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="px-4 py-2 bg-background/50 hover:bg-primary/20 
                                   transition-colors duration-300 text-foreground/80 
                                   hover:text-primary border border-border/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;