"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
