
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-boba-beige to-boba-light pt-16 pb-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-boba-navy font-boba leading-tight">
              Откройте для себя вкус настоящего <span className="text-boba-accent">Bubble Tea</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Авторские рецепты, натуральные ингредиенты и взрывная комбинация вкусов - все это Boba Boom!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-boba-navy hover:bg-opacity-90 text-white text-lg px-8 py-6">
                Смотреть меню <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-boba-navy text-boba-navy hover:bg-boba-navy hover:text-white text-lg px-8 py-6">
                Наши локации
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-boba-accent opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-boba-navy opacity-10 animate-float animation-delay-1000"></div>
            <div className="relative z-10 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1558857563-c0c6ee6ff6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Bubble Tea" 
                className="rounded-3xl shadow-xl max-w-full md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
