import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="sobre" className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Images */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 right-0 w-[85%] h-[85%] bg-gray-200 clip-chamfer shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-teal/10 mix-blend-multiply z-10"></div>
            <img 
              src="/images/about_engineering.png"
              alt="Engenheiro industrial supervisionando manutenção" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-[2s] ease-heavy-glide"
            />
          </motion.div>

          {/* Overlapping Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.85, 0, 0.15, 1] }}
            className="absolute bottom-0 left-0 w-[55%] h-[55%] bg-brand-black border-4 border-white clip-chamfer-reverse shadow-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Manutenção de Motor" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay content on small image */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent flex flex-col justify-end p-6">
              <span className="text-brand-teal font-display font-semibold text-3xl">Zero</span>
              <span className="text-white text-xs font-semibold tracking-wider uppercase">Sucata</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Copy */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          >
            <h2 className="text-[48px] font-display font-semibold text-brand-black mb-8 leading-[1.1] tracking-tighter">
              A Revolução da<br />
              <span className="text-brand-teal">Engenharia Reversa.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans mt-8">
              <p>
                Por décadas, usinas que trocavam de linha de maquinário viam equipamentos perfeitamente funcionais e peças novas serem descartados a preço de sucata. Um desperdício monumental de capital e de aço.
              </p>
              <p>
                A <strong className="text-brand-black">CerradinhoBio Máquinas</strong> nasceu para destruir essa ineficiência. Nós não somos um portal de leilão caótico. Somos uma plataforma premium de venda direta.
              </p>
              <p>
                Recuperamos o valor das máquinas através de uma curadoria rígida, inspeções técnicas de dezenas de pontos e uma gestão industrial via CRM de alta performance. 
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-display font-semibold text-brand-black">100%</span>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Inspecionado</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-display font-semibold text-brand-black">+2B</span>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">Valor Resgatado</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
