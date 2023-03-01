import React from "react";

import classes from "./PostIt.module.css";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";

const PostIt = () => {
  return (
    <>
      <div className={classes["post-it"]} contenteditable>
        <h1>Shopumix</h1>
        <ul>
          <img className={classes.imgsm} src={img1} />
        </ul>
      </div>
      <div className={classes["post-it"]} contenteditable>
        <h1>Shopumix</h1>
        <ul>
          <img className={classes.imgsm} src={img2} />
        </ul>
      </div>
    </>
  );
};

export default PostIt;
