import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ShoppingBag, CreditCard, Globe, Users, Heart, ArrowRight, FileText, BarChart3, ShieldCheck } from "lucide-react";

export default function WhoWeServe() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-black text-white pt-40 pb-24">
        <div className="container-wide text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase"
          >
            Businesses use SimpleBit across multiple industries
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 mt-20 max-w-4xl mx-auto">
             <div className="space-y-6">
                <div className="aspect-square w-48 mx-auto relative">
                   <div className="absolute inset-0 border-[12px] border-white/5 rounded-full" />
                   <div className="absolute inset-0 border-[12px] border-primary border-t-transparent border-r-transparent rounded-full rotate-45" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-black text-sm uppercase">By Industry</span>
                   </div>
                </div>
                <ul className="text-left space-y-2 text-sm font-bold text-white/60">
                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> eCommerce</li>
                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400" /> Professional Services</li>
                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-yellow-400" /> Food & Beverage</li>
                </ul>
             </div>
             <div className="space-y-6">
                <div className="aspect-square w-48 mx-auto relative">
                   <div className="absolute inset-0 border-[12px] border-white/5 rounded-full" />
                   <div className="absolute inset-0 border-[12px] border-primary border-b-transparent rounded-full -rotate-12" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-black text-sm uppercase">Business Type</span>
                   </div>
                </div>
                <ul className="text-left space-y-2 text-sm font-bold text-white/60">
                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-yellow-400" /> Product</li>
                   <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Service</li>
                </ul>
             </div>
          </div>
        </div>
      </div>

      {/* Main Cards */}
      <section className="bg-white py-24">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          <Card 
            title="Standard"
            subtitle="Get a head start."
            desc="For businesses getting started with payment links, invoices, and basic reporting."
            quote="Our mission is to remove the headaches so you can focus on what you do best."
            features={[
              { label: "Accept payments", icon: CreditCard },
              { label: "Issue invoices and payment links", icon: FileText },
              { label: "Settlement and reconciliation", icon: ShieldCheck },
              { label: "Reporting and exports", icon: BarChart3 }
            ]}
            img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          />
          <Card 
            title="Premium"
            subtitle="Take your business to the next level."
            desc="For businesses needing higher volumes, advanced reporting, and operational controls."
            quote="Meet your customers on their favorite messaging and social apps, generate new business and convert more sales with eCommerce."
            features={[
              { label: "Accept payments", icon: CreditCard },
              { label: "Issue invoices and payment links", icon: FileText },
              { label: "Settlement and reconciliation", icon: ShieldCheck },
              { label: "Reporting and exports", icon: BarChart3 }
            ]}
            img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            variant="dark"
          />
        </div>
      </section>

      {/* Case Studies / Grid */}
      <section className="bg-gray-50 py-24">
         <div className="container-wide text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">See how eCommerce is enabling <br/>businesses like yours.</h2>
            
            <div className="flex gap-4 mb-16 overflow-x-auto pb-4 justify-center no-scrollbar">
               {["All", "Sports & Fitness", "Professional Services", "Food & Beverage", "eCommerce"].map((cat, i) => (
                 <button key={cat} className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${i === 0 ? 'bg-black text-white' : 'bg-white text-gray-400 hover:bg-gray-100'}`}>
                   {cat}
                 </button>
               ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[...Array(8)].map((_, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="bg-white rounded-3xl overflow-hidden shadow-sm"
                 >
                    <div className="aspect-square bg-gray-200">
                       <img src={`https://images.unsplash.com/photo-${1550000000000 + (i * 100000)}?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-left">
                       <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">eCommerce</p>
                       <h4 className="font-black text-sm">Business Name</h4>
                       <p className="text-[10px] text-gray-400 font-bold">Dubai, UAE</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <Button variant="outline" className="mt-16 rounded-full px-12 h-14 border-black font-black uppercase text-xs">Load More</Button>
         </div>
      </section>

      {/* CTA Banner - Enhanced with graphics */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white py-16"
      >
        <div className="container-wide">
          <div className="bg-black rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-blue-500/20 pointer-events-none" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" 
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">Ready to grow <br/>your business?</h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-2xl px-12 h-16 text-xl font-black uppercase shadow-[0_0_50px_rgba(0,230,118,0.3)]">Request Demo</Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

function Card({ title, subtitle, desc, quote, features, img, variant = "light" }: any) {
  return (
    <div className={`rounded-[3rem] p-10 flex flex-col gap-8 shadow-xl border ${variant === 'dark' ? 'bg-white border-gray-100' : 'bg-white border-gray-100'}`}>
      <div className="space-y-2">
         <h2 className="text-4xl font-black tracking-tighter uppercase">{title}</h2>
         <p className="font-bold text-gray-400">{subtitle}</p>
      </div>

      <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-gray-100">
         <img src={img} className="w-full h-full object-cover" />
      </div>

      <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
      
      <div className="pl-6 border-l-4 border-primary/20 italic text-sm font-medium text-gray-600">
         {quote}
      </div>

      <div className="pt-8 border-t border-gray-100">
         <p className="text-[10px] font-black uppercase tracking-widest text-center mb-8">Get started in minutes</p>
         <div className="grid grid-cols-4 gap-4">
            {features.map((f: any, i: number) => (
              <div key={i} className="text-center space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto">
                    <f.icon className="w-5 h-5" />
                 </div>
                 <p className="text-[8px] font-bold text-gray-400 uppercase leading-tight tracking-widest">{f.label}</p>
              </div>
            ))}
         </div>
      </div>

      <div className="flex gap-4">
         <Button className="flex-1 bg-black text-white rounded-2xl h-14 font-black">Request a demo</Button>
         <Button className="flex-1 bg-primary text-white rounded-2xl h-14 font-black">Learn More</Button>
      </div>
    </div>
  );
}