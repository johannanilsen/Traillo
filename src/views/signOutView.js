function SignOutButton(onSignOut) {
    return (
      <div>
        <button
          id="loginButton"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
  
  export default SignOutButton;
  