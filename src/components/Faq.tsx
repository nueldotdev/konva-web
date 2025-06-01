'use client'
import React, { useState } from 'react'

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need the app to use Konva?",
      answer: "Yes. But the person you share your profile with doesn’t need the app to view your profile."
    },
    {
      question: "Is my information safe on the app?",
      answer: "Yes, your information is safe with us. We take privacy and security seriously, and we will never share your data without your consent."
    },
    {
      question: "When is the app launching?",
      answer: "Konva is launching soon! Sign up now to be among the first to know when we go live."
    },
    {
      question: "Can I update my information?",
      answer: "Yes, you can update your information anytime, and all your shared contacts will see the latest version automatically."
    },
    {
      question: "Is Konva free to use?",
      answer: "Konva will offer both free and premium features. Sign up now to be among the first to know about our launch offers."
    }
  ];

  return (
    <div className="container mx-auto px-4 mt-8 py-12">
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold">Questions you may<br />want to ask?</h2>
        </div>
        <div className="md:w-2/3  space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b rounded-xl bg-[#f2f2f2] border-gray-200 p-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">{activeIndex === index ? 'x' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq