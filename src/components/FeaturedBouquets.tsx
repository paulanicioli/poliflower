import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bouquetRoses from "@/assets/bouquet-roses.jpg";
import bouquetMixed from "@/assets/bouquet-mixed.jpg";
import bouquetElegant from "@/assets/bouquet-elegant.jpg";

const bouquets = [
  {
    id: "romance-garden",
    name: "Romance Garden",
    description: "Delicate pink roses with baby's breath",
    price: "$65",
    image: bouquetRoses,
  },
  {
    id: "sunshine-bliss",
    name: "Sunshine Bliss",
    description: "Vibrant sunflowers and lavender mix",
    price: "$75",
    image: bouquetMixed,
  },
  {
    id: "pure-elegance",
    name: "Pure Elegance",
    description: "Sophisticated white lilies and orchids",
    price: "$85",
    image: bouquetElegant,
  },
];

export const FeaturedBouquets = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Bouquets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated arrangements for every special moment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bouquets.map((bouquet, index) => (
            <Card 
              key={bouquet.id} 
              className="hover-lift border-0 shadow-[0_4px_20px_hsl(var(--floral-pink)/0.1)] overflow-hidden cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => navigate(`/product/${bouquet.id}`)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={bouquet.image} 
                  alt={bouquet.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center bg-gradient-to-b from-card to-muted/20">
                <h3 className="text-2xl font-semibold mb-2">{bouquet.name}</h3>
                <p className="text-muted-foreground mb-4">{bouquet.description}</p>
                <p className="text-3xl font-bold text-primary mb-4">{bouquet.price}</p>
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${bouquet.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
