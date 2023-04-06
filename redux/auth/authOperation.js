import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/config.js";
import { authSlice } from "./authReducer.js";

const auth = getAuth();

export const authRegistrationUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, { displayName: login });

      const { displayName, uid } = await auth.currentUser;

      dispatch(
        authSlice.actions.updateUserProfile({ userId: uid, login: displayName })
      );
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authLogInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      //   console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authLogOutUser = async (dispatch, getState) => {};
export const authStateChangeUser = () => async (dispatch, getState) => {};
