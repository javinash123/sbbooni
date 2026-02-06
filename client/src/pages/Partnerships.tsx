import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const partners = [
  {
    title: "Shapes Defined Partnership",
    description: "Shapes Defined's mission is to create the highest quality product images quickly and efficiently to maximize your online potential. If you're looking to create product images that will stand out and boost your sales, Shapes Defined is your answer.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Meydan Free Zone Partnership",
    description: "SimpleBit has partnered with Meydan Free Zone to make it easier for you to renew or get a new business license. Meydan Free Zone allows you to design the license that fits your business needs and it's 100% digital. You can do it all online and hassle-free!",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Partnerships() {
  return (
    <Layout>
      <div className="bg-black pt-40 pb-56">
        <div className="container-wide">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center uppercase">Partnerships</h1>
          <p className="text-white/60 text-center mt-6 text-xl max-w-2xl mx-auto font-medium">
            Collaborating with industry leaders to build the infrastructure of modern commerce.
          </p>
        </div>
      </div>

      <div className="container-wide pb-24 -mt-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] bg-white group h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-gray-50/50 flex items-center justify-center p-12">
                  <img src={partner.logo} alt={partner.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 md:p-12 flex-1 flex flex-col">
                  <h2 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors">{partner.title}</h2>
                  <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium flex-1">
                    {partner.description}
                  </p>
                  <Button variant="ghost" className="p-0 font-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-primary transition-colors w-fit">
                    Learn More →
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
