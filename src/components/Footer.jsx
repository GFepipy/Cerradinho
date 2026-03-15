import React from 'react';
import { ArrowRight, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 border-t-4 border-brand-teal relative overflow-hidden">
      {/* Background blueprint grid slightly visible */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo-cerradinho-rodape.png" 
                alt="CerradinhoBio Máquinas" 
                className="h-14 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A curadoria de ponta para máquinas pesadas, linha amarela e verde. Trazendo a força da indústria para o século XXI com total transparência e otimização de tempo.
            </p>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide uppercase text-gray-300">Inventário</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-teal"/> Caminhões Pesados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-teal"/> Linha Amarela (Construção)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-teal"/> Linha Verde (Agrícola)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-teal"/> Peças Reposição OEM</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide uppercase text-gray-300">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Nossa Revolução</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Sistema de Indicação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Política de Garantia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide uppercase text-gray-300">Suporte 24/7</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-teal mt-1 shrink-0" size={20}/>
                <span className="text-gray-400 text-sm">Polo Industrial de Chapadão do Céu, GO - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-teal shrink-0" size={20}/>
                <span className="text-gray-400 text-sm">+55 (64) 3636-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple className="text-brand-teal shrink-0" size={20}/>
                <span className="text-gray-400 text-sm">comercial@cerradinhobiomaquinas.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} CerradinhoBio Máquinas. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-brand-teal transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
