import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const partners = [
  {
    title: "Shapes Defined Partnership",
    description: "Shapes Defined's mission is to create the highest quality product images quickly and efficiently to maximize your online potential. If you're looking to create product images that will stand out and boost your sales, Shapes Defined is your answer.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Meydan Free Zone Partnership",
    description: "Zbooni has partnered with Meydan Free Zone to make it easier for you to renew or get a new business license. Meydan Free Zone allows you to design the license that fits your business needs and it's 100% digital. You can do it all online and hassle-free!",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Partnerships() {
  return (
    <Layout>
      <div className="bg-black py-20">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Partnerships</h1>
        </div>
      </div>

      <div className="bg-[#f8f9fa] py-20">
        <div className="container-wide">
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl bg-white">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-black mb-6 tracking-tight">{partner.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
                      {partner.description}
                    </p>
                    <Button className="w-fit rounded-full px-8 h-12 font-bold text-sm uppercase tracking-widest bg-black text-white hover:bg-gray-800 transition-all">
                      Learn More
                    </Button>
                  </div>
                  <div className="md:w-2/5 p-12 flex items-center justify-center bg-gray-50/50">
                    <div className="aspect-square w-full flex items-center justify-center bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                      <img src={partner.logo} alt={partner.title} className="max-h-full max-w-full object-contain" />
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
