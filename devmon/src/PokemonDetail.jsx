import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function PokemonDetail() {
  return (
    <Stack>
      <Typography variant="h4">Pokemon Details</Typography>
      <Card sx={{ maxWidth: "fit-content" }}>
        <CardMedia
          component="img"
          height="300"
          image={
            "https://projectpokemon.org/images/normal-sprite/charizard.gif"
          }
        />
      </Card>
    </Stack>
  );
}
