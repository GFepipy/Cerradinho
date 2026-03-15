import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneRight, Checks } from '@phosphor-icons/react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contato" className="w-full py-24 bg-bg-dark text-white relative overflow-hidden">
      {/* Blueprint dark overlay */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Copy */}
        <div>
          <span className="inline-block py-1.5 px-3 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 text-xs font-bold uppercase tracking-widest clip-chamfer mb-6">
            Consultoria de Frota
          </span>
          <h2 className="text-[48px] font-display font-semibold text-white leading-[1.1] tracking-tighter mb-8 max-w-[15ch]">
            Precisão no <span className="text-brand-teal block">Atendimento.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-[42ch] mb-12">
            Nossos consultores técnicos analisam a necessidade da sua operação e indicam maquinários com laudo que garantem alta produtividade e payback imediato.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center clip-chamfer">
                <span className="text-brand-teal font-display font-semibold">1</span>
              </div>
              <div>
                <h4 className="text-white font-display font-semibold text-lg">Mapeamento de Necessidade</h4>
                <p className="text-gray-500 text-sm">Entendemos seu solo, cultura e budget.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center clip-chamfer">
                <span className="text-brand-teal font-display font-semibold">2</span>
              </div>
              <div>
                <h4 className="text-white font-display font-semibold text-lg">Curadoria Ativa</h4>
                <p className="text-gray-500 text-sm">Buscamos o equipamento ideal no mercado.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center clip-chamfer">
                <span className="text-brand-teal font-display font-semibold">3</span>
              </div>
              <div>
                <h4 className="text-white font-display font-semibold text-lg">Vistoria e Fechamento</h4>
                <p className="text-gray-500 text-sm">Laudo emitido e negociação transparente.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form / CRM Integration */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-full h-full bg-brand-teal/5 blur-3xl -translate-y-10 translate-x-10 rounded-full z-0 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            className="glass-panel-dark border border-white/10 p-8 md:p-12 clip-chamfer relative z-10 shadow-2xl"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-2">Falar com um Especialista</h3>
            <p className="text-gray-400 text-sm mb-8">Preencha os dados e entraremos em contato em até 2h úteis.</p>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mb-6">
                  <Checks size={40} weight="bold" />
                </div>
                <h4 className="text-2xl font-display font-semibold text-white mb-2">Solicitação Recebida</h4>
                <p className="text-gray-400">Nossa equipe de engenharia já está analisando seu perfil.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nome Completo</label>
                    <input required type="text" className="w-full bg-black/30 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 clip-chamfer focus:outline-none focus:border-brand-teal transition-colors" placeholder="João da Silva" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Empresa / Usina</label>
                    <input type="text" className="w-full bg-black/30 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 clip-chamfer focus:outline-none focus:border-brand-teal transition-colors" placeholder="BioAgro S.A." />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Corporativo</label>
                    <input required type="email" className="w-full bg-black/30 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 clip-chamfer focus:outline-none focus:border-brand-teal transition-colors" placeholder="joao@bioagro.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Telefone / WhatsApp</label>
                    <input required type="tel" className="w-full bg-black/30 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 clip-chamfer focus:outline-none focus:border-brand-teal transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">Interesse Principal</label>
                  <select className="w-full bg-black/30 border border-gray-700 text-white px-4 py-3 clip-chamfer focus:outline-none focus:border-brand-teal transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Selecione uma categoria</option>
                    <option value="venda">Quero Vender Equipamentos</option>
                    <option value="compra_agricola">Comprar Tratores/Colhedoras</option>
                    <option value="compra_linha_amarela">Comprar Escavadeiras/Pás</option>
                    <option value="pecas">Peças de Reposição</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full bg-brand-teal text-white px-8 py-4 font-bold text-lg clip-chamfer hover:bg-teal-500 hover:shadow-[0_0_20px_rgba(0,162,149,0.3)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>
                        Solicitar Contato
                        <PaperPlaneRight size={20} weight="fill" className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
