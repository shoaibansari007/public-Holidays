import React, { useState } from "react";

const PublicHoliday = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [expandedMonth, setExpandedMonth] = useState(null);

  const years = [
    {
      year: 2024,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 27th"] },
        { name: "April", dates: ["Good Friday - April 5th"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        {
          name: "October",
          dates: ["Gandhi Jayanti - October 2nd", "Diwali - October 23rd"],
        },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2025,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 17th"] },
        { name: "April", dates: ["Good Friday - April 18th"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        { name: "October", dates: ["Gandhi Jayanti - October 2nd"] },
        { name: "November", dates: ["Diwali - November 11th"] },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2026,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 7th"] },
        { name: "April", dates: ["Good Friday - April 3rd"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        { name: "October", dates: ["Gandhi Jayanti - October 2nd"] },
        { name: "November", dates: ["Diwali - November 1st"] },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2027,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 25th"] },
        { name: "April", dates: ["Good Friday - April 5th"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        {
          name: "October",
          dates: ["Gandhi Jayanti - October 2nd", "Diwali - October 20th"],
        },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2028,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 13th"] },
        { name: "April", dates: ["Good Friday - April 26th"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        { name: "October", dates: ["Gandhi Jayanti - October 2nd"] },
        { name: "November", dates: ["Diwali - November 7th"] },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2029,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        {
          name: "March",
          dates: ["Holi - March 2nd", "Good Friday - March 30th"],
        },
        { name: "August", dates: ["Independence Day - August 15th"] },
        {
          name: "October",
          dates: ["Gandhi Jayanti - October 2nd", "Diwali - October 26th"],
        },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
    {
      year: 2030,
      months: [
        {
          name: "January",
          dates: [
            "New Year's Day - January 1st",
            "Republic Day - January 26th",
          ],
        },
        { name: "March", dates: ["Holi - March 22nd"] },
        { name: "April", dates: ["Good Friday - April 19th"] },
        { name: "August", dates: ["Independence Day - August 15th"] },
        {
          name: "October",
          dates: ["Gandhi Jayanti - October 2nd", "Diwali - October 15th"],
        },
        { name: "December", dates: ["Christmas Day - December 25th"] },
      ],
    },
  ];

  const toggleYear = (year) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };

  const toggleMonth = (month) => {
    if (expandedMonth === month) {
      setExpandedMonth(null);
    } else {
      setExpandedMonth(month);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[400px] mx-auto mt-20">
        <p className="text-xl text-white w-full flex justify-between px-10 p-4 bg-gray-900 rounded my-1 scale-110">
          Public Holidays List (2024 - 2030)
        </p>
        {years.map(({ year, months }) => (
          <div key={year}>
            <button
              onClick={() => toggleYear(year)}
              className="bg-black text-white w-full flex justify-between px-10 p-4 hover:bg-gray-900 rounded my-1"
            >
              <p>{year}</p>{" "}
              <img
                src="ArrowLineDown.svg"
                alt="Down"
                className={expandedMonth === year ? "rotate-180" : ""}
                width={20}
                height={20}
              />
            </button>
            {expandedYear === year && (
              <ul>
                {months.map(({ name, dates }) => (
                  <div key={name} className="px-1">
                    <button
                      onClick={() => toggleMonth(name)}
                      className="bg-gray-800 text-white w-full flex justify-between px-10 p-4 hover:bg-gray-600"
                    >
                      <p>{name} </p>

                      <img
                        src="ArrowLineDown.svg"
                        alt="Down"
                        className={expandedMonth === name ? "rotate-180" : ""}
                        width={20}
                        height={20}
                      />
                    </button>
                    {expandedMonth === name && (
                      <ul className="px-1">
                        {dates.map((date, index) => (
                          <li
                            key={index}
                            className="bg-gray-400 text-black w-full flex justify-between px-10 p-4 hover:bg-gray-500"
                          >
                            {date}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicHoliday;
