import React from "react";
import CertificateContainer from "./certificates/certificate-container";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-40 px-4 lg:px-20 flex flex-col gap-20 min-h-dvh">
      <h1 className="text-4xl font-bold text-center">CERTIFICATES</h1>
      <CertificateContainer />
    </section>
  );
}
