import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              PoliFlower
            </h3>
            <p className="text-muted-foreground">
              Bringing beauty and joy through handcrafted floral arrangements since 2020.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Occasions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Floral Street</li>
              <li>Garden City, GC 12345</li>
              <li className="pt-2">
                <a href="tel:555-123-4567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@poliflower.com" className="hover:text-primary transition-colors">
                  hello@poliflower.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 PoliFlower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
