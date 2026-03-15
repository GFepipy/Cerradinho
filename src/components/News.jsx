import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarBlank } from '@phosphor-icons/react';

const articles = [
  {
    title: 'Manutenção Preditiva em Colhedoras de Cana: Reduzindo o Downtime',
    category: 'Manutenção Preditiva',
    date: '12 Out 2026',
    image: '/images/news_maintenance.png',
    featured: true
  },
  {
    title: 'Por que o mercado de linha amarela usada cresceu 40% neste semestre',
    category: 'Mercado',
    date: '08 Out 2026',
    image: '/images/news_market.png',
    featured: false
  },
  {
    title: 'Comparativo: Vale a pena comprar um Scania R500 seminovo?',
    category: 'Análise de Frota',
    date: '02 Out 2026',
    image: '/images/news_truck.png',
    featured: false
  }
];

const News = () => {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-black tracking-tight mb-4">
              Inteligência de <span className="text-brand-teal">Frota.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-[40ch]">
              Análises de mercado, dicas de manutenção e os bastidores do maquinário pesado brasileiro.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-brand-black hover:text-brand-teal transition-colors group">
            Ver Todos os Artigos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {articles.map((article, idx) => (
            <motion.article 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx}
              className={`group cursor-pointer flex flex-col clip-chamfer relative overflow-hidden bg-bg-light border border-gray-100 hover:shadow-neo-brutalist transition-all duration-300 ease-heavy-glide ${article.featured ? 'md:col-span-12 lg:col-span-6' : 'md:col-span-6 lg:col-span-3'}`}
            >
              <div className={`relative w-full overflow-hidden bg-gray-200 ${article.featured ? 'h-[300px] md:h-[400px]' : 'h-[250px]'}`}>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 clip-chamfer">
                    {article.category}
                  </span>
                </div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <CalendarBlank size={16} />
                  {article.date}
                </div>
                <h3 className={`font-display font-semibold text-brand-black leading-[1.2] mb-6 group-hover:text-brand-teal transition-colors ${article.featured ? 'text-2xl md:text-3xl max-w-[25ch]' : 'text-xl'}`}>
                  {article.title}
                </h3>
                <div className="mt-auto self-start">
                  <span className="w-10 h-10 border border-gray-200 flex items-center justify-center clip-chamfer text-gray-500 group-hover:bg-brand-teal group-hover:text-white group-hover:border-transparent transition-colors">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <button className="md:hidden mt-10 w-full flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-brand-black border border-gray-200 py-4 clip-chamfer">
          Ver Todos os Artigos
        </button>

      </div>
    </section>
  );
};

export default News;
