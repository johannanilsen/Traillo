//mport image from "../images/pexels-nathan-cowley-2413552.jpg"; // Tell webpack this JS file uses this image

function WelcomePage({ onSignUp }) {
  return (
    <div className="welcomepagebackground">
      <div className="welcomecontainer">
        <div className="welcometext">
          <div className="welcometitle">Welcome to Traillo</div>
          <div className="welcometitle2">a personal workout calender</div>
          <button id="welcomeButton" onClick={onSignUp}>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
