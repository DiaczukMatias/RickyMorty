export const getSearch = (search) => {
      const apiUrl = `https://rickandmortyapi.com/api/character/?name=${search}`
      fetch(apiUrl)
      .then((resp) =>  resp.json())
      .then((data) => {console.log(data.results)})
      .catch(error => console.error("Error fetching data: ", error));
}

