import { Plane, Music2, UtensilsCrossed, Film, Sparkles } from "lucide-react";

const aspirations = [
  {
    icon: Film,
    title: "Animación 3D",
    description: "Estudiar animación 3D para cine o publicidad, creando mundos y personajes que cobren vida.",
  },
  {
    icon: Music2,
    title: "Música",
    description: "Aprender a tocar la armónica que Camila me regaló y dominar la guitarra eléctrica.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomía",
    description: "Obtener un título en gastronomía, inspirado por la pasión culinaria de mi papá.",
  },
  {
    icon: Plane,
    title: "Aviación",
    description: "Aprender a pilotar y sentir la libertad de surcar los cielos por mi cuenta.",
  },
];

const Aspirations = () => {
  return (
    <section id="aspiraciones" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Sueños</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Mis Aspiraciones</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Cada meta es un paso hacia la persona que quiero ser
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-12">
              {aspirations.map((aspiration, index) => (
                <div
                  key={aspiration.title}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-card-gradient rounded-2xl p-8 border border-border shadow-card hover:border-primary/30 transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}>
                      <h3 className="font-serif text-2xl font-semibold mb-3 flex items-center gap-3 justify-center md:justify-start">
                        {index % 2 !== 0 && <aspiration.icon className="w-6 h-6 text-primary" />}
                        {aspiration.title}
                        {index % 2 === 0 && <aspiration.icon className="w-6 h-6 text-primary md:order-first" />}
                      </h3>
                      <p className="text-muted-foreground">{aspiration.description}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden md:flex relative z-10">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-glow">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aspirations;
