type MenuProps = {
  isMenuActive: boolean;
  setLocation: (location: string) => void;
  setLanguage: (language: boolean) => void;
  language: boolean;
  setArLocation: (arLocation: string) => void;
};

type OptionProps = {
  city: string;
  setLocation: (location: string) => void;
  setArLocation: (arLocation: string) => void;
  arCity: string;
  language: boolean;
};

import citiesArr from "../data";

const Menu: React.FC<MenuProps> = ({
  isMenuActive,
  setLocation,
  setLanguage,
  language,
  setArLocation,
}) => {
  const menuPosition: string = language ? "right-0" : "left-0";
  const menuInactivePosition: string = language
    ? "-right-60 scale-0"
    : "-left-60 scale-0";

  const menuMainStyle: string = `fixed top-24 max-md:top-20 max-[430px]:top-36 ${
    isMenuActive ? menuPosition : menuInactivePosition
  } absolute flex-col transition-all bg-[#088395] dark:bg-[#344955] z-0 shadow-xl`;

  const detailsStyle: string =
    "hover:opacity-80 hover:scale-105 text-3xl p-1 cursor-pointer m-4 dark:text-[#ffffff90]";
  const summaryStyle: string = "text-4xl";
  const listItemStyle: string =
    "m-3 p-1 text-[#FFFFFF] dark:text-[#93B1A6] hover:opacity-80 hover:scale-105 transition";
  const ulStyle: string = "overflow-y-scroll max-h-60";

  return (
    <menu className={menuMainStyle}>
      <details className={detailsStyle}>
        <summary className={summaryStyle}>
          {language ? "Language" : "اللغة"}
        </summary>
        <ul>
          <li onClick={() => setLanguage(false)} className={listItemStyle}>
            {language ? "Arabic" : "العربية"}
          </li>
          <li onClick={() => setLanguage(true)} className={listItemStyle}>
            {language ? "English" : "الانجليزية"}
          </li>
        </ul>
      </details>

      <details className={detailsStyle}>
        <summary className={summaryStyle}>
          {language ? "Location" : "الموقع"}
        </summary>
        <ul className={ulStyle}>
          {citiesArr.map((city) => (
            <Option
              key={city.en}
              city={city.en}
              setLocation={setLocation}
              setArLocation={setArLocation}
              arCity={city.ar}
              language={language}
            />
          ))}
        </ul>
      </details>
    </menu>
  );
};

const Option: React.FC<OptionProps> = ({
  city,
  setLocation,
  setArLocation,
  arCity,
  language,
}) => {
  const optionStyle: string =
    "m-3 p-1 text-[#FFFFFF] dark:text-[#93B1A6] hover:opacity-80 hover:scale-105 transition";

  return (
    <li
      className={optionStyle}
      onClick={() => {
        setLocation(city);
        setArLocation(arCity);
      }}
    >
      {language ? city : arCity}
    </li>
  );
};

export default Menu;
