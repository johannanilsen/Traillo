import { CONSTANTS } from "../actions";

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

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: Date.now(),
        object: action.payload.object,
      };

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    case CONSTANTS.REMOVE_CARD:
      const newState2 = state.map((list) => {
        if (list.id === action.payload.listID) {
          list.cards = list.cards.filter((x) => x.id !== action.payload.cardID);
          return list;
        } else {
          return list;
        }
      });

      return newState2;

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,

      } = action.payload;

      const newState = [...state];

      if (parseInt(droppableIdEnd) > 10) {
        return newState;
        // If the drag is dropped on the sidebar again
      }
      else {
        const list = newState.find(
          (list) => droppableIdStart === String(list.id)
        ); // where the drag happened
        const card = list.cards.splice(droppableIndexStart, 1); // pull out the card from the list
        //console.log(list);

        // dropping on the same day
        if (droppableIdStart === droppableIdEnd) {
          list.cards.splice(droppableIndexEnd, 0, ...card); //this spreads the card into the IndexEnd position
        }
        // dropping a card on another day
        else {
          const listEnd = newState.find(
            (list) => droppableIdEnd === String(list.id)
          ); // where the drag ended
          listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        }

        return newState;
      }
    }

    case CONSTANTS.UPDATE_STATE: {
      action.payload.map((weekday) => {
        // Error handling since firebase doesn't store empty arrays
        if (!weekday.cards) {
          weekday.cards = [];
        }
      });

      const newState = [...state];

      newState.map((weekday, index) => {
        weekday.cards = action.payload[index].cards;
      });

      return newState;
    }

    default:
      return state;
  }
};

export default listsReducer;
