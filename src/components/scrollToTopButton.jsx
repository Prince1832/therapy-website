"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-50 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition duration-300 cursor-pointer"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        )
    );
};

export default ScrollToTopButton;
