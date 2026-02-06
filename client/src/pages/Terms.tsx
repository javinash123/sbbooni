import Layout from "@/components/Layout";

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black tracking-tighter mb-12">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none space-y-8 font-medium text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Terms of Use</h2>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on SimpleBit's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p>The materials on SimpleBit's website are provided "as is". SimpleBit makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
            <p>In no event shall SimpleBit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on SimpleBit's Internet site.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
