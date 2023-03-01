import React from "react";
import { useLoaderData } from "react-router-dom";

import classes from "./Home.module.css";

import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";
import img8 from "../images/8.jpeg";
import img9 from "../images/9.jpeg";
import img10 from "../images/10.jpeg";
import PostIt from "../components/PostIt";

const HomePage = () => {

  const items = useLoaderData();

  console.log("items is:", items);

  console.log("loader data is: ",useLoaderData());

  return (
    <>
      <div className={classes.intro}>
        <div className={classes.imgfill}>
          <img className={classes.imgsm} src={img7} />
        </div>
        <div className={classes.header}>
          <h1>Welcome to Umix's Shop</h1>
          <h3>We supply what you require.</h3>
        </div>
        <div className={classes.imgfill}>
          <img className={classes.imgsm} src={img8} />
        </div>
      </div>
      <div className={classes.parag}>
        <p>
          We specialize in common daily items to improve your day to day life
        </p>
        <p>
          As of now, we are an online shop, but in the future we plan to open
          our first store.
        </p>
        <div className={classes.face}/>
      </div>
      <PostIt/>
    </>
  );
};

export default HomePage;