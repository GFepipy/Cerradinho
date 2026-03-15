import React from 'react';
import { motion } from 'framer-motion';
import { Plant, Factory, Tractor, ChartLineUp } from '@phosphor-icons/react';

const industries = [
  { name: 'Usinas de Açúcar e Álcool', icon: Factory },
  { name: 'Produtores de Grãos', icon: Plant },
  { name: 'Construtoras e Mineradoras', icon: Tractor },
  { name: 'Investidores e Revendas', icon: ChartLineUp }
];

const Clients = () => {
  return (
    <section className="w-full py-20 bg-white text-brand-black relative border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-3 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold uppercase tracking-widest clip-chamfer mb-4">
            A Força do Ecossistema
          </span>
          <h2 className="text-3xl md:text-[48px] font-display font-semibold text-brand-black max-w-[25ch] mx-auto leading-[1.15]">
            Máquinas que <span className="text-brand-teal">impulsionam</span><br className="hidden md:block" /> os maiores <strong className="text-brand-black">players do setor produtivo.</strong>
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              key={i}
              className="bg-bg-light border border-gray-100 p-8 flex flex-col items-center justify-center text-center group hover:bg-gray-50 transition-colors clip-chamfer"
            >
              <ind.icon size={48} className="text-brand-teal mb-6 group-hover:-translate-y-2 transition-transform duration-300" weight="light" />
              <h3 className="font-display font-semibold text-lg text-brand-black">{ind.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Clients Marquee Placeholder */}
        <div className="mt-20 overflow-hidden relative flex">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
          >
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">AgroTech</span>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">BioEnergia S.A</span>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">Construtora Apex</span>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">Fazenda Alvorada</span>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">Grupo ValeVerde</span>
                <span className="text-2xl font-display font-semibold uppercase tracking-widest text-gray-500">Mineração Sul</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
