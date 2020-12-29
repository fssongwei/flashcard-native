import axios from "axios";
import { UPDATE_JWT, LOGOUT, UPDATE_FLASHCARDS } from "./types";
import { AUTH_SERVER, API_SERVER } from "../../assets/URLs";
// import { message } from "antd";
const RCTNetworking = require("react-native/Libraries/Network/RCTNetworking");

export const updateJWT = (jwt) => async (dispatch) => {
  try {
    const user = (
      await axios.get(`${AUTH_SERVER}/user`, { headers: { Cookie: jwt } })
    ).data;
    let payload = {
      jwt: jwt,
      user: user,
    };
    console.log(user);
    dispatch({ type: UPDATE_JWT, payload: payload });
  } catch (error) {
    dispatch({ type: UPDATE_JWT, payload: false });
  }
};

export const logOut = (jwt) => async (dispatch) => {
  try {
    RCTNetworking.clearCookies(() => {});
    dispatch({ type: LOGOUT });
  } catch (error) {
    // dispatch({ type: LOGOUT, payload: false });
  }
};

// export const fetchUser = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`/auth/user`);
//     dispatch({ type: FETCH_USER, payload: res.data });
//   } catch (error) {
//     dispatch({ type: FETCH_USER, payload: false });
//   }
// };

export const fetchFlashcards = () => async (dispatch) => {
  try {
    let flashcards = (await axios.get("/api/flashcards")).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
  } catch (error) {
    // show some error message
  }
};

export const createFlashcard = (flashcard, history) => async (dispatch) => {
  try {
    let createdFlashcard = (await axios.post("/api/flashcards/add", flashcard))
      .data;
    let flashcards = (await axios.get("/api/flashcards")).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
    history.push(`/categories/${createdFlashcard.category}`);
    // message.info("Flashcard create success!");
  } catch (error) {
    // show some error message
  }
};

export const updateFlashcard = (flashcard, id, history) => async (dispatch) => {
  try {
    let updatedFlashcard = (await axios.put(`/api/flashcards/${id}`, flashcard))
      .data;
    let flashcards = (await axios.get("/api/flashcards")).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
    history.push(`/categories/${updatedFlashcard.category}`);
    // message.info("Flashcard updated!");
  } catch (error) {
    // show some error message
  }
};

export const deleteFlashcard = (id, history) => async (dispatch) => {
  try {
    await axios.delete(`/api/flashcards/${id}`);
    let flashcards = (await axios.get("/api/flashcards")).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
    history.push("/");
    // message.info("Flashcard delete success!");
  } catch (error) {
    // show some error message
  }
};
