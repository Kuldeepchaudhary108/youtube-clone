import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../Data";
import moment from "moment";
export default function Content({ catagory, setCategory }) {
  const catog = [
    { name: "All", id: 0 },
    { name: "Sport", id: 17 },
    { name: "Music", id: 10 },
    { name: "Blog", id: 22 },
    { name: "Game", id: 20 },
    { name: "News", id: 25 },
    { name: "Travel", id: 19 },
    { name: "Comedy", id: 23 },
    { name: "Education", id: 27 },
    { name: "Movies", id: 30 },
    { name: "Animation", id: 31 },
    { name: "Action", id: 32 },
    { name: "Drama", id: 36 },
    { name: "Documentary", id: 35 },
    { name: "entertainment", id: 24 },
  ];
  const [data, setData] = useState([]);
  const fetchData = async () => {
    // Check if data is already in localStorage
    const cachedData = localStorage.getItem("videoListData");

    if (cachedData) {
      // If data exists, use it instead of fetching again
      const parsedData = JSON.parse(cachedData);
      setData(parsedData.items); // Update the state with cached data
      console.log("Data loaded from localStorage:", parsedData);
    } else {
      // If no data is found in localStorage, fetch from API
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&videoCategoryId=${catagory}&key=${API_KEY}`;
      try {
        const res = await fetch(videoList_url);
        const data = await res.json();
        setData(data.items);
        console.log("Data fetched from API:", data);

        // Store the fetched data in localStorage
        localStorage.setItem("videoListData", JSON.stringify(data));
      } catch (error) {
        console.error("Error in video list:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [catagory]);

  return (
    <>
      <div className="flex gap-3 ml-14 over items-center justify-center ">
        {catog.map((cat) => (
          <button
            key={cat.id}
            className={`${
              catagory === cat.id
                ? "bg-[#E5E5E5] font-medium  dark:bg-slate-100 dark:text-black  "
                : "bg-[#E5E5E5] dark:bg-[#3F3F3F]"
            }  w-full h-8 rounded-md`}
            onClick={() => setCategory(cat.id)}
          >
            <div className="">{cat.name}</div>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-5 ml-14 ">
        {data?.map((video, index) => (
          <Link to={`video/${video.snippet.categoryId}/${video.id}`}>
            <div
              key={index}
              className={`
             w-[380px]
           cursor-pointer bg-white dark:bg-zinc-900 p-3 rounded-lg transition-all duration-300`}
            >
              {/* Thumbnail */}
              <div>
                <img
                  className="rounded-2xl"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.title}
                />
              </div>

              {/* Video Info */}
              <div className="flex gap-3 mt-3">
                <div>
                  <img
                    className="w-16 rounded-full"
                    src={video.profile}
                    alt={video.channel}
                  />
                </div>
                <div>
                  <h2 className="text-gray-800 dark:text-gray-200 font-bold">
                    {video.snippet.title}
                  </h2>
                  <h3 className="text-gray-600 dark:text-gray-400">
                    {video.snippet.channelTitle}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {valueConverter(video.statistics.viewCount)} views &bull;
                    {moment(video.statistics.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
