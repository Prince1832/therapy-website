"use client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        consent: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [invalidFields, setInvalidFields] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));

        setInvalidFields((prevInvalids) => {
            const updatedInvalids = [...prevInvalids];

            const isFieldValid = () => {
                if (name === "email") return /\S+@\S+\.\S+/.test(updatedValue);
                if (name === "phone") return /^\d{10}$/.test(updatedValue);
                if (name === "consent") return updatedValue === true;
                return updatedValue.trim() !== "";
            };

            if (isFieldValid()) {
                return updatedInvalids.filter((field) => field !== name);
            } else {
                if (!updatedInvalids.includes(name)) {
                    updatedInvalids.push(name);
                }
                return updatedInvalids;
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const newInvalids = [];

        if (!form.name.trim()) newInvalids.push("name");
        if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim()))
            newInvalids.push("phone");
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            newInvalids.push("email");
        if (!form.message.trim()) newInvalids.push("message");
        if (!form.time.trim()) newInvalids.push("time");
        if (!form.consent) newInvalids.push("consent");

        setInvalidFields(newInvalids);

        if (newInvalids.length === 1) {
            const field = newInvalids[0];
            switch (field) {
                case "name":
                    toast.error("Name is required.");
                    break;
                case "phone":
                    if (!form.phone.trim()) toast.error("Phone is required.");
                    else toast.error("Please enter a valid 10-digit mobile number.");
                    break;
                case "email":
                    toast.error("Please enter a valid email.");
                    break;
                case "message":
                    toast.error("Message is required.");
                    break;
                case "time":
                    toast.error("Preferred time is required.");
                    break;
                case "consent":
                    toast.error("You must give consent to be contacted.");
                    break;
            }
        } else if (newInvalids.length > 1) {
            toast.error("Please fill all credentials correctly.");
        }

        if (newInvalids.length === 0) {
            toast.success("Message sent successfully!");
            setTimeout(() => {
                router.push("/thankyou");
            }, 1200);
            setSubmitted(true);
            setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
                time: "",
                consent: false,
            });
            setHasSubmitted(false);
            setInvalidFields([]);
        }
    };


    return (
        <section id="contact" className=" md:py-0">
            <div className="max-w-lg mx-auto">
                {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center text-stone-800 mb-8">
                    Contact
                </h2> */}

                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-2 bg-white p-[unset] md:p-8 rounded-2xl md:shadow-lg">
                
                    <div>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-stone-800 mb-8">
                            Contact
                        </h2>
                        <label className="block text-stone-700 text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none ${hasSubmitted && invalidFields.includes("name")
                                ? "border-red-500 border-2"
                                : "border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-400"
                                }`}
                        />
                    </div>


                    <div>
                        <label className="block text-stone-700 text-sm font-medium mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            onBlur={() => {
                                if (form.phone && !/^\d{10}$/.test(form.phone.trim())) {
                                    if (!invalidFields.includes("phone")) {
                                        setInvalidFields((prev) => [...prev, "phone"]);
                                        toast.error("Please enter a valid 10-digit mobile number.");
                                    }
                                } else {

                                    setInvalidFields((prev) => prev.filter((f) => f !== "phone"));
                                }
                            }}
                            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none ${hasSubmitted && invalidFields.includes("phone")
                                ? "border-red-500 border-2"
                                : "border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-400"
                                }`}
                        />
                    </div>

                    <div>
                        <label className="block text-stone-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none ${hasSubmitted && invalidFields.includes("email")
                                ? "border-red-500 border-2"
                                : "border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-400"
                                }`}
                        />
                    </div>


                    <div>
                        <label className="block text-stone-700 text-sm font-medium mb-1">
                            What brings you here?
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none ${hasSubmitted && invalidFields.includes("message")
                                ? "border-red-500 border-2"
                                : "border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-400"
                                }`}
                        ></textarea>
                    </div>


                    <div>
                        <label className="block text-stone-700 text-sm font-medium mb-1">
                            Preferred time to reach you
                        </label>
                        <input
                            type="text"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none ${hasSubmitted && invalidFields.includes("time")
                                ? "border-red-500 border-2"
                                : "border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-400"
                                }`}
                        />
                    </div>


                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={form.consent}
                            onChange={handleChange}
                            className={`w-4 h-4 mt-1 accent-amber-600 ${hasSubmitted && invalidFields.includes("consent")
                                ? "outline-2 outline-red-500"
                                : ""
                                }`}
                        />
                        <label className="text-gray-700 text-sm">
                            I agree to be contacted.
                        </label>
                    </div>


                    <button
                        type="submit"
                        className="w-full mt-4 bg-amber-600 text-white text-sm font-medium py-3 rounded-lg hover:bg-amber-500 transition-all duration-300 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
