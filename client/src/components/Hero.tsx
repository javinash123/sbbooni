import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dashboard.png";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40 grayscale" />
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-[120px] font-black font-heading leading-[0.85] tracking-tighter text-white uppercase"
          >
            Say hello <br />
            to Commerce.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl text-gray-300 leading-tight max-w-2xl font-medium">
              The next generation platform for personalised commerce. <br/>Sell more with a human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#00E676] text-black hover:bg-[#00c853] px-12 py-8 text-xl font-bold rounded-2xl">
                Download App
              </Button>
              <GradientButton className="text-xl px-12 py-8 rounded-2xl">
                Request Demo
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Element */}
      <div className="container-wide relative mt-20">
         <div className="lg:absolute lg:right-10 lg:-top-32 w-full lg:w-[450px] bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] shadow-2xl flex gap-6">
            <div className="flex-grow">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">cShop</p>
               <h3 className="text-2xl font-black text-white mb-4">Discover, chat, <br/>and shop.</h3>
               <Button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-6 rounded-full border border-white/20">
                  Explore cShop today
               </Button>
            </div>
            <div className="w-32 h-40 bg-gray-800 rounded-2xl overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
         </div>
      </div>
    </section>
  );
}