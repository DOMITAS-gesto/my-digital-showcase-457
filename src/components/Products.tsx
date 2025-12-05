import { ShoppingBag, Sparkles } from "lucide-react";
import camisetaImg from "@/assets/camiseta.png";

const Products = () => {
  return (
    <section id="productos" className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Tienda</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 text-navy">Mis Productos</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Diseños únicos que reflejan mi estilo y creatividad
            </p>
          </div>

          {/* Product showcase */}
          <div className="max-w-lg mx-auto">
            <div className="group relative bg-card-gradient rounded-3xl border border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-medium text-gold">Nuevo</span>
              </div>

              {/* Product image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={camisetaImg}
                  alt="Camiseta"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Product info */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-1 text-navy">Camiseta Exclusiva</h3>
                    <p className="text-muted-foreground text-sm">Edición limitada</p>
                  </div>
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Diseño minimalista con estilo único. Fabricada con materiales de alta calidad para máximo confort.
                </p>

                <button className="w-full py-4 px-6 rounded-xl bg-navy text-white font-semibold hover:bg-navy/90 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Próximamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
