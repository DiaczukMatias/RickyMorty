import UseRickyMorty from "./UseRickyMorty";
import Character from "./Characters";
import "./App.css";
import "./styles.css";
import logo from "../assets/Logo.png";
import Input from "./Input";
import { CircularProgress, Pagination, Typography, Grid } from "@mui/material";
import React from "react";

const RickMorty = () => {
  const {
    rickmorty,
    loading,
    searchTerm,
    handleInputChange,
    handleSearch,
    handlePage,
    page,
    totalPages,
    error,
  } = UseRickyMorty();

  return (
    <div className="container">
      <figure
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "-5px",
        }}
      >
        <img src={logo} alt="Rick and Morty" />
      </figure>

      <Input
        handleChange={handleInputChange}
        value={searchTerm}
        handleSearchClick={handleSearch}
      />

      {error ? (
        <Typography mt={20} color="error">
          {error}
        </Typography>
      ) : loading ? (
        <CircularProgress
          color="success"
          sx={{
            mt: 20,
          }}
        />
      ) : (
        <>
          {/* Ajustamos el Grid para pantallas pequeñas */}
          <Grid container spacing={18} justifyContent="center">
            {rickmorty?.map((character) => (
              <Grid
                item
                xs={6} // En pantallas extra pequeñas, cada card ocupará la mitad (2 columnas)
                sm={4} // En pantallas pequeñas (≥600px), cada card ocupará 1/3 del ancho (3 columnas)
                md={3} // En pantallas medianas, cada card ocupará 1/4 del ancho (4 columnas)
                lg={2} // En pantallas grandes, más columnas (6 columnas)
                key={character.id}
                sx={{
                  "@media (max-width: 600px)": {
                    display: "flex",
                    justifyContent: "center",
                    margin: "8px 0", // Espaciado vertical entre las cards en móviles
                  },
                }}
              >
                <div
                  style={{
                    margin: "8px", // Espaciado adicional para cada card
                    "@media (max-width: 600px)": {
                      margin: "12px", // Puedes ajustar el margen en móviles
                    },
                  }}
                ></div>
                <Character character={character} />
              </Grid>
            ))}
          </Grid>

          {/* Ajuste del Paginador para que sea horizontal y se centre */}
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePage}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
              margin: "auto", // Centramos el paginador en cualquier dispositivo
              flexDirection: "row", // Aseguramos que sea horizontal
              width: "fit-content", // Evitamos que se desborde
              "@media (max-width: 600px)": {
                width: "100%", // Asegura que ocupe todo el ancho en móviles
                "& .MuiPaginationItem-root": {
                  fontSize: "1rem", // Reducir un poco el tamaño del texto en el paginador para móviles
                },
              },
              "& .MuiPaginationItem-root": {
                color: "#fff",
                backgroundColor: "black",
                "&.Mui-selected": {
                  backgroundColor: "green",
                  color: "#fff",
                },
                "&:hover": {
                  backgroundColor: "green",
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default RickMorty;
