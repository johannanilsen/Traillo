import { Divider } from "../views/divider";

function ProfilePage({ displayName, onSignOut }) {
  
  if (displayName) {
    return (
      <div>
        <div id="loginContainer">
          <div className="subtitle">Hello {displayName}</div>
          <Divider width={350} color={"lightgray"} />
          <button
            id="loginButton"
            onClick={onSignOut}          
            >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="loginContainer">
          <div className="subtitle">Hello </div>
          <Divider width={350} color={"lightgray"} />
          <button
            id="loginButton"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;