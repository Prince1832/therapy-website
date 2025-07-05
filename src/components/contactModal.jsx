"use client";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm px-4">


            <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden relative animate-fadeInUp">

                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-black hover:text-red-500 text-2xl font-bold z-10 transition-all duration-300 cursor-pointer"
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="w-full md:w-1/2 max-w-2xl mx-auto p-4 md:p-0">
                    <ContactForm />
                </div>

                <div className="hidden md:block md:w-1/2">
                    <img
                        src="./assets/contactform.webp"
                        alt="Therapist"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default ContactModal;
