import React from "react";

import { apiSource } from "../api/apiSource";
import { SearchResultsView, SidebarSearchView } from "../views/sidebarSearchView";
import { usePromise } from "../helpers/usePromise";
import { promiseNoData } from "../views/promiseNoData";

export function SidebarSearch() {

  const stripHTMLTag = /(<([^>]+)>)/gi; // there were html tags in the descriptions of the exercises, using this to replace them

  const fetchCategories = async () => await apiSource.getCategories();
  const fetchMuscles = async () => await apiSource.getMuscles();
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [promise, setPromise] = React.useState(null);
  const [exerciseCategories, setCategories] = React.useState([]);
  const [muscleCategories, setMuscleCategories] = React.useState([]);
  const [data, error] = usePromise(promise);
  const [loading, setloading] = React.useState(true);


  React.useEffect(() => {
    let isMounted = true;
    async function fetchCategoriesData() {
      const categories = await fetchCategories();
      if (isMounted) {
        setloading(false);
        setCategories(categories);
      }
    };

    fetchCategoriesData();

    return function cleanup() {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    async function fetchMuscleData() {
      const muscles = await fetchMuscles();
      if (isMounted) {
        setloading(false);
        setMuscleCategories(muscles);
      }
    };

    fetchMuscleData();

    return function cleanup() {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => setPromise(apiSource.searchExercise()), []);

  return loading ? "loading..." : React.createElement(
    React.Fragment,
    {},
    React.createElement(SidebarSearchView, {
      onText: (x) => setQuery(x),
      onCategory: (x) => setCategory(parseInt(x)),
      onSearch: () => setPromise(apiSource.searchExercise(category, query)),
      exerciseCategories,
    }),
    promiseNoData(promise, data, error) ||
    React.createElement(SearchResultsView, {
      searchResults: data,
      muscleCategories,
      stripHTMLTag,
    })
  );
}
