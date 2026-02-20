import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dashboard.png";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl space-y-8 text-center md:text-left mx-auto md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black font-heading leading-[0.85] tracking-tighter text-white uppercase drop-shadow-2xl"
          >
            Say Hello to <br />
            Simple, Complaint <br />
            Business Payments
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-white drop-shadow-lg leading-tight max-w-xl font-medium mx-auto md:mx-0">
              Accept digital payments, issue invoices, and settle in AED securely and efficiently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Button className="bg-white text-black hover:bg-white/90 px-10 h-12 text-sm font-bold">
                Talk to Sales
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold">
                Request Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Element */}
      <div className="container-wide relative mt-16">
         <div className="lg:absolute lg:right-10 lg:-top-24 w-full lg:w-[400px] bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2.5rem] shadow-2xl flex gap-5">
            <div className="flex-grow">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">SimpleBit</p>
               <h3 className="text-xl font-black text-white mb-3">Discover, Learn <br/>and Request Demo</h3>
               <Button className="bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold px-5 h-8 rounded-full border border-white/20">
                  Request Demo
               </Button>
            </div>
            <div className="w-28 h-36 bg-gray-800 rounded-xl overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
         </div>
      </div>
    </section>
  );
}