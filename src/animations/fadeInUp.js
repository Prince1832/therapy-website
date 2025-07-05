export const fadeInUp = (delay = 0) => ({
    hidden: {
        opacity: 0,
        y: 50, 
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, 
            delay,
            ease: [0.33, 1, 0.68, 1], 
        },
    },
});
