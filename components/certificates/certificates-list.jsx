import React from "react";
import { certList } from "../../data/certifications-data";
import CertificateSlider from "./certificate-slider";

const multiplicand = certList.length / 3;

const getMaxRange = (multiplier) => {
  return Math.round(multiplicand * multiplier) - 1;
};
const firstList = certList.filter((item, index) => index <= getMaxRange(1));
const secondList = certList.filter(
  (item, index) => index > getMaxRange(1) && index <= getMaxRange(2)
);
const thirdList = certList.filter(
  (item, index) => index > getMaxRange(2) && index <= certList.length - 1
);
export default function CertificatesList() {
  return (
    <>
      <CertificateSlider certList={firstList} />
      <CertificateSlider certList={secondList} reversed/>
      <CertificateSlider certList={thirdList} />
    </>
  );
}
