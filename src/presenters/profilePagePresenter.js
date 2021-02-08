import React from "react";
import { useSelector } from "react-redux";

import { SignOut } from "../helpers/auth";
import ProfilePage from "../views/profilePageView";

function ProfilePagePresenter() {
    const displayName = useSelector((state) => state.loggedIn.displayName);

    return React.createElement(ProfilePage, {
        displayName,
        onSignOut: () => SignOut()
    });
    };

export default ProfilePagePresenter


