import '@fontsource/sawarabi-gothic/400.css'

import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
