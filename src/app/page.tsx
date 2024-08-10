"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const Home: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [language, setLanguage] = useState<boolean>(true);
  const [location, setLocation] = useState<string>("Istanbul");
  const [arLocation, setArLocation] = useState<string>("اسطنبول");
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [prayerTimes, setPrayerTimes] = useState<any>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `http://api.aladhan.com/v1/timingsByCity?country=TR&city=${location}`
        );
        const data = await response.json();
        setPrayerTimes(data.data); // Update state with API data
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };
    console.log("location is " + location);
    fetchPrayerTimes();
  }, [location]);

  console.log(prayerTimes);

  // Styles
  const containerStyle: string = `relative overflow-x-hidden bg-[#EEEEEE] dark:bg-[#0C0C0C] flex flex-col min-h-screen items-center justify-between`;

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className={containerStyle}>
        <Header
          isDark={isDark}
          language={language}
          setIsDark={setIsDark}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
        <Main
          language={language}
          location={location}
          prayerTimes={prayerTimes}
          arLocation={arLocation}
        />
        <Footer />
        <Menu
          isMenuActive={isMenuActive}
          setLocation={setLocation}
          setLanguage={setLanguage}
          language={language}
          setArLocation={setArLocation}
        />
      </div>
    </div>
  );
};

export default Home;
