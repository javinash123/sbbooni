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
            TRANSACTIONS <br />
            MADE SIMPLE
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-white drop-shadow-lg leading-tight max-w-xl font-medium mx-auto md:mx-0">
              Facilitating secure, real-real-time payments for modern businesses across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Button className="bg-white text-black hover:bg-white/90 px-10 h-12 text-sm font-bold active:bg-purple-600">
                Talk to Sales
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold active:bg-purple-600">
                Request Demo
              </Button>
            </div>
            <p className="text-sm text-white/70 font-medium pt-4">
              New businesses pay Zero transaction fees on their first 5,000 AED*
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}