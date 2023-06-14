import React from "react";
import {
  Box,
  ChakraProvider,
  Link,
  Stack,
  extendTheme,
} from "@chakra-ui/react";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Experiences from "../src/pages/Experiences";
import Portfolio from "../src/pages/Portfolio";
import Feedbacks from "../src/pages/Feedbacks";
import Skills from "./pages/Skills";

const theme = extendTheme({
  fonts: {
    body: "Mulish, sans-serif",
    heading: "Mulish, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box as="header" bg="#fff" py={4} px={8} mb={4} position="absolute">
        <Stack spacing={20} align="center" flexDirection="row">
          <Link href="#about" fontWeight="bold">
            About
          </Link>
          <Link href="#experiences" fontWeight="bold">
            Experiences
          </Link>
          <Link href="#skills" fontWeight="bold">
            Skills
          </Link>
          <Link href="#portfolio" fontWeight="bold">
            Portfolio
          </Link>
          <Link href="#feedbacks" fontWeight="bold">
            Feedbacks
          </Link>
        </Stack>
      </Box>

      <Box as="main" pl="30px" pr="30px">
        <About />
        <Experiences />
        <Skills />
        <Portfolio />
        <Feedbacks />
      </Box>
    </ChakraProvider>
  );
};

export default App;
