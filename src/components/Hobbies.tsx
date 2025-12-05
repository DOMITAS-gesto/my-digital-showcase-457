import { Gamepad2, Dumbbell, ChefHat, Music } from "lucide-react";
import escritorioImg from "@/assets/escritorio.png";
import pesasImg from "@/assets/pesas.png";
import guitarraImg from "@/assets/guitarra.png";
import cocinaImg from "@/assets/cocina.png";

const hobbies = [
  {
    icon: Gamepad2,
    title: "Videojuegos",
    description: "Una actividad que disfruto para relajarme y conectar con otras personas.",
    fact: "Los videojuegos mejoran la memoria, la atención y la capacidad de resolver problemas.",
    color: "primary",
    image: escritorioImg,
  },
  {
    icon: Dumbbell,
    title: "Gimnasio",
    description: "Mi objetivo es mantener un buen estado físico y cuidar mi salud.",
    fact: "Entrenar libera endorfinas que mejoran el estado de ánimo.",
    color: "accent",
    image: pesasImg,
  },
  {
    icon: ChefHat,
    title: "Cocina",
    description: "Creo que la buena comida tiene el poder de alegrar a las personas.",
    fact: "El olfato influye hasta en un 80% del sabor que percibimos.",
    color: "gold",
    image: cocinaImg,
  },
  {
    icon: Music,
    title: "Música",
    description: "Sueño con aprender armónica y guitarra eléctrica.",
    fact: "La armónica emite notas tanto aspirando como soplando.",
    color: "navy",
    image: guitarraImg,
  },
];

const Hobbies = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { bg: "bg-primary/10", text: "text-primary" };
      case "accent":
        return { bg: "bg-accent/10", text: "text-accent" };
      case "gold":
        return { bg: "bg-gold/10", text: "text-gold" };
      case "navy":
        return { bg: "bg-navy/10", text: "text-navy" };
      default:
        return { bg: "bg-primary/10", text: "text-primary" };
    }
  };

  return (
    <section id="hobbies" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Pasatiempos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-navy">Lo Que Me Apasiona</h2>
          </div>

          {/* Hobby cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const colorClasses = getColorClasses(hobby.color);
              return (
                <div
                  key={hobby.title}
                  className="group bg-card-gradient rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className={`p-4 rounded-xl ${colorClasses.bg} w-fit mb-4 group-hover:scale-110 transition-transform -mt-10 relative z-10`}>
                      <hobby.icon className={`w-7 h-7 ${colorClasses.text}`} />
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold mb-3 text-navy">{hobby.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{hobby.description}</p>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground/80 italic">
                        💡 {hobby.fact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
