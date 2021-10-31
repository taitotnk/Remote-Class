import { auth } from "utils/Firebase";

const logout = () => {
  auth.signOut().then(() => {
    window.location.reload();
  });
};

export default logout;
