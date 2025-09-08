"use client";

import "./navbar.css";
import { useState } from "react";
import Link from "next/link";


const Navbar = () => {

  return (

    <nav className="flex items-center w-full h-16 px-4">

      <div className="w-1/5 text-xl font-bold">
        Aaron McIntyre
      </div>

      <div className="w-4/5 flex justify-end space-x-6">
        <Link href="/">Home</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;