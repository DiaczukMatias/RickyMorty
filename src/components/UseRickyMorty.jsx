
import { useEffect, useState } from 'react';
import { getCharacter } from '../http/getCharacters';


const UseRickyMorty = () => {
    const [rickmorty, setRickMorty] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');

    
    const handlePage = (event, value) => {
      setPage(value);
    };

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
    setLoading(true)
    try {
      const data = await getCharacter(searchTerm, 1);
      if (data.error) {
        setError(`No se encontraron resultados para "${searchTerm}".`);
      } else {
        setError('');
        setTotalPages(data?.info?.pages);
        setRickMorty(data?.results);
      }
    } catch (error) {
      setError('Error al buscar personajes.');
      console.error('Error fetching data: ', error);
    }
    finally{
    setLoading(false)
    }
  };


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const initial = ""
        const data = await getCharacter(initial, page);
          setError('');
          setTotalPages(data?.info?.pages || 0);
          setRickMorty(data?.results);
      } catch (error) {
        setError('Error al buscar personajes.');
        console.error('Error fetching data: ', error);
      }
    };

    fetchCharacters();
  }, [page]);
        


  return   {rickmorty,loading,searchTerm, handleInputChange, handlePage,handleSearch,page,totalPages,error}

};
  


export default UseRickyMorty;