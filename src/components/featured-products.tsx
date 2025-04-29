
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Классический Молочный Чай",
    description: "Нежный чай с молоком и тапиокой",
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1576089073624-b5048515ec8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Манго Маракуйя",
    description: "Освежающий фруктовый микс с пудингом",
    price: 349,
    imageUrl: "https://images.unsplash.com/photo-1588929473475-d16ba83f2012?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Матча Латте",
    description: "Японский зеленый чай с молоком и бобами",
    price: 379,
    imageUrl: "https://images.unsplash.com/photo-1630932566806-d816c956ece9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-boba-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-boba-navy font-boba mb-4">Наши популярные напитки</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Попробуйте наши бестселлеры, которые завоевали сердца любителей Bubble Tea по всему городу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md">
                  <img 
                    src="https://cdn.poehali.dev/files/80aae7fc-2073-43ca-b40f-9e193395aac2.jpg" 
                    alt="Boba Boom logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-boba text-boba-navy">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-gray-600">{product.description}</p>
                <p className="mt-2 text-boba-accent font-bold text-lg">{product.price} ₽</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-boba-navy hover:bg-opacity-90">Добавить в корзину</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-boba-navy text-boba-navy hover:bg-boba-navy hover:text-white px-8">
            Посмотреть все напитки
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
