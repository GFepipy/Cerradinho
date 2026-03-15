import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GasPump, ArrowsOut, Clock, Nut, CaretLeft, CaretRight } from '@phosphor-icons/react';

const products = [
  {
    id: 1,
    category: 'Linha Verde',
    name: 'John Deere 8R 410',
    type: 'Trator Agrícola',
    hours: '1.200h',
    power: '410 cv',
    price: 'R$ 1.850.000',
    image: '/images/tractor_deere.png',
  },
  {
    id: 2,
    category: 'Linha Amarela',
    name: 'Caterpillar 320 GC',
    type: 'Escavadeira Hidráulica',
    hours: '3.400h',
    power: '145 hp',
    price: 'R$ 780.000',
    image: '/images/excavator_cat.png',
  },
  {
    id: 3,
    category: 'Caminhões',
    name: 'Scania R500 6x4',
    type: 'Cavalo Mecânico',
    km: '280.000 km',
    power: '500 cv',
    price: 'R$ 920.000',
    image: '/images/truck_scania.png',
  },
  {
    id: 4,
    category: 'Linha Verde',
    name: 'Case IH Austoft 9000',
    type: 'Colhedora de Cana',
    hours: '850h',
    power: '353 cv',
    price: 'Sob Consulta',
    image: '/images/harvester_case.png',
  },
  {
    id: 5,
    category: 'Linha Verde',
    name: 'Pulverizador Patriot 350',
    type: 'Pulverizador Autopropelido',
    hours: '450h',
    power: '250 cv',
    price: 'R$ 1.100.000',
    image: '/images/tractor_deere.png', // Fallback context image
  },
  {
    id: 6,
    category: 'Caminhões',
    name: 'Volvo FH 540',
    type: 'Cavalo Mecânico',
    km: '150.000 km',
    power: '540 cv',
    price: 'R$ 1.050.000',
    image: '/images/truck_scania.png', // Fallback context image
  }
];

const categories = ['Todos', 'Linha Verde', 'Linha Amarela', 'Caminhões', 'Peças'];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const sliderRef = useRef(null);

  const filteredProducts = products.filter(p => activeCategory === 'Todos' || p.category === activeCategory);

  const slide = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Scroll by one full card width roughly (which is approx current clientWidth / items_visible)
      // For simplicity let's just scroll by roughly one item width or more
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="vitrine" className="w-full py-24 bg-bg-light relative border-b border-gray-200 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full overflow-hidden pb-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-black mb-6 tracking-tight">
              Arsenal de <span className="text-brand-teal">Curadoria</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-[50ch]">
              Esqueça o estigma de "usado". Apresentamos máquinas com laudo técnico rigoroso, prontas para rodar na sua operação e evitar perdas de capital.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            {/* Custom Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 font-semibold text-sm transition-all duration-300 ease-heavy-glide clip-chamfer relative ${
                    activeCategory === cat 
                    ? 'bg-brand-black text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTabBadge"
                      className="absolute inset-0 border-2 border-brand-teal clip-chamfer pointer-events-none"
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10 text-nowrap">{cat}</span>
                </button>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex gap-2">
              <button onClick={() => slide('left')} className="w-12 h-12 bg-white border border-gray-200 text-brand-black flex items-center justify-center clip-chamfer hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 shadow-sm cursor-pointer relative z-20">
                <CaretLeft size={24} weight="bold" />
              </button>
              <button onClick={() => slide('right')} className="w-12 h-12 bg-white border border-gray-200 text-brand-black flex items-center justify-center clip-chamfer hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-300 shadow-sm cursor-pointer relative z-20">
                <CaretRight size={24} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Area */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-10 pt-4 hide-scrollbar"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1], delay: index * 0.05 }}
                key={product.id}
                className="group relative bg-gray-200 p-[1px] flex flex-col clip-chamfer hover:-translate-y-2 hover:shadow-neo-brutalist transition-all duration-300 ease-heavy-glide snap-start flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] min-h-[500px]"
              >
                <div className="bg-white flex flex-col w-full h-full clip-chamfer relative">
                  <Link to={product.id === 1 ? '/produto/john-deere-8r-410' : '#'} className="absolute inset-0 z-30 cursor-pointer" aria-label={`Ver ${product.name}`} onClick={(e) => { if(product.id !== 1) e.preventDefault(); }} />
                  {/* Image Area */}
                  <div className="relative w-full h-[250px] overflow-hidden bg-gray-100 flex-shrink-0">
                    <div className="absolute top-4 left-4 z-20 flex gap-2 w-max">
                      <span className="bg-brand-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 clip-chamfer">
                        {product.category}
                      </span>
                      {product.hours && (
                        <span className="bg-white/90 backdrop-blur-sm text-brand-black text-xs font-bold uppercase tracking-wider px-3 py-1 clip-chamfer flex items-center gap-1 shadow-sm">
                          <Clock size={12} weight="bold" /> {product.hours}
                        </span>
                      )}
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover origin-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.85,0,0.15,1)]"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-8 bg-white glass-panel relative z-20 flex-1 flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200"></div>
                    <div className="flex-1 flex flex-col h-full">
                      <p className="text-brand-teal font-bold text-sm uppercase tracking-widest mb-1">{product.type}</p>
                      <h3 className="font-display font-semibold text-brand-black tracking-tight text-3xl mb-6">
                        {product.name}
                      </h3>
                      <div className="mt-auto">
                        <p className="text-gray-400 text-xs font-semibold uppercase mb-1">Valor</p>
                        <p className="font-sans font-bold text-xl text-brand-black">{product.price}</p>
                      </div>
                    </div>

                    <hr className="border-gray-100 my-4" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm font-semibold text-gray-500">
                        <div className="flex items-center gap-2">
                          <GasPump size={18} className="text-brand-teal" />
                          <span>{product.power}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Nut size={18} className="text-brand-teal" />
                          <span>Revisado</span>
                        </div>
                      </div>
                      
                      <button className="w-10 h-10 rounded-none bg-gray-50 clip-chamfer flex items-center justify-center text-brand-black group-hover:bg-brand-teal group-hover:text-white transition-colors cursor-pointer relative z-20">
                        <ArrowRight size={18} weight="bold" className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Bottom */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center gap-3 bg-brand-teal text-white px-8 py-4 font-bold clip-chamfer hover:bg-brand-black hover:shadow-neo-brutalist hover:-translate-y-1 transition-all duration-300 ease-heavy-glide cursor-pointer relative z-20">
            <ArrowsOut size={20} />
            Ver Catálogo Completo
          </button>
        </div>
      </div>
      
      {/* Global CSS to hide scrollbar in module */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ProductShowcase;
