import Layout from "@/components/Layout";
import PdfViewer from "@/components/PdfViewer";

export default function PaymentPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 max-w-5xl">
        <h1 className="text-5xl font-black tracking-tighter mb-12">Payment Policy</h1>
        <PdfViewer
          src="/pdfs/payment-policy.pdf"
          title="Payment Policy"
          testId="pdf-payment-policy"
        />
      </div>
    </Layout>
  );
}
