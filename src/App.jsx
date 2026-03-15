import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router basename="/Cerradinho/">
      <div className="min-h-[100dvh] bg-bg-light text-brand-black flex flex-col relative w-full overflow-x-hidden">
        {/* Blueprint grid background container */}
        <div className="fixed inset-0 pointer-events-none z-[-1] blueprint-grid mix-blend-multiply opacity-50"></div>

        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/john-deere-8r-410" element={<ProductPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
