import React from 'react';
import { motion } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'Usina Santa Adélia',
    text: 'A curadoria da CerradinhoBio quebrou nosso preconceito com equipamento usado. A escavadeira chegou parecendo nova, com laudo completo. Economizamos 40% em relação a um maquinário 0km.',
    avatar: 'https://loremflickr.com/150/150/farmer,man'
  },
  {
    name: 'Roberto Vilela',
    company: 'Construtora Via Obras',
    text: 'Nunca mais piso em leilões. O tempo que perdíamos garimpando sucata não compensava. No portal encontrei 4 caminhões prontos pra rodar, e fechei o frete na mesma semana.',
    avatar: 'https://loremflickr.com/150/150/engineer,man'
  },
  {
    name: 'Ana Cláudia',
    company: 'Grupo AgroBandeirante',
    text: 'A transparência do laudo técnico é o que mais impressiona. O John Deere que compramos estava com o horímetro cravado no anúncio. Motor impecável e chassi blindado.',
    avatar: 'https://loremflickr.com/150/150/agronomist,woman'
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-bg-light relative overflow-hidden">
      {/* Background blueprint */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-black mb-4">
              A Validação do <span className="text-brand-teal">Mercado.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Empresas que otimizaram milhões em Capex através de nossa curadoria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
              key={idx}
              className="bg-white border border-gray-100 p-8 clip-chamfer relative group hover:shadow-neo-brutalist transition-shadow duration-300"
            >
              <Quotes size={48} className="text-brand-teal/20 absolute top-8 right-8 z-0 group-hover:text-brand-teal transition-colors duration-300" weight="fill" />
              
              <div className="relative z-10 mb-8">
                <p className="text-gray-700 italic font-medium leading-relaxed">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 clip-chamfer overflow-hidden border border-gray-200">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-black">{t.name}</h4>
                  <p className="text-xs font-bold text-brand-teal uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
