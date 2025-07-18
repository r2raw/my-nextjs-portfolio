'use client'
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", id: "home" },
  { label: "SKILLS", id: "skills" },
  { label: "ACHIEVEMENTS", id: "achievements" },
  { label: "PROJECTS", id: "projects" },
  { label: "CERTIFICATES", id: "certifications" },
  { label: "CONTACTS", id: "contacts" },
];

export default function MainNav() {
  // const [activeId, setActiveId] = useState("home");

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleSection = entries.find((entry) => entry.isIntersecting);
  //       if (visibleSection) {
  //         setActiveId(visibleSection.target.id);
  //       }
  //     },
  //     {
  //       rootMargin: "-50% 0px -50% 0px", // triggers when the section is roughly in the middle of the viewport
  //       threshold: 0.1,
  //     }
  //   );

  //   navItems.forEach(({ id }) => {
  //     const section = document.getElementById(id);
  //     if (section) observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50">
    <nav className="lg:hidden ">
      
    </nav>
      <nav className=" hidden lg:flex items-center justify-end px-4 py-10">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className='font-bold tracking-widest'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
