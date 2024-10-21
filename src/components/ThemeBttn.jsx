import React, { useEffect, useState } from "react";
import useTheme from "./context/Them";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeBttn() {
  const { lightTheme, darkTheme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      darkTheme();
    } else {
      lightTheme();
    }
  }, [dark]);
  const onchangeBttn = () => {
    console.log(dark);
    setDark((prev) => !prev);
    console.log(dark);
  };
  return (
    <div className="relative">
      <button
        onClick={() => {
          onchangeBttn();
        }}
        className="bg-white text-white px-2 py-2 rounded-full  flex items-center "
      >
        {dark ? (
          <FaMoon className="text-gray-400" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </button>
    </div>
  );
}
