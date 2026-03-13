import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-black font-heading leading-[0.85] tracking-tighter text-white uppercase mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/70 font-medium max-w-xl">
              Get in touch with our team. We'd love to hear from you and help you get started with SimpleBit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl font-black tracking-tighter mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700" htmlFor="name">Full Name *</label>
                    <Input
                      data-testid="input-name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="h-12 rounded-xl border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700" htmlFor="email">Email Address *</label>
                    <Input
                      data-testid="input-email"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="h-12 rounded-xl border-gray-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700" htmlFor="phone">Phone Number</label>
                    <Input
                      data-testid="input-phone"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="h-12 rounded-xl border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700" htmlFor="company">Company Name</label>
                    <Input
                      data-testid="input-company"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="h-12 rounded-xl border-gray-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700" htmlFor="message">Message *</label>
                  <Textarea
                    data-testid="input-message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    className="min-h-[150px] rounded-xl border-gray-200 resize-none"
                  />
                </div>
                <Button
                  data-testid="button-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white hover:bg-primary/90 px-12 h-14 text-sm font-bold rounded-xl w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <h2 className="text-4xl font-black tracking-tighter mb-8">Get in touch</h2>
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-500 font-medium">info@simple-bit.com</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-500 font-medium">Contact us via email</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-500 font-medium">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-3">Why SimpleBit?</h3>
                <ul className="space-y-3 text-gray-500 font-medium">
                  <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    Simple and transparent pricing
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    Quick setup with Emirates ID
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    Track all your transactions in one place
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    Compatible with major payment networks
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
