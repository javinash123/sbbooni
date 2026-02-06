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

      {/* Feature 1: Personal */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-6xl md:text-[80px] font-black leading-[0.9] tracking-tighter">Business <br/>just got <br/>personal.</h2>
              <p className="text-xl text-gray-500 leading-tight font-medium max-w-md">
                Sell like never before. Introduce checkout to the channels that matter the most.
              </p>
              <div className="pt-4">
                <Button className="bg-black text-white hover:bg-gray-900 px-10 py-7 text-lg font-bold rounded-2xl">
                  Get started
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="zbooni-shadow rounded-[3rem] overflow-hidden bg-white p-4">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-400 to-purple-500 rounded-[2.5rem] relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover mix-blend-overlay" />
                     <div className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl">
                        <p className="font-black">Go both with ease <span className="text-gray-400 font-bold ml-2">AED 220</span></p>
                     </div>
                  </div>
               </div>
               {/* Floating Social Icons */}
               <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {[Instagram, MessageCircle, Twitter, Facebook].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-black">
                      <Icon className="w-6 h-6" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Transactions */}
      <section className="section-padding bg-black text-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-video bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1556740734-793864bb358c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                      <Play className="fill-white text-white w-8 h-8 ml-1" />
                    </div>
                  </div>
               </div>
               <div className="absolute -bottom-10 right-10 w-64 bg-white p-6 rounded-3xl shadow-2xl text-black">
                  <p className="text-sm font-bold text-gray-400 mb-2 uppercase">Order Summary</p>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-2/3" />
                    <div className="pt-4 border-t flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-black text-primary">AED 450</span>
                    </div>
                  </div>
               </div>
            </div>
            <div className="space-y-8">
               <h2 className="text-6xl md:text-[80px] font-black leading-[0.9] tracking-tighter uppercase">Turn one to <br/>one customer <br/>interactions <br/>into <br/>transactions.</h2>
               <p className="text-xl text-gray-400 leading-tight max-w-md">Easily create invoices and simple to close sales on messaging apps you already use.</p>
               <div className="pt-4 flex flex-col gap-6">
                  <Button className="bg-[#00E676] text-black hover:bg-[#00c853] px-10 py-7 text-lg font-bold rounded-2xl w-fit">
                    View demo
                  </Button>
                  <div className="space-y-1">
                     <p className="text-5xl font-black">58%</p>
                     <p className="text-gray-400 font-bold uppercase tracking-widest text-xs underline decoration-primary decoration-4">Converted via chat</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Accept Payments */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <CreditCard className="w-8 h-8" />
                   </div>
                   <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">Accept <br/>payments.</h2>
                </div>
                <p className="text-2xl text-gray-500 font-medium leading-tight">Enable payments seamlessly starting today.</p>
                <Button className="bg-black text-white hover:bg-gray-900 px-10 py-7 text-lg font-bold rounded-2xl">
                  Tell me more
                </Button>
                <div className="pt-10 space-y-2">
                   <p className="text-5xl font-black tracking-tighter">1.9x</p>
                   <p className="text-gray-400 font-bold uppercase text-sm tracking-widest leading-none max-w-[120px]">Higher average order value</p>
                </div>
             </div>
             <div className="relative">
                <div className="bg-gray-50 rounded-[4rem] p-12 border border-gray-100 relative overflow-hidden">
                   <p className="font-black text-xl mb-10">Payments powered by SimpleBit.</p>
                   <div className="space-y-12">
                      <div>
                         <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Works with all payment methods</p>
                         <div className="flex flex-wrap gap-4 grayscale opacity-40">
                            {['VISA', 'MASTERCARD', 'AMEX', 'APPLE PAY', 'GOOGLE PAY'].map(p => (
                              <div key={p} className="h-10 px-4 bg-white border rounded-lg flex items-center font-bold text-xs">{p}</div>
                            ))}
                         </div>
                      </div>
                      <div className="pt-10 border-t">
                         <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Integrate with your existing provider</p>
                         <div className="flex flex-wrap gap-4 grayscale opacity-40">
                            {['Stripe', 'PayPal', 'Adyen', 'Checkout'].map(p => (
                              <div key={p} className="h-10 px-4 bg-white border rounded-lg flex items-center font-bold text-xs">{p}</div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Sell More */}
      <section className="section-padding bg-black text-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="zbooni-shadow rounded-[3rem] overflow-hidden bg-white p-4">
                  <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-[2.5rem]" />
                </div>
                <div className="absolute -right-10 top-1/4 bg-white p-6 rounded-3xl shadow-2xl text-black space-y-4 w-64">
                   <div className="h-4 bg-gray-100 rounded w-full" />
                   <div className="h-3 bg-gray-50 rounded w-2/3" />
                   <div className="h-10 bg-primary rounded-xl" />
                </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">Sell <br/>More.</h2>
               </div>
               <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Attract new customers and increase repeat purchases.</h3>
                    <ul className="space-y-4 text-gray-400">
                      <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />Gain access to a wide range of marketing tools.</li>
                      <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />Get showcased on Simple Marketplace.</li>
                    </ul>
                  </div>
                  <Button className="bg-[#00E676] text-black hover:bg-[#00c853] px-10 py-7 text-lg font-bold rounded-2xl">
                    Discover how
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Track Everything */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">Track <br/>Everything.</h2>
               </div>
               <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Gain total control and visibility of your business.</h3>
                  <ul className="space-y-4 text-gray-500">
                    <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0" />Real-time data on orders, vendors and customers.</li>
                    <li className="flex gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0" />Integrate with Shopify, WooCommerce and more.</li>
                  </ul>
                  <Button className="bg-black text-white hover:bg-gray-900 px-10 py-7 text-lg font-bold rounded-2xl">
                    Show me how
                  </Button>
               </div>
            </div>
            <div className="relative">
               <div className="bg-gray-50 rounded-[4rem] p-4 border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full aspect-video object-cover rounded-[3rem] shadow-xl" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex gap-10">
                  <div>
                    <p className="text-3xl font-black">80%</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Growth</p>
                  </div>
                  <div className="w-px bg-gray-100" />
                  <div>
                    <p className="text-3xl font-black">22</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Countries</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide text-center mb-20">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Why SimpleBit?</h2>
        </div>
        <div className="container-wide grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
             <div className="flex gap-10 items-center">
                <div className="w-32 h-32 rounded-full border-[6px] border-[#00E676] flex items-center justify-center text-4xl font-black">98%</div>
                <div>
                   <p className="text-lg font-bold">Messaging <br/>Open Rate</p>
                </div>
             </div>
             <div className="flex gap-10 items-center opacity-40">
                <div className="w-20 h-20 rounded-full border-[4px] border-white flex items-center justify-center text-xl font-black">10%</div>
                <div>
                   <p className="text-sm font-bold">Email <br/>Open Rate</p>
                </div>
             </div>
          </div>
          <div className="space-y-10 py-10">
             <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <p className="text-5xl font-black text-primary">4 hours</p>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest max-w-[150px] text-right">Average response time for merchants</p>
             </div>
             <div className="grid grid-cols-2 gap-8 pt-10">
                <StatItem label="Increase in sales" value="87%" />
                <StatItem label="Customer engagement" value="70%" />
             </div>
          </div>
        </div>
      </section>

      {/* Video / Who We Serve */}
      <section className="section-padding bg-white text-center">
        <div className="container-wide">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase">Who We Serve.</h2>
          <div className="max-w-5xl mx-auto aspect-video bg-black rounded-[4rem] relative overflow-hidden group mb-20">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#00E676] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="fill-black text-black w-10 h-10 ml-1" />
                </div>
             </div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-900 px-12 py-8 text-xl font-bold rounded-2xl">
            Learn more
          </Button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 bg-white">
         <div className="container-wide">
            <div className="bg-black rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
               <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter">Tap into <br/><span className="italic text-primary">Commerce</span></h2>
               <GradientButton className="text-lg px-12 py-8 rounded-2xl relative z-10">Request demo</GradientButton>
            </div>
         </div>
      </section>
    </Layout>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-4xl font-black">{value}</p>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}