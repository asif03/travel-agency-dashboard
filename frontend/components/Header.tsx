import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="h-[100px] flex flex-row items-center justify-between">
      <Logo />
    </nav>
  );
};
export default Header;
