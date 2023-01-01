import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";
import HttpsIcon from "@mui/icons-material/Https";
const ObjectifCarsousel = () => {
  const [clicked, setClicked] = useState(false);
  const [secondObjClicked, setsecondObjClicked] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="content">
      <div className="objectif-title"> Veuillez choisir votre objectif : </div>
      <Carousel responsive={responsive}>
        <div
          onClick={() => {
            setClicked(true);
            setsecondObjClicked(false);
          }}
          className={clicked ? "item_click" : "item"}
        >
          Détendez vous
        </div>
        <div
          onClick={() => {
            setClicked(false);
            setsecondObjClicked(true);
          }}
          className={secondObjClicked ? "item_click" : "item"}
        >
          Ecouter la nature
        </div>
        <div className="item">
          Dormir paisiblement{" "}
          <span>
            {" "}
            <HttpsIcon
              sx={{
                position: "absolute",
                top: "-34px",
                right: "36px",
                color: "#11d111d1",
              }}
            />
          </span>
        </div>
        <div className="item">
          trouver la clarté{" "}
          <span>
            {" "}
            <HttpsIcon
              sx={{
                position: "absolute",
                top: "-35px",
                right: "51px",
                color: "#11d111d1",
              }}
              className="ico"
            />
          </span>{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default ObjectifCarsousel;
