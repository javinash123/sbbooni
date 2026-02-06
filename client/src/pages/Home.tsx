import Layout from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShoppingBag, CreditCard, BarChart3, MessageCircle, ArrowRight, Zap, Shield, Globe, Smartphone, Store, TrendingUp, Play, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Social Proof */}
      <section className="py-12 bg-black overflow-hidden border-t border-white/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale invert">
            {['The National', 'Forbes', 'Entrepreneur', 'DMC', '50 Million Businesses'].map((brand) => (
              <span key={brand} className="text-lg md:text-xl font-black tracking-tighter text-white">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 1: Capture */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3" /> Step 1: Capture
              </div>
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">Business <br/>just got <br/>personal.</h2>
              <p className="text-xl text-gray-500 leading-tight font-medium max-w-md">
                Sell like never before. Introduce checkout to the channels that matter the most to your customers.
              </p>
              <div className="pt-2">
                <Button className="btn-gradient px-10 h-12 text-sm font-bold">
                  Get started
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="zbooni-shadow rounded-[3rem] overflow-hidden bg-white p-4 group">
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
                      className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black border border-gray-50 cursor-pointer"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Accept */}
      <section className="section-padding bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
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
                 initial={{ x: 50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
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
            </div>
            <div className="space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest">
                <CreditCard className="w-3 h-3" /> Step 2: Accept
               </div>
               <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">Turn chat <br/>into <br/>cash flow.</h2>
               <p className="text-xl text-gray-400 leading-tight max-w-md">Easily create invoices and close sales directly within the messaging apps your customers already use and love.</p>
               <div className="pt-4 flex flex-col gap-8">
                  <Button className="btn-gradient-green px-10 h-12 text-sm font-bold w-fit">
                    View demo
                  </Button>
                  <div className="flex items-center gap-6">
                     <div className="space-y-1">
                        <p className="text-5xl font-black text-primary">58%</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Conversion Rate</p>
                     </div>
                     <div className="h-12 w-px bg-white/10" />
                     <div className="space-y-1">
                        <p className="text-5xl font-black text-white">2.4x</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Faster Checkout</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Sell */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                  <ShoppingBag className="w-3 h-3" /> Step 3: Sell
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Scale your <br/>reach.</h2>
                <p className="text-2xl text-gray-500 font-medium leading-tight">Enable global payments seamlessly and start selling across borders today.</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-gradient px-10 h-12 text-sm font-bold">
                    Tell me more
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                   <div className="space-y-1">
                      <p className="text-5xl font-black tracking-tighter text-black">1.9x</p>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-none">Higher order value</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-5xl font-black tracking-tighter text-primary">300+</p>
                      <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-none">Global partners</p>
                   </div>
                </div>
             </div>
             <div className="relative group">
                <div className="bg-gray-50 rounded-[4rem] p-12 border border-gray-100 relative overflow-hidden zbooni-shadow">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                   <p className="font-black text-xl mb-10">Payments simplified.</p>
                   <div className="space-y-12">
                      <div>
                         <p className="text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-widest">Works with all payment methods</p>
                         <div className="flex flex-wrap gap-4 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            {['VISA', 'MASTERCARD', 'AMEX', 'APPLE PAY', 'GOOGLE PAY'].map(p => (
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
             </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Track */}
      <section className="section-padding bg-black text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
                <div className="zbooni-shadow rounded-[3rem] overflow-hidden bg-gray-900 border border-white/10 p-4">
                  <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute -right-10 top-1/4 bg-white p-6 rounded-3xl shadow-2xl text-black space-y-4 w-64 border border-gray-100"
                >
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Real-time Analytics</p>
                   <div className="h-32 bg-gray-50 rounded-2xl flex items-end gap-2 p-4">
                      {[40, 70, 45, 90, 65, 80].map((h, i) => (
                        <div key={i} className="flex-grow bg-primary/20 rounded-t-lg relative group/bar">
                           <motion.div 
                             initial={{ height: 0 }}
                             whileInView={{ height: `${h}%` }}
                             className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                           />
                        </div>
                      ))}
                   </div>
                </motion.div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest">
                  <BarChart3 className="w-3 h-3" /> Step 4: Track
               </div>
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">Master <br/>your data.</h2>
               <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white/90">Gain total control and visibility of your business operations.</h3>
                    <ul className="space-y-4">
                      {[
                        'Real-time data on orders, vendors and customers.',
                        'Smart insights to optimize your sales funnel.',
                        'Complete financial reporting and reconciliation.'
                      ].map((text, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-gray-400 font-medium">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="btn-gradient-green px-10 h-12 text-sm font-bold">
                    Explore Analytics
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SimpleBit? Improved */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E676]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container-wide text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">Why SimpleBit?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-snug">We're bridging the gap between social interaction and commerce, enabling businesses to thrive where conversations happen.</p>
          </motion.div>
        </div>
        
        <div className="container-wide grid lg:grid-cols-3 gap-8 relative z-10">
          {[
            { label: 'Messaging Open Rate', value: '98%', desc: 'Compared to just 15% for traditional email marketing. Reach customers where they are already active.', color: 'primary' },
            { label: 'Sales Increase', value: '87%', desc: 'Merchants see a massive jump in conversion when switching to personalized chat-based commerce.', color: 'accent' },
            { label: 'Global Reach', value: '22+', desc: 'Support for businesses across multiple countries and currencies with seamless localized payments.', color: 'white' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="p-10 rounded-[3.5rem] bg-white/5 border border-white/10 transition-all duration-500 group"
            >
              <p className={`text-6xl md:text-8xl font-black mb-8 transition-transform duration-500 group-hover:scale-110 ${stat.color === 'primary' ? 'text-primary' : stat.color === 'accent' ? 'text-[#00E676]' : 'text-white'}`}>
                {stat.value}
              </p>
              <h4 className="text-2xl font-black mb-4 tracking-tight">{stat.label}</h4>
              <p className="text-gray-500 text-base leading-relaxed font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="container-wide mt-24 pt-24 border-t border-white/10 relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
              <StatItem label="Response Time" value="4h" subValue="Merchant Avg" />
              <StatItem label="Customer Loyalty" value="70%" subValue="Repeat Purchase" />
              <StatItem label="Checkout Speed" value="2x" subValue="Faster Sales" />
              <StatItem label="Merchant Trust" value="50k+" subValue="Global Users" />
           </div>
        </div>
      </section>

      {/* Who We Serve Improved */}
      <section className="section-padding bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
        <div className="container-wide mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Who We Serve.</h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-tight">From boutique designers to global enterprises, we empower every business to meet their customers where they spend their time.</p>
          </motion.div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'Entrepreneurs', 
                subtitle: 'Solo-sellers & Creators',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600', 
                icon: Zap 
              },
              { 
                title: 'Retailers', 
                subtitle: 'Boutiques & Showrooms',
                img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600', 
                icon: ShoppingBag 
              },
              { 
                title: 'Global Brands', 
                subtitle: 'Scale & Enterprise',
                img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200', 
                icon: Globe 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative h-[500px] rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl shadow-black/5"
              >
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/10 transition-all duration-500" />
                <div className="absolute inset-x-10 bottom-10 text-left">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-transparent transition-all duration-500"
                  >
                    <item.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-white/60 font-bold text-sm uppercase tracking-widest">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button className="btn-gradient px-12 h-16 text-lg font-bold shadow-2xl">
            See all success stories
          </Button>
        </div>
      </section>
    </Layout>
  );
}

function StatItem({ label, value, subValue }: { label: string; value: string; subValue?: string }) {
  return (
    <div className="space-y-1">
      <p className="text-5xl font-black text-white group-hover:text-primary transition-colors">{value}</p>
      <div className="space-y-0">
        <p className="text-white font-bold text-xs uppercase tracking-widest">{label}</p>
        {subValue && <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{subValue}</p>}
      </div>
    </div>
  );
}