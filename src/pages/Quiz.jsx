import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CheckCircle, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 'actuation',
    title: 'Qual a sua área de atuação principal?',
    options: [
      { label: 'Agronegócio', value: 'agro' },
      { label: 'Construção / Infraestrutura', value: 'construcao' },
      { label: 'Transporte / Logística', value: 'transporte' }
    ]
  },
  {
    id: 'need',
    title: 'Qual a sua necessidade mais urgente?',
    // Will dynamically render options based on previous answer, but we simplify for MVP
    options: [
      { label: 'Aumentar produtividade e reduzir gargalos', value: 'produtividade' },
      { label: 'Renovar frota antiga (reduzir manutenção)', value: 'renovacao' },
      { label: 'Expandir operações para novos contratos', value: 'expansao' }
    ]
  },
  {
    id: 'budget',
    title: 'Qual o seu orçamento aproximado para esta aquisição?',
    options: [
      { label: 'Até R$ 800.000', value: 'low' },
      { label: 'De R$ 800.000 a R$ 1.500.000', value: 'mid' },
      { label: 'Acima de R$ 1.500.000', value: 'high' }
    ]
  }
];

// Product mock based on catalog
const catalog = {
  agro: {
    category: 'Linha Verde',
    name: 'John Deere 8R 410',
    type: 'Trator Agrícola',
    price: 'R$ 1.850.000',
    image: '/images/tractor_deere.png',
    link: '/produto/john-deere-8r-410',
    description: 'Potência e tecnologia ideais para maximizar sua safra com precisão.'
  },
  construcao: {
    category: 'Linha Amarela',
    name: 'Caterpillar 320 GC',
    type: 'Escavadeira Hidráulica',
    price: 'R$ 780.000',
    image: '/images/excavator_cat.png',
    link: '#',
    description: 'Robustez e economia de combustível incomparáveis para sua obra.'
  },
  transporte: {
    category: 'Caminhões',
    name: 'Scania R500 6x4',
    type: 'Cavalo Mecânico',
    price: 'R$ 920.000',
    image: '/images/truck_scania.png',
    link: '#',
    description: 'Confiabilidade extrema para encarar as estradas mais desafiadoras.'
  }
};

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, isFinished, isAnalyzing]);

  const handleSelectOption = (questionId, optionValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionValue }));
    
    // Move to next automatically after brief delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        finishQuiz();
      }
    }, 400);
  };

  const finishQuiz = () => {
    setIsAnalyzing(true);
    // Simulate analyzing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsFinished(true);
    }, 2500);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      window.history.back(); // Or Link to "/"
    }
  };

  // If calculating result
  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center flex flex-col items-center relative z-10"
        >
          <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-teal rounded-full animate-spin mb-8"></div>
          <h2 className="font-display font-semibold text-3xl tracking-tight text-brand-black mb-4">
            Analisando seu perfil técnica...
          </h2>
          <p className="text-gray-500 max-w-sm">
            Cruzando suas respostas com as melhores opções certificadas do nosso estoque.
          </p>
        </motion.div>
      </div>
    );
  }

  // If finished, show Result
  if (isFinished) {
    const recommendedProduct = catalog[answers.actuation] || catalog.agro;

    return (
      <div className="min-h-[100dvh] bg-bg-light flex flex-col relative">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        
        <header className="py-6 px-6 md:px-12 w-full flex justify-center sticky top-0 bg-bg-light/80 backdrop-blur z-40 border-b border-gray-200">
          <Link to="/" className="font-display font-bold text-2xl tracking-tighter cursor-pointer relative z-50">
            Cerradinho<span className="text-brand-teal">Bio</span> Máquinas
          </Link>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl bg-white shadow-neo-brutalist border border-gray-200 clip-chamfer overflow-hidden flex flex-col md:flex-row"
          >
            {/* Recommendation Image Side */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-gray-100 relative">
              <img 
                src={recommendedProduct.image} 
                alt={recommendedProduct.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 clip-chamfer shadow-sm">
                  {recommendedProduct.category}
                </span>
              </div>
            </div>

            {/* Recommendation Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white">
              <div className="inline-flex items-center gap-2 text-brand-teal font-bold uppercase tracking-widest text-xs mb-4">
                <CheckCircle size={18} weight="fill" />
                Máquina Ideal Encontrada
              </div>
              
              <h1 className="font-display font-semibold text-3xl md:text-4xl text-brand-black mb-4 leading-tight">
                {recommendedProduct.name}
              </h1>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {recommendedProduct.description} Nossa recomendação é baseada na sua necessidade de focar em operações críticas no setor {answers.actuation === 'agro' ? 'Ágricola' : answers.actuation === 'construcao' ? 'de Construção' : 'de Logística'}.
              </p>

              <div className="bg-gray-50 p-4 border border-gray-100 mb-8 inline-block max-w-max">
                <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Valor Estimado</p>
                <p className="text-2xl font-bold text-brand-black">{recommendedProduct.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link to={recommendedProduct.link} className="flex-1 text-center bg-brand-black text-white px-6 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors clip-chamfer">
                  Ver Detalhes
                </Link>
                <a 
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20fiz%20o%20quiz%20no%20site%20e%20me%20interessei%20pelo%20equipamento%20recomendado." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors clip-chamfer"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Negociar
                </a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  const currentQ = questions[currentStep];

  return (
    <div className="min-h-[100dvh] bg-bg-light flex flex-col relative w-full overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Header minimal */}
      <header className="py-6 px-6 md:px-12 w-full flex items-center justify-between sticky top-0 bg-bg-light/80 backdrop-blur z-40 border-b border-gray-200">
        <button onClick={handleBack} className="text-gray-400 hover:text-brand-black transition-colors flex items-center gap-2 font-semibold text-sm">
          <CaretLeft size={20} weight="bold" /> Voltar
        </button>
        <Link to="/" className="font-display font-bold text-xl tracking-tighter cursor-pointer hidden md:block">
          Cerradinho<span className="text-brand-teal">Bio</span>
        </Link>
        <div className="text-sm font-bold text-gray-400 tracking-widest">
          {currentStep + 1} / {questions.length}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 relative z-40">
        <motion.div 
          className="h-full bg-brand-teal"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.85, 0, 0.15, 1] }}
            className="w-full"
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-brand-black mb-12 text-center leading-tight tracking-tight">
              {currentQ.title}
            </h2>

            <div className="flex flex-col gap-4">
              {currentQ.options.map((option, idx) => {
                const isSelected = answers[currentQ.id] === option.value;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, option.value)}
                    className={`
                      w-full text-left p-6 md:p-8 border-2 clip-chamfer flex items-center justify-between group transition-all duration-300
                      ${isSelected 
                        ? 'border-brand-teal bg-white/50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-brand-black hover:shadow-sm'
                      }
                    `}
                  >
                    <span className={`font-semibold md:text-lg transition-colors ${isSelected ? 'text-brand-teal' : 'text-brand-black group-hover:text-brand-black'}`}>
                      {option.label}
                    </span>
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                      ${isSelected ? 'border-brand-teal bg-brand-teal' : 'border-gray-300 group-hover:border-brand-black'}
                    `}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
