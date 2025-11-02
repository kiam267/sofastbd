import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Title from '@/components/Title';
import Image from 'next/image';
import { FAQ } from '@/constants/content';

function Faq() {
  return (
    <section className="container mx-auto border-t">
      {/* <Title
        description="প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"
        popupTitle="faq"
        title="প্রশ্নোত্তর"
      /> */}
      <div className="grid grid-cols-2 gap-5 px-2 mt-5">
        <div>
          <div>
            <Image
              className=""
              src="/faq.png"
              alt="faq"
              height="50"
              width="50"
            />
            <h2 className="text-2xl font-bold">
              সচরাচর জানতে চাওয়া প্রশ্নের উত্তর
            </h2>
            <p className="text-sm w-1/2 text-gray-600">
              আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে
              লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে
              এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে
              আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা
              এবং আপনার মূল্যবান সময় বেঁচে যাবে।
            </p>
          </div>
        </div>
        <div className="p-4 ">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {FAQ.map((item, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={index}
              >
                <AccordionTrigger className="font-bold text-md cursor-pointer ">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-md">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
