import React from "react";
import {
  Box,
  ChakraProvider,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  extendTheme,
} from "@chakra-ui/react";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Experiences from "../src/pages/Experiences";
import Portfolio from "../src/pages/Portfolio";
import Feedbacks from "../src/pages/Feedbacks";
import Skills from "./pages/Skills";
import { useMediaQuery } from "react-responsive";
import { HamburgerIcon } from "@chakra-ui/icons";
import ScrollToTopButton from "./components/ScrollToTopButton";

const theme = extendTheme({
  fonts: {
    body: "Mulish, sans-serif",
    heading: "Mulish, sans-serif",
  },
});

const App: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ChakraProvider theme={theme}>
      {isMobile ? (
        <Box pos="fixed" top={5} left={5} zIndex={9999} bg="#fff">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as="a" href="#about">
                About
              </MenuItem>
              <MenuItem as="a" href="#experiences">
                Experiences
              </MenuItem>
              <MenuItem as="a" href="#skills">
                Skills
              </MenuItem>
              <MenuItem as="a" href="#portfolio">
                Portfolio
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Box as="header" bg="#fff" py={4} px={8} mb={4}>
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
          </Stack>
        </Box>
      )}

      <Box as="main" pl="30px" pr="30px">
        <About />
        <Experiences />
        <Skills />
        <Portfolio />
        <Box mb="60px" />
        <ScrollToTopButton />
      </Box>
    </ChakraProvider>
  );
};

export default App;
