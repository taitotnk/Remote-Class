import { firebase } from "utils/Firebase";

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({
  //   hd: "iniad.org",
  // });
  firebase.auth().signInWithRedirect(provider);
};

export default login;
