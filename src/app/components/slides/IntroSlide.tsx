import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import introImage from "../../../assets/3dc6d6173bb4fe4ae380bd8c24ee8d5a163a51a1.png";
import { motion } from "motion/react";

export default function IntroSlide() {
  const aboutItems = [
    { emoji: "📱", text: "Shipping Mobile apps since 2014" },
    {
      emoji: "🇳🇱",
      text: "Based in the Rotterdam, Netherlands",
    },
    { emoji: "🇺🇦", text: "Born in Ukraine" },
  ];

  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img
          src={ahLogoImage}
          alt="Albert Heijn"
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
        {/* Left Column - Profile */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5">
          <div
            className="rounded-3xl overflow-hidden border-4 w-fit"
            style={{
              borderColor: "var(--ah-blue)",
              height: "420px",
            }}
          >
            <img
              src={introImage}
              alt="Ievgen Umanets"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--ah-grey-60)" }}
            >
              Ievgen Umanets
            </h2>
            <p
              className="text-xl"
              style={{ color: "var(--ah-grey-40)" }}
            >
              Android Engineer at Albert Heijn
            </p>
          </div>
        </div>

        {/* Right Column - About Me */}
        <div className="flex-1 space-y-8 pt-4">
          <div>
            <h3
              className="text-3xl font-bold mb-6 px-4 py-2 rounded-xl inline-block"
              style={{
                backgroundColor: "var(--ah-blue-light)",
                color: "var(--ah-blue-dark)",
              }}
            >
              About Me
            </h3>
            <div
              className="space-y-4 text-xl mt-6"
              style={{ color: "var(--ah-grey-40)" }}
            >
              {aboutItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 2,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 p-5 rounded-2xl border-4"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--ah-blue)",
                  }}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}