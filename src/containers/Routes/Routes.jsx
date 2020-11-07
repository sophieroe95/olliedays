import React from "react";
import { Router } from "@reach/router";

import Home from "../Home";
import Profile from "../Profile";
import Gorilla from "../Gorilla";
import NotFound from "../../components/NotFound";
import Favourites from "../Favourites";
import PrivateRoutes from "../PrivateRoutes";

const Routes = (props) => {
  const { user } = props;
  return (
    <Router>
      <Home path="/" />
      <Gorilla path="gorilla"/>
      <PrivateRoutes path="/" user={user}>
        <Profile path="profile" user={user}/>
        <Favourites path="favourites" />
      </PrivateRoutes>
      <NotFound default />
    </Router>
  );
};

export default Routes;