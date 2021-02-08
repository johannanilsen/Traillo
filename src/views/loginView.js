import { Divider } from "../views/divider";

function LogIn({
  onHandleUserNameChange,
  onHandlePasswordChange,
  onForgotPassword,
  onSignIn,
  onSignUp,
  errorMessage,
}) {
  return (
    <div>
      <div id="loginContainer">
        <div className="subtitle">Login to continue</div>
        <Divider width={350} color={"lightgray"} />
        <div id="loginForms">
          <input
            className="textInput"
            placeholder="Email adress"
            onChange={onHandleUserNameChange}
          ></input>
          <input
            className="textInput"
            type="password"
            placeholder="Password"
            onChange={onHandlePasswordChange}
          ></input>

          <a onClick={onForgotPassword}>Forgot password</a>
          <div>{errorMessage}</div>
        </div>

        <button id="loginButton" onClick={onSignIn}>
          Log In
        </button>

        <div id="tosignUpContainer">
          Don't have an account?
          <a className="inlineLink" onClick={onSignUp}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
