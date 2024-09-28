import React from "react";

const Input = ({ handleChange, value, handleSearchClick }) => {
  return (
    <section className="Filtrar">
      <input
        type="text"
        name="searchTerm"
        placeholder="Nombre del personsaje"
        value={value}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
      />
      <button type="submit" onClick={handleSearchClick}>
        Buscar
      </button>
    </section>
  );
};

export default Input;
