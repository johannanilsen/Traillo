import React from "react";
import { useDispatch } from "react-redux";
import { redirectAction } from "../actions/redirectAction";
import WelcomePage from "../views/welcomePage";

function WelcomePagePresenter() {
  const dispatch = useDispatch();

  return React.createElement(WelcomePage, {
    onSignUp: () => dispatch(redirectAction("/signup")),
  });
}

export default WelcomePagePresenter;
