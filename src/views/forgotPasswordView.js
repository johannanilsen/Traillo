import { Divider } from "./divider"

function ForgotPassword({ onHandleUserNameChange, onForgotPassword, onLogIn }) {
  
  return (
    <div id="loginContainer">
      <div className="subtitle">Enter email to reset password</div>
      <Divider width={350} color={"lightgray"} />
      <div id="loginForms">
        <input
          className="textInput"
          placeholder="Email adress"
          onChange={onHandleUserNameChange}
        ></input>
      </div>
      <button
        id="loginButton"
        onClick={onForgotPassword}
      >
        Reset Password
      </button>
      <div id="tosignUpContainer">
        Back to log in?
        <a onClick={onLogIn}>
          Log In
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;