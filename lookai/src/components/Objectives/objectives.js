import React from "react";
import "./objectives.css";
import Cards from "../Cards/cards";
import img1 from "./../../images/profile-pic (2).png";

const experianceCards = [
  {
    img: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/blind-woman-crossing-street-help-guide.webp",
    type: "Rooms & Suites",
    text: "Help VIPs to navigate through known or unknown obstacles",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://www.cubix.co/storage/app/uploads/public/5fc/e3f/19f/5fce3f19f029a525723595.jpg",
    type: "Rooms & Suites",
    text: "Help Blind to socialize through face,age,gender,emotion detection to connect with the blind community",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://s42814.pcdn.co/wp-content/uploads/2020/01/stairs_1119-Idea-House_DSC_1024.0-1-scaled.jpg.optimal.jpg",
    type: "Rooms & Suites",
    text: "Help Identify Staircases And Assist To The Destination",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
  {
    img: "https://cashreader.app/wp-content/uploads/2018/10/CashReader_EN_EUR.jpg",
    type: "Rooms & Suites",
    text: "Detect printed Text area or handwritten texts and cash notes",
    description:
      "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    price: "From LKR 65,734.20 Average Per Night",
  },
];

const Objectives = () => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "20px",
        paddingTop:'50px',
        //height: "600px",
        backgroundColor: "#37A7DF",
      }}
      id="scope"
    >
      <center>
        {" "}
        <h1 style={{ fontSize: "40px", color:'white' }}>Objectives</h1>
      </center>

      <div className="cardContainer" style={{marginTop:'80px'}}>
        {experianceCards.map((card) => {
          return <Cards key={card.img} image={card.img} text={card.text} />;
        })}
      </div>
    </div>
  );
};

export default Objectives;
