import { Gamepad2, Dumbbell, ChefHat, Music } from "lucide-react";

const hobbies = [
  {
    icon: Gamepad2,
    title: "Videojuegos",
    description: "Una actividad que disfruto para relajarme y conectar con otras personas.",
    fact: "Los videojuegos mejoran la memoria, la atención y la capacidad de resolver problemas.",
    color: "primary",
  },
  {
    icon: Dumbbell,
    title: "Gimnasio",
    description: "Mi objetivo es mantener un buen estado físico y cuidar mi salud.",
    fact: "Entrenar libera endorfinas que mejoran el estado de ánimo.",
    color: "accent",
  },
  {
    icon: ChefHat,
    title: "Cocina",
    description: "Creo que la buena comida tiene el poder de alegrar a las personas.",
    fact: "El olfato influye hasta en un 80% del sabor que percibimos.",
    color: "primary",
  },
  {
    icon: Music,
    title: "Música",
    description: "Sueño con aprender armónica y guitarra eléctrica.",
    fact: "La armónica emite notas tanto aspirando como soplando.",
    color: "accent",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Pasatiempos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Lo Que Me Apasiona</h2>
          </div>

          {/* Hobby cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="group bg-card-gradient rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-4 rounded-xl ${hobby.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <hobby.icon className={`w-7 h-7 ${hobby.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{hobby.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground/80 italic">
                    💡 {hobby.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
