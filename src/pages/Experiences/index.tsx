import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ExperienceList } from "../../data/Experiences";
import { useMediaQuery } from "react-responsive";

const Experiences: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Box
      minH={isMobile ? "auto" : "100vh"}
      id="experiences"
      display="flex"
      flexDir="column"
      mt={isMobile ? "0" : "45px"}
    >
      <Text fontSize="5xl" mt="30px" mb="60px">
        Experiences
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns={
          isMobile ? "1fr" : "repeat(auto-fill, minmax(200px, 1fr))"
        }
      >
        {ExperienceList.sort((a, b) => a.order - b.order).map(
          (experience, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size="md">{experience.title}</Heading>
                <Text fontSize="md">{experience.company}</Text>
                <Text fontSize="sm">{experience.date}</Text>
              </CardHeader>
              <CardBody>
                <Text>{experience.office}</Text>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          )
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Experiences;
