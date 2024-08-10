import React from "react";

type PrayerTimes = {
  timings: {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
  date: {
    gregorian: {
      date: string;
    };
  };
};

type MainProps = {
  isDark: boolean;
  language: boolean;
  location: string;

  prayerTimes?: PrayerTimes;
  arLocation: string;
};

export default function Main({
  isDark,
  language,
  location,

  prayerTimes,
  arLocation,
}: MainProps) {
  const timings = prayerTimes?.timings;

  if (!timings) {
    return <div>Loading prayer times...</div>;
  }

  const prayers = [
    {
      name: () => (language ? "Fajr" : "الفجر"),
      time: timings.Fajr,
    },
    {
      name: () => (language ? "Dhuhr" : "الظهر"),
      time: timings.Dhuhr,
    },
    {
      name: () => (language ? "Asr" : "العصر"),
      time: timings.Asr,
    },
    {
      name: () => (language ? "Maghrib" : "المغرب"),
      time: timings.Maghrib,
    },
    {
      name: () => (language ? "Isha" : "العشاء"),
      time: timings.Isha,
    },
  ];

  // Styles
  const containerStyle: string = `flex flex-col items-center p-4`;
  const infoBoxStyle: string = `text-[#FFFFFF] dark:text-[#93B1A6] bg-[#088395] dark:bg-[#344955] flex 
                                   flex-col items-center m-4 p-4 min-w-[26.875rem] max-w-[60rem] shadow-xl 
                                    max-[430px]:min-w-60`;
  const locationStyle: string = `text-center text-8xl p-4  
                                   max-2xl:text-7xl max-lg:text-5xl max-[430px]:text-4xl`;
  const dateStyle: string = `text-center text-4xl p-2 
                                   max-lg:text-3xl max-[430px]:text-2xl`;
  const gridStyle: string = `grid grid-cols-5 m-2 p-4  max-lg:grid-cols-4 max-md:grid-cols-3 
                                   max-sm:grid-cols-2 max-[430px]:grid-cols-1`;

  return (
    <main className={containerStyle}>
      <div className={infoBoxStyle}>
        <h3 className={locationStyle}>{language ? location : arLocation}</h3>
        <h4 className={dateStyle}>{prayerTimes.date.gregorian.date}</h4>
      </div>

      <div className={gridStyle}>
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

type CardProps = {
  language: boolean;
  isDark: boolean;
  prayer: {
    name: () => string;
    time: string;
  };
};

function Card({ language, isDark, prayer }: CardProps) {
  const cardStyle: string = `flex flex-col items-center m-4 hover:scale-105 hover:-translate-y-5 
                             transition-all shadow-xl hover:shadow-2xl max-2xl:min-w-0 min-w-[18.75rem]
                             max-lg:min-w-[10.75rem] max-[430px]:min-w-[12.75rem]`;

  const headerStyle: string = `w-full text-center bg-[#31363F] text-[#D9D9D9] dark:text-[#93B1A6] dark:bg-[#222831] text-4xl p-1
                                max-lg:text-3xl`;
  const timeStyle: string = `flex items-center justify-center w-full p-4 
                              bg-[#D9D9D9] text-[#071952] dark:text-[#76ABAE] dark:bg-[#31363F] text-8xl 
                              max-2xl:text-7xl max-xl:text-6xl min-h-64 max-xl:min-h-56 max-lg:text-5xl max-lg:min-h-48`;

  return (
    <div className={cardStyle}>
      <h4 className={headerStyle}>{prayer.name()}</h4>
      <h5 className={timeStyle}>{prayer.time}</h5>
    </div>
  );
}
