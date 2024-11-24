import React, { useState, useEffect } from "react";
import { API_KEY, valueConverter } from "../Data";
import { IoIosMore } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

export default function Video() {
  const { videoId, categoryId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [commentSection, setCommentSection] = useState([]);
  const [related, setRelated] = useState([]);
  const [channelDetails, setChannelDetails] = useState(null);

  const fetchVedioData = async () => {
    const videoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(videoData_url);
      const data = await res.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    fetchVedioData();
  }, [videoId]);

  const fetchChannelData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    console.log("Channel details URL:", channelDetails_url);
    try {
      const res = await fetch(channelDetails_url);
      const data = await res.json();
      setChannelDetails(data.items[0]);
    } catch (error) {
      console.error("Error fetching Channel:", error);
    }

    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(commentData_url);
      const data = await res.json();
      setCommentSection(data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (apiData) {
      fetchChannelData();
    }
  }, [apiData]);

  const fetchRelatedVideo = async () => {
    const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    try {
      const res = await fetch(related_url);
      const data = await res.json();
      setRelated(data.items || []);
    } catch (error) {
      console.error("Error fetching Related videos:", error);
    }
  };

  useEffect(() => {
    fetchRelatedVideo();
  }, [categoryId]); // Ensure it runs again if categoryId changes.

  return (
    <>
      <div className="flex ml-3 mr-7 mt-2 gap-6">
        <div className="w-[75%] rounded-lg">
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              className="rounded-lg w-full h-[440px]"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>
          </div>
          <h2 className="font-semibold text-2xl">
            {apiData ? apiData.snippet.title : "Title Here"}
          </h2>
          <div className="flex gap-4 justify-center mt-3 items-center">
            <img
              className="h-10 rounded-full"
              src={
                channelDetails
                  ? channelDetails.snippet.thumbnails.default.url
                  : "error"
              }
              alt="error"
            />
            <h3 className="font-semibold text-xl">
              {apiData ? apiData.snippet.channelTitle : "channel"}

              <p className="font-thin text-sm">
                {channelDetails
                  ? valueConverter(channelDetails.statistics.subscriberCount)
                  : ""}{" "}
                Subscribers
              </p>
            </h3>
            <button className=" h-9 w-32 ml-2 rounded-3xl flex justify-center items-center text-sm bg-[#E5E5E5] dark:bg-[#3F3F3F]">
              <img className="w-6" src="/elements/notification.png" alt="" />
              Subscribe <RiArrowDropDownLine className="h-24" />
            </button>
            <div className="flex items-center justify-center h-9 w-32 ml-20 rounded-2xl bg-[#E5E5E5] dark:bg-[#3F3F3F]">
              <img className="w-5 mr-2" src="/elements/like.png" alt="error" />
              <p>
                {apiData ? valueConverter(apiData.statistics.likeCount) : "2"}
              </p>
              <img
                className="w-5 ml-6"
                src="/elements/dislike.png"
                alt="error"
              />
            </div>
            <button className="flex justify-center items-center ml-4 rounded-2xl w-20 h-9 gap-2 bg-[#E5E5E5] dark:bg-[#3F3F3F]">
              <img className="w-5" src="/elements/share.png" alt="error" />
              Share
            </button>
            <button className=" flex rounded-full w-10 h-10 items-center justify-center ml-3 bg-[#E5E5E5] dark:bg-[#3F3F3F]">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-3 bg-[#E5E5E5] rounded-lg dark:bg-[#3F3F3F]">
            <h5 className="ml-3">
              {apiData ? valueConverter(apiData.statistics.viewCount) : "17k"}{" "}
              views{" "}
              <span className="ml-3">
                {apiData
                  ? moment(apiData.snippet.publishedAt).fromNow()
                  : "just now"}
              </span>
            </h5>
            <p className="p-3">
              {apiData
                ? apiData.snippet.description.slice(0, 250)
                : "description"}
            </p>
          </div>
          <div className="mt-3">
            <p>
              {apiData ? valueConverter(apiData.statistics.commentCount) : "0"}{" "}
              Comments
            </p>
            {commentSection.map((comments, index) => (
              <div className="flex gap-4 mt-5" key={index}>
                <img
                  className="rounded-full h-10"
                  src={
                    comments.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  alt="channel profile"
                />
                <div>
                  <h3 className="font-semibold">
                    {comments.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span className="ml-4">
                      {moment(
                        comments.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()}
                    </span>
                  </h3>
                  <p>{comments.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="flex gap-3 mt-3">
                    <img className="h-5" src="/elements/like.png" alt="like" />{" "}
                    <span>
                      {valueConverter(
                        comments.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                    <img
                      className="h-5"
                      src="/elements/dislike.png"
                      alt="dislike"
                    />
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {related?.map((relatedVideo) => (
            <Link
              key={relatedVideo.id}
              to={`/video/${relatedVideo.snippet.categoryId}/${relatedVideo.id}`}
            >
              <div className="flex gap-3">
                <img
                  className="h-24 rounded-lg mt-2"
                  src={relatedVideo.snippet.thumbnails.medium.url}
                  alt="related video"
                />
                <div className="mt-2">
                  <p className="font-semibold text-sm">
                    {relatedVideo.snippet.title.slice(0, 50)}
                  </p>
                  <p>{relatedVideo.snippet.channelTitle}</p>
                  <p>
                    {valueConverter(relatedVideo.statistics.viewCount)} views
                  </p>
                  <p>{moment(relatedVideo.snippet.publishedAt).fromNow()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
