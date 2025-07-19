"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Link from "next/link";
const navItems = [
  { label: "HOME", id: "home" },
  { label: "SKILLS", id: "skills" },
  { label: "ACHIEVEMENTS", id: "achievements" },
  { label: "PROJECTS", id: "projects" },
  { label: "CERTIFICATES", id: "certifications" },
  { label: "CONTACTS", id: "contacts" },
];

export default function MainNav() {
  const [openNav, setOpenNav] = useState(false);
  const handleClose = () => {
    setOpenNav(false);
  };
  const handleOpen = () => {
    setOpenNav(true);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="flex flex-col lg:hidden w-full justify-end items-end">
        <div className="absolute top-5 right-5">
          <IconButton onClick={openNav ? handleClose : handleOpen}>
            {!openNav && <MenuSharpIcon className="text-white" />}
            {openNav && <CloseSharpIcon className="text-white" />}
          </IconButton>
        </div>
        {openNav && (
          <ul className="flex flex-col gap-4 py-16 px-8 bg-background  h-dvh shadow-2xl">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <Link
                  href={`/#${item.id}`}
                  className="font-bold tracking-widest text-center hover:text-white/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <nav className=" hidden lg:flex items-center justify-end px-4 py-8">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={`/#${item.id}`} className="font-bold tracking-widest hover:text-white/50">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
