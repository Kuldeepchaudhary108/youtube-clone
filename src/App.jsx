import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Video from "./components/Video";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "./components/context/Them";

export default function App() {
  const menuBar = useSelector((state) => state.menu.isOpen);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home menuBar={menuBar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
