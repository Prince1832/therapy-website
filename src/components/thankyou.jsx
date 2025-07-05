import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-amber-50 text-center px-4">
    
      <div className="flex items-center justify-center w-15 h-15 md:w-20 md:h-20 rounded-full bg-amber-500 text-white mb-6 shadow-lg">
        <CheckCircle className="w-9 h-9 md:w-12 md:h-12" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
        Thank you for reaching out!
      </h1>
      <p className="text-lg text-stone-600 max-w-md">
        I’ve received your message and will get back to you shortly.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-amber-500 transition-all duration-300 cursor-pointer"
      >
        Back to Home
      </a>
    </section>
  );
};

export default ThankYou;
