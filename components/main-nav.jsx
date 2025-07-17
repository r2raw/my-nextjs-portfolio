import React from "react";

export default function MainNav() {
  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav className="flex items-center justify-end px-4 py-10">
        <ul className="flex gap-4">
          <li>
            <p>HOME</p>
          </li>
          <li>
            <p>SKILLS</p>
          </li>
          <li>
            <p>ACHIEVEMENTS</p>
          </li>
          <li>
            <p>CERTIFICATES</p>
          </li>
          <li>
            <p>ABOUT</p>
          </li>
          <li>
            <p>PROJECTS</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
