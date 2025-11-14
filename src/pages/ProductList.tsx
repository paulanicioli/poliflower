import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ShoppingCart, Filter } from "lucide-react";
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

const products = [
  {
    id: "romance-garden",
    name: "Romance Garden",
    description: "Delicate pink roses with baby's breath and fresh eucalyptus. Perfect for expressing love and affection.",
    price: "$65",
    image: bouquetRoses,
    category: "Romantic",
    popular: true,
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Just Because"],
  },
  {
    id: "sunshine-bliss",
    name: "Sunshine Bliss",
    description: "Vibrant sunflowers with purple lavender and white daisies. Brings warmth and joy to any occasion.",
    price: "$75",
    image: bouquetMixed,
    category: "Cheerful",
    popular: true,
    occasion: ["Birthday", "Get Well Soon", "Congratulations", "Thank You"],
  },
  {
    id: "pure-elegance",
    name: "Pure Elegance",
    description: "Sophisticated white lilies and exotic orchids with sage green foliage. Perfect for special occasions.",
    price: "$85",
    image: bouquetElegant,
    category: "Elegant",
    popular: false,
    occasion: ["Wedding", "Sympathy", "Anniversary", "Mother's Day"],
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    description: "Exotic birds of paradise with red ginger flowers and lush palm leaves. A bold and vibrant statement.",
    price: "$95",
    image: bouquetTropical,
    category: "Exotic",
    popular: true,
    occasion: ["Birthday", "Housewarming", "Congratulations", "Just Because"],
  },
  {
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless deep red roses with fresh greenery. The ultimate expression of love and passion.",
    price: "$80",
    image: bouquetClassicRoses,
    category: "Romantic",
    popular: true,
    occasion: ["Anniversary", "Valentine's Day", "Birthday", "Apology"],
  },
  {
    id: "pastel-dream",
    name: "Pastel Dream",
    description: "Soft peach roses, cream peonies, and lavender in gentle romantic hues. Delicate and dreamy.",
    price: "$70",
    image: bouquetPastelDream,
    category: "Romantic",
    popular: false,
    occasion: ["Wedding", "Baby Shower", "Mother's Day", "Thank You"],
  },
  {
    id: "wildflower-meadow",
    name: "Wildflower Meadow",
    description: "Blue cornflowers, yellow buttercups, and Queen Anne's lace. Rustic charm from nature's garden.",
    price: "$60",
    image: bouquetWildflower,
    category: "Rustic",
    popular: false,
    occasion: ["Housewarming", "Thank You", "Just Because", "Get Well Soon"],
  },
  {
    id: "purple-majesty",
    name: "Purple Majesty",
    description: "Rich purple tulips, violet iris, and lilac blooms. A regal arrangement in royal colors.",
    price: "$78",
    image: bouquetPurpleMajesty,
    category: "Elegant",
    popular: false,
    occasion: ["Birthday", "Graduation", "Congratulations", "Anniversary"],
  },
  {
    id: "spring-awakening",
    name: "Spring Awakening",
    description: "Pink cherry blossoms, white magnolia, and yellow daffodils. Fresh and cheerful spring celebration.",
    price: "$72",
    image: bouquetSpringGarden,
    category: "Cheerful",
    popular: false,
    occasion: ["Birthday", "Mother's Day", "New Baby", "Easter"],
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  // Get all unique occasions from products
  const allOccasions = Array.from(
    new Set(products.flatMap((product) => product.occasion))
  ).sort();

  // Apply occasion filter from URL on mount
  useEffect(() => {
    const occasionParam = searchParams.get("occasion");
    if (occasionParam && allOccasions.includes(occasionParam)) {
      setSelectedOccasions([occasionParam]);
    }
  }, [searchParams]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleOccasionToggle = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion)
        ? prev.filter((o) => o !== occasion)
        : [...prev, occasion]
    );
  };

  const filteredProducts = products.filter((product) => {
    const priceValue = parseInt(product.price.replace("$", ""));
    
    const categoryMatch = categoryFilter === "all" || product.category === categoryFilter;
    
    let priceMatch = true;
    if (priceFilter === "under70") {
      priceMatch = priceValue < 70;
    } else if (priceFilter === "70-80") {
      priceMatch = priceValue >= 70 && priceValue <= 80;
    } else if (priceFilter === "over80") {
      priceMatch = priceValue > 80;
    }

    const occasionMatch =
      selectedOccasions.length === 0 ||
      product.occasion.some((occ) => selectedOccasions.includes(occ));
    
    return categoryMatch && priceMatch && occasionMatch;
  });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Bouquet Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted floral arrangements, each one designed to bring beauty and joy
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-7xl mx-auto">
          <div className="flex-1">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Romantic">Romantic</SelectItem>
                <SelectItem value="Cheerful">Cheerful</SelectItem>
                <SelectItem value="Elegant">Elegant</SelectItem>
                <SelectItem value="Exotic">Exotic</SelectItem>
                <SelectItem value="Rustic">Rustic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1">
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under70">Under $70</SelectItem>
                <SelectItem value="70-80">$70 - $80</SelectItem>
                <SelectItem value="over80">Over $80</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span>
                    {selectedOccasions.length === 0
                      ? "Filter by occasion"
                      : `${selectedOccasions.length} selected`}
                  </span>
                  <Filter className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <div className="space-y-4">
                  <div className="font-semibold text-sm">Select Occasions</div>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {allOccasions.map((occasion) => (
                      <div key={occasion} className="flex items-center space-x-2">
                        <Checkbox
                          id={occasion}
                          checked={selectedOccasions.includes(occasion)}
                          onCheckedChange={() => handleOccasionToggle(occasion)}
                        />
                        <label
                          htmlFor={occasion}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {occasion}
                        </label>
                      </div>
                    ))}
                  </div>
                  {selectedOccasions.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => setSelectedOccasions([])}
                    >
                      Clear All
                    </Button>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="hover-lift border-0 shadow-[0_4px_20px_hsl(var(--floral-pink)/0.1)] overflow-hidden group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                    Popular
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-card to-muted/20">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    variant="default"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 p-8 bg-muted/30 rounded-2xl animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-muted-foreground mb-6">
            Our expert florists can create custom arrangements for any occasion. Contact us to discuss your perfect bouquet.
          </p>
          <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
