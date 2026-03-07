import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, PlusCircle } from "lucide-react";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import noteFeatureGif from "../../../assets/4a649dd6d8bb9703322d5c931ab9e363f21987d8.png";

const features = [
  {
    icon: Search,
    title: "Finding a product",
    description: "Search for products in the Albert Heijn catalog",
  },
  {
    icon: PlusCircle,
    title: "Add product Note",
    description: "Note will be saved and assigned to a certain search",
  },
];

export default function NoteFeatureSlide() {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (visibleItems < features.length) {
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
              Decomposition of Note feature
            </h2>
            <p
              className="text-lg mt-1"
              style={{ color: "var(--ah-grey-40)" }}
            >
              Understanding the product note functionality
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
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
                  className="p-8 rounded-3xl border-4 flex items-start gap-6 h-full"
                  style={{
                    backgroundColor: "white",
                    borderColor: index < visibleItems ? "var(--ah-blue)" : "var(--ah-grey-light-20)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: index < visibleItems ? "var(--ah-blue)" : "var(--ah-grey-light-20)",
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{
                        color: index < visibleItems ? "white" : "var(--ah-grey-40)",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{
                        color: index < visibleItems ? "var(--ah-grey-60)" : "var(--ah-grey-40)",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-lg"
                      style={{ color: "var(--ah-grey-40)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right side - Mobile App Image/GIF */}
          <div className="flex items-start justify-center">
            <div
              className="rounded-3xl border-4 overflow-hidden w-fit"
              style={{
                borderColor: "var(--ah-blue)",
                height: "580px",
              }}
            >
              <img
                src={noteFeatureGif}
                alt="Albert Heijn note feature demonstration"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}