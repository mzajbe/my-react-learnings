import  { useState } from "react";

const ProposeToRuma = () => {
  const [showRing, setShowRing] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYesClick = () => {
    setShowRing(true);
  };

  const handleNoHover = (e) => {
    const button = e.target;
    const buttonRect = button.getBoundingClientRect();
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoButtonStyle({
      position: "fixed",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-pink-700 mb-8">
        Ruma Sultana, do you love me?
      </h1>

      {showRing && (
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Ring"
            className="w-32 h-32 animate-bounce"
          />
          <p className="text-2xl text-pink-700 mt-4">💍 Will you marry me? 💍</p>
        </div>
      )}

      <div className="flex space-x-4 mt-8">
        <button
          onClick={handleYesClick}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
        >
          Yes
        </button>
        <button
          onMouseEnter={handleNoHover}
          style={noButtonStyle}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ProposeToRuma;