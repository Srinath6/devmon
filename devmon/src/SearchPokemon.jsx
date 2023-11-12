import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

export default function SearchPokemon() {
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
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Pokemons" />}
        />
        <Button variant="contained"> Find </Button>
      </Stack>
    </Paper>
  );
}
