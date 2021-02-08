import React from "react";
import ExerciseCard from "./exerciseCard";
import { Droppable } from "react-beautiful-dnd";
import StartWorkoutButton from "../presenters/startWorkoutPresenter";

const WeekdayContainer = ({ title, cards, listID }) => {
  return (
    <div className="WeekdayContainer">
      <p>{title}</p>
      <Droppable droppableId={String(listID)}>
        {(provided) => (
          <div
            className="cardList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <ExerciseCard
                text={card.text}
                key={card.id}
                cardID={card.id}
                listID={listID}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <StartWorkoutButton
        key={listID}
        listID={listID}
        cards={cards}
      ></StartWorkoutButton>
    </div>
  );
};

export default WeekdayContainer;
