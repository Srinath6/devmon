import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

export default function SearchPokemon() {
  const [processedPokemonList, setProcessedPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur");
  const {
    isLoading: isPokemonNameDataLoading,
    error: pokemonNameDataerror,
    data: pokemonNameData,
  } = useQuery({
    queryKey: ["pokemonNamesList"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon?limit=1292").then((res) =>
        res.json()
      ),
  });

  if (pokemonNameDataerror) {
    return <Typography>Failed to fetch pokemons list</Typography>;
  }

  const processPokemonData = useMemo(() => {
    if (pokemonNameData?.results) {
      const pokemonNames = pokemonNameData.results.map(
        (pokemon) => pokemon.name
      );
      setProcessedPokemonList(pokemonNames);
    }
  }, [pokemonNameData]);

  const handlePokemonNameChange = useCallback((event, newValue) => {
    setSelectedPokemon(newValue);
  }, []);

  return (
    <Paper elevation={0} variant="outlined" sx={{ m: 2 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Autocomplete
          disablePortal
          id="search-pokemon"
          options={processedPokemonList}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Pokemons" />}
          loading={isPokemonNameDataLoading}
          loadingText={"Fetching pokemons"}
          onChange={handlePokemonNameChange}
          value={selectedPokemon}
        />
        <Button
          variant="contained"
          onClick={() => console.log(selectedPokemon)}
        >
          Find
        </Button>
      </Stack>
    </Paper>
  );
}
