import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const CartButton = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const itemCount = getTotalItems();

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => navigate("/checkout")}
      className="fixed top-6 right-6 z-50 shadow-[0_8px_30px_hsl(var(--floral-pink)/0.3)] hover:shadow-[0_12px_40px_hsl(var(--floral-pink)/0.4)]"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-bold">
          {itemCount}
        </span>
      )}
    </Button>
  );
};
