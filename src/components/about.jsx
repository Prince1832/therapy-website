import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Calendar,
    Brain,
} from "lucide-react";

const About = () => {
    return (
        <section id="about" className="bg-white md:py-15 py-10 px-4 md:px-8 scroll-mt-15">
            <h2 className="text-3xl text-center sm:text-4xl font-semibold text-gray-800 mb-15">
                About
            </h2>
            <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-col md:flex-row items-center gap-10">

        
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                        Meet Dr. Serena Blake, PsyD
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center md:text-left">
                        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with 8 years of experience and over 500 client sessions.
                        She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center md:text-left">
                        Whether you're overcoming anxiety, strengthening relationships, or healing from trauma, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                    </p>

                
                    <ul className="text-gray-700 text-md mt-8 space-y-4 text-left max-w-xl mx-auto md:mx-0">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-amber-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="text-amber-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Phone:</strong> (323) 555-0192
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="text-amber-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Email:</strong> serena@blakepsychology.com
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Calendar className="text-amber-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Office Hours:</strong><br />
                                In-person: Tue & Thu, 10 AM–6 PM<br />
                                Virtual (Zoom): Mon, Wed & Fri, 1 PM–5 PM
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Brain className="text-amber-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Experience:</strong> 8 years, 500+ sessions
                            </span>
                        </li>
                    </ul>
                </div>

           
                <div className="w-full md:w-1/2 md:self-start">

                    <Image
                        src="/assets/dr.serena.webp"
                        alt="Dr. Serena Blake"
                        width={500}
                        height={600}
                        className="rounded-xl shadow-lg object-cover w-full h-auto"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}


export default About;