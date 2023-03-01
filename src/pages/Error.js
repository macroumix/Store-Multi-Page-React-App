import { useRouteError } from "react-router-dom";
import React from "react";
import MainNavigation from "../components/MainNavigation";

import classes from "./Error.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <div className={classes.message}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
