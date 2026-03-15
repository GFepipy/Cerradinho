import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Timer, Certificate, Handshake, ArrowRight } from '@phosphor-icons/react';

const Differentials = () => {
  return (
    <section className="w-full py-24 bg-bg-dark text-white relative overflow-hidden">
      {/* Background blueprint dark */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16">
          <span className="inline-block py-1.5 px-3 bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-xs font-bold uppercase tracking-widest clip-chamfer mb-6">
            Por Que a CerradinhoBio?
          </span>
          <h2 className="text-4xl md:text-[48px] font-display font-semibold text-white tracking-tight leading-[1.15] max-w-[25ch]">
            Quebrando o Estigma.<br className="hidden md:block" /> <span className="text-brand-teal md:inline">Elevando o Padrão.</span>
          </h2>
        </div>

        {/* Bento Grid 2.0 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Vantagem de Preço - Asymmetric Large Left */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:col-span-12 lg:col-span-7 bg-white/5 border border-white/10 p-8 clip-chamfer relative overflow-hidden group hover:shadow-neo-brutalist transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-colors duration-[2s]"></div>
            
            <div className="w-14 h-14 bg-white/5 border border-white/10 clip-chamfer flex items-center justify-center mb-8 relative z-10">
              <Coins size={28} className="text-brand-teal" />
            </div>
            
            <h3 className="text-white text-3xl font-display font-semibold mb-4 relative z-10">Vantagem de Preço Real</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[38ch] relative z-10">
              Usinas não precisam vender a preço de sucata. Compradores não pagam a margem absurda de revendedores. A conexão direta destrói o spread do mercado tradicional.
            </p>

            {/* Perpetual micro-animation data vis */}
            <div className="mt-8 flex gap-4 h-16 items-end relative z-10">
              <motion.div 
                animate={{ height: ['40%', '60%', '40%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
                className="w-12 bg-[#404b54] border-t-2 border-brand-teal"
              />
              <motion.div 
                animate={{ height: ['70%', '90%', '70%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} 
                className="w-12 bg-[#404b54] border-t-2 border-brand-teal"
              />
              <motion.div 
                animate={{ height: ['20%', '30%', '20%'] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} 
                className="w-12 bg-brand-teal/20 border-t-2 border-brand-teal relative"
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-teal font-bold text-sm">-30%</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2/3 Stacked Right */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            
            {/* Otimização de Tempo */}
            <motion.div 
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex-1 bg-white/5 border border-white/10 p-8 clip-chamfer group hover:shadow-neo-brutalist transition-shadow duration-300 relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center clip-chamfer">
                  <Timer size={24} className="text-brand-teal" />
                </div>
                {/* Micro animation clock pulse */}
                <motion.div 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ repeat: Infinity, duration: 2 }} 
                  className="w-2 h-2 rounded-full bg-brand-teal"
                />
              </div>
              <h3 className="text-white text-2xl font-display font-semibold mb-3">Otimização de Tempo</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Um portal único contra a bagunça dos leilões pulverizados. Encontre a máquina específica para a sua colheita em minutos, não em meses de buscas cegas.
              </p>
            </motion.div>

            {/* Curadoria é Confiança */}
            <motion.div 
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex-1 bg-brand-teal text-white p-8 clip-chamfer group relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[sweep_0.6s_ease-in-out]"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center clip-chamfer backdrop-blur-md">
                  <Certificate size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-white text-2xl font-display font-semibold mb-3 relative z-10">Curadoria é Confiança</h3>
              <p className="text-white/90 font-medium text-lg leading-relaxed max-w-[45ch] relative z-10">
                O maquinário que rodou nas melhores usinas do país, agora disponível com laudo técnico e histórico imaculado. Acabou o "comprar no escuro".
              </p>
            </motion.div>

          </div>

          {/* Card 4: Sistema de Indicação (Full Width Bottom) */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:col-span-12 bg-white/5 border border-white/10 p-8 md:p-12 clip-chamfer hover:shadow-[8px_8px_0px_#00A295] transition-shadow duration-300 flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center clip-chamfer">
                  <Handshake size={28} className="text-brand-teal" weight="fill" />
                </div>
                <h3 className="text-white text-3xl font-display font-semibold">Programa de Indicação</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-[55ch]">
                Nossa rede cresce pela confiança mútua. Indique compradores ou vendedores para a CerradinhoBio e receba comissões agressivas em cada negócio fechado. Um ecossistema onde todos ganham.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto bg-brand-teal text-white px-8 py-5 font-bold clip-chamfer hover:bg-brand-teal/80 transition-colors flex items-center justify-center gap-3 group">
                Seja um Parceiro
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Differentials;
