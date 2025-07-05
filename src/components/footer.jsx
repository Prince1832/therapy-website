import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Footer() {
    const navMenu = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-amber-50 pt-10">
            <div className="max-w-6xl mx-auto  px-4 justify-center">
                <div className="flex items-center gap-3 text-3xl font-semibold text-stone-800 tracking-tight">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-3 py-1 rounded-full shadow-md font-serif">
                        S
                    </span>
                    <span className="font-playfair tracking-wide text-2xl text-amber-600">
                        Serena<span className="text-stone-800">Wellness</span>
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">

                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-stone-700 mb-2">Navigation</h3>

                        {navMenu.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative inline-block text-gray-700 transition-all duration-300 group w-fit"
                            >
                                <span className="inline-block relative text-[17px]">
                                    {item.name}
                                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </a>
                        ))}
                    </div>



                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-stone-700 mb-2">Contact</h3>
                        <div className="flex items-start gap-2 text-gray-700">
                            <Mail className="text-amber-500 w-5 h-5 mt-1" />
                            <span className="text-[17px]">serena@blakepsychology.com</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700">
                            <Phone className="text-amber-500 w-5 h-5 mt-1" />
                            <span className="text-[17px]">(323) 555-0192</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700">
                            <MapPin className="text-amber-500 w-5 h-5 mt-1" />
                            <span className="text-[17px]">1287 Maplewood Drive, Los Angeles, CA 90026</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700">
                            <Calendar className="text-amber-500 w-5 h-5 mt-1" />
                            <span className="text-[17px]">
                                In-person: Tue & Thu, 10 AM–6 PM <br />
                                Virtual: Mon, Wed & Fri, 1 PM–5 PM
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 text-center text-gray-600 bg-amber-100 text-lg py-5">
                &copy; {new Date().getFullYear()} Solace Therapy. All rights reserved.
            </div>
        </footer>
    );
}

