import Layout from "@/components/Layout";
import PdfViewer from "@/components/PdfViewer";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-5xl">
        <h1 className="text-5xl font-black tracking-tighter mb-12">Privacy Policy</h1>
        <PdfViewer
          src="/pdfs/privacy-policy.pdf"
          title="Privacy Policy"
          testId="pdf-privacy-policy"
        />
      </div>
    </Layout>
  );
}
