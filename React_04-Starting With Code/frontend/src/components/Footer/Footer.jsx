import React from "react";
import List from "./List";
import Social from "./Social";
import Title from "./Title";

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <Title>HungryHub</Title>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <List>About</List>
              <List>Careers</List>
              <List>Brand Center</List>
              <List>Blog</List>
            </ul>
          </div>
          <div>
            <Title> Help center</Title>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <List>Discord Server</List>
              <List>Twitter</List>
              <List>Facebook</List>
              <List>Contact Us</List>
            </ul>
          </div>
          <div>
            <Title>Legal</Title>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <List>Privacy Policy</List>
              <List>Licensing</List>
              <List>Terms & Conditions</List>
            </ul>
          </div>
          <div>
            <Title>Download</Title>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <List>iOS</List>
              <List>Android</List>
              <List>Windows</List>
              <List>MacOS</List>
            </ul>
          </div>
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
