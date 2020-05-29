import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Buttons from "./components/Buttons";
import { Box } from "@material-ui/core";
import theme from "./theme";
import TextFields from "./components/TextFields";
import Tooltips from "./components/Tooltip";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box mt={3}>
        <Buttons />
      </Box>
      <Box mt={3}>
        <TextFields />
      </Box>

      <Box mt={6}>
        <Tooltips />
      </Box>
    </ThemeProvider>
  );
}
