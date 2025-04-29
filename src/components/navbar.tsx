
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-boba-beige py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img 
                src="https://cdn.poehali.dev/files/80aae7fc-2073-43ca-b40f-9e193395aac2.jpg" 
                alt="Boba Boom Logo" 
                className="w-full object-contain"
              />
            </div>
            <span className="text-boba-navy text-2xl font-bold font-boba">Boba Boom</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-boba-navy font-medium hover:text-boba-accent transition-colors">
              Главная
            </Link>
            <Link to="/menu" className="text-boba-navy font-medium hover:text-boba-accent transition-colors">
              Меню
            </Link>
            <Link to="/about" className="text-boba-navy font-medium hover:text-boba-accent transition-colors">
              О нас
            </Link>
            <Link to="/locations" className="text-boba-navy font-medium hover:text-boba-accent transition-colors">
              Локации
            </Link>
            <Button className="bg-boba-navy hover:bg-opacity-90 text-white">Заказать</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Меню">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="text-boba-navy font-medium hover:text-boba-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/menu" 
              className="text-boba-navy font-medium hover:text-boba-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Меню
            </Link>
            <Link 
              to="/about" 
              className="text-boba-navy font-medium hover:text-boba-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/locations" 
              className="text-boba-navy font-medium hover:text-boba-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Локации
            </Link>
            <Button className="bg-boba-navy hover:bg-opacity-90 text-white w-full">Заказать</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
