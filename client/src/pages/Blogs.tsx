import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "The MENA eCommerce Report 2024",
    date: "January 20, 2024",
    description: "Discover the latest trends and insights into the growing eCommerce landscape in the MENA region.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    buttonText: "Read Report"
  },
  {
    title: "The MENA eCommerce Report 2023",
    date: "February 5, 2023",
    description: "A comprehensive look back at the eCommerce growth and patterns throughout 2023.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    buttonText: "Read Report"
  },
  {
    title: "Say Hello to Collections: A Powerful Marketing Tool",
    date: "February 5, 2024",
    description: "Learn how to use Collections to showcase your products and drive more sales.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    buttonText: "Learn More"
  },
  {
    title: "How cCart is Different and Why it is Better",
    date: "February 12, 2024",
    description: "Exploring the unique features of cCart and how it simplifies the checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    buttonText: "Learn More"
  },
  {
    title: "Conversion Success: Cultivating Personal Customer Relationships via cCart",
    date: "March 15, 2024",
    description: "How to build lasting relationships with your customers through personalized checkout experiences.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    buttonText: "Learn More"
  }
];

export default function Blogs() {
  return (
    <Layout>
      <div className="bg-black py-20">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Blogs</h1>
        </div>
      </div>
      
      <div className="bg-[#f8f9fa] py-20">
        <div className="container-wide">
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl bg-white">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-black mb-4 tracking-tight">{blog.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-bold uppercase tracking-widest">
                      <span>BY SIMPLEBIT</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-3 font-medium">
                      {blog.description}
                    </p>
                    <Button variant="outline" className="w-fit rounded-full px-8 h-12 font-bold text-sm uppercase tracking-widest border-2 hover:bg-black hover:text-white transition-all">
                      {blog.buttonText}
                    </Button>
                  </div>
                  <div className="md:w-2/5 aspect-video md:aspect-auto min-h-[300px]">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
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
