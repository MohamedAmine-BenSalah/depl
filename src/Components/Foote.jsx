import React, { useState } from "react";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Button from "@mui/material/Button";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import TheatersRoundedIcon from "@mui/icons-material/TheatersRounded";
import {
  setFirstLine,
  setSecondLine,
  setThirdLine,
  setObj,
  setScene,
  setTimer,
  setFullScreen,
} from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
const Footer = () => {
  const dispatch = useDispatch();
  const styleIcon = {
    width: "50px",
    height: "30px",
    color: "blue",
  };
  const isFLclear = useSelector((state) => state.pageReducer.firstObjLine);
  const isSLclear = useSelector((state) => state.pageReducer.secondObjLine);
  const isTLClear = useSelector((state) => state.pageReducer.thirdObjLine);
  const timer = useSelector((state) => state.pageReducer.timer);

  return (
    <div className={timer ? "Footer_Container_video" : "Footer_Container"}>
      <div className="icon">
        <span className="list">
          <SelfImprovementOutlinedIcon
            sx={styleIcon}
            onClick={() => {
              dispatch(setFirstLine(true));
              dispatch(setSecondLine(false));
              dispatch(setThirdLine(false));
              dispatch(setObj(true));
              dispatch(setScene(false));
              dispatch(setTimer(false));
              dispatch(setFullScreen(false));
            }}
          />
          <span className="listaction">
            <p>Objectif</p>
            <div className={isFLclear ? "Line" : null}></div>
          </span>
        </span>
        <span className="list">
          <TheatersRoundedIcon
            style={styleIcon}
            onClick={() => {
              dispatch(setSecondLine(true));
              dispatch(setFirstLine(false));
              dispatch(setThirdLine(false));
              dispatch(setObj(false));
              dispatch(setTimer(false));
              dispatch(setScene(true));
              dispatch(setFullScreen(false));
            }}
          />
          <span className="listaction">
            <p>Scéne</p>
            <div className={isSLclear ? "Line" : null}></div>
          </span>
        </span>
        <span className="list">
          <TimerOutlinedIcon
            style={styleIcon}
            onClick={() => {
              dispatch(setThirdLine(true));
              dispatch(setSecondLine(false));
              dispatch(setFirstLine(false));
              setObj(false);
              dispatch(setScene(false));
              dispatch(setObj(false));
              dispatch(setTimer(true));
              dispatch(setFullScreen(false));
            }}
          />
          <span className="listaction">
            <p>Durée</p>
            <div className={isTLClear ? "Line" : null}></div>
          </span>
        </span>
      </div>
      <div className="button">
        <InfoOutlinedIcon />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            height: "45px",
            marginBottom: "5px",
          }}
          onClick={() => {
            dispatch(setFullScreen(true));
          }}
        >
          COMMECER
        </Button>
      </div>
    </div>
  );
};

export default Footer;
