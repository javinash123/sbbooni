import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of Personalized Commerce",
    description: "Discover how businesses are leveraging chat-based commerce to create more meaningful connections with their customers and drive higher conversion rates.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    category: "Insights",
    date: "Feb 05, 2026"
  },
  {
    title: "Mastering the Art of Social Selling",
    description: "Learn the top strategies for converting your social media followers into loyal customers using integrated checkout links and seamless payment processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Strategy",
    date: "Jan 28, 2026"
  }
];

export default function Blogs() {
  return (
    <Layout>
      <div className="bg-black pt-40 pb-56">
        <div className="container-wide">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center uppercase">Our Blog</h1>
          <p className="text-white/60 text-center mt-6 text-xl max-w-2xl mx-auto font-medium">
            Stories, insights, and strategies to help you grow your business in the age of personalized commerce.
          </p>
        </div>
      </div>

      <div className="container-wide pb-24 -mt-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] bg-white group">
                <div className="aspect-video overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{blog.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{blog.date}</span>
                  </div>
                  <h2 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors">{blog.title}</h2>
                  <p className="text-gray-500 mb-8 text-lg leading-relaxed font-medium">
                    {blog.description}
                  </p>
                  <Button variant="ghost" className="p-0 font-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-primary transition-colors">
                    Read Story →
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
