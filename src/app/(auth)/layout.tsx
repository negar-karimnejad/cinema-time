import Image from "next/image";
import React, { ReactNode } from "react";
import backgroundImage from "../../../public/login_background.jpg";
import logo from "../../../public/netflix_logo.svg";

export default function authLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        src={backgroundImage}
        alt="Background Image"
        priority
        fill
      />
      <Image
      src={logo}
      alt="Logo"
      width={120}
      height={120}
      className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      priority
      />
      {children}
    </div>
  );
}
