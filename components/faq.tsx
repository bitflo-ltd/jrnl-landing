import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "When will JRNL launch?",
      answer: "We're planning to launch JRNL in Q1 2026. We're taking our time to ensure we get privacy, security, and the user experience exactly right. Waitlist members will get early access before the public launch.",
    },
    {
      question: "How is my privacy protected?",
      answer: "Privacy is our top priority. All journal entries are encrypted end-to-end before leaving your device. Our AI processes anonymized patterns only, never your raw text. We can't read your journal entries even if we wanted to – your thoughts belong to you alone.",
    },
    {
      question: "Will there be a free version?",
      answer: "Yes! JRNL will offer a generous free tier that includes basic journaling, limited AI insights, and full privacy protection. Premium features like unlimited AI analysis, advanced insights, and additional export options will be available through a subscription.",
    },
    {
      question: "What makes JRNL different from other journaling apps?",
      answer: "JRNL is the first app to combine AI-powered insights with true privacy protection. Unlike other AI tools that send your data to servers, our AI works locally on your device. You get personalized insights without compromising your privacy.",
    },
    {
      question: "Can I export my data?",
      answer: "Absolutely. Your journal data belongs to you. JRNL will support exporting your entries in multiple formats including PDF, plain text, and structured JSON. You can export your data at any time, no questions asked.",
    },
    {
      question: "Will it work offline?",
      answer: "Yes, offline functionality is a key feature we're building. You'll be able to write journal entries offline, and insights will be generated when you're back online. This ensures you can journal anywhere, anytime. This feature will be available at launch.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about JRNL. Can&apos;t find what you&apos;re looking for? 
            Reach out to us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:hello@jrnl.app" 
            className="text-primary hover:underline font-medium"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  );
}