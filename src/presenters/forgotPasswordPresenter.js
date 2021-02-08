import React from "react";
import { useDispatch } from "react-redux";

import { forgotPassword } from "../helpers/auth";
import { redirectAction } from "../actions/redirectAction";
import ForgotPassword from "../views/forgotPasswordView"

function ForgotPasswordPresenter() {
    const [CurrentUserName, setCurrentUserName] = React.useState("");
    const dispatch = useDispatch();

    return React.createElement(ForgotPassword, {
        onHandleUserNameChange: (e) => setCurrentUserName(e.target.value),
        onForgotPassword: () => forgotPassword(CurrentUserName), 
        onLogIn: () => dispatch(redirectAction("/login")), 
    });
    };

export default ForgotPasswordPresenter