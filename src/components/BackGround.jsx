import React from "react";

const BackGround = ({ page }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen z-0">
      <div
        className={`w-screen h-[50%] ${
          page == 0
            ? "bg-amber-500"
            : page == 1
            ? "bg-pink-500"
            : page === 2
            ? "bg-green-500"
            : page === 3
            ? "bg-blue-500"
            : ""
        } transition-colors duration-500`}
      ></div>
      <div
        className={`w-screen h-[50%] ${
          page == 0
            ? "bg-amber-700"
            : page == 1
            ? "bg-pink-700"
            : page === 2
            ? "bg-green-700"
            : page === 3
            ? "bg-blue-700"
            : ""
        } transition-colors duration-500`}
      ></div>
    </div>
  );
};

export default BackGround;
