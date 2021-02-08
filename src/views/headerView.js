
function HeaderView({
  loggedIn,
  onProfilePage,
  onLogIn,
  onSignUp,
  onSignOut,
  onTraillo,
  onRedirect,
}) {

  if (loggedIn && onRedirect !== "/profilepage") {
    return (
      <div className="trailloHeader">
        <a className="traillologo" onClick={onTraillo}>
          Traillo
        </a>
        <div className="tosignUpHeader">
          <a className="linkinheader" onClick={onProfilePage}>
            Profile Page
          </a>
          <a className="linkinheader" onClick={onSignOut}>
            Sign out
          </a>
        </div>
      </div>
    );

  } else if (loggedIn && onRedirect === "/profilepage") {
    return (
      <div className="trailloHeader">
        <a className="traillologo" onClick={onTraillo}>
          Traillo
        </a>
        <div className="tosignUpHeader">
          <a className="linkinheader" onClick={onTraillo}>
            Back to Workout
          </a>
          <a className="linkinheader" onClick={onSignOut}>
            Sign out
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="trailloHeader">
        <a className="traillologo" onClick={onTraillo}>
          Traillo
        </a>
        <div className="tosignUpHeader">
          <a className="linkinheader" onClick={onLogIn}>
            Log In
          </a>
          <a className="linkinheader" onClick={onSignUp}>
            Sign Up
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderView;
