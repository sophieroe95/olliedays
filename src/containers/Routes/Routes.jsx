import React from "react";
import { Router } from "@reach/router";

import Home from "../Home";
import Profile from "../Profile";
import NotFound from "../../components/NotFound";
import Favourites from "../Favourites";
import PrivateRoutes from "../PrivateRoutes";

const Routes = (props) => {
  const { user } = props;
  return (
    <Router>
      <Home path="/" />
      <PrivateRoutes path="/" user={user}>
        <Profile path="profile" user={user}/>
        <Favourites path="favourites" />
      </PrivateRoutes>
      <NotFound default />
    </Router>
  );
};

export default Routes;