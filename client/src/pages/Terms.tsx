import Layout from "@/components/Layout";
import PdfViewer from "@/components/PdfViewer";

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-5xl">
        <h1 className="text-5xl font-black tracking-tighter mb-12">Terms and Conditions</h1>
        <PdfViewer
          src="/pdfs/terms-and-conditions.pdf"
          title="Terms and Conditions"
          testId="pdf-terms-conditions"
        />
      </div>
    </Layout>
  );
}
