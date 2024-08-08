import React from "react";

export default function Main({ isDark, language, location }) {
  const prayers = [
    { name: "duhur", time: "12:12" },
    { name: "asr", time: "15:45" },
    { name: "maghrib", time: "18:30" },
    { name: "isha", time: "20:00" },
    { name: "fajr", time: "05:00" },
  ];

  return (
    <main className={`  flex flex-col items-center p-4     `}>
      <div
        className={`text-[#FFFFFF] dark:text-[#93B1A6] bg-[#088395] dark:bg-[#344955] flex 
                    flex-col items-center m-4 p-4 min-w-96 max-w-[60rem] `}
      >
        <h3 className={` text-center text-8xl p-4`}>
          {location}ffffffffffffffffffffffff
        </h3>
        <h4 className={` text-center text-4xl p-2`}>02/02/2002</h4>
      </div>

      <div className="">
        {prayers.map((prayer, index) => (
          <Card
            key={index}
            language={language}
            isDark={isDark}
            prayer={prayer}
          />
        ))}
      </div>
    </main>
  );
}

function Card({ language, isDark, prayer }) {
  return (
    <div>
      <h4>{prayer.name}</h4>
      <h5>{prayer.time}</h5>
    </div>
  );
}
