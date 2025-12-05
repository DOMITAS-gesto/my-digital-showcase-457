import { GraduationCap, Brain, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Conóceme</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Sobre Mí</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un joven colombiano con una mente curiosa y un corazón lleno de sueños. 
                Estudié cuatro semestres de <span className="text-foreground font-medium">Ingeniería de Sistemas</span> en 
                la Unidad Central del Valle (Uceva), pero decidí buscar un camino más alineado con mis verdaderas pasiones.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Actualmente estoy explorando el fascinante mundo de la <span className="text-primary font-medium">animación 3D 
                para cine y publicidad</span>. Me levanto cada mañana con entusiasmo para asistir a un bootcamp de 
                inteligencia artificial, donde aprendo a utilizar diversas herramientas que están transformando el mundo.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi vida gira alrededor de mi familia: mi abuela Carmen, donde almuerzo cada día; mi papá, a quien ayudo 
                en su taller automotriz; y mi mamá, con quien colaboro en tareas de oficina. Y por supuesto, 
                <span className="text-accent font-medium"> Camila</span>, mi compañera de aventuras.
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-card hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Formación</h3>
                    <p className="text-muted-foreground">Ing. de Sistemas (Uceva) → Explorando Animación 3D</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-card hover:border-accent/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Actualmente</h3>
                    <p className="text-muted-foreground">Bootcamp de Inteligencia Artificial</p>
                  </div>
                </div>
              </div>

              <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-card hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Valores</h3>
                    <p className="text-muted-foreground">Familia, curiosidad y perseverancia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
