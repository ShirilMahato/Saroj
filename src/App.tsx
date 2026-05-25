import { useState, useEffect } from "react";

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Partners } from './components/Partners';
import { Skills } from './components/Skills';
import { SocialImpact } from './components/SocialImpact';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-premium-black flex flex-col items-center justify-center"
          >
            <div className="text-4xl md:text-5xl font-bold tracking-wider mb-4 flex items-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                SAROJ
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-premium-red mx-2"
              >
                MAHATO
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-premium-gold"
              >
                .
              </motion.span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-premium-red to-premium-gold rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-premium-black min-h-screen text-white font-sans selection:bg-premium-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Achievements />
          <Partners />
          <Skills />
          <SocialImpact />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
