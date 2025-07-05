import Image from "next/image";

const services = [
    {
        title: "Anxiety & Stress Management",
        description:
            "Learn to manage overwhelming thoughts, physical tension, and emotional burnout through personalized strategies rooted in CBT and mindfulness practices.",
        image: "/assets/anxiety.webp",
    },
    {
        title: "Relationship Counseling",
        description:
            "Improve communication, rebuild trust, and strengthen emotional bonds. Whether you're dating, engaged, or married, sessions are tailored for your unique journey.",
        image: "/assets/relationship-counseling.webp",
    },
    {
        title: "Trauma Recovery",
        description:
            "Work through past trauma in a safe, supportive environment. Using evidence-based techniques, Dr. Blake helps you heal and regain emotional balance.",
        image: "/assets/trauma-recovery.webp",
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-amber-50 md:py-15 py-10 px-4 md:px-8 scroll-mt-15">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-15">
                    Therapy Services
                </h2>

                <div className="grid grid-cols-1 [@media(min-width:500px)]:grid-cols-2 [@media(min-width:801px)]:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={500}
                                height={300}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


export default Services;