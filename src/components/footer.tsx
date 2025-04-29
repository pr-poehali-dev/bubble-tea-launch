
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-boba-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/80aae7fc-2073-43ca-b40f-9e193395aac2.jpg" 
                  alt="Boba Boom Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold font-boba">Boba Boom</span>
            </Link>
            <p className="text-sm text-gray-300">
              Насладитесь аутентичным bubble tea, приготовленным с любовью и вниманием к каждой детали.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-boba-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-boba-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-boba-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-boba">Меню</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/menu" className="hover:text-boba-accent transition-colors">Молочные чаи</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-boba-accent transition-colors">Фруктовые чаи</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-boba-accent transition-colors">Особые напитки</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-boba-accent transition-colors">Добавки</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-boba">Компания</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-boba-accent transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-boba-accent transition-colors">Карьера</Link>
              </li>
              <li>
                <Link to="/franchise" className="hover:text-boba-accent transition-colors">Франшиза</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-boba-accent transition-colors">Новости</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-boba">Контакты</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <MapPin size={18} className="shrink-0 text-boba-accent" />
                <span>Москва, ул. Пушкина, д. 10</span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="shrink-0 text-boba-accent" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="shrink-0 text-boba-accent" />
                <span>info@bobaboom.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Boba Boom. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
