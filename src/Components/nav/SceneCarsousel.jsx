import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "./sceneImages/image1.jpg";
import image2 from "./sceneImages/image2.jpg";
import image3 from "./sceneImages/image3.jpg";
import image4 from "./sceneImages/image4.jpg";
import image5 from "./sceneImages/image5.jpg";
import image6 from "./sceneImages/img6.png";
import image7 from "./sceneImages/f.png";
import image8 from "./sceneImages/d.png";
import { setSceneV } from "../Redux/action";
import "../../App.css";
import { setSecondScene } from "../Redux/action";

const SceneCarsousel = () => {
  const dispatch = useDispatch();
  const isFirstScene = useSelector((state) => state.pageReducer.firstScene);

  const [isSelected, setIsSelected] = useState(false);
  const [isSelectedSecond, setisSelectedSecond] = useState(false);
  console.log(isFirstScene);

  return (
    <div className="content">
      <div className="objectif-title"> Veuillez sélectionner une scène : </div>
      <div className="image-container">
        <img
          style={isSelected ? { border: "3.5px solid black" } : null}
          onClick={() => {
            dispatch(setSecondScene(false));
            dispatch(setSceneV(false));
            setIsSelected(true);
            setisSelectedSecond(false);
          }}
          src={image7}
        />
        <img
          style={isSelectedSecond ? { border: "3.5px solid black" } : null}
          onClick={() => {
            dispatch(setSecondScene(true));
            dispatch(setSceneV(true));
            setisSelectedSecond(true);
            setIsSelected(false);
          }}
          src={image8}
        />
        <img style={{ filter: "brightness(20%)" }} src={image1} />
        <img style={{ filter: "brightness(20%)" }} src={image4} />
        <img style={{ filter: "brightness(20%)" }} src={image5} />
        <img style={{ filter: "brightness(20%)" }} src={image3} />
        <img style={{ filter: "brightness(20%)" }} src={image4} />
        <img style={{ filter: "brightness(20%)" }} src={image5} />
        <img style={{ filter: "brightness(20%)" }} src={image3} />
      </div>
    </div>
  );
};

export default SceneCarsousel;
