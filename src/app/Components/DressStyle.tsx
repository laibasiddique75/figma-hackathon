import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DressStyle() {
  return (
    <div className="p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Filters</h1>
        <Filter />
      </div>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="w-full mt-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I customize it?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s fully customizable, allowing you to adapt it to your needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Button Section */}
      <div className="flex justify-center items-start mt-6">
        <Button variant="outline" className="w-[90%] bg-black text-white">
          Button
        </Button>
      </div>
    </div>
  );
}
