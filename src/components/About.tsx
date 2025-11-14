import { Heart, Sparkles, Truck } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Each bouquet is personally arranged by our expert florists with care and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Freshest Flowers",
    description: "We source only the highest quality, freshest blooms from trusted local growers.",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order before 2 PM for same-day delivery anywhere in the city. Fast and reliable.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about bringing beauty and joy through our carefully crafted floral arrangements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in hover-lift p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
