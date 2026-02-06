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
    answer: "You can reach out to our support team through the 'Contact Us' page or by emailing hello@zbooni.com."
  }
];

export default function KnowledgeBase() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Knowledge Base</h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Find answers to commonly asked questions about Zbooni.
        </p>
        
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
    </Layout>
  );
}
