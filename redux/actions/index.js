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
    dispatch({ type: UPDATE_JWT, payload: payload });
  } catch (error) {
    dispatch({ type: UPDATE_JWT, payload: false });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const fetchFlashcards = () => async (dispatch, getState) => {
  try {
    const { jwt } = getState();
    let flashcards = (
      await axios.get(`${API_SERVER}/flashcards`, { headers: { Cookie: jwt } })
    ).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
  } catch (error) {
    console.log(error.toString());
    // show some error message
  }
};

export const deleteFlashcard = (id) => async (dispatch, getState) => {
  try {
    const { jwt } = getState();
    await axios.delete(`${API_SERVER}/flashcards/${id}`, {
      headers: { Cookie: jwt },
    });
    let flashcards = (
      await axios.get(`${API_SERVER}/flashcards`, { headers: { Cookie: jwt } })
    ).data;
    dispatch({ type: UPDATE_FLASHCARDS, payload: flashcards });
    // history.push("/");
    // message.info("Flashcard delete success!");
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
