import React from "react";
import { MdDarkMode, MdMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

type HeaderProps = {
  isDark: boolean;
  language: boolean;
  setIsDark: (isDark: boolean) => void;
  isMenuActive: boolean;
  setIsMenuActive: (isMenuActive: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({
  isDark,
  language,
  setIsDark,
  isMenuActive,
  setIsMenuActive,
}) => {
  const btnStyle: string = `bg-[#EEEEEE] dark:bg-[#31363F] text-[#222831] dark:text-[#D9D9D9] text-5xl 
                            rounded-full m-2 p-2 hover:scale-105 hover:opacity-80 transition-all max-md:text-4xl`;

  const headerStyle: string = `bg-[#222831] dark:bg-[#1E1E1E] w-full flex items-center justify-between top-0 relative  
                               ${language ? "" : "flex-row-reverse"}`;

  const titleStyle: string = `text-[#D9D9D9] dark:text-[#93B1A6] text-7xl p-3  
                              max-md:text-6xl max-md:text-wrap`;

  const btnContainerStyle: string = `absolute flex ${
    language ? "right-[2vh]" : "left-[2vh]"
  } top-1/2 -translate-y-1/2 max-md:static max-md:-translate-y-[1px] max-[430px]:flex-col`;

  const darkModeBtnStyle: string = `${btnStyle} ${
    isDark ? "rotate-[360deg]" : ""
  } transition-transform duration-[0.3s]`;

  const menuBtnStyle: string = `${btnStyle} ${
    isMenuActive ? "rotate-[90deg]" : ""
  } transition-transform duration-[0.3s]`;

  return (
    <header className={headerStyle}>
      <h1 className={titleStyle}>
        {language ? "Prayer Times" : "أوقات الصلاة"}
      </h1>

      <div className={btnContainerStyle}>
        <button className={darkModeBtnStyle} onClick={() => setIsDark(!isDark)}>
          {isDark ? <CiLight /> : <MdDarkMode />}
        </button>
        <button
          className={menuBtnStyle}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          {isMenuActive ? <IoMdClose /> : <MdMenu />}
        </button>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
