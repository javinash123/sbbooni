import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer: "You can get started by downloading the app and creating an account. Once you're in, you can start capturing and managing your sales."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a free trial for all new users so you can explore the features and see how it works for your business."
  },
  {
    question: "What platforms are supported?",
    answer: "We support both iOS and Android platforms, ensuring you can manage your business on the go."
  },
  {
    question: "How do I contact support?",
    answer: "You can reach out to our support team through the 'Contact Us' page or by emailing hello@simple-bit.com."
  }
];

export default function KnowledgeBase() {
  return (
    <Layout>
      <div className="bg-black pt-40 pb-56">
        <div className="container-wide">
          <h1 className="text-4xl font-black text-white tracking-tighter text-center">Knowledge Base</h1>
          <p className="text-white/60 text-center mt-6 text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about SimpleBit.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-24 max-w-4xl -mt-40 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
