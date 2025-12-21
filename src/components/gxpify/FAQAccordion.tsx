import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQItem } from '@/data/gxpifyData';

interface FAQAccordionProps {
  faqs: FAQItem[];
  defaultOpen?: string;
}

const FAQAccordion = ({ faqs, defaultOpen }: FAQAccordionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen} className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
