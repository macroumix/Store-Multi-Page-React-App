import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


const RootLayout = () => {

  return (
    <>
      <MainNavigation />
      <main >
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
