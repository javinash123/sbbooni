import Layout from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, CreditCard, BarChart3, MessageCircle, Zap, Globe, TrendingUp, Play, Instagram, Twitter, Linkedin, Facebook, ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Feature 1: Capture */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding bg-white overflow-hidden"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">Transactions <br/>just got <br/>Simplier.</h2>
              <p className="text-xl text-gray-500 leading-tight font-medium max-w-md">
                Create payment links or invoices to accept digital payments from customers and settle in AED
              </p>
              <div className="pt-2">
                <Button className="bg-black text-white hover:bg-black/90 px-10 h-12 text-sm font-bold">
                  Request to Demo
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative"
            >
               <div className="simple-bit-shadow rounded-[3rem] overflow-hidden bg-white p-4 group">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-400 to-purple-500 rounded-[2.5rem] relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                     <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl border border-white/20">
                        <p className="font-black">Direct Sales <span className="text-primary font-bold ml-2">AED 220</span></p>
                     </div>
                  </div>
               </div>
               {/* Floating Social Icons */}
               <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {[Instagram, MessageCircle, Twitter, Facebook].map((Icon, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black border border-gray-50 cursor-pointer"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature 2: Accept */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding bg-black text-white overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
               <div className="aspect-video bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1556740734-793864bb358c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30 cursor-pointer"
                    >
                      <Play className="fill-white text-white w-8 h-8 ml-1" />
                    </motion.div>
                  </div>
               </div>
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute -bottom-10 right-10 w-64 bg-white p-6 rounded-3xl shadow-2xl text-black border border-gray-100"
               >
                  <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Live Transaction</p>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full w-full" />
                    <div className="h-4 bg-gray-100 rounded-full w-2/3" />
                    <div className="pt-4 border-t flex justify-between items-center">
                      <span className="font-bold text-xs">Checkout Total</span>
                      <span className="font-black text-primary text-lg">AED 450</span>
                    </div>
                  </div>
               </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
               <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">Send AED <br/>Across <br/>Various Payment channels</h2>
               <p className="text-xl text-gray-400 leading-tight max-w-md">Send payment links or invoices to customers and accept digital payments securely.</p>
               <div className="pt-4 flex flex-col gap-8">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold">
                    request demo
                  </Button>
                  <div className="flex items-center gap-6">
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                       className="space-y-1"
                     >
                        <p className="text-5xl font-black text-primary">58%</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Conversion Rate</p>
                     </motion.div>
                     <div className="h-12 w-px bg-white/10" />
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                       className="space-y-1"
                     >
                        <p className="text-5xl font-black text-white">2.4x</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Faster Checkout</p>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature 3: Sell */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding bg-white relative overflow-hidden"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-10"
             >
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Settle payments <br/>in AED</h2>
                <p className="text-2xl text-gray-500 font-medium leading-tight">Manage transactions, reporting, and settlement from a single platform with clear AED payouts.</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-black/90 px-10 h-12 text-sm font-bold">
                    Learn More
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                     className="space-y-1"
                   >
                      <p className="text-5xl font-black tracking-tighter text-black">1.9x</p>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-none">Higher order value</p>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                     className="space-y-1"
                   >
                      <p className="text-5xl font-black tracking-tighter text-primary">100+</p>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-none">partners in the UAE</p>
                   </motion.div>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
               className="relative group"
             >
                <div className="bg-gray-50 rounded-[4rem] p-12 border border-gray-100 relative overflow-hidden simple-bit-shadow">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                   <p className="font-black text-xl mb-10">Payments simplified.</p>
                   <div className="space-y-12">
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-widest">Works with all payment methods</p>
                         <div className="flex flex-wrap gap-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            {['APPLE PAY', 'SAMSUNG PAY', 'VISA', 'MASTERCARD', 'AMEX'].map(p => (
                              <div key={p} className="h-10 px-4 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center font-bold text-xs">{p}</div>
                            ))}
                         </div>
                      </div>
                      <div className="pt-10 border-t border-gray-200">
                         <p className="text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-widest">Integrate with your tools</p>
                         <div className="flex flex-wrap gap-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            {['Stripe', 'PayPal', 'Adyen', 'Checkout'].map(p => (
                              <div key={p} className="h-10 px-4 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center font-bold text-xs">{p}</div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature 4: Track */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding bg-black text-white overflow-hidden relative"
      >
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 relative group"
            >
                <div className="simple-bit-shadow rounded-[3rem] overflow-hidden bg-gray-900 border border-white/10 p-4">
                  <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-10 top-1/4 bg-white p-6 rounded-3xl shadow-2xl text-black space-y-4 w-64 border border-gray-100"
                >
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Real-time Analytics</p>
                   <div className="h-32 bg-gray-50 rounded-2xl flex items-end gap-2 p-4">
                      {[40, 70, 45, 90, 65, 80].map((h, i) => (
                        <div key={i} className="flex-grow bg-primary/20 rounded-t-lg relative group/bar">
                           <motion.div 
                             initial={{ height: 0 }}
                             whileInView={{ height: `${h}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.6 + (i * 0.15), ease: [0.22, 1, 0.36, 1] }}
                             className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                           />
                        </div>
                      ))}
                   </div>
                </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 space-y-10"
            >
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">Track your <br/>payments</h2>
               <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white/90">Monitor transactions, settlements, and reports in real time from “Simplebits Built in Merchant Dashboard”</h3>
                    <ul className="space-y-4">
                      {[
                        'Real time visibility into transactions and settlement status',
                        'Clear reporting for finance and operations teams',
                        'Export ready data for reconciliation and audits'
                      ].map((text, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + (i * 0.15), ease: [0.22, 1, 0.36, 1] }}
                          className="flex gap-4 items-start"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-gray-400 font-medium">{text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold">
                    Learn More
                  </Button>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why SimpleBit Section - Modern Redesign */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding bg-slate-950 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
              Why <span className="text-primary">SimpleBit?</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-tight">
              SimpleBit is aiming to make transactions simple, while offering low fees and meeting enterprise and regulatory requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Compliance first design",
                text: "Built for regulated markets and financial institutions", 
                color: "text-primary",
                icon: ShieldCheck
              },
              { 
                title: "Operational Efficiency",
                text: "Simplified payment collection, settlement, and reporting", 
                color: "text-[#3B82F6]",
                icon: Zap
              },
              { 
                title: "Enterprise Readiness",
                text: "Reliable infrastructure for growing businesses", 
                color: "text-[#EAB308]",
                icon: Building2
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <stat.icon className={cn("w-8 h-8", stat.color)} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{stat.title}</h3>
                    <p className="text-white/60 font-medium leading-relaxed">{stat.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-white/5 rounded-[3.5rem] p-12 md:p-20 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-48 -mb-48 blur-[100px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-10">
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                  Communication <br/>is the <span className="text-primary">new checkout.</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-3xl font-black">98%</p>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Messaging Open Rate</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-gray-500">20%</p>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Average Email Open Rate</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-white text-black hover:bg-white/90 px-10 h-14 rounded-2xl text-sm font-bold w-full md:w-fit">
                  Scale your reach
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-slate-900 rounded-[3rem] border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative group-hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Revenue Growth</p>
                      <p className="text-4xl font-black text-white">+156%</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-widest">
                      Live
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-end gap-2 pt-8">
                    {[30, 45, 35, 60, 55, 80, 70, 95, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg"
                      />
                    ))}
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary blur-[80px] opacity-20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">Discover more <br/>about Simplebit</h2>
            </div>
            <Button variant="outline" className="rounded-full px-10 h-14 border-black font-black uppercase text-xs">View all stories</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Personalizing the checkout experience for a global brand.",
                category: "eCommerce",
                img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "How chat commerce saved local retail during the shift.",
                category: "Retail",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Scaling service business with automated invoicing.",
                category: "Services",
                img: "https://images.unsplash.com/photo-1521737706076-370c4084ae04?auto=format&fit=crop&q=80&w=600"
              }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                  <img src={story.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={story.title} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{story.category}</p>
                  <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors">{story.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Compact Height */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white py-12"
      >
        <div className="container-wide">
          <div className="bg-black rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
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
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">Ready to try Simplebit</h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-2xl px-12 h-14 text-lg font-black uppercase shadow-[0_0_50px_rgba(0,230,118,0.3)]">Request Demo</Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
