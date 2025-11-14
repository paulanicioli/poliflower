import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, ShoppingCart, Truck, Shield } from "lucide-react";
import { Footer } from "@/components/Footer";
import { CartButton } from "@/components/CartButton";
import { useCart } from "@/contexts/CartContext";
import bouquetRoses from "@/assets/bouquet-roses.jpg";
import bouquetMixed from "@/assets/bouquet-mixed.jpg";
import bouquetElegant from "@/assets/bouquet-elegant.jpg";
import bouquetTropical from "@/assets/bouquet-tropical.jpg";
import bouquetClassicRoses from "@/assets/bouquet-classic-roses.jpg";
import bouquetPastelDream from "@/assets/bouquet-pastel-dream.jpg";
import bouquetWildflower from "@/assets/bouquet-wildflower.jpg";
import bouquetPurpleMajesty from "@/assets/bouquet-purple-majesty.jpg";
import bouquetSpringGarden from "@/assets/bouquet-spring-garden.jpg";

const products = {
  "romance-garden": {
    id: "romance-garden",
    name: "Romance Garden",
    description: "Delicate pink roses with baby's breath",
    fullDescription: "A timeless expression of love and affection, our Romance Garden bouquet features hand-selected premium pink roses paired with delicate baby's breath and fresh eucalyptus. Each rose is carefully chosen at peak freshness and arranged by our expert florists to create a stunning display that will last for days.",
    price: "$65",
    image: bouquetRoses,
    details: [
      "12 premium pink roses",
      "Fresh baby's breath accents",
      "Eucalyptus greenery",
      "Hand-tied with satin ribbon",
      "Includes care instructions",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Just Because"],
  },
  "sunshine-bliss": {
    id: "sunshine-bliss",
    name: "Sunshine Bliss",
    description: "Vibrant sunflowers and lavender mix",
    fullDescription: "Bring warmth and joy with our Sunshine Bliss arrangement. This cheerful bouquet combines bright sunflowers with purple lavender and white daisies, creating a stunning contrast that's perfect for celebrations or simply brightening someone's day. A true embodiment of happiness in floral form.",
    price: "$75",
    image: bouquetMixed,
    details: [
      "4 large sunflowers",
      "Purple lavender stems",
      "White daisy accents",
      "Seasonal greenery mix",
      "Wrapped in rustic kraft paper",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Birthday", "Get Well Soon", "Congratulations", "Thank You"],
  },
  "pure-elegance": {
    id: "pure-elegance",
    name: "Pure Elegance",
    description: "Sophisticated white lilies and orchids",
    fullDescription: "For those who appreciate refined beauty, our Pure Elegance bouquet showcases pristine white lilies and exotic orchids. This sophisticated arrangement exudes grace and luxury, making it perfect for special occasions, sympathy, or creating an elegant ambiance in any space.",
    price: "$85",
    image: bouquetElegant,
    details: [
      "3 white oriental lilies",
      "Premium white orchids",
      "Sage green foliage",
      "Minimalist presentation",
      "Elegant white wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Wedding", "Sympathy", "Anniversary", "Mother's Day"],
  },
  "tropical-paradise": {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    description: "Exotic birds of paradise and ginger flowers",
    fullDescription: "Transport yourself to a tropical paradise with this bold and exotic arrangement. Featuring vibrant birds of paradise, dramatic red ginger flowers, and lush palm leaves, this bouquet makes an unforgettable statement. Perfect for those who love unique and eye-catching floral designs.",
    price: "$95",
    image: bouquetTropical,
    details: [
      "Birds of paradise flowers",
      "Red ginger blooms",
      "Exotic palm leaves",
      "Tropical foliage mix",
      "Bold contemporary wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Birthday", "Housewarming", "Congratulations", "Just Because"],
  },
  "classic-romance": {
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless deep red roses",
    fullDescription: "Nothing says love quite like deep red roses. Our Classic Romance bouquet features a dozen premium long-stem red roses, the ultimate symbol of passion and devotion. Each rose is hand-selected for its perfect form and rich color, making this the perfect gift for anniversaries, Valentine's Day, or any romantic occasion.",
    price: "$80",
    image: bouquetClassicRoses,
    details: [
      "12 premium red roses",
      "Long stem selection",
      "Fresh greenery accents",
      "Elegant presentation",
      "Romantic red wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Apology"],
  },
  "pastel-dream": {
    id: "pastel-dream",
    name: "Pastel Dream",
    description: "Soft peach roses and cream peonies",
    fullDescription: "Drift into a dreamy world of soft pastels with this romantic arrangement. Combining peach roses, cream peonies, and delicate lavender sprigs, this bouquet embodies gentle romance and tender sentiments. The subtle color palette creates a soothing, elegant display that's perfect for weddings, bridal showers, or expressing heartfelt appreciation.",
    price: "$70",
    image: bouquetPastelDream,
    details: [
      "Peach garden roses",
      "Cream peonies",
      "Lavender accents",
      "Soft seasonal greenery",
      "Romantic pastel wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Wedding", "Baby Shower", "Mother's Day", "Thank You"],
  },
  "wildflower-meadow": {
    id: "wildflower-meadow",
    name: "Wildflower Meadow",
    description: "Blue cornflowers and yellow buttercups",
    fullDescription: "Capture the essence of a summer meadow with this charming wildflower arrangement. Featuring blue cornflowers, cheerful yellow buttercups, delicate Queen Anne's lace, and natural grasses, this bouquet brings the beauty of the countryside into your home. Perfect for those who appreciate natural, rustic charm.",
    price: "$60",
    image: bouquetWildflower,
    details: [
      "Blue cornflowers",
      "Yellow buttercups",
      "Queen Anne's lace",
      "Natural wild grasses",
      "Rustic twine wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Housewarming", "Thank You", "Just Because", "Get Well Soon"],
  },
  "purple-majesty": {
    id: "purple-majesty",
    name: "Purple Majesty",
    description: "Rich purple tulips and violet iris",
    fullDescription: "Make a regal statement with our Purple Majesty bouquet. This luxurious arrangement showcases rich purple tulips, elegant violet iris, and fragrant lilac blooms in stunning royal hues. The sophisticated color palette creates a sense of drama and elegance, perfect for making a memorable impression.",
    price: "$78",
    image: bouquetPurpleMajesty,
    details: [
      "Purple tulips",
      "Violet iris blooms",
      "Lilac flower clusters",
      "Rich green foliage",
      "Royal purple wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Birthday", "Graduation", "Congratulations", "Anniversary"],
  },
  "spring-awakening": {
    id: "spring-awakening",
    name: "Spring Awakening",
    description: "Pink cherry blossoms and daffodils",
    fullDescription: "Celebrate the renewal of spring with this fresh and cheerful arrangement. Featuring delicate pink cherry blossoms, pristine white magnolias, and bright yellow daffodils, this bouquet captures the joy and optimism of the season. Perfect for Easter, spring birthdays, or welcoming the warmer days ahead.",
    price: "$72",
    image: bouquetSpringGarden,
    details: [
      "Pink cherry blossom branches",
      "White magnolia blooms",
      "Yellow daffodils",
      "Fresh spring greenery",
      "Light spring-themed wrapping",
    ],
    features: [
      { icon: Truck, text: "Same-day delivery available" },
      { icon: Shield, text: "Freshness guaranteed" },
    ],
    occasion: ["Birthday", "Mother's Day", "New Baby", "Easter"],
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = productId ? products[productId as keyof typeof products] : null;

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          <div className="animate-fade-in">
            <Card className="overflow-hidden border-0 shadow-[0_8px_30px_hsl(var(--floral-pink)/0.15)]">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground">{product.description}</p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-bold text-primary">{product.price}</span>
              <span className="text-muted-foreground">per bouquet</span>
            </div>

            {product.occasion && product.occasion.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Perfect for:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasion.map((occasion, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {occasion}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About this bouquet</h3>
              <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What's included:</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 py-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="flex-1 group" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Heart className="h-5 w-5 group-hover:fill-primary transition-colors" />
              </Button>
            </div>

            <Card className="p-6 bg-muted/50 border-0 mt-8">
              <h4 className="font-semibold mb-3">Care Instructions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Trim stems at an angle before placing in water</li>
                <li>• Change water every 2-3 days</li>
                <li>• Keep away from direct sunlight</li>
                <li>• Remove wilted flowers to extend bouquet life</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
