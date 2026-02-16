import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import noteAppImage from "../../../assets/eca856b710cfa6a4d346359141d433aeadbf32b5.png";

const capabilities = [
  "Note can be shown",
  "Note can be added",
  "Note can emit snackBar + additional functionality",
];

export default function NoteCapabilitiesSlide() {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (visibleItems < capabilities.length) {
      const timer = setTimeout(() => {
        setVisibleItems(visibleItems + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleItems]);

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

      <div className="w-full">
        {/* Title with number badge */}
        <div className="flex items-center gap-6 mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: "var(--ah-blue)" }}
          >
            02
          </div>
          <div>
            <h2
              className="text-5xl font-bold"
              style={{ color: "var(--ah-grey-60)" }}
            >
              Decomposition of note feature
            </h2>
            <p
              className="text-lg mt-1"
              style={{ color: "var(--ah-grey-40)" }}
            >
              What we can do with notes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left side - Capabilities list */}
          <div
            className="p-8 rounded-3xl border-4"
            style={{
              backgroundColor: "white",
              borderColor: "var(--ah-blue)",
              minHeight: "600px",
            }}
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--ah-blue-dark)" }}
            >
              Note Capabilities
            </h3>
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index < visibleItems ? 1 : 0,
                    x: index < visibleItems ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-2"
                    style={{
                      backgroundColor:
                        index < visibleItems
                          ? "var(--ah-blue)"
                          : "transparent",
                    }}
                  />
                  <p
                    className="text-2xl"
                    style={{ color: "var(--ah-grey-40)" }}
                  >
                    {capability}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Mobile App Image */}
          <div className="flex items-start justify-center h-full">
            <div
              className="rounded-3xl border-4 overflow-hidden"
              style={{
                borderColor: "var(--ah-blue)",
                height: "600px",
              }}
            >
              <img
                src={noteAppImage}
                alt="Albert Heijn note feature in app"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}