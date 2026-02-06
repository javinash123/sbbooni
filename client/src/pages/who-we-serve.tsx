import Layout from "@/components/Layout";
import { Check, Zap, ShoppingBag, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WhoWeServe() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-white">
        <div className="container-wide text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
          >
            Who we serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Zbooni powers businesses of all sizes, from solo entrepreneurs to global enterprises.
          </motion.p>
        </div>

        <section className="py-24">
          <div className="container-wide grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Entrepreneurs",
                desc: "Solo-sellers and creators looking to professionalize their sales.",
                icon: Zap,
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Retailers",
                desc: "Boutiques and showrooms bringing their in-store experience online.",
                icon: ShoppingBag,
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Global Brands",
                desc: "Enterprise businesses scaling their reach across borders.",
                icon: Globe,
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden"
              >
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-10 bottom-10 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{item.title}</h2>
                  <p className="text-white/70 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
