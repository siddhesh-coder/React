import React, { useState } from "react";
import Faqs from "./FAQ/Faqs";
import faqs from "../../utils/helper/faqs";

const ContactUs = () => {
  const [showIndex, setShowIndex] = useState(0);
  const [prevClickIndex, setPrevClickIndex] = useState(null);

  const faqList = faqs();

  const checkIsOpen = (index) => {
    return index === showIndex && prevClickIndex !== showIndex;
  };

  return (
    <div className="relative top-[100px] w-[100vw] h-min-[100vh] mb-24 p-5">
      <h2 className="text-[#333] text-4xl mb-5">Help Center</h2>
      <h3 className="text-[#333] text-2xl mb-4">Frequently Asked Questions</h3>

      <div>
        {faqList.map((faq, index) => (
          <Faqs
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={checkIsOpen(index)}
            setShowIndex={() => {
              setPrevClickIndex(showIndex);
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
