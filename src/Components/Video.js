import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function Video() {
  const dispatch = useDispatch();
  const videCondition = useSelector((state) => state.pageReducer.isFullScreen);
  const isFirstScene = useSelector((state) => state.pageReducer.firstScene);
  const isfs = useSelector((state) => state.pageReducer.isFullScreen);
  const vidRef = useRef(null);
  const requestFullScreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };
  const openFullScreen = () => {
    requestFullScreen(vidRef.current);
  };
  useEffect(() => {
    if (videCondition) {
      openFullScreen();
    }
  }, [videCondition]);
  return (
    <video
      width="991px"
      className="video"
      height="557"
      ref={vidRef}
      onPlay={openFullScreen}
      autoPlay={true}
    >
      <source
        src={
          isFirstScene
            ? "https://static.happify.com/static/img/meditation/content/video/jamaica_loop.mp4?1672568954906"
            : "https://static.happify.com/static/img/meditation/content/video/level1canoe_loop.mp4?1672569015543"
        }
        type="video/mp4"
      />
    </video>
  );
}

export default Video;
