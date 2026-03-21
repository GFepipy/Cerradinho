import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, ShoppingCart, User, List, CaretDown } from '@phosphor-icons/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for sticky state modifications if needed
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-light py-4' : 'bg-bg-light/0 py-7'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 cursor-pointer flex items-center gap-2">
          <img src="/logo-cerradinho.png" alt="CerradinhoBio Máquinas" className="h-[50px] w-auto object-contain" />
        </Link>

        {/* Removed Global Search for cleaner layout as requested */}

        {/* Actions & Nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <a href="#vitrine" className="hover:text-brand-teal transition-colors flex items-center gap-1 group">
              Equipamentos
              <CaretDown weight="bold" className="group-hover:rotate-180 transition-transform duration-300" />
            </a>
            <a href="#pecas" className="hover:text-brand-teal transition-colors">Peças</a>
            <a href="#sobre" className="hover:text-brand-teal transition-colors">Sobre Nós</a>
            <Link to="/quiz" className="hover:text-brand-teal transition-colors font-bold text-brand-teal">Descubra sua Máquina</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-brand-teal/10 rounded-full transition-colors group">
              <ShoppingCart size={24} className="text-brand-black group-hover:text-brand-teal transition-colors" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-teal text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-brand-teal text-white px-5 py-2.5 font-semibold text-sm hover:bg-brand-teal/90 transition-colors clip-chamfer hover:-translate-y-[2px] hover:shadow-neo-brutalist active:translate-y-0 active:shadow-none">
              <User size={18} weight="bold" />
              Acessar
            </button>
            <button className="md:hidden p-2">
              <List size={28} />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
