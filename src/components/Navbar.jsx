import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10">
      <nav className="w-screen text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Navbar</div>
          <ul className="flex">
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Services</li>
            <li className="mx-2">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
