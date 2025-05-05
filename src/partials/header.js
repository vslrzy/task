"use client";

import Logo from "@/components/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-1680 mx-auto flex items-center justify-between px-[80px] pt-[32px]">
      <div className="">
        {/* Logo */}
        <Logo />
        {/* Logo */}
      </div>
      {/* Menu */}
      <div className="bg-eee">
        {/* Links menu */}
        <div className="">
          <Link href={"/"}>Xidmətlərimiz</Link>
        </div>
        {/* Links menu */}
      </div>
      {/* Menu */}
    </header>
  );
}
