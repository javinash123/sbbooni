import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const studies = [
  {
    title: "Tryano Case Study",
    description: "Tryano is a concept store that was launched by Chalhoub Group in 2015 that specializes in luxury brands stocking world-famous items from Fendi, Dolce & Gabbana, Versace, Armani, Carolina Herrera, Tory Burch, Salvatore Ferragamo, Christian Louboutin and many more. The business has a physical store in Yas Mall, Abu Dhabi and an online website.",
    logo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Sand Dollar Case Study",
    description: "Sand Dollar is a family-run business selling beach and resort wear. It has been running for more than 10 years, with stores in Dubai and a Shopify-powered e-commerce site.",
    logo: "https://images.unsplash.com/photo-1523381235312-da59b9e11917?auto=format&fit=crop&q=80&w=400"
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <div className="bg-black pt-40 pb-56">
        <div className="container-wide">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center uppercase">Case Studies</h1>
          <p className="text-white/60 text-center mt-6 text-xl max-w-2xl mx-auto font-medium">
            Real-world examples of how SimpleBit is transforming businesses through personalized commerce.
          </p>
        </div>
      </div>

      <div className="container-wide pb-24 -mt-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] bg-white group h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-gray-50/50 flex items-center justify-center p-12">
                  <img src={study.logo} alt={study.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 md:p-12 flex-1 flex flex-col">
                  <h2 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors">{study.title}</h2>
                  <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium flex-1">
                    {study.description}
                  </p>
                  <Button variant="ghost" className="p-0 font-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-primary transition-colors w-fit">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
