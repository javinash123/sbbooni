import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ShoppingBag, CreditCard, BarChart3, MessageCircle, Globe, Check, Play, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function CapturePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-[#0F172A] text-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                Your business in <br/>your hands.
              </h1>
              <p className="text-xl text-gray-400 max-w-md mb-10 font-medium">
                Everything you need to compete, succeed and thrive at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                 <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                       <TrendingUp className="text-primary w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Pending orders</p>
                       <p className="text-2xl font-black">32</p>
                    </div>
                 </div>
                 <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00E676]/20 flex items-center justify-center">
                       <Check className="text-[#00E676] w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total collected</p>
                       <p className="text-2xl font-black">21 <span className="text-sm text-gray-500 font-bold">Orders</span></p>
                    </div>
                 </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
               <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl relative z-10" />
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs / Submenu */}
      <div className="bg-white border-b sticky top-[72px] z-40">
         <div className="container-wide flex gap-8 py-4 overflow-x-auto no-scrollbar">
            {['Capture Orders', 'Accept Payments', 'Sell More', 'Track Everything'].map((tab, i) => (
              <button key={tab} className={cn(
                "whitespace-nowrap font-bold text-xs uppercase tracking-widest transition-colors",
                i === 0 ? "text-primary" : "text-gray-400 hover:text-black"
              )}>
                {tab}
              </button>
            ))}
         </div>
      </div>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Capture sales on the same channels you interact with your customers on. Use tools specifically made for modern business.</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h3 className="text-4xl font-black tracking-tighter">Create orders instantly</h3>
                <p className="text-lg text-gray-500 font-medium">Build a basket in just a few taps. Select a customer and add items from your catalog in 10 seconds or less.</p>
                <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Start creating orders</Button>
             </div>
             <div className="relative">
                <div className="bg-gray-50 rounded-[3rem] p-12 flex items-center justify-center">
                   <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b">
                         <span className="font-black">Zayd's cart</span>
                         <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                            <X className="w-4 h-4" />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-bold">Standard plan</span>
                            <span className="text-sm font-black">AED 150.00</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-sm font-bold">Booking</span>
                            <span className="text-sm font-black">AED 250.00</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#00E676] rounded-full flex items-center justify-center text-white shadow-xl">
                   <Zap className="w-10 h-10 fill-white" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* More sections mimicking the image... */}
      {/* For brevity in prototype, I'll add the remaining sections with simplified versions of the graphic elements */}

      <section className="py-24 bg-black text-white">
         <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="bg-white rounded-3xl p-8 text-black space-y-4 w-full max-w-sm mx-auto shadow-2xl">
                  <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px]">
                     <Plus className="w-3 h-3" /> Add a new item
                  </div>
                  <div className="space-y-2">
                     <p className="text-xs font-bold text-gray-400">New order</p>
                     <div className="h-10 border rounded-lg px-4 flex items-center font-bold text-sm">Catering event for 8</div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
               <h3 className="text-4xl font-black tracking-tighter">One-off invoices</h3>
               <p className="text-lg text-gray-400">Create one-off invoices from items not listed in your catalog, great for services or fully customized orders.</p>
               <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black">Get started</Button>
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
         <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <h3 className="text-4xl font-black tracking-tighter">Share Payment Links</h3>
               <p className="text-lg text-gray-500 font-medium">Create orders and share payment links directly to your customers via social media or messaging apps.</p>
               <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Start sharing</Button>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-xl" />
                <div className="absolute -bottom-10 -left-10 flex gap-4">
                   {[Instagram, MessageCircle, Twitter].map((Icon, i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black border border-gray-50">
                         <Icon className="w-6 h-6" />
                      </div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[3rem] bg-black p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase relative z-10">Tap into <br/><span className="italic font-light">eCommerce</span></h2>
             <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-2xl px-12 h-16 text-lg font-black uppercase relative z-10">Request Demo</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");
import { TrendingUp, Plus, X } from "lucide-react";