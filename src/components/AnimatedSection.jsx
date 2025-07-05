"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/fadeInUp";

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.section
            variants={fadeInUp(delay)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
