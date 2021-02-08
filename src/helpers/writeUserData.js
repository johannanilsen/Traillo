import { db } from "../api/firebase";

const initialState = [
  {
    title: "Monday",
    id: 0,
    cards: [],
  },
  {
    title: "Tuesday",
    id: 1,
    cards: [],
  },
  {
    title: "Wednesday",
    id: 2,
    cards: [],
  },
  {
    title: "Thursday",
    id: 3,
    cards: [],
  },
  {
    title: "Friday",
    id: 4,
    cards: [],
  },
  {
    title: "Saturday",
    id: 5,
    cards: [],
  },
  {
    title: "Sunday",
    id: 6,
    cards: [],
  },
];

export function writeUserData(userId, name, email) {
  console.log("NEW USER: ", name, email, initialState);
  db.ref("users/" + userId).set({
    username: name,
    email: email,
    list_state: initialState,
  });
}
