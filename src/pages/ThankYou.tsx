import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Package, Calendar } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderNumber = location.state?.orderNumber || `ORD-${Date.now()}`;
  
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);
  const deliveryDate = estimatedDelivery.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="flex justify-center">
                <CheckCircle2 className="h-20 w-20 text-primary animate-in zoom-in duration-500" />
              </div>
              <CardTitle className="text-4xl font-bold">Thank You for Your Order!</CardTitle>
              <p className="text-muted-foreground text-lg">
                Your payment was successful and your order has been confirmed.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Package className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Order Number</h3>
                    <p className="text-2xl font-mono font-bold text-primary">{orderNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Estimated Delivery</h3>
                    <p className="text-lg text-foreground">{deliveryDate}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll send you a tracking number once your order ships
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to your email address with order details and tracking information.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  onClick={() => navigate("/products")}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="flex-1"
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
