import frontend1 from "../assets/skills/frontend/1_elhu-42TzQEdsFjKDbQhhA.png";
import frontend2 from "../assets/skills/frontend/Bootstrap_logo.svg.png";
import frontend3 from "../assets/skills/frontend/flutter-logo-png_seeklogo-354671.png";
import frontend4 from "../assets/skills/frontend/JavaScript-Logo.png";
import frontend5 from "../assets/skills/frontend/nextjs-icon-2048x2048-eugu5rfi.png";
import frontend6 from "../assets/skills/frontend/React_(web_framework)-Logo.wine.png";
import frontend7 from "../assets/skills/frontend/Redux.png";
import frontend8 from "../assets/skills/frontend/Tailwind_CSS_Logo.svg.png";

import backend1 from "../assets/skills/backend/nodejs-logo.png";
import backend2 from "../assets/skills/backend/visualbasic-logo.png";
import backend3 from '../assets/skills/others/ExpressJS.8587dd0647ca.png';

import database1 from "../assets/skills/databases/logo-vertical.png";
import database2 from "../assets/skills/databases/MongoDB-Logo.png";
import database3 from "../assets/skills/databases/mysql-5-logo-png-transparent.png";
import database4 from "../assets/skills/databases/po4159p5ee-postgresql-logo-postgresql-logo.png";
import database5 from "../assets/skills/databases/R.png";


import other1 from '../assets/skills/others/206-2063294_do-not-sign-png.png';
import other2 from '../assets/skills/others/github_PNG80.png';
import other3 from '../assets/skills/others/microsoft-excel-2013-logo-png-transparent.png';

const frontendData = {
  titleHeader: "Frontend Programming & Frameworks",
  images: [
    frontend1,
    frontend2,
    frontend3,
    frontend4,
    frontend5,
    frontend6,
    frontend7,
    frontend8,
  ],
};

const backendData = {
  titleHeader: "Backend Programming & Frameworks",
  images: [backend1, backend2, backend3],
};

const databaseData = {
  titleHeader: "Databases",
  images: [database1, database2, database3, database4, database5],
};

const otherData = {
    titleHeader: 'Other Tools',
    images: [other1, other2, other3]
}
const skillsData = [frontendData, backendData, databaseData, otherData];

export default skillsData;
