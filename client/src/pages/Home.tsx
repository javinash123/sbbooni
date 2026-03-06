import Layout from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, CreditCard, BarChart3, MessageCircle, Zap, Globe, TrendingUp, Play, Instagram, Twitter, Linkedin, Facebook, ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import dashboardAnalytics from "@/assets/dashboard_analytics.png";
import invoicesImage from "@/assets/invoices-image.png";

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
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">Transactions <br/>just got <br/>Simpler.</h2>
              <p className="text-xl text-gray-500 leading-tight font-medium max-w-md">
                Accept cards, send payment links, generate QR codes and facilitate settlement in AED*
              </p>
              <div className="pt-2">
                <Button className="bg-black text-white hover:bg-black/90 px-10 h-12 text-sm font-bold active:bg-purple-600">
                  Get Started
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
                  <motion.div 
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="aspect-[4/5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center"
                  >
                     <img src={dashboardAnalytics} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dashboard Analytics" />
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature 2: Accept -> "How It Works" */}
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
               <div className="aspect-[9/16] max-w-[300px] mx-auto bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-gray-800">
                  <div className="absolute top-0 w-full h-6 bg-gray-800 flex justify-center items-center">
                    <div className="w-16 h-1 bg-gray-700 rounded-full" />
                  </div>
                  <div className="p-6 pt-12 space-y-6 h-full bg-white flex flex-col">
                    <motion.div 
                      animate={{ opacity: [0, 1] }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="p-4 bg-gray-50 rounded-2xl border border-gray-100"
                    >
                      <p className="text-[10px] font-bold text-gray-400">STEP 1</p>
                      <p className="text-sm font-bold text-black">Creating Account...</p>
                    </motion.div>
                    <motion.div 
                      animate={{ opacity: [0, 1] }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="p-4 bg-primary/10 rounded-2xl border border-primary/20"
                    >
                      <p className="text-[10px] font-bold text-primary">STEP 2</p>
                      <p className="text-sm font-bold text-black">Link Created!</p>
                    </motion.div>
                    <motion.div 
                      animate={{ opacity: [0, 1] }}
                      transition={{ delay: 3, duration: 0.5 }}
                      className="p-4 bg-blue-50 rounded-2xl border border-blue-100"
                    >
                      <p className="text-[10px] font-bold text-blue-400">STEP 3</p>
                      <p className="text-sm font-bold text-black">Sent to Customer</p>
                    </motion.div>
                    <motion.div 
                      animate={{ opacity: [0, 1], scale: [0.9, 1] }}
                      transition={{ delay: 4, duration: 0.5 }}
                      className="mt-auto p-4 bg-green-500 rounded-2xl text-white text-center font-bold"
                    >
                      PAID IN FULL
                    </motion.div>
                  </div>
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
               <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">How It <br/>Works</h2>
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">1</div>
                   <p className="text-xl font-bold">Create Account</p>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">2</div>
                   <p className="text-xl font-bold">Create QR Code / Payment Link</p>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">3</div>
                   <p className="text-xl font-bold">Get Paid</p>
                 </div>
                 <p className="text-2xl font-black text-primary pt-4">Yes, it's that simple!</p>
               </div>
               <div className="pt-4 flex flex-col gap-8">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold active:bg-purple-600">
                    Get Started
                  </Button>
               </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature 3: Track -> Updated Features */}
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
                <motion.div 
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="simple-bit-shadow rounded-[3rem] overflow-hidden bg-gray-900 border border-white/10 p-4"
                >
                  <img src={invoicesImage} className="w-full aspect-square object-cover rounded-[2.5rem] opacity-90 group-hover:opacity-100 transition-opacity duration-500" alt="Invoices" />
                </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 space-y-10"
            >
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">How Simplebit Helps Your Business</h2>
               <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white/90">From SimpleBit's merchant dashboard.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Track Payments',
                        'Download Invoices',
                        'Observe Customers Behavior',
                        'No Hidden Fees',
                        'Payouts Within 3 Business Days*'
                      ].map((text, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + (i * 0.15), ease: [0.22, 1, 0.36, 1] }}
                          className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/10"
                        >
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-white font-medium">{text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Accept Digital Payments From</p>
                    <div className="flex flex-wrap gap-4 grayscale opacity-50">
                      {['AMEX', 'VISA', 'MASTERCARD', 'SAMSUNG PAY', 'APPLE PAY'].map(p => (
                        <div key={p} className="h-8 px-3 bg-white/10 rounded-lg flex items-center font-bold text-[10px] text-white border border-white/5">{p}</div>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-12 text-sm font-bold active:bg-purple-600">
                    Get Started
                  </Button>
               </div>
            </motion.div>
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
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">Lets Start Now!</h2>
              <p className="text-lg text-white/70 font-medium">Simply create your account now</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-2xl px-12 h-14 text-lg font-black uppercase shadow-[0_0_50px_rgba(var(--primary),0.3)] active:bg-purple-600">Get Started</Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
