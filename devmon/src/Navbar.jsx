import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ p: 2 }}>
      <Paper>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
            Devmon
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
