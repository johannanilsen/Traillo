import React from "react";

import { SignOut } from "../helpers/auth";
import SignOutButton from "../views/signOutView";

function SignOutPresenter() {
    return React.createElement(SignOutButton, {
        onSignOut: () => SignOut()
    });
    };

export default SignOutPresenter


