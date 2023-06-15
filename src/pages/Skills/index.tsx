import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  SkillsListBack,
  SkillsListFront,
  SkillsListMobile,
} from "../../data/Skills";

const Skills: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Box
      id="skills"
      display="flex"
      flexDir="column"
      mt={isMobile ? "0" : "45px"}
    >
      <Text fontSize="5xl" mt="50px" mb="60px">
        Skills
      </Text>
      <Flex gap={isMobile ? "20px" : "16px"} flexWrap="wrap">
        <Card w={isMobile ? "100%" : "260px"}>
          <CardHeader>
            <Text fontSize="3xl">Front-end</Text>
          </CardHeader>
          <CardBody>
            {SkillsListFront.map((el, index) => (
              <Box key={index} mt="15px">
                <Text fontWeight="bold">{el.name}</Text>
                <Progress
                  colorScheme="gray"
                  size="lg"
                  value={el.value}
                  borderRadius="30px"
                />
              </Box>
            ))}
          </CardBody>
        </Card>
        <Card w={isMobile ? "100%" : "260px"}>
          <CardHeader>
            <Text fontSize="3xl">Back-end</Text>
          </CardHeader>
          <CardBody>
            {SkillsListBack.map((el, index) => (
              <Box key={index} mt="15px">
                <Text fontWeight="bold">{el.name}</Text>
                <Progress
                  colorScheme="gray"
                  size="lg"
                  value={el.value}
                  borderRadius="30px"
                />
              </Box>
            ))}
          </CardBody>
        </Card>
        <Card w={isMobile ? "100%" : "260px"}>
          <CardHeader>
            <Text fontSize="3xl">Mobile</Text>
          </CardHeader>
          <CardBody>
            {SkillsListMobile.map((el, index) => (
              <Box key={index} mt="15px">
                <Text fontWeight="bold">{el.name}</Text>
                <Progress
                  colorScheme="gray"
                  size="lg"
                  value={el.value}
                  borderRadius="30px"
                />
              </Box>
            ))}
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default Skills;
