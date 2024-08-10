import React from "react";

const Footer: React.FC = () => {
  // Styles
  const footerStyle: string = `flex items-center justify-center w-full bg-[#222831] dark:bg-[#1E1E1E]`;
  const textStyle: string = `text-2xl p-2 text-[#D9D9D9] dark:text-[#93B1A6] z-20`;

  return (
    <footer className={footerStyle}>
      <h1 className={textStyle}>©Abdulrahman-Saka</h1>
    </footer>
  );
};

export default Footer;
