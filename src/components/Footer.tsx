import { Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Juan Diego <span className="text-gradient">Prieto Castaño</span>
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Guadalajara de Buga, Valle del Cauca, Colombia</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>y muchos sueños</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
