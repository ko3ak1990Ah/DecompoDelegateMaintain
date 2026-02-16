import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";
import mobileAppGif from "../../../assets/60677413393dbc3f58e345fe9a4211b0ac1c57ef.png";

const features = [
  "Added sorting",
  "Added filtering",
  "Added pagination",
  "Added analytics",
  "Added product suggestions",
  "Feature list is still growing",
];

export default function VMProblemSlide() {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (visibleItems < features.length) {
      const timer = setTimeout(() => {
        setVisibleItems(visibleItems + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleItems]);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img
          src={ahLogoImage}
          alt="Albert Heijn"
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-16">
        {/* Title with number badge */}
        <div className="flex items-center gap-6 mb-12">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: "var(--ah-blue)" }}
          >
            01
          </div>
          <div>
            <h2
              className="text-5xl font-bold"
              style={{ color: "var(--ah-grey-60)" }}
            >
              The VM Problem
            </h2>
            <p
              className="text-lg mt-1"
              style={{ color: "var(--ah-grey-40)" }}
            >
              Complexity explosion, things we tried and why they
              failed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* It started simple */}
            <div
              className="p-6 rounded-3xl border-4"
              style={{
                backgroundColor: "var(--ah-success-light)",
                borderColor: "var(--ah-success)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--ah-grey-60)" }}
              >
                It started simple...
              </h3>
              <div className="flex items-center gap-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "var(--ah-success)",
                  }}
                />
                <p
                  className="text-xl"
                  style={{ color: "var(--ah-grey-40)" }}
                >
                  One screen, one{" "}
                  <span
                    className="font-mono font-bold px-2.5 py-1 rounded-lg"
                    style={{
                      backgroundColor: "var(--ah-blue)",
                      color: "white",
                    }}
                  >
                    ViewModel
                  </span>
                </p>
              </div>
            </div>

            {/* Then it grew */}
            <div
              className="p-6 rounded-3xl border-4"
              style={{
                backgroundColor: "white",
                borderColor: "var(--ah-blue)",
                minHeight: "400px",
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--ah-blue-dark)" }}
              >
                Then it grew...
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
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
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor:
                          index < visibleItems
                            ? "var(--ah-blue)"
                            : "transparent",
                      }}
                    />
                    <p
                      className="text-lg"
                      style={{ color: "var(--ah-grey-40)" }}
                    >
                      {index === features.length - 1 ? (
                        <>
                          Feature list is{" "}
                          <strong
                            className="underline"
                            style={{ color: "var(--ah-error)" }}
                          >
                            still growing
                          </strong>
                        </>
                      ) : (
                        feature
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Result */}
              {visibleItems === features.length && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6 pt-5 border-t-2"
                  style={{
                    borderColor: "var(--ah-grey-light-20)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full animate-pulse flex-shrink-0"
                      style={{
                        backgroundColor: "var(--ah-error)",
                      }}
                    />
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xl font-bold"
                        style={{ color: "var(--ah-grey-60)" }}
                      >
                        Now it's
                      </span>
                      <span
                        className="text-3xl font-bold"
                        style={{ color: "var(--ah-error)" }}
                      >
                        4600 lines
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right side - GIF */}
          <div className="flex items-start justify-center">
            <div
              className="rounded-3xl border-4 overflow-hidden w-fit"
              style={{
                borderColor: "var(--ah-blue)",
                height: "580px",
              }}
            >
              {/* Mobile app GIF - auto-playing */}
              <img
                src={mobileAppGif}
                alt="Albert Heijn mobile app demonstration"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}