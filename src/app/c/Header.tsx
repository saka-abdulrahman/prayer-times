import { MdDarkMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Header({ isDark, language, setIsDark, setLanguage }) {
  const btnStyel = `  bg-[#EEEEEE] dark:bg-[#31363F] text-[#222831] dark:text-[#D9D9D9] text-5xl 
                      rounded-full m-2 p-2 hover:scale-105 hover:opacity-80 transition-all `;

  return (
    <header
      className={`  bg-[#222831] dark:bg-[#1E1E1E] w-full flex items-center justify-between absolute top-0 `}
    >
      <h1 className={`text-[#D9D9D9] dark:text-[#93B1A6] text-7xl p-3  `}>
        Prayer Times
      </h1>

      <div className={`absolute flex right-[2vh] top-1/2 -translate-y-1/2  `}>
        <button
          className={
            btnStyel +
            `    ${
              isDark ? " rotate-[360deg]" : ""
            }  transition-transform duration-[0.3s]`
          }
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <MdDarkMode /> : <CiLight />}
        </button>
        <button className={btnStyel}>
          <MdMenu />
        </button>
      </div>

      <div></div>
    </header>
  );
}
