import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Quote, Eye, Gem, Target, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  const locations = [
    { country: "UAE", address: "Mazaya Business Avenue, Tower AA1, Office 3205, Jumeirah Lake Towers, Dubai", phone: "+971 4 557 9133", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400" },
    { country: "KSA", address: "8087 Hamadalah Bin Malik, Office 107, 1st Floor, Al Wurud District, Riyadh", phone: "+966 50 522 7474", image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c8?auto=format&fit=crop&q=80&w=400" },
    { country: "Jordan", address: "King Hussein Business Park, Building number 7, V Business Center, 3rd Floor, Amman", phone: "+962 7 9111 1868", image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80&w=400" },
    { country: "Egypt", address: "CO-SS - City center, Makram Ebeid - Nasr city, Cairo", phone: "+20 2 23520966", image: "https://images.unsplash.com/photo-1572252009286-268acec5a0af?auto=format&fit=crop&q=80&w=400" },
    { country: "Hong Kong", address: "SimpleBit HK, Unit 1411, 14th Floor, Cosco Tower, 183 Queen's Road Central, Sheung Wan", phone: "+971 50 552 5071", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <Quote className="w-16 h-16 text-primary fill-primary opacity-20" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                We are witnessing <br/>
                <span className="text-[#00E676]">a disruptive</span> way <br/>
                of doing business <br/>
                called <span className="text-[#00E676]">cCommerce.</span>
              </h1>
              <div className="flex justify-center lg:justify-end">
                <Quote className="w-16 h-16 text-primary fill-primary opacity-20 rotate-180" />
              </div>
            </div>
            <div className="space-y-8 text-gray-400 text-lg font-medium leading-relaxed">
              <p>Messaging and social apps are converging with commerce in new and innovative ways. SimpleBit was born to seamlessly bring the two worlds together and allow businesses to capture this opportunity.</p>
              <p>What began as a solution to help small businesses in the UAE expanded quickly. We now serve businesses of all shapes and sizes across multiple countries. Our vision of empowering businesses, and understanding what they really need remains true.</p>
              <p>Thank you for being here, we're happy to have you. If there is anything we can help you with, please don't hesitate to get in touch.</p>
              <div className="pt-8">
                <p className="text-white font-black text-xl mb-1 italic">Ramy Assaf,</p>
                <p className="text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-32 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-24">
              <div className="flex flex-col items-center text-center max-w-sm mx-auto space-y-6">
                <Eye className="w-12 h-12 text-black" />
                <h2 className="text-4xl font-black tracking-tighter">Our Vision</h2>
                <p className="text-gray-500 font-medium text-lg">Enabling exceptional personalized commerce experiences for businesses and their customers.</p>
              </div>
              <div className="flex flex-col items-center text-center max-w-sm mx-auto space-y-6">
                <Target className="w-12 h-12 text-black" />
                <h2 className="text-4xl font-black tracking-tighter">Our Mission</h2>
                <p className="text-gray-500 font-medium text-lg">Empowering the next generation of commerce.</p>
              </div>
            </div>
            <div className="border-l border-gray-100 pl-24 space-y-12">
              <div className="flex items-center gap-6">
                <Gem className="w-10 h-10 text-black" />
                <h2 className="text-4xl font-black tracking-tighter">Our Values</h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black mb-3">Have compassion</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Be human and treat everyone with care and respect without discrimination. Stay mindful of people around you and what matters to them. Handle every customer's business like it's your own.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3">Create impact</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Make a difference through your words and/or actions. Raise your voice when you witness injustice or prejudice. Be an agent of change for the better in your personal and professional life.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3">Keep growing</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Keep yourself informed about your environment and the world we live in. Nurture your innovative mind and strive to stay ahead. Support others in their personal and professional development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Team"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="container-wide relative z-10 text-center space-y-8">
          <h2 className="text-5xl font-black tracking-tighter">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">The SimpleBit family keeps growing with individuals who are passionate about preserving human connections amidst technological innovation, and leading industry change.</p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 bg-white">
        <div className="container-wide">
          <h2 className="text-5xl font-black tracking-tighter text-center mb-24">Our Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.country} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3]">
                <img src={loc.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={loc.country} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-black mb-4 tracking-tighter">{loc.country}</h3>
                  <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3 text-sm font-medium text-white/80 leading-relaxed">
                      <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                      <p>{loc.address}</p>
                    </div>
                    <div className="flex gap-3 text-sm font-bold">
                      <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                      <p>{loc.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
