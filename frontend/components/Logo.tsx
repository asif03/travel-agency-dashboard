import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center font-jakarta">
      <img className="size-5" src="./assets/icons/logo.svg" alt="Logo" />
      <span className="text-dark-400 font-bold text-2xl">Tourvisto</span>
    </div>
  );
};
export default Logo;
