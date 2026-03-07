import { motion } from "motion/react";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import androidWarriorImage from "../../../assets/f0cfe34f10a3242a07fe67d0cbb254f6f3c2b284.png";

export default function TitleSlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center px-16">
      <div className="w-full grid grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        {/* Left side - Text content */}
        <div className="text-left space-y-8 pr-4">
          {/* Main title */}
          <motion.h1
            className="text-7xl font-bold leading-[0.95] tracking-tight"
            style={{ color: "var(--ah-blue-dark)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Decompose.</span>
            <span className="block">Delegate.</span>
            <span className="block">Maintain.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-4xl font-bold"
            style={{ color: "var(--ah-grey-60)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Scaling VMs
          </motion.p>

          {/* Author info */}
          <motion.div
            className="text-xl space-y-2"
            style={{ color: "var(--ah-grey-40)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>CTP Digital Shop</p>
            <p>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Author name and logo */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="text-2xl font-semibold"
              style={{ color: "var(--ah-grey-60)" }}
            >
              Ievgen Umanets
            </div>
            <div
              className="w-px h-8"
              style={{
                backgroundColor: "var(--ah-grey-light-40)",
              }}
            />
            <img
              src={ahLogoImage}
              alt="Albert Heijn"
              className="h-12 object-contain"
            />
          </motion.div>
        </div>

        {/* Right side - Android mascot */}
        <motion.div
          className="flex items-center justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src={androidWarriorImage}
            alt="Android mascot"
            className="w-full max-w-md object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}