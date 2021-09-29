import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";

import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      history.push("/home");
    }
  });

  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
      })
      .catch((error) => {});
  }
  return (
    <>
      <div className="landing-main">
        <div className="text-center">
          <h1 className="landing-text">LandingPage</h1>
          <button className="btn btn-primary" onClick={signInWithGoogle}>
            Login
          </button>
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L34.3,106.7C68.6,85,137,43,206,32C274.3,21,343,43,411,74.7C480,107,549,149,617,144C685.7,139,754,85,823,101.3C891.4,117,960,203,1029,224C1097.1,245,1166,203,1234,202.7C1302.9,203,1371,245,1406,266.7L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>
      </div>
    </>
  );
}