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
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-primary to-primary-glow',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-secondary to-secondary-glow',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      color: 'from-accent to-primary',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Supabase', level: 85 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      color: 'from-primary to-accent',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Linux', level: 75 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'React Developer',
    'JavaScript Algorithms',
    'Computer Networks'
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

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 glass-card skill-card group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${skillIndex * 0.1}s forwards`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Certifications & Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Interactive elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Brain, label: 'Problem Solving', desc: 'Analytical thinking' },
              { icon: Palette, label: 'UI/UX Design', desc: 'User-centered design' },
              { icon: Smartphone, label: 'Responsive Design', desc: 'Mobile-first approach' },
              { icon: Cloud, label: 'Cloud Computing', desc: 'Scalable solutions' }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg glass-card hover-lift group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                  {item.label}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;