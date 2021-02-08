import { auth } from "../api/firebase";

export function SignOut() {
  auth
    .signOut()
    .then(function () {})
    .catch(function () {
      // An error happened.
    });
}

export function forgotPassword(email) {
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
    })
    .catch(function () {});
}
