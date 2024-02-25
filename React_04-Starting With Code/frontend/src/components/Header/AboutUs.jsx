"use client";
import React from "react";
import { COMPANY_LOGO } from "../../utils/constants";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const AboutUs = () => {
  const words =
    "Welcome to our Food Order App! We are passionate about delivering delicious and high-quality food right to your doorstep. Our mission is to make your dining experience convenient, enjoyable, and memorable. At Food Order App, we strive to provide a diverse menu, excellent customer service, and a seamless ordering process. Your satisfaction is our top priority.";
  return (
    <div className="relative flex flex-col justify-between items-center top-[150px] max-w-4xl m-auto p-5 text-start">
      <img className="w-[100px]" src={COMPANY_LOGO} loading="lazy"/>
      <TextGenerateEffect words={words} />
    </div>
  );
};

export default AboutUs;
