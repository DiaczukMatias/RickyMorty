import UseRickyMorty from "./UseRickyMorty";
import Character from "./Characters";
import "./App.css"
import "./styles.css"
import logo from "../assets/Logo.png"
import Input from "./Input";
import { CircularProgress, Pagination, Typography } from "@mui/material";
import React from 'react';




const RickMorty = () => {

    const {rickmorty,loading,searchTerm, handleInputChange, handleSearch,handlePage, page, totalPages,error} = UseRickyMorty();

    return (
      <div className='container'>

        <figure className="logo">
          <img src={logo} alt="Rick and Morty" />
        </figure>
        
      <Input handleChange={handleInputChange} value={searchTerm}  handleSearchClick={handleSearch} />
      {error ? <Typography mt={20} color="error">{error}</Typography> 
      : loading  ? (
        <CircularProgress color="success" sx={{
          mt:20
        }} />
      ) : (
      <>
       {rickmorty?.map(character => (
        <Character key={character.id} character={character} />
      ))}
      <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handlePage} 
          sx={{
            marginLeft:90,
            marginTop:8,
            '& .MuiPaginationItem-root': {
              color: '#fff', 
              backgroundColor: 'black', 
              '&.Mui-selected': {
                backgroundColor: 'green',
                color: '#fff', 
              },
              '&:hover': {
                backgroundColor: 'green', 
              },
            },
          }} 
        /></>
     
    )}
     
    
   
    </div>
    );
}

export default RickMorty
