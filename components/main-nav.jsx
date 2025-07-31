"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
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
  const { scrollY } = useScroll();
  console.log(scrollY)

  const colorNav = useTransform(scrollY, [700,2000], ['', '#0b0c5d']);
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
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  activeClass=" text-white/50"
                  className="font-bold tracking-widest text-center cursor-pointer hover:text-white/50"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <motion.nav
        style={{ backgroundColor: colorNav }}
        className=" hidden lg:flex items-center justify-end px-4 py-8"
      >
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                className="font-bold tracking-widest hover:text-white/50 cursor-pointer"
                activeClass=" text-white/50"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
