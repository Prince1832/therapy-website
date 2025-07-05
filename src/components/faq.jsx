"use client"
import React, { useState } from 'react'

const faqs = [
    {
        question: "Do you accept insurance?",
        answer: "No, but a superbill is provided for self-submission.",
    },
    {
        question: "Are online sessions available?",
        answer: "Yes—all virtual sessions are conducted via Zoom.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "24-hour notice is required for cancellations or rescheduling.",
    },
    {
        question: "Do you provide online counseling?",
        answer: "No, I do not provide online counseling. ",
    },
    {
        question: "What are your fees?",
        answer: (
            <>
                My fees are{" "}
                <strong>$60 for individual, $90 for couple</strong>.
            </>
        )
    },

    {
        question: "What services do you offer?",
        answer: (
            <>
                I offer {""}
                <strong>Individual Therapy</strong>
                and {""}
                <strong>Couples Therapy</strong>
                . My practice focuses on areas such as {""}
                <strong>Christian counseling</strong>
                , spiritual growth, deepening relationships, healing past wounds, and discovering your life's purpose.
            </>
        )
    }

];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white md:py-15 py-10 px-4 md:px-8 scroll-mt-15">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-15">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b pb-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="md:text-2xl text-xl font-medium text-gray-800">
                                    {faq.question}
                                </h3>
                                <span className="text-xl text-gray-600">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-600 md:text-2xl text-xl">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


export default FAQ;
