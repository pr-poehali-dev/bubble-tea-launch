
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-boba-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-boba-accent opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-boba-navy opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="О Boba Boom" 
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-boba-navy font-boba">О Boba Boom</h2>
            <p className="text-gray-700">
              Boba Boom — это не просто напитки, это настоящее искусство. Мы начали свой путь с небольшого киоска и страстного желания познакомить вас с аутентичным вкусом тайваньского Bubble Tea.
            </p>
            <p className="text-gray-700">
              Наши ингредиенты поставляются напрямую из лучших плантаций Азии, а каждый напиток готовится вручную с любовью и вниманием к деталям.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-boba-accent">5+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-boba-accent">30+</div>
                <div className="text-sm text-gray-600">уникальных вкусов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-boba-accent">8</div>
                <div className="text-sm text-gray-600">локаций</div>
              </div>
            </div>
            
            <Button className="bg-boba-navy hover:bg-opacity-90 text-white mt-4">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
