import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "How a local boutique scaled 3x in 6 months",
    description: "By integrating chat-based payments and direct Instagram selling, this local business transformed their customer experience and tripled their revenue.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    client: "Urban Threads",
    result: "300% Growth"
  },
  {
    title: "Automating service bookings for a fitness brand",
    description: "Learn how we helped a premium gym automate their invoicing and booking process, reducing admin time by 70%.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    client: "Elite Performance",
    result: "70% Less Admin"
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <div className="bg-black pt-40 pb-56">
        <div className="container-wide">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center uppercase">Success Stories</h1>
          <p className="text-white/60 text-center mt-6 text-xl max-w-2xl mx-auto font-medium">
            Real results from businesses using SimpleBit to redefine their commerce experience.
          </p>
        </div>
      </div>

      <div className="container-wide pb-24 -mt-40 relative z-10">
        <div className="grid gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[3rem] bg-white group">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{study.client}</span>
                      <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{study.result}</span>
                    </div>
                    <h2 className="text-4xl font-black mb-8 tracking-tighter leading-[0.9] group-hover:text-primary transition-colors uppercase">{study.title}</h2>
                    <p className="text-gray-500 mb-10 text-xl leading-relaxed font-medium italic">
                      "{study.description}"
                    </p>
                    <Button className="w-fit rounded-full px-10 h-14 font-black text-xs uppercase tracking-widest bg-black text-white hover:bg-primary transition-all">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
