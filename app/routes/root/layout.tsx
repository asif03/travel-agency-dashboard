import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="font-figtree w-full min-h-screen bg-white">
      <main className="flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
