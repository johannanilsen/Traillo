import Collapsible from "../components/collapsible";
import { Droppable } from "react-beautiful-dnd"

export function SidebarSearchView({ onText, onCategory, onSearch, exerciseCategories }) {
  return (
    <div className="searchForm">
      <p className="searchHeader">Exercises</p>
      <input className="searchText" onChange={(event) => onText(event.target.value)}></input>
      <select className="searchDropdown" onChange={(event) => onCategory(event.target.value)}>
        <option value="">Category</option>
        {exerciseCategories.length &&
          exerciseCategories.map((k) => (
            <option value={k.id} key={k.id}>
              {" "}
              {k.name}
            </option>
          ))}
      </select>
      <button className="searchButton" onClick={(event) => onSearch(event.target.value)}>Search!</button>
    </div>
  );
}

export function SearchResultsView({ searchResults, muscleCategories, stripHTMLTag }) {
  return (
    <div className="searchResults">
      <Droppable droppableId={String(Date.now())} isDropDisabled={true}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {searchResults.map((exercise, index) => (
              <Collapsible
                title={exercise.name}
                key={exercise.uuid}
                cards={exercise}
                index={index}
              >
                <div className="exerciseContent">
                  <p className="exerciseSubheader">Description</p>
                  {exercise.description.replace(stripHTMLTag, "")}
                  <p className="exerciseSubheader">Muscle</p>
                  {muscleCategories
                    .filter((musc) =>
                      exercise.muscles.length
                        ? exercise.muscles[0] === musc.id
                        : ""
                    )
                    .map((ex) => ex.name)}
                </div>
              </Collapsible>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
