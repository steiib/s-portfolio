import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCardWrapperProps {
  children: React.ReactNode;
}

export default function AnimatedCardWrapper({
  children,
}: AnimatedCardWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9 }}
      animate={inView ? { scale: 1 } : { scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
