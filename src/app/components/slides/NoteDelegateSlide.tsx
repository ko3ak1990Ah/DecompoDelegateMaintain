import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import ahLogoImage from "../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png";

export default function NoteDelegateSlide() {
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
              NoteDelegate
            </h2>
            <p
              className="text-lg mt-1"
              style={{ color: "var(--ah-grey-40)" }}
            >
              Interface definition for note functionality
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Code snippet container */}
          <div
            className="rounded-3xl border-4 overflow-hidden relative"
            style={{
              backgroundColor: "var(--ah-grey-light-40)",
              borderColor: "var(--ah-blue)",
            }}
          >
            {/* Header */}
            <div
              className="px-8 py-3 border-b-2 flex items-center gap-3"
              style={{
                backgroundColor: "var(--ah-blue-light)",
                borderColor: "var(--ah-blue)",
              }}
            >
              <div className="flex gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--ah-error)" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "var(--ah-warning)",
                  }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: "var(--ah-success)",
                  }}
                />
              </div>
              <span
                className="text-base font-mono ml-4"
                style={{ color: "var(--ah-grey-60)" }}
              >
                ProductSearchSmartNoteViewModelDelegate.kt
              </span>
            </div>

            {/* Code content */}
            <div className="p-8 font-mono text-base leading-relaxed">
              <pre
                className="text-left"
                style={{ color: "var(--ah-grey-60)" }}
              >
                <code>
                  <span style={{ color: "#6B46C1" }}>
                    interface
                  </span>{" "}
                  <span
                    className="font-bold"
                    style={{ color: "#1E40AF" }}
                  >
                    ProductSearchSmartNoteViewModelDelegate
                  </span>{" "}
                  {"{\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    val
                  </span>{" "}
                  state:{" "}
                  <span style={{ color: "#047857" }}>
                    StateFlow
                  </span>
                  {"<"}
                  <span style={{ color: "#047857" }}>
                    SmartNoteState
                  </span>
                  ?{">"}
                  {"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    addSmartNote
                  </span>
                  (note:{" "}
                  <span style={{ color: "#047857" }}>
                    String
                  </span>
                  , isFromKeyboard:{" "}
                  <span style={{ color: "#047857" }}>
                    Boolean
                  </span>
                  ):{" "}
                  <span style={{ color: "#047857" }}>
                    Boolean
                  </span>
                  {"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    showSmartNoteForQuery
                  </span>
                  (query:{" "}
                  <span style={{ color: "#047857" }}>
                    String
                  </span>
                  ){"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    onSnackBarDismissed
                  </span>
                  (snackBarMsgViewData:{" "}
                  <span style={{ color: "#047857" }}>
                    SnackBarMsgViewData
                  </span>
                  ){"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    onAddSmartNoteClicked
                  </span>
                  (note:{" "}
                  <span style={{ color: "#047857" }}>
                    String
                  </span>
                  ){"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    onSmartNoteShown
                  </span>
                  (note:{" "}
                  <span style={{ color: "#047857" }}>
                    SmartNoteViewData
                  </span>
                  ){"\n\n"}
                  {"    "}
                  <span style={{ color: "#6B46C1" }}>
                    fun
                  </span>{" "}
                  <span style={{ color: "#B45309" }}>
                    onSmartNoteTooltipDismissed
                  </span>
                  ({"\n"} smartNoteViewData:{" "}
                  <span style={{ color: "#047857" }}>
                    AbSmartNoteViewData
                  </span>
                  {"\n"} ){"\n"}
                  <motion.span
                    initial={{
                      backgroundColor: "rgba(254, 247, 230, 0)",
                    }}
                    animate={{
                      backgroundColor: showHighlight
                        ? "var(--ah-warning-light)"
                        : "rgba(254, 247, 230, 0)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-block w-full px-2 py-1 rounded"
                  >
                    {"    "}
                    <span style={{ color: "#6B46C1" }}>
                      fun
                    </span>{" "}
                    <span style={{ color: "#B45309" }}>
                      scheduleWorkManager
                    </span>
                    (smartNoteViewData:{" "}
                    <span style={{ color: "#047857" }}>
                      SmartNoteViewData
                    </span>
                    )
                  </motion.span>
                  {"\n}"}
                </code>
              </pre>
            </div>
          </div>

          {/* Warning annotation for scheduleWorkManager */}
          {showHighlight && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-4 bottom-20 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "var(--ah-warning)",
                transform: "translateX(100%)",
              }}
            >
              <AlertCircle className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-white whitespace-nowrap">
                  A bit excessive! 🤔
                </p>
                <p className="text-sm text-white opacity-90">
                  Too much responsibility
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}