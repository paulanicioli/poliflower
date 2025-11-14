import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CartButton } from "@/components/CartButton";
import bouquetRoses from "@/assets/bouquet-roses.jpg";
import bouquetMixed from "@/assets/bouquet-mixed.jpg";
import bouquetElegant from "@/assets/bouquet-elegant.jpg";
import bouquetTropical from "@/assets/bouquet-tropical.jpg";
import bouquetClassicRoses from "@/assets/bouquet-classic-roses.jpg";
import bouquetPastelDream from "@/assets/bouquet-pastel-dream.jpg";
import bouquetWildflower from "@/assets/bouquet-wildflower.jpg";
import bouquetPurpleMajesty from "@/assets/bouquet-purple-majesty.jpg";
import bouquetSpringGarden from "@/assets/bouquet-spring-garden.jpg";

const products = [
  {
    id: "romance-garden",
    name: "Romance Garden",
    price: "$65",
    image: bouquetRoses,
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Just Because"],
  },
  {
    id: "sunshine-bliss",
    name: "Sunshine Bliss",
    price: "$75",
    image: bouquetMixed,
    occasion: ["Birthday", "Get Well Soon", "Congratulations", "Thank You"],
  },
  {
    id: "pure-elegance",
    name: "Pure Elegance",
    price: "$85",
    image: bouquetElegant,
    occasion: ["Wedding", "Sympathy", "Anniversary", "Mother's Day"],
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    price: "$95",
    image: bouquetTropical,
    occasion: ["Birthday", "Housewarming", "Congratulations", "Just Because"],
  },
  {
    id: "classic-romance",
    name: "Classic Romance",
    price: "$80",
    image: bouquetClassicRoses,
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Apology"],
  },
  {
    id: "pastel-dream",
    name: "Pastel Dream",
    price: "$70",
    image: bouquetPastelDream,
    occasion: ["Wedding", "Baby Shower", "Mother's Day", "Thank You"],
  },
  {
    id: "wildflower-meadow",
    name: "Wildflower Meadow",
    price: "$60",
    image: bouquetWildflower,
    occasion: ["Housewarming", "Thank You", "Just Because", "Get Well Soon"],
  },
  {
    id: "purple-majesty",
    name: "Purple Majesty",
    price: "$78",
    image: bouquetPurpleMajesty,
    occasion: ["Birthday", "Graduation", "Congratulations", "Anniversary"],
  },
  {
    id: "spring-awakening",
    name: "Spring Awakening",
    price: "$72",
    image: bouquetSpringGarden,
    occasion: ["Birthday", "Mother's Day", "New Baby", "Easter"],
  },
];

const occasionDescriptions: Record<string, string> = {
  "Anniversary": "Celebrate your love story with romantic blooms that express enduring affection and commitment.",
  "Valentine's Day": "Express your love with passionate arrangements perfect for the most romantic day of the year.",
  "Birthday": "Make their special day unforgettable with vibrant, joyful bouquets that bring smiles.",
  "Just Because": "Surprise someone special with unexpected beauty and thoughtfulness any day of the week.",
  "Wedding": "Elegant and sophisticated arrangements for your most important celebration of love.",
  "Sympathy": "Offer comfort and condolences with graceful, respectful floral tributes.",
  "Mother's Day": "Honor the amazing mothers in your life with beautiful blooms that show your appreciation.",
  "Get Well Soon": "Send healing wishes and bright cheer to lift spirits during recovery.",
  "Congratulations": "Celebrate achievements and milestones with stunning, festive arrangements.",
  "Thank You": "Express your gratitude with thoughtful bouquets that say it all.",
  "Housewarming": "Welcome friends to their new home with fresh, vibrant flowers.",
  "Baby Shower": "Celebrate new beginnings with soft, delicate arrangements perfect for welcoming baby.",
  "Apology": "Make amends with heartfelt blooms that express sincere regret.",
  "Graduation": "Honor academic achievements with proud, celebratory arrangements.",
  "New Baby": "Welcome the newest addition with gentle, joyful flowers.",
  "Easter": "Celebrate spring's renewal with fresh, cheerful seasonal blooms.",
};

const Collections = () => {
  const navigate = useNavigate();

  // Get all unique occasions from products
  const allOccasions = Array.from(
    new Set(products.flatMap((product) => product.occasion))
  ).sort();

  // Get one featured product for each occasion
  const getOccasionProduct = (occasion: string) => {
    return products.find((product) => product.occasion.includes(occasion));
  };

  return (
    <div className="min-h-screen bg-background">
      <CartButton />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Occasions Collections</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collections for every special moment in life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {allOccasions.map((occasion, index) => {
            const featuredProduct = getOccasionProduct(occasion);
            if (!featuredProduct) return null;

            return (
              <Card 
                key={occasion}
                className="overflow-hidden border-0 shadow-[0_4px_20px_hsl(var(--floral-pink)/0.1)] hover-lift group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={featuredProduct.image} 
                      alt={featuredProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col justify-between bg-gradient-to-b from-card to-muted/20">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{occasion}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {occasionDescriptions[occasion]}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">Featured Bouquet:</p>
                        <p className="font-semibold text-lg">{featuredProduct.name}</p>
                        <p className="text-primary font-bold text-xl">{featuredProduct.price}</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full group/btn"
                      onClick={() => navigate(`/products?occasion=${encodeURIComponent(occasion)}`)}
                    >
                      View flower arrangements
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 p-8 bg-muted/30 rounded-2xl animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Explore All Bouquets</h2>
          <p className="text-muted-foreground mb-6">
            Want to see more? Browse our complete collection and filter by category, price, or occasion.
          </p>
          <Button variant="default" size="lg" onClick={() => navigate("/products")}>
            View All Products
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
