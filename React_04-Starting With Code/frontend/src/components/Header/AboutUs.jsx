import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { GOOGLE_MAP } from "../../utils/constants";

const AboutUs = () => {
  const words =
    "Welcome to our Food Order App! We are passionate about delivering delicious and high-quality food right to your doorstep. Our mission is to make your dining experience convenient, enjoyable, and memorable. At Food Order App, we strive to provide a diverse menu, excellent customer service, and a seamless ordering process. Your satisfaction is our top priority.";
  return (
    <div className="relative flex flex-col items-center w-[100vw] px-0 pt-16 mx-auto mt-20 lg:h-[100vh] lg:px-0 lg:flex-row lg:items-start lg:justify-center">
      <div className="w-full mt-8 text-center lg:w-1/2 lg:mt-0 lg:ml-8 lg:text-left">
        <TextGenerateEffect words={words} />
      </div>
      <div className="w-full mt-8 lg:w-1/2 h-96 lg:h-96 lg:mt-0 lg:mr-16">
        <iframe
          data-testid="iframe-test"
          src={GOOGLE_MAP}
          width="100%"
          height="100%"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          title="Google Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
