import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <div className="bg-black pt-32 pb-48">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter -mt-4">Case Studies</h1>
        </div>
      </div>

      <div className="bg-[#f8f9fa] pb-20 -mt-32">
        <div className="container-wide">
          <div className="flex flex-col gap-8 max-w-6xl mx-auto relative z-10">
            {studies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl bg-white">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-black mb-6 tracking-tight">{study.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
                      {study.description}
                    </p>
                    <Button className="w-fit rounded-full px-8 h-12 font-bold text-sm uppercase tracking-widest bg-black text-white hover:bg-gray-800 transition-all">
                      Read More
                    </Button>
                  </div>
                  <div className="md:w-2/5 p-12 flex items-center justify-center bg-gray-50/50">
                    <div className="aspect-square w-full flex items-center justify-center bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                      <img src={study.logo} alt={study.title} className="max-h-full max-w-full object-contain" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
