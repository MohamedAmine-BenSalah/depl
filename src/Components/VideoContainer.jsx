import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import image7 from "../Components/nav/sceneImages/f.png";
import image8 from "../Components/nav/sceneImages/d.png";
import Video from "./Video";
const VideoContainer = () => {
  const isSecondScene = useSelector((state) => state.pageReducer.secondScene);
  const timer = useSelector((state) => state.pageReducer.timer);
  const isfs = useSelector((state) => state.pageReducer.isFullScreen);

  return (
    <div className="video-container" style={{ margin: "0 auto" }}>
      {timer && isfs ? (
        <div className="video">
          <Video />
        </div>
      ) : (
        <img className="video" src={isSecondScene ? image8 : image7} alt="" />
      )}
    </div>
  );
};

export default VideoContainer;
