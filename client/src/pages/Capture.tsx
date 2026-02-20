import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ShoppingBag, 
  CreditCard, 
  BarChart3, 
  MessageCircle, 
  Globe, 
  Check, 
  Plus, 
  X, 
  TrendingUp,
  ShieldCheck,
  Smartphone,
  MousePointer2,
  PieChart,
  Users,
  Box,
  FileText,
  DollarSign,
  Instagram,
  Twitter
} from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function CapturePage() {
  const [location] = useLocation();
  
  const tabs = [
    { id: 'capture', label: 'Capture Orders', href: '/features/capture' },
    { id: 'accept', label: 'Accept Payments', href: '/features/accept' },
    { id: 'sell', label: 'Sell More', href: '/features/sell' },
    { id: 'track', label: 'Track Everything', href: '/features/track' },
  ];

  const currentTab = tabs.find(tab => location === tab.href) || tabs[0];

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
                Your payments, <br/>fully under your <br/>control.
              </h1>
              <p className="text-xl text-gray-400 max-w-md mb-10 font-medium">
                Manage payment collection, settlement, and reporting from Simplebits merchant dashboard.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                 <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                       <TrendingUp className="text-primary w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Pending Payments</p>
                       <p className="text-2xl font-black">32</p>
                    </div>
                 </div>
                 <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00E676]/20 flex items-center justify-center">
                       <Check className="text-[#00E676] w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total Settled in AED</p>
                       <p className="text-2xl font-black">21 <span className="text-sm text-gray-500 font-bold">Payments</span></p>
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
            {tabs.map((tab) => (
              <a 
                key={tab.id} 
                href={tab.href}
                className={cn(
                  "whitespace-nowrap font-bold text-xs uppercase tracking-widest transition-all duration-300 relative py-2",
                  location === tab.href 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-gray-400 hover:text-black"
                )}
              >
                {tab.label}
              </a>
            ))}
         </div>
      </div>

      {currentTab.id === 'capture' && <CaptureContent />}
      {currentTab.id === 'accept' && <AcceptContent />}
      {currentTab.id === 'sell' && <SellContent />}
      {currentTab.id === 'track' && <TrackContent />}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[3rem] bg-black p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase relative z-10">Ready to simplify <br/>your business payments</h2>
             <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-2xl px-12 h-16 text-lg font-black uppercase relative z-10">Request Demo</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function CaptureContent() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6"> Use SimpleBit to generate payment requests and invoices wherever you engage with customers</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h3 className="text-4xl font-black tracking-tighter">Create payment requests instantly</h3>
                <p className="text-lg text-gray-500 font-medium">Generate invoices or payment links in a few steps by selecting a customer and amount.</p>
                <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Request Demo</Button>
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
               <p className="text-lg text-gray-400">Create one-off invoices for services or custom amounts not listed in your standard pricing.</p>
               <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black">Request Demo</Button>
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
    </>
  );
}

