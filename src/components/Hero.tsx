import { MapPin, Calendar, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-muted-foreground">Explorando nuevos horizontes</span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up animate-delay-100 text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-navy">
            Juan Diego{" "}
            <span className="text-gradient">Prieto</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animate-delay-200 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Apasionado por la tecnología, la creatividad y los sueños que nos impulsan a volar más alto
          </p>

          {/* Location & Birth */}
          <div className="animate-fade-up animate-delay-300 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Guadalajara de Buga, Colombia</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>4 de Julio, 2005</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-up animate-delay-500 mt-16">
            <div className="animate-float">
              <div className="w-6 h-10 rounded-full border-2 border-navy/30 mx-auto flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
