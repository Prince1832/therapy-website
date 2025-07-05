"use client";
import { useState } from "react";
import Image from "next/image";
import ContactModal from "./contactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hidden sm:block relative h-screen">
        <Image
          src="/assets/hero.webp"
          alt="Therapy session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-white text-5xl font-bold leading-tight max-w-4xl">
            Helping You Heal, Grow, and Thrive
          </h1>
          <p className="text-white text-xl mt-4 max-w-xl">
            Compassionate therapy tailored for individuals, couples, and those recovering from trauma.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-white text-gray-900 text-lg font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Book a Free Consult
          </button>
        </div>
      </div>


      <div className="sm:hidden flex flex-col items-center text-center px-4 py-10 bg-amber-50">
        <div className="relative w-full h-[280px] xs:h-[300px] sm:h-[360px]">
          <Image
            src="/assets/hero.webp"
            alt="Therapy session"
            fill
            className="rounded-xl object-cover shadow-md"
            sizes="(max-width: 532px) 90vw, (min-width: 533px) 100vw"
          />
        </div>

        <h1 className="text-stone-800 text-3xl font-bold mt-6">
          Helping You Heal, Grow, and Thrive
        </h1>
        <p className="text-stone-600 text-base mt-3 max-w-xs">
          Compassionate therapy tailored for individuals, couples, and those recovering from trauma.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 bg-stone-900 text-white text-base font-medium px-5 py-3 rounded-full shadow hover:bg-stone-800 transition"
        >
          Book a Free Consult
        </button>
      </div>


      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
