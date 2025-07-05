"use client";
import ContactForm from "./contactForm";

const LocationMap = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-17">
    
      <div className="hidden md:block relative w-full h-[700px] overflow-hidden">
        
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026&output=embed"
          className="absolute top-0 left-0 w-full h-full border-none"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <div className="absolute inset-0 flex items-center justify-end pr-14 z-10">
          <div className="max-w-lg w-full">
            <div>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </div>

 
      <div className="block md:hidden px-4 py-10 sm:mb-12 sm:px-8 sm:py-10 sm:border sm:border-gray-200 sm:rounded-xl sm:max-w-md sm:mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default LocationMap;
