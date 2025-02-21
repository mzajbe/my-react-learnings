import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showRing, setShowRing] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null); // Fixed: Removed TypeScript syntax if not using TypeScript

  const moveNoButton = () => {
    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const newX = Math.random() * (containerBounds.width - 100);
      const newY = Math.random() * (containerBounds.height - 40);
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = () => {
    setShowRing(true);
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-rose-50 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden p-4"
      ref={containerRef} // Fixed: Properly assigned the ref
    >
      <div className="max-w-md w-full mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
            RSZ
          </h2>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12">
            Do you love me?
          </h1>
        </motion.div>

        <AnimatePresence>
          {!showRing ? (
            <div className="relative">
              <motion.button
                onClick={handleYesClick}
                className="px-8 py-3 bg-rose-500 text-white rounded-full text-lg font-medium shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes
              </motion.button>
              <motion.button
                initial={false}
                animate={{
                  x: noButtonPosition.x,
                  y: noButtonPosition.y,
                }}
                onMouseEnter={moveNoButton}
                className="px-8 py-3 bg-gray-500 text-white rounded-full text-lg font-medium shadow-lg absolute"
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
              >
                No
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="w-32 h-32 relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-rose-500"
                  >
                    <path
                      d="M12 21C11.8 21 11.6 20.9 11.4 20.8C11.1 20.6 4 15.5 4 10C4 6.5 6.9 3.6 10.4 3.6C11.7 3.6 13 4 14 4.8C15 4 16.3 3.6 17.6 3.6C21.1 3.6 24 6.5 24 10C24 15.5 16.9 20.6 16.6 20.8C16.4 20.9 16.2 21 16 21H12Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-gray-800 font-light"
              >
                I love you too! ❤️
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;