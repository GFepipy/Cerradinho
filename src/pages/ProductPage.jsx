import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, MapPinLine, ArrowRight } from '@phosphor-icons/react';

function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    { src: "/images/nano_main.png", alt: "Main Angle" },
    { src: "/images/nano_side.png", alt: "Side Angle" },
    { src: "/images/nano_back.png", alt: "Detail Angle" }
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 w-full mx-auto flex flex-col items-center relative pb-20">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none z-0"></div>
      
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-28 pb-12 md:pt-36 md:pb-24 relative z-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 font-medium mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link to="/#vitrine" className="hover:text-brand-teal transition-colors">Produtos</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 cursor-default">Tratores</span>
          <span className="text-gray-300">/</span>
          <span className="text-brand-black font-semibold">John Deere 8R 410</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
              className="bg-gray-200 p-[1px] clip-chamfer group transition-all duration-300 relative shadow-sm aspect-square md:aspect-[4/3] w-full"
            >
              <div className="bg-white flex flex-col w-full h-full clip-chamfer relative items-center justify-center p-0 overflow-hidden">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 clip-chamfer shadow-sm">
                    Destaque
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.85, 0, 0.15, 1] }}
                    src={images[activeImage].src}
                    alt="John Deere 8R 410 Main" 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-3 gap-4">
              {images.map((item, index) => (
                <motion.button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1), ease: [0.85, 0, 0.15, 1] }}
                  className={`bg-gray-200 p-[1px] clip-chamfer group hover:shadow-neo-brutalist hover:-translate-y-1 transition-all duration-300 ease-heavy-glide aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer ${activeImage === index ? 'shadow-neo-brutalist -translate-y-1 border-brand-teal' : ''}`}
                >
                  <div className="w-full h-full bg-white clip-chamfer overflow-hidden flex items-center justify-center relative p-0">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className={`w-full h-full object-cover mix-blend-multiply transition-all duration-500 ease-heavy-glide ${activeImage === index ? 'opacity-100 scale-110' : 'opacity-60 group-hover:opacity-100 group-hover:scale-110'}`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.85, 0, 0.15, 1] }}
            className="flex flex-col flex-1"
          >
            <div className="mb-2">
              <span className="text-brand-teal font-bold text-sm tracking-widest uppercase">Trator Agrícola</span>
            </div>
            <h1 className="font-display font-semibold text-[48px] lg:text-[56px] text-brand-black mb-4 leading-[1.05] tracking-tight">
              John Deere 8R 410
            </h1>
            
            <div className="flex items-center gap-6 mb-8 text-sm font-semibold text-gray-500">
              <div className="flex items-center">
                <MapPinLine size={20} className="mr-2 text-brand-teal" />
                <span>Ribeirão Preto, SP</span>
              </div>
              <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
              <div>
                Ano: <span className="text-brand-black">2022</span>
              </div>
              <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
              <div className="flex items-center gap-2">
                <span className="text-brand-black">1.250h</span>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 clip-chamfer border border-gray-100 relative group overflow-hidden shadow-sm">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal group-hover:w-full transition-all duration-[0.6s] ease-heavy-glide opacity-5"></div>
                <div className="text-[10px] text-brand-teal font-bold uppercase tracking-widest mb-1">Potência</div>
                <div className="font-display font-semibold text-brand-black text-base">410 cv</div>
              </div>
              <div className="bg-white p-4 clip-chamfer border border-gray-100 relative group overflow-hidden shadow-sm">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal group-hover:w-full transition-all duration-[0.6s] ease-heavy-glide opacity-5"></div>
                <div className="text-[10px] text-brand-teal font-bold uppercase tracking-widest mb-1">Transmissão</div>
                <div className="font-display font-semibold text-brand-black text-base">e23™ PowerShift</div>
              </div>
              <div className="bg-white p-4 clip-chamfer border border-gray-100 relative group overflow-hidden shadow-sm">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal group-hover:w-full transition-all duration-[0.6s] ease-heavy-glide opacity-5"></div>
                <div className="text-[10px] text-brand-teal font-bold uppercase tracking-widest mb-1">Tração</div>
                <div className="font-display font-semibold text-brand-black text-base">4x4</div>
              </div>
              <div className="bg-white p-4 clip-chamfer border border-gray-100 relative group overflow-hidden shadow-sm">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal group-hover:w-full transition-all duration-[0.6s] ease-heavy-glide opacity-5"></div>
                <div className="text-[10px] text-brand-teal font-bold uppercase tracking-widest mb-1">Motor</div>
                <div className="font-display font-semibold text-brand-black text-base">9.0L 6 Cil.</div>
              </div>
            </div>

            {/* Simple Stats for Sidebar */}
            <div className="mb-10 p-6 glass-panel clip-chamfer border border-gray-200 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-bl-full pointer-events-none"></div>
              <div className="text-4xl font-display font-semibold text-brand-teal tracking-tight relative z-10">
                R$ 2.450.000
              </div>
              <p className="text-sm text-gray-500 mt-2 font-medium relative z-10">Condições especiais de financiamento a partir de R$ 38.500/mês</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-5 mt-auto">
              <button className="flex-1 group relative bg-brand-teal text-white px-8 py-5 font-bold text-lg clip-chamfer hover:-translate-y-1 hover:shadow-neo-brutalist transition-all duration-300 ease-heavy-glide flex items-center justify-center gap-3 active:translate-y-0 active:shadow-none overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[sweep_0.6s_ease-in-out]"></div>
                Falar com Consultor
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="p-[2px] bg-gray-200 clip-chamfer hover:bg-brand-black text-brand-black hover:text-white transition-all duration-300 ease-heavy-glide w-full sm:w-auto h-[68px]">
                <button className="bg-white hover:bg-transparent w-full h-full px-8 py-4 font-bold text-lg clip-chamfer transition-colors flex items-center justify-center gap-3">
                  Agendar Vistoria
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full Width Sections Below */}
        <div className="mt-24 space-y-24">
          
          {/* Análise Técnica Side-by-Side with Laudo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Análise Técnica Tableish */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-semibold text-2xl text-brand-black mb-10 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-teal block"></span>
                ANÁLISE TÉCNICA DO EQUIPAMENTO
              </h3>

              <div className="space-y-4">
                {/* Header Labels */}
                <div className="grid grid-cols-12 gap-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                  <div className="col-span-5">Componente</div>
                  <div className="col-span-7 grid grid-cols-4 text-center">
                    <span>Ótimo</span>
                    <span>Bom</span>
                    <span>Regular</span>
                    <span>Ruim</span>
                  </div>
                </div>

                {[
                  { label: "MOTOR", score: 75 },
                  { label: "TRANSMISSÃO", score: 65 },
                  { label: "CONJUNTO HIDRÁULICO", score: 70 },
                  { label: "CONJUNTO INDUSTRIAL", score: 65 },
                  { label: "PNEUS DIANTEIROS", score: 65 },
                  { label: "CABINE / COMANDOS / PAINEL", score: 78 },
                  { label: "CONJUNTO ELÉTRICO", score: 65 },
                  { label: "CONJUNTO ELETRÔNICO", score: 68 },
                  { label: "CONJUNTO ESTRUTURAL", score: 82 },
                  { label: "PLATAFORMA DE CORTE", score: 65 },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 items-center group">
                    <div className="col-span-5 text-[16px] font-bold text-gray-700 tracking-tight group-hover:text-brand-teal transition-colors">
                      {item.label}
                    </div>
                    <div className="col-span-7">
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative border border-gray-200 shadow-inner">
                        {/* The Gradient Bar */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-brand-teal via-[#C4D600] to-[#FFD100]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                        />
                        {/* Dividers for the columns */}
                        <div className="absolute inset-0 flex justify-between pointer-events-none">
                          <div className="w-[1px] h-full bg-white/30 border-r border-gray-200/50" style={{ left: '25%' }}></div>
                          <div className="w-[1px] h-full bg-white/30 border-r border-gray-200/50" style={{ left: '50%' }}></div>
                          <div className="w-[1px] h-full bg-white/30 border-r border-gray-200/50" style={{ left: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <p className="pt-4 text-[10px] text-gray-500 italic text-center leading-relaxed">
                  As informações acima foram fornecidas pelo concessionário proprietário do equipamento, cabendo a ele a responsabilidade pela veracidade destas.
                </p>
              </div>
            </motion.div>

            {/* Right: Laudo Técnico CBM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-display font-semibold text-2xl text-brand-black mb-10 tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-teal block"></span>
                LAUDO TÉCNICO CBM
              </h3>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                O trator 8R 410 oferece potência e tecnologia de ponta para as operações mais exigentes. Equipado com motor PowerTech de 9.0L, telemetria JDLink integrada e cabine CommandView III para o máximo conforto do operador.
              </p>
              <ul className="grid grid-cols-1 gap-6">
                {[
                  { 
                    icon: <CheckCircle size={28} weight="fill" />, 
                    text: "Manutenção rigorosamente em dia pela concessionária. Pneus duplados com 80% de vida útil.",
                    bold: false 
                  },
                  { 
                    icon: <CheckCircle size={28} weight="fill" />, 
                    text: "Piloto automático AutoTrac ativado e antena StarFire 6000 inclusa.",
                    bold: false 
                  },
                  { 
                    icon: <ShieldCheck size={28} weight="fill" />, 
                    text: "Equipamento Certificado com Laudo Técnico rigoroso da CerradinhoBio Máquinas.",
                    bold: true 
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 bg-white clip-chamfer border border-gray-100 shadow-sm group hover:border-brand-teal transition-all duration-300">
                    <div className="text-brand-teal shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className={`text-gray-700 leading-snug ${item.bold ? 'font-bold text-brand-black' : 'font-medium'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
