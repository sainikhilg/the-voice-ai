import { motion } from "framer-motion";

export default function VoiceWave() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[20px] w-full bg-primary/5"
          style={{
            top: `${30 + i * 12}%`,
            left: 0,
          }}
          animate={{
            x: ["-100%", "100%"],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
