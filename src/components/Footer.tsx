import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold gradient-text mb-2">
                Aviskar Poudel
              </div>
              <p className="text-muted-foreground text-sm">
                one code at a time :)
              </p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 rounded-full glass-card hover-lift group transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full glass-card hover-lift group transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full glass-card hover-lift group transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Aviskar Poudel. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;