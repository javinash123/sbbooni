import Layout from "@/components/Layout";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container-wide text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
          >
            Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Simple, transparent pricing that grows with your business.
          </motion.p>
        </div>

        <section className="py-24">
          <div className="container-wide max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-100 grid md:grid-cols-2 gap-16"
            >
              <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tighter">All-in-one</h2>
                <p className="text-gray-500 font-medium">Everything you need to start, run, and grow your business.</p>
                <ul className="space-y-4">
                  {["Digital Invoicing", "Global Payments", "cShop Storefront", "Real-time Analytics"].map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-bold text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-[2rem] p-10 flex flex-col justify-center items-center text-center space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Transaction Fee</p>
                  <p className="text-7xl font-black text-black">3.5%</p>
                  <p className="text-sm font-bold text-gray-500">+ AED 1.00 per transaction</p>
                </div>
                <Button className="w-full h-14 bg-black text-white hover:bg-black/90 font-black uppercase tracking-widest text-xs rounded-xl">
                  Get Started
                </Button>
                <p className="text-xs text-gray-400 font-medium">No monthly fees. No hidden costs.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
