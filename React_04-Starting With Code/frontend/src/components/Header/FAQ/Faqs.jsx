import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faqs = ({ question, answer, isOpen, setShowIndex }) => {
  const handleChange = () => {
    setShowIndex();
  };

  return (
    <>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-700 border border-b border-gray-200 rtl:text-right hover:bg-slate-300"
          onClick={handleChange}
        >
          <span>{question}</span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </h2>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-5 bg-gray-200 border border-b-0 border-gray-100">
          <p className="mb-2 text-gray-700">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Faqs;
