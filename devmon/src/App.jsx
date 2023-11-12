import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import SearchPokemon from "./SearchPokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonDetail from "./PokemonDetail";

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <SearchPokemon />
        <PokemonDetail />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
