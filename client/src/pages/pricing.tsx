import { useState } from "react";
import Layout from "@/components/Layout";
import { Check, Info, ArrowRight, ShoppingBag, CreditCard, BarChart3, MessageCircle, Zap, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "All-in-One",
    price: "Free",
    setup: "(no setup and monthly fees)",
    features: [
      "Store listing on Zbooni Marketplace",
      "Industry leading acceptance rates",
      "Security & fraud protection",
      "Payouts on demand",
      "Refund Support",
      "Multi-currencies"
    ],
    mainFeature: {
      title: "Payments powered by SimpleBit.",
      desc: "Ideal for businesses that don't currently accept online payments. It's the fastest and easiest way to get started.",
      stats: [
        { label: "No setup fees", icon: Info },
        { label: "No monthly subscription", icon: Check },
        { label: "3.5% + AED 1 per order + VAT", icon: Zap },
        { label: "Available in UAE, KSA, Egypt, and Jordan.", icon: Globe }
      ]
    }
  },
  {
    name: "Integrated",
    price: "Custom",
    setup: "(tailored for high volume)",
    features: [
      "Custom integration support",
      "Priority acceptance rates",
      "Enterprise fraud protection",
      "Settlement customization",
      "Dedicated account manager",
      "Global currency support"
    ],
    mainFeature: {
      title: "Integrated commerce solutions.",
      desc: "Perfect for established businesses looking to integrate our powerful tools into their existing workflows and tech stack.",
      stats: [
        { label: "Custom transaction fees", icon: Info },
        { label: "Scale-ready infrastructure", icon: Check },
        { label: "API & SDK access", icon: Zap },
        { label: "Enterprise grade security", icon: Globe }
      ]
    }
  },
  {
    name: "Custom",
    price: "Enterprise",
    setup: "(full platform white-label)",
    features: [
      "White-label options",
      "Custom feature development",
      "Unlimited transactions",
      "On-premise deployment available",
      "24/7 Premium support",
      "Custom multi-country setup"
    ],
    mainFeature: {
      title: "Built for your unique scale.",
      desc: "For large organizations with complex requirements. We build custom workflows and features specifically for your business model.",
      stats: [
        { label: "Volume based pricing", icon: Info },
        { label: "Strategic partnership", icon: Check },
        { label: "Custom data residency", icon: Zap },
        { label: "Advanced API controls", icon: Globe }
      ]
    }
  }
];

const featuresList = [
  { title: "CAPTURE ORDERS", icon: ShoppingBag, color: "bg-green-100" },
  { title: "ACCEPT PAYMENTS", icon: CreditCard, color: "bg-blue-100" },
  { title: "SELL MORE", icon: TrendingUp, color: "bg-yellow-100" },
  { title: "TRACK EVERYTHING", icon: BarChart3, color: "bg-purple-100" },
  { title: "SUPPORT", icon: MessageCircle, color: "bg-orange-100" }
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState(plans[0]);

  return (
    <Layout>
      <div className="bg-black text-white pt-40 pb-20">
        <div className="container-wide">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-12 tracking-tighter"
          >
            Expand into untapped territory no matter where you are in your business journey
          </motion.h1>

          <div className="flex gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
            {plans.map((p) => (
              <button 
                key={p.name}
                onClick={() => setActivePlan(p)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap",
                  activePlan.name === p.name ? "bg-primary text-white" : "bg-white/5 text-white/50 hover:bg-white/10"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            {/* Pricing Card */}
            <motion.div 
              key={`card-${activePlan.name}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white text-black rounded-[2.5rem] p-10 flex flex-col"
            >
              <div className="text-center mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  {activePlan.name === "All-in-One" ? "Best for Starter and Power" : "Scale your business"}
                </p>
                <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter">{activePlan.price}</h2>
                <p className="text-xs text-gray-400 font-bold">{activePlan.setup}</p>
              </div>

              <div className="space-y-4 flex-grow">
                <p className="font-black text-sm uppercase tracking-widest">Advantages</p>
                {activePlan.features.map((f: any) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 text-primary font-bold text-sm hover:underline text-left uppercase tracking-widest">View all features</button>
            </motion.div>

            {/* Details Panel */}
            <motion.div 
              key={`details-${activePlan.name}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 rounded-[2.5rem] p-10 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
               
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">{activePlan.mainFeature?.title}</h3>
               <p className="text-white/60 text-lg mb-10 max-w-xl font-medium">{activePlan.mainFeature?.desc}</p>

               <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {activePlan.mainFeature?.stats.map((s: any, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <s.icon className="w-5 h-5 text-primary" />
                       </div>
                       <span className="font-bold text-sm uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
               </div>

               <div className="pt-10 border-t border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">Start Now</p>
                  <div className="flex flex-wrap gap-4">
                     <Button className="bg-white text-black hover:bg-white/90 rounded-xl px-8 h-14 font-black uppercase">Download App</Button>
                     <Button variant="outline" className="border-white/20 text-white rounded-xl px-8 h-14 font-black uppercase">Request Demo</Button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <section className="bg-white py-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-4xl font-black mb-12 tracking-tighter">Included features</h2>
          <div className="bg-gray-50 rounded-[2.5rem] p-8 space-y-4">
            {featuresList.map((f: any, i: number) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", f.color)}>
                    <f.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-black text-sm tracking-widest">{f.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="bg-white py-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-4xl font-black mb-12 tracking-tighter">Included features</h2>
          <div className="bg-gray-50 rounded-[2.5rem] p-8 space-y-4">
            {featuresList.map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", f.color)}>
                    <f.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-black text-sm tracking-widest">{f.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white pb-24">
        <div className="container-wide">
          <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
             <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase">Tap into <br/>eCommerce</h2>
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-2xl px-12 h-16 text-lg font-black uppercase">Request Demo</Button>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
