import { useState, useEffect } from 'react';

const ProposalComponent = () => {
  const [showRing, setShowRing] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 60, left: 50 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Move the No button when cursor gets close
  useEffect(() => {
    const buttonElement = document.getElementById('no-button');
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(cursorPosition.x - buttonCenterX, 2) + 
        Math.pow(cursorPosition.y - buttonCenterY, 2)
      );
      
      // Move button if cursor gets within 100px
      if (distance < 100 && !showRing) {
        // Calculate new position (move away from cursor)
        const moveX = buttonCenterX > cursorPosition.x ? 30 : -30;
        const moveY = buttonCenterY > cursorPosition.y ? 20 : -20;
        
        // Make sure button stays within viewport
        const newLeft = Math.min(Math.max(10, noButtonPosition.left + moveX), 80);
        const newTop = Math.min(Math.max(10, noButtonPosition.top + moveY), 80);
        
        setNoButtonPosition({ top: newTop, left: newLeft });
      }
    }
  }, [cursorPosition, noButtonPosition, showRing]);
  
  const handleYesClick = () => {
    setShowRing(true);
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative px-4">
      {!showRing ? (
        <>
          <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
            Ruma Sultana, do you love me?
          </h1>
          
          <div className="flex justify-center w-full relative">
            <button
              onClick={handleYesClick}
              className="px-8 py-3 mx-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Yes
            </button>
            
            <button
              id="no-button"
              className="px-8 py-3 mx-3 bg-gray-400 text-white rounded-full text-xl font-bold transition duration-300 shadow-lg absolute"
              style={{
                top: `${noButtonPosition.top}%`,
                left: `${noButtonPosition.left}%`,
              }}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="mb-8 animate-bounce">
            <svg width="120" height="120" viewBox="0 0 120 120" className="fill-current text-yellow-400">
              <path d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10zm0 90c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z" />
              <path d="M60 20c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 70c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z" />
              <path d="M60 40c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" />
            </svg>
          </div>
          
          <h2 className="text-4xl font-bold text-pink-600 mb-4 text-center">
            I knew you would say Yes!
          </h2>
          
          <p className="text-2xl text-pink-500 mb-8 text-center">
            Ruma Sultana, will you marry me?
          </p>
          
          <div className="mt-4 text-center">
            <button onClick={() => setShowRing(false)} className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg transition duration-300 shadow-lg">
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalComponent;