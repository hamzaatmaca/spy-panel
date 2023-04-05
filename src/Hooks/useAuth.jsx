import jwt_decode from "jwt-decode";

const useAuth = () => {
  let user = { loggedIn: null };
  const token = localStorage.getItem("spy.token");

  if (token != null || token != undefined) {
    var decoded = jwt_decode(token);

    if (decoded?.sub !== undefined || decoded?.sub !== null) {
      user.loggedIn = true;
      return user && user.loggedIn;
    }
  } else {
    user.loggedIn = false;
    return user && user.loggedIn;
  }
};

export default useAuth;
