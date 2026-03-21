import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] bg-bg-light flex items-center overflow-hidden">
      {/* Blueprint background for Light Section */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 pt-32 pb-20">

        {/* Text Content Left */}
        <div className="flex flex-col justify-center order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          >
            <span className="inline-block py-1.5 px-3 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold uppercase tracking-widest clip-chamfer mb-6">
              Curadoria de Excelência
            </span>
            <h1 className="text-[60px] md:text-[56px] lg:text-[72px] font-display font-semibold text-brand-black leading-[1.05] tracking-tighter mb-8 max-w-[15ch]">
              Compra Direta de <span className="text-brand-teal block">Usinas de Ponta.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed max-w-[42ch] mb-12">
              Transformamos equipamentos industriais pesados em um mercado de alto valor. Confiança, catálogo limpo e máquinas garantidas para o agronegócio e construção.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="group relative bg-brand-teal text-white px-8 py-5 font-bold text-lg clip-chamfer hover:-translate-y-1 hover:shadow-neo-brutalist transition-all duration-300 ease-heavy-glide flex items-center justify-center gap-3 active:translate-y-0 active:shadow-none overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[sweep_0.6s_ease-in-out]"></div>
                Ver Máquinas Disponíveis
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="p-[2px] bg-brand-teal clip-chamfer hover:bg-brand-black text-brand-black hover:text-white transition-all duration-300 ease-heavy-glide w-full sm:w-auto h-[68px]">
                <Link to="/quiz" className="bg-bg-light hover:bg-transparent w-full h-full px-8 py-4 font-bold text-lg clip-chamfer transition-colors flex items-center justify-center gap-3">
                  Fazer o Quiz
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-light bg-gray-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/usina${i}/100/100`} alt="Cliente" className="w-full h-full object-cover opacity-90" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="text-brand-black font-display font-semibold">+500 Usinas</p>
              <p className="text-gray-600">confiam em nossa curadoria.</p>
            </div>
          </motion.div>
        </div>

        {/* Image Right */}
        <div className="relative flex items-center justify-center order-2 min-h-[50vh] lg:min-h-full">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1], delay: 0.4 }}
            className="w-full h-full relative"
          >
            {/* Light gradient overlay to blend perfectly, reduced intensity */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg-light/30 z-10 hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-light/50 via-transparent to-transparent z-10"></div>

            <img
              src="/images/hero_machinery.png"
              alt="Centro de curadoria com maquinário pesado"
              className="w-full h-full object-cover object-center clip-chamfer-reverse shadow-xl"
            />

            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 z-20 glass-panel p-4 clip-chamfer border border-white/50 hidden md:flex items-center gap-4 shadow-xl"
            >
              <div className="w-12 h-12 bg-brand-teal text-white flex items-center justify-center font-bold text-[14px] clip-chamfer">
                100%
              </div>
              <div>
                <p className="text-brand-black font-display font-semibold">Garantia Técnica</p>
                <p className="text-gray-500 text-xs text-uppercase tracking-wider">Inspecionado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
