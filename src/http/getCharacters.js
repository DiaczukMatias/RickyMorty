

export const getCharacter = async (searchTerm, page) => {
    try {
      let apiUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null; 
    }
  };
  