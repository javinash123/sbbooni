import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-6xl md:text-9xl font-black font-heading leading-[0.85] tracking-tighter text-white uppercase">
              Coming <br />Soon
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-xl mx-auto">
              We're working hard to bring you something great. Stay tuned!
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button data-testid="button-back-home" className="bg-primary text-white hover:bg-primary/90 px-10 h-14 text-sm font-bold rounded-xl">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
