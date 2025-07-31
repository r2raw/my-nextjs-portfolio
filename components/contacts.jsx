import React from "react";
import AttachEmailSharpIcon from "@mui/icons-material/AttachEmailSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className=" h-dvh py-40 px-20 flex flex-col items-center justify-center"
    >
      <div className="lg:w-1/3 flex flex-col gap-8">
        <h1 className="text-center text-5xl">GET IN TOUCH</h1>
        <p className="text-center">
          I love to hear what people have to say. If you have any questions or
          thoughts you'd like to share with me, please let me know.
        </p>
        <div className="flex gap-4 justify-center hover:text-white/30">
          <AttachEmailSharpIcon />
          <a href="mailto:martejrii.arturo.07172001@gmail.com">
            martejrii.arturo.07172001@gmail.com
          </a>
        </div>
        <div className="flex gap-4 justify-center hover:text-white/30">
          <LocalPhoneSharpIcon />
          <p>09264093116</p>
        </div>
        <h2 className="text-2xl text-center">Connect with me</h2>
        <div className="flex gap-4 justify-center">
          <a href="https://www.facebook.com/xpayatx/" target="_blank" className="hover:text-white/30">
            <FacebookIcon sx={{ fontSize: 60 }} />
          </a>
          <a href="www.linkedin.com/in/marte-jr-ii-arturo-d-631a70248" className="hover:text-white/30">
            <LinkedInIcon sx={{ fontSize: 60 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
