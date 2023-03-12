// import { auth } from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export const authRegistrationUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authLogInUser = async (dispatch, getState) => {};

export const authLogOutUser = async (dispatch, getState) => {};
