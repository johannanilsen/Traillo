import { Divider } from "./divider";

function SignUpView({
  OnHandleDisplayNameChange,
  OnHandleEmailChange,
  OnHandlePasswordChange,
  onSignUp,
  onLogIn,
  errorMessage,
}) {
  return (
    <div>
      <div id="loginContainer">
        <div className="subtitle">Sign up with your email address</div>
        <Divider width={350} color={"lightgray"} />
        <div id="loginForms">
          <input
            className="textInput"
            placeholder="Name"
            onChange={OnHandleDisplayNameChange}
          ></input>
          <input
            className="textInput"
            placeholder="Email adress"
            onChange={OnHandleEmailChange}
          ></input>
          <input
            className="textInput"
            type="password"
            placeholder="Password"
            onChange={OnHandlePasswordChange}
          ></input>
        </div>
        <div>{errorMessage}</div>

        <button id="loginButton" onClick={onSignUp}>
          Sign Up
        </button>

        <div id="tosignUpContainer">
          Have an account?
          <a className="inlineLink" onClick={onLogIn}>
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpView;
