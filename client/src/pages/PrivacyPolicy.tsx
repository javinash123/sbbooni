import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-5xl">
        <h1 className="text-5xl font-black tracking-tighter mb-12">Privacy Policy</h1>
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg" style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}>
          <iframe
            src="/pdfs/privacy-policy.pdf"
            className="w-full h-full"
            title="Privacy Policy"
            data-testid="pdf-privacy-policy"
          />
        </div>
      </div>
    </Layout>
  );
}
