import kalakakilasanWeb1 from "../assets/projects/kalakalikasan-web/1.png";
import kalakakilasanWeb2 from "../assets/projects/kalakalikasan-web/6.png";
import kalakakilasanWeb3 from "../assets/projects/kalakalikasan-web/7.png";
import kalakakilasanWeb4 from "../assets/projects/kalakalikasan-web/9.png";
import kalakakilasanWeb5 from "../assets/projects/kalakalikasan-web/23.png";

import kalakalikasanMobile1 from "../assets/projects/kalakalikasan-mobile/login.jpg";
import kalakalikasanMobile2 from "../assets/projects/kalakalikasan-mobile/register1.jpg";
import kalakalikasanMobile3 from "../assets/projects/kalakalikasan-mobile/1.jpg";
import kalakalikasanMobile4 from "../assets/projects/kalakalikasan-mobile/store_registration.jpg";
import kalakalikasanMobile5 from "../assets/projects/kalakalikasan-mobile/Screenshot_20250316_010942.jpg";

import wordOfHope1 from "../assets/projects/word-of-hope/Messenger_creation_6139DBD5-EFF1-4FFA-872E-A8CA0ABEC6E0.jpeg";
import wordOfHope2 from "../assets/projects/word-of-hope/Messenger_creation_A87E5380-5D77-4A2D-83D0-81B8EC9B6336.jpeg";
import wordOfHope3 from "../assets/projects/word-of-hope/Messenger_creation_0AB239C5-2AA5-44F9-8113-DC88A1EB193D.jpeg";
import wordOfHope4 from "../assets/projects/word-of-hope/Messenger_creation_F54221C9-84B9-43E1-8ABE-FA14AA1E2C7B.jpeg";
import wordOfHope5 from "../assets/projects/word-of-hope/Messenger_creation_0A88F5D8-1FC9-4832-AB13-8A7F13214CF9.jpeg";
const kalakalikasanWebData = {
  id: "1",
  title: "KalaKalikasan (Website)",
  description: "This is built for KalaKalikasan Admin Panel which is a powerful web application built to manage the backend of the KalaKalikasan waste management platform. Developed using Firebase, Node.js, ExpressJS, React, Redux, Tanstack Query, and Tailwind CSS, it provides admins with full control over the system. Key features include approving store owners’ points conversion into real money, approving store registrations, tracking user activities, and a forecasting tool for predicting monthly expenses to ensure financial preparedness. The admin can also oversee waste collection data, helping to streamline operations and maintain a sustainable ecosystem.",
  techstack: [],
  images: [
    kalakakilasanWeb1,
    kalakakilasanWeb2,
    kalakakilasanWeb3,
    kalakakilasanWeb4,
    kalakakilasanWeb5,
  ],
};

const kalakalikasanMobileData = {
  id: "2",
  title: "KalaKalikasan (Mobile)",
  description: "The KalaKalikasan Mobile App enables users to participate in the waste management ecosystem by earning points through the reversed vending machine, where they can recycle items and receive rewards. Built with Flutter, Node.js, and Firebase, the app integrates seamlessly with the centralized server, offering real-time synchronization with the website. Users can register stores, list their products, and earn points, which can later be converted into real money. This functionality allows store owners to request point-to-cash conversions through the admin portal, streamlining transactions for greater user engagement and incentivizing recycling efforts.",
  techstack: [],
  images: [
    kalakalikasanMobile1,
    kalakalikasanMobile2,
    kalakalikasanMobile3,
    kalakalikasanMobile4,
    kalakalikasanMobile5,
  ],
};

const wordOfHopeData = {
  id: "3",
  title: "Word Of Hope",
  description:
    "The Hospital Management System is a comprehensive web solution that streamlines hospital operations. Built with PostgreSQL, Node.js, ExpressJS, and ReactJS, it offers features like RFID-based attendance management for staff, QR scanning for patient appointments, and automated printing of patient results. This system integrates cutting-edge technology to enhance administrative efficiency, improve patient experience, and ensure accurate record-keeping within healthcare facilities.",
  techstack: [],
  images: [wordOfHope1, wordOfHope2, wordOfHope3, wordOfHope4, wordOfHope5],
};

const projectsData = [
  kalakalikasanWebData,
  kalakalikasanMobileData,
  wordOfHopeData,
];

export default projectsData;
