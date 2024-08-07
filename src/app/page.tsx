"use client";

import { useState } from "react";

import Header from "./c/Header";
import Main from "./c/Main";
import Footer from "./c/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const [location, setLocation] = useState<string>("Istanbul");

  return (
    <div
      className={`flex flex-col h-screen relative items-center justify-center`}
    >
      <Header
        isDark={isDark}
        language={language}
        setIsDark={setIsDark}
        setLanguage={setLanguage}
      />
      <Main isDark={isDark} language={language} location={location} />
      <Footer isDark={isDark} language={language} />
    </div>
  );
}
