import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import Video from "./Video";
const VideoContainer = () => {
  const isSecondScene = useSelector((state) => state.pageReducer.secondScene);
  return (
    <div style={{ margin: "0 auto" }}>
      <video
        className="video"
        autoPlay
        src={
          isSecondScene
            ? "https://static.happify.com/static/img/meditation/content/video/level1canoe_loop.mp4?1672538178914"
            : "https://static.happify.com/static/img/meditation/content/video/jamaica_loop.mp4?1672538457042"
        }
        alt=""
      />
    </div>
  );
};

export default VideoContainer;
