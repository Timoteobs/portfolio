import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";
import { ProjectsList } from "../../data/Portfolio";

const Portfolio: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  const [show, setShow] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  return (
    <Box
      id="portfolio"
      minH={isMobile ? "auto" : "100vh"}
      display="flex"
      flexDir="column"
      mt={isMobile ? "0" : "45px"}
    >
      <Text fontSize="5xl" mt="30px" mb="60px">
        Portfolio
      </Text>
      <Box display="flex" gap="10px" flexWrap="wrap">
        {ProjectsList.map((el, index) => (
          <Card maxW="300px" key={index}>
            <CardBody>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src="https://play-lh.googleusercontent.com/MtEwTEZa0RsJWF--2tMdlC10GC_QX_sdxDyUF1TGW_NjaMftAto0NDXoCe7HvZawNA=w240-h480-rw"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </Box>
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
                <Collapse startingHeight={70} in={show === index}>
                  <Text>{el.description}</Text>
                </Collapse>
                <Button size="sm" onClick={() => handleToggle(index)} mt="1rem">
                  Show {show === index ? "Less" : "More"}
                </Button>
              </Stack>
              <Flex flexDir="column" gap="10px" mt="30px">
                <Button
                  variant="outline"
                  borderRadius="md"
                  colorScheme="gray"
                  fontWeight="bold"
                  leftIcon={<Icon as={FaApple} boxSize={5} />}
                  w="100%"
                  onClick={() => {
                    handleButtonClick(el.linkAppStore);
                  }}
                >
                  App Store
                </Button>
                <Button
                  variant="outline"
                  borderRadius="md"
                  colorScheme="gray"
                  fontWeight="bold"
                  leftIcon={<Icon as={FaGooglePlay} boxSize={5} />}
                  w="100%"
                  onClick={() => {
                    handleButtonClick(el.linkGooglePlay);
                  }}
                >
                  Google Play
                </Button>
                {el.linkGitHub && (
                  <Button
                    variant="outline"
                    borderRadius="md"
                    colorScheme="gray"
                    fontWeight="bold"
                    leftIcon={<Icon as={FaGithub} boxSize={6} />}
                    w="100%"
                    onClick={() => {
                      handleButtonClick(el.linkGitHub);
                    }}
                  >
                    <Flex align="center">
                      <Text fontWeight="bold">GitHub</Text>
                    </Flex>
                  </Button>
                )}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