function AcceptContent() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Whether you're already accepting online payments or not, SimpleBit's got you covered in both cases!</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black tracking-tighter">Need help with accepting online payments?</h3>
              <p className="text-lg text-gray-500 font-medium">We can make your life easier with payment powered by SimpleBit. Start accepting all major payment methods and ensure the highest rate of successful transaction. Only available in UAE, KSA, Egypt and Jordan.</p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Download the app</Button>
            </div>
            <div className="relative flex justify-center">
               <div className="relative w-80 h-80 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-[#00E676]/10 rounded-full scale-110 blur-3xl opacity-50" />
                  <div className="z-10 bg-white p-6 rounded-3xl shadow-2xl border flex flex-col items-center gap-4">
                     <CreditCard className="w-12 h-12 text-primary" />
                     <span className="font-black text-center leading-tight">Secure Payment Gateway</span>
                     <div className="flex gap-2">
                        <div className="w-8 h-5 bg-blue-600 rounded-sm" />
                        <div className="w-8 h-5 bg-orange-500 rounded-sm" />
                        <div className="w-8 h-5 bg-black rounded-sm" />
                     </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border">
                     <ShieldCheck className="w-6 h-6 text-[#00E676]" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] w-full max-w-sm">
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold text-gray-500">
                      <span>Payment Provider</span>
                      <span>Connected</span>
                   </div>
                   {['Stripe', 'Checkout.com', 'Adyen', 'Amazon Payment Services'].map(p => (
                      <div key={p} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                         <span className="font-bold">{p}</span>
                         <Check className="w-4 h-4 text-[#00E676]" />
                      </div>
                   ))}
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Already accepting payments online?</h3>
            <p className="text-lg text-gray-400">Connect your existing payment provider to SimpleBit. Empower your business to sell more and add friendlier ways for your customers to check out.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function SellContent() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Win new customers and retain them for life. Grow your brand, increase average baskets, and drive more sales.</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black tracking-tighter">Collections</h3>
              <p className="text-lg text-gray-500 font-medium">A powerful marketing tool that allows you to create curated collections of items and send them on WhatsApp.</p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Learn more</Button>
            </div>
            <div className="relative flex justify-center">
               <div className="w-64 h-[450px] bg-black rounded-[3rem] p-4 border-8 border-gray-900 shadow-2xl overflow-hidden">
                  <div className="h-full bg-white rounded-[2.5rem] p-4 flex flex-col">
                     <div className="flex gap-2 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gray-100" />
                        <div className="space-y-1">
                           <div className="w-20 h-2 bg-gray-100 rounded" />
                           <div className="w-12 h-2 bg-gray-50 rounded" />
                        </div>
                     </div>
                     <div className="flex-grow space-y-3">
                        <div className="w-full h-32 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex items-center justify-center">
                           <ShoppingBag className="w-8 h-8 text-gray-200" />
                        </div>
                        <div className="w-full h-8 bg-[#00E676]/10 rounded-lg flex items-center justify-center font-bold text-[10px] text-[#00E676]">Summer Collection</div>
                        <div className="space-y-2">
                           {[1,2,3].map(i => (
                              <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded-xl">
                                 <div className="w-6 h-6 rounded-md bg-white border" />
                                 <div className="w-20 h-2 bg-gray-200 rounded" />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-32 h-32 bg-yellow-400 rounded-3xl -z-10 rotate-12" />
               <div className="absolute bottom-1/4 -left-12 w-24 h-24 bg-primary rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="bg-white rounded-[3rem] shadow-xl p-2 w-full max-w-lg border border-gray-100">
                <div className="bg-gray-50 rounded-[2.5rem] p-8 aspect-video flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                   <div className="relative bg-white w-full h-full rounded-2xl shadow-inner border flex flex-col">
                      <div className="h-8 border-b flex items-center px-4 gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-400" />
                         <div className="w-2 h-2 rounded-full bg-yellow-400" />
                         <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="p-4 space-y-4">
                         <div className="grid grid-cols-3 gap-2">
                            {[1,2,3].map(i => (
                               <div key={i} className="aspect-square bg-gray-50 rounded-lg" />
                            ))}
                         </div>
                         <div className="h-4 w-1/2 bg-gray-50 rounded" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">cShop</h3>
            <p className="text-lg text-gray-500 font-medium">Optimize your social presence with cShop, your own social landing page that mimics a window shopping experience. With cShop, you can personalize your storefront, organize your products, and connect with your customers more easily.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">cShop Market</h3>
            <p className="text-lg text-gray-500 font-medium">Get discovered on cShop Market, the first chat-to-shop marketplace, and connect with an audience of hundreds of thousands of customers eager to shop.</p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black">Learn more</Button>
          </div>
          <div className="relative flex justify-center">
             <div className="bg-gray-100 rounded-[3rem] p-12 w-full max-w-lg">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden aspect-square flex flex-col">
                   <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                      <span className="font-black text-sm">Marketplace</span>
                      <Globe className="w-4 h-4 text-gray-400" />
                   </div>
                   <div className="flex-grow p-6 flex items-center justify-center">
                      <div className="text-center space-y-4">
                         <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                            <Users className="w-10 h-10 text-primary" />
                         </div>
                         <div className="space-y-1">
                            <p className="font-black text-2xl">Reach Millions</p>
                            <p className="text-gray-400 font-medium">Your shop, global reach.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="w-80 h-96 bg-gray-900 rounded-[3rem] p-2 mx-auto relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover rounded-[2.5rem] opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-[#00E676] text-black font-black p-4 rounded-2xl flex items-center justify-between">
                      <span>Chat to shop</span>
                      <MessageCircle className="w-5 h-5 fill-black" />
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Chat to shop</h3>
            <p className="text-lg text-gray-400">Easily create and categorize your catalog, ready to share anytime. Give your customers the ability to reach out in real time, a 'Chat to Shop' experience - increasing engagement and sales.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function TrackContent() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Wherever you are in your business journey, stay ahead with the essential data and tools. With SimpleBit, you can start simple or go all out with analytics and insights.</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black tracking-tighter">Business dashboard</h3>
              <p className="text-lg text-gray-500 font-medium">A well-crafted modern dashboard with easy access to vital information. Track orders, payments, and messages from anyone on your business team.</p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black uppercase">Try demo</Button>
            </div>
            <div className="relative">
               <div className="bg-gray-100 rounded-[3rem] p-8 flex items-center justify-center">
                  <div className="w-full bg-white rounded-2xl shadow-2xl border p-6 space-y-6">
                     <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400" />
                           <div className="w-3 h-3 rounded-full bg-yellow-400" />
                           <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="h-6 w-32 bg-gray-50 rounded" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-primary/5 rounded-xl p-4 flex flex-col justify-between">
                           <span className="text-[10px] font-bold text-primary uppercase">Revenue</span>
                           <span className="text-xl font-black">AED 12,450</span>
                        </div>
                        <div className="h-24 bg-[#00E676]/5 rounded-xl p-4 flex flex-col justify-between">
                           <span className="text-[10px] font-bold text-[#00E676] uppercase">Orders</span>
                           <span className="text-xl font-black">148</span>
                        </div>
                     </div>
                     <div className="h-32 bg-gray-50 rounded-xl" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full max-w-sm space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Box className="w-6 h-6 text-primary" />
                   </div>
                   <span className="text-lg font-black tracking-tight">Catalog Management</span>
                </div>
                <div className="space-y-2">
                   {[1,2,3].map(i => (
                      <div key={i} className="h-12 bg-white/5 rounded-xl border border-white/5" />
                   ))}
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Manage Your Catalog</h3>
            <p className="text-lg text-gray-400">Add, remove and edit your products from your web-based dashboard to better manage your catalog and collections.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Multi-User Management</h3>
            <p className="text-lg text-gray-500 font-medium">Keep track of individual sales and team-level performance. Ensure sensitive information is protected by letting team members sign in separately.</p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black uppercase">Try demo</Button>
          </div>
          <div className="relative flex justify-center">
             <div className="bg-gray-50 rounded-[3rem] p-12 w-full max-w-sm relative">
                <div className="space-y-4">
                   {[1,2,3].map(i => (
                      <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-gray-100" />
                         <div className="flex-grow space-y-1">
                            <div className="w-24 h-2 bg-gray-200 rounded" />
                            <div className="w-16 h-2 bg-gray-100 rounded" />
                         </div>
                      </div>
                   ))}
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-12">
             <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 space-y-6">
                <div className="flex justify-between items-center">
                   <span className="font-black text-xs uppercase tracking-widest text-gray-400">Sales Performance</span>
                   <PieChart className="w-4 h-4 text-primary" />
                </div>
                <div className="h-40 bg-gray-50 rounded-2xl flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full border-[12px] border-primary border-r-transparent border-b-transparent rotate-45" />
                </div>
             </div>
             <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 space-y-6">
                <div className="flex justify-between items-center">
                   <span className="font-black text-xs uppercase tracking-widest text-gray-400">Order Value (AED)</span>
                   <BarChart3 className="w-4 h-4 text-[#00E676]" />
                </div>
                <div className="flex items-end gap-2 h-32">
                   {[40, 70, 45, 90, 60].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-[#00E676]/20 rounded-t-lg relative group">
                         <div className="absolute inset-0 bg-[#00E676] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom rounded-t-lg" />
                      </div>
                   ))}
                </div>
             </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Sales performance</h3>
            <p className="text-lg text-gray-500 font-medium">See how orders are being made, and what products they buy to help grow your business performance.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Customers</h3>
            <p className="text-lg text-gray-500 font-medium">See all your customers and see what products they buy to help grow your business performance.</p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
          <div className="relative flex justify-center">
             <div className="bg-primary/5 rounded-[3rem] p-12 w-full max-w-sm relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                   {[1,2,3].map(i => (
                      <div key={i} className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                         </div>
                         <div className="flex-grow h-2 bg-gray-50 rounded" />
                      </div>
                   ))}
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] w-full max-w-sm space-y-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                   <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-3/4 bg-white/10 rounded" />
                   <div className="h-4 w-1/2 bg-white/5 rounded" />
                   <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Invoices (Receipts)</h3>
            <p className="text-lg text-gray-400">All customers have a clear record of all their orders and keep track of his or her business history organized.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Get started</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Reports</h3>
            <p className="text-lg text-gray-500 font-medium">Choosing the right KPI filters and download reports do anything related to your sales data and we will thank you.</p>
            <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 h-12 font-black uppercase">Download</Button>
          </div>
          <div className="relative">
             <div className="bg-gray-50 rounded-[3rem] p-8">
                <div className="bg-white rounded-2xl shadow-2xl border p-6 space-y-4">
                   <div className="flex justify-between items-center border-b pb-4">
                      <span className="font-black">Monthly Report</span>
                      <BarChart3 className="w-4 h-4 text-primary" />
                   </div>
                   <div className="space-y-2">
                      {[1,2,3,4].map(i => (
                         <div key={i} className="h-4 bg-gray-50 rounded" />
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container-wide grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="w-64 h-[450px] bg-white rounded-[3rem] p-4 flex flex-col gap-6 shadow-2xl relative">
                <div className="h-12 w-full bg-gray-50 rounded-2xl flex items-center justify-center">
                   <div className="w-20 h-2 bg-gray-200 rounded" />
                </div>
                <div className="flex-grow space-y-4">
                   <div className="h-32 bg-primary/5 rounded-2xl flex items-center justify-center">
                      <DollarSign className="w-12 h-12 text-primary" />
                   </div>
                   <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded w-3/4" />
                      <div className="h-4 bg-gray-50 rounded w-1/2" />
                   </div>
                   <div className="h-12 bg-[#00E676] rounded-xl" />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-black tracking-tighter">Manage your Money</h3>
            <p className="text-lg text-gray-400">Click payment monitoring, check your daily payouts and always be on the go. SimpleBit will be through the app to get refreshments into your bank account on time.</p>
            <Button className="bg-[#00E676] text-black hover:bg-[#00E676]/90 rounded-xl px-8 h-12 font-black uppercase">Download</Button>
          </div>
        </div>
      </section>
    </>
  );
}
