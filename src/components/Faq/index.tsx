"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/utils/faqs"

export default function Component() {


  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-8">
          Frequently asked questions:
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-slate-700 last:border-b-0"
            >
              <AccordionTrigger className="text-white hover:text-white/90 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}