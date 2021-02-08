export const apiSource = {
  apiCall(params) {
    return (
      fetch(process.env.REACT_APP_BASE_URL + params, {
        method: "GET",
        Authorization: process.env.REACT_APP_API_KEY,
      })
        // from headers to response data
        .then((response) =>
          response.ok
            ? response.json()
            : (function () {
              throw Error(response.statusText);
            })()
        )
    );
  },
  searchExercise(category, query) {
    return this.apiCall("exercise/?language=2&limit=300") // language=2 returns in english
      .then((data) => data.results)
      .then((results) =>
        results.filter((ex) => (category ? ex.category === category : ex))
      ) // filters exercises based on category
      .then((results) =>
        results.filter((ex) =>
          query ? ex.name.toUpperCase().includes(query.toUpperCase()) : ex
        )
      ) // filters exercise name based on query
      .catch(console.error);
  },
  getCategories() {
    // this would be used to get the exercise category names and ids
    return this.apiCall("exercisecategory")
      .then((data) => data.results)
      .catch(console.error);  // kanske inte borde ha det för att kunna få ut felet
  },
  getMuscles() {
    return this.apiCall("muscle/")
      .then((data) => data.results)
      .catch(console.error);
  },
  getExercise(id) {
    return this.apiCall("exercise/" + id + "?language=2&limit=300")
      .then((data) => data)
      .catch(console.error);
  },
};
