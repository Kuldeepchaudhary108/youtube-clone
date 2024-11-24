import React, { useEffect } from "react";

export default function SideBar({ menuBar, catagory, setCategory }) {
  const sideItem = [
    {
      name: "Kuldeep",
      img: "https://cdn.icon-icons.com/icons2/2248/PNG/512/home_icon_137492.png",
      id: 0,
    },
    { name: "Short", img: "./elements/youtube-shorts-icon.png", id: 42 },
    { name: "Subscription", img: "./elements/subscriprion.png", id: 20 },
  ];

  const FeatureItem = [
    { name: "library", img: "./elements/library.png" },
    { name: "history", img: "./elements/history.png" }, 
    { name: "Like video", img: "./elements/like.png" },
    { name: "Save video", img: "./elements/save.png" },
  ];

  const Subscription = [
    { name: "Travel ", img: "./elements/jack.png" },
    { name: "BB ki vines", img: "./elements/jack.png" },
    { name: "carry", img: "./elements/jack.png" },
    { name: "R2h", img: "./elements/jack.png" },
    { name: "Lakshya ch", img: "./elements/jack.png" },
  ];

  const explore = [
    { name: "Sport", img: "./elements/sports.png", id: 17 },
    { name: "Music", img: "./elements/music.png", id: 10 },
    { name: "entertainment", img: "./elements/entertainment.png", id: 24 },
    { name: "Blog", img: "./elements/blogs.png", id: 21 },
    { name: "Game", img: "./elements/game_icon.png", id: 20 },
    { name: "News", img: "/elements/news.png", id: 25 },
    { name: "Travel", img: "/elements/news.png", id: 19 },
    { name: "Comedy", img: "/elements/news.png", id: 23 },
    { name: "Education", img: "/elements/news.png", id: 27 },
    { name: "Movies", img: "/elements/news.png", id: 30 },
    { name: "Animation", img: "/elements/news.png", id: 31 },
    { name: "Action", img: "/elements/news.png", id: 32 },
    { name: "Drama", img: "/elements/news.png", id: 36 },
    { name: "Documentary", img: "/elements/news.png", id: 35 },
  ];

  // Disable background scroll when the sidebar is open
  useEffect(() => {
    if (menuBar) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable body scroll when closed
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuBar]);

  const handleCategoryClick = (id) => {
    setCategory(id);
  };
  return (
    <>
      <div
        className={`${
          menuBar ? "opacity-100 visible" : "opacity-0 invisible"
        } absolute w-60 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-opacity duration-300 max-h-screen overflow-y-auto`}
      >
        <div className="mb-8 mt-4">
          {sideItem.map((item) => (
            <div
              key={item.name}
              className="flex mb-3 justify-center items-center w-fit flex-wrap cursor-pointer gap-5"
              onClick={() => handleCategoryClick(item.id)}
            >
              <img className="w-7" src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        <div className="mb-7 mt-3">
          {FeatureItem.map((item) => (
            <div
              key={item.name}
              className="flex mb-3 justify-center items-center w-fit flex-wrap cursor-pointer gap-5"
              onClick={() => handleCategoryClick(item.id)}
            >
              <img className="w-7" src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        <h1 className="font-bold text-lg dark:text-white">Subscription</h1>
        <div className="mb-7 mt-3">
          {Subscription.map((item) => (
            <div
              key={item.name}
              className="flex justify-center items-center w-fit flex-wrap cursor-pointer mb-3 gap-5"
              onClick={() => handleCategoryClick(item.id)}
            >
              <img
                className="w-7 rounded-full"
                src={item.img}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        <div className="mb-7 mt-3">
          {explore.map((item) => (
            <div
              key={item.name}
              className="flex mb-3 justify-center items-center w-fit flex-wrap cursor-pointer gap-5"
              onClick={() => handleCategoryClick(item.id)}
            >
              <img
                className="w-7 rounded-full"
                src={item.img}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />
        <div>
          <div className="mt-4 flex justify-center items-center w-fit flex-wrap cursor-pointer gap-5">
            <img
              className="w-7 rounded-xl"
              src="./elements/user_profile.jpg"
              alt="tech"
            />
            <p>Setting</p>
          </div>
        </div>
      </div>

      <div className={`${menuBar ? "hidden" : "inline-block"}`}>
        <div className="w-1 flex flex-col items-center justify-center mt-4 bg-white dark:bg-black transition-all duration-300">
          <div
            className="flex justify-center items-center flex-wrap cursor-pointer mb-7"
            onClick={() => handleCategoryClick(0)}
          >
            <img
              className="w-7"
              src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_icon_137492.png"
              alt="Home"
            />
            <p className="text-sm">Home</p>
          </div>
          <div
            className="flex justify-center items-center w-fit flex-wrap cursor-pointer mb-7"
            onClick={() => handleCategoryClick(42)}
          >
            <img
              className="w-7"
              src="./elements/youtube-shorts-icon.png"
              alt="Short"
            />
            <p className="text-sm">Shorts</p>
          </div>
          <div
            className="flex justify-center items-center w-fit flex-wrap cursor-pointer mb-7"
            onClick={() => handleCategoryClick(0)}
          >
            <img
              className="w-7"
              src="./elements/subscriprion.png"
              alt="Subscription"
            />
            <p className="text-sm">Subscribe</p>
          </div>
          <div
            className="flex justify-center items-center w-fit flex-wrap cursor-pointer mb-7"
            onClick={() => handleCategoryClick(0)}
          >
            <img className="w-7" src="./elements/library.png" alt="Library" />
            <p className="text-sm">Library</p>
          </div>
        </div>
      </div>
    </>
  );
}
