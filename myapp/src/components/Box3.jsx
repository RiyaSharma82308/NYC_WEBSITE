import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/images.json";
import Modal from "./Modal";
import Modalright from "./Modalright";
export default function Box3() {
  const defaultClickedImg =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692593607/home_beige_enlarged_mvwjyh.png";
  const [clickedImg, setClickedImg] = useState(defaultClickedImg);
  const [currentIndex, setCurrentIndex] = useState(null);

  const defaultClickedImggreen =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImggreen, setClickedImggreen] = useState(
    defaultClickedImggreen
  );
  const [currentIndexgreen, setCurrentIndexgreen] = useState(null);

  const defaultClickedImgyellow =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImgyellow, setClickedImgyellow] = useState(
    defaultClickedImgyellow
  );
  const [currentIndexyellow, setCurrentIndexyellow] = useState(null);

  const defaultClickedImgviolet2 =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692593607/home_beige_enlarged_mvwjyh.png";
  const [clickedImgviolet2, setClickedImgviolet2] = useState(
    defaultClickedImgviolet2
  );
  const [currentIndexviolet2, setCurrentIndexviolet2] = useState(null);

  const defaultClickedImggreen2 =
    "https://res.cloudinary.com/dkm3kczin/image/upload/v1692592049/home_violet_enlarged_hkj4fc.png";
  const [clickedImggreen2, setClickedImggreen2] = useState(
    defaultClickedImggreen2
  );
  const [currentIndexgreen2, setCurrentIndexgreen2] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    console.log(currentIndex);
    setClickedImg(item.enlarged);
  };
  const handleClickgreen = (item, index) => {
    setCurrentIndexgreen(index);
    console.log(currentIndexgreen);
    setClickedImggreen(item.enlarged);
  };
  const handleClickyellow = (item, index) => {
    setCurrentIndexyellow(index);
    setClickedImgyellow(item.enlarged);
  };
  const handleClickviolet2 = (item, index) => {
    setCurrentIndexviolet2(index);
    setClickedImgviolet2(item.enlarged);
  };
  const handleClickgreen2 = (item, index) => {
    setCurrentIndexgreen2(index);
    setClickedImggreen2(item.enlarged);
  };
  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].enlarged;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationRight_green = () => {
    const totalLength = data.datagreen.length;
    if (currentIndexgreen + 1 >= totalLength) {
      setCurrentIndexgreen(0);
      const newUrl = data.datagreen[0].enlarged;
      setClickedImggreen(newUrl);
      return;
    }
    const newIndex = currentIndexgreen + 1;
    const newUrl = data.datagreen.filter((item) => {
      return data.datagreen.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImggreen(newItem);
    setCurrentIndexgreen(newIndex);
  };

  const handelRotationRight_yellow = () => {
    const totalLength = data.datayellow.length;
    if (currentIndexyellow + 1 >= totalLength) {
      setCurrentIndexyellow(0);
      const newUrl = data.datayellow[0].enlarged;
      setClickedImgyellow(newUrl);
      return;
    }
    const newIndex = currentIndexyellow + 1;
    const newUrl = data.datayellow.filter((item) => {
      return data.datayellow.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImgyellow(newItem);
    setCurrentIndexyellow(newIndex);
  };
  const handelRotationRight_violet2 = () => {
    const totalLength = data.dataviolet2.length;
    if (currentIndexviolet2 + 1 >= totalLength) {
      setCurrentIndexviolet2(0);
      const newUrl = data.dataviolet2[0].enlarged;
      setClickedImgviolet2(newUrl);
      return;
    }
    const newIndex = currentIndexviolet2 + 1;
    const newUrl = data.dataviolet2.filter((item) => {
      return data.dataviolet2.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImgviolet2(newItem);
    setCurrentIndexviolet2(newIndex);
  };
  const handelRotationRight_green2 = () => {
    const totalLength = data.datagreen2.length;
    if (currentIndexgreen2 + 1 >= totalLength) {
      setCurrentIndexgreen2(0);
      const newUrl = data.datagreen2[0].enlarged;
      setClickedImggreen2(newUrl);
      return;
    }
    const newIndex = currentIndexgreen2 + 1;
    const newUrl = data.datagreen2.filter((item) => {
      return data.datagreen2.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].enlarged;
    setClickedImggreen2(newItem);
    setCurrentIndexgreen2(newIndex);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#DAC126",
          border: "0.06vw solid #DAC126",
          width: "100%",
          height: "44.3vw",
          top: "101.9vw",
          left: "0.63vw",
          borderRadius: "1.27vw",
        }}
      >
        <div className="text-overlay" style={{ marginTop: "3.16vw" }}>
          <h2
            style={{
              fontSize: "2.53vw",
              fontWeight: "800",
              lineHeight: "3.8vw",
              letterSpacing: "0em",
              textAlign: "left",
              fontFamily:'Hiragino Sans Bold'
            }}
          >
            NYC SCALING
          </h2>
          <p
            style={{
              fontSize: "1.52vw",
              fontWeight: "500",
              lineHeight: "1.84vw",
              letterSpacing: "0em",
              textAlign: "left",
              fontFamily:'Zabal DEMO'
            }}
          >
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            <br /> Labore doloremque quos id
          </p>
        </div>

        <div>
          <div style={{ marginLeft: "5.7vw" }}>
            {data.datayellow.map((item, index) => (
              <div
                key={index}
                className="wrapper-images"
                style={{ marginTop: "18.99vw" }}
              >
                <img
                  src={item.link}
                  alt={item.text}
                  onClick={() => handleClickyellow(item, index)}
                />
              </div>
            ))}
          </div>
          <Link
            to="/"
            style={{
              paddingTop: "0.3vw",
              paddingBottom: "0.5vw",
              border: "0.06vw solid white",
              color: "white",
              width: "18.99vw",
              height: "2.53vw",
              textDecoration: "none",
              fontSize: "1.14vw",
              display: "flex",
              justifyContent: "center",
              marginLeft: "8.86vw",
              marginTop: "3.48vw",
              fontFamily:'Zabal DEMO'
            }}
          >
            Visit website
          </Link>

          {/* </div> */}
          {/* </div> */}
          <div
            style={{
              position: "relative",
              right: "10%", // Adjust the right position
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              zIndex: "999",
              marginRight: "2.16vw", // Add margin to the right
              marginTop: "-17.53vw",
            }}
          >
            {clickedImgyellow && (
              <Modal
                clickedImg={clickedImgyellow}
                handelRotationRight={handelRotationRight_yellow}
                setClickedImg={setClickedImgyellow}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
