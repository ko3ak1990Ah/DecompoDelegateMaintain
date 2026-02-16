import androidImage from "../../../assets/f0cfe34f10a3242a07fe67d0cbb254f6f3c2b284.png";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import { motion } from "motion/react";

export default function TitleSlide() {
  return (
    <div className="w-full h-full max-w-6xl mx-auto relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Android mascot with rocket */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={androidImage}
            alt="Android mascot with rocket"
            className="w-64 h-64 object-contain animate-bounce-slow"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            className="text-7xl font-bold tracking-tight"
            style={{ color: "var(--ah-blue-dark)" }}
          >
            deCompose.Delegate.Maintain.
          </h1>

          <p
            className="text-3xl max-w-3xl mx-auto"
            style={{ color: "var(--ah-grey-40)" }}
          >
            A real-world guide to modular ViewModels using
            delegation
          </p>
        </motion.div>

        {/* Author and Company */}
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
    </div>
  );
}