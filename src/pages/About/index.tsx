import {
  Box,
  Text,
  Fade,
  HStack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGoogle, FaWhatsapp } from "react-icons/fa";
const { innerHeight, innerWidth } = window;

const About: React.FC = () => {
  const toast = useToast();

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  const copyToEmail = () => {
    navigator.clipboard
      .writeText("timoteo.barross@gmail.com")
      .then(() => {
        toast({
          title: "Copied",
          description: "timoteo.barross@gmail.com",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return (
    <Box
      id="about"
      h={innerHeight + "px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box maxW={innerWidth / 2 + "px"}>
        <Fade in={true}>
          <Text fontSize="6xl" textAlign="center">
            TIMÓTEO BARROS SILVEIRA
          </Text>
          <Box
            w="100%"
            alignItems="center"
            justifyContent="center"
            display="flex"
            mb="45px"
          >
            <HStack spacing={4}>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                colorScheme="gray"
                onClick={() =>
                  handleButtonClick(
                    "https://www.linkedin.com/in/tim%C3%B3teo-barros-4b8a1b159/"
                  )
                }
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaGoogle />}
                variant="ghost"
                colorScheme="gray"
                onClick={copyToEmail}
              />
              <IconButton
                aria-label="WhatsApp"
                icon={<FaWhatsapp />}
                variant="ghost"
                colorScheme="gray"
                onClick={() =>
                  handleButtonClick(
                    "https://api.whatsapp.com/send?phone=5581982251528"
                  )
                }
              />
            </HStack>
          </Box>
        </Fade>
        <Box>
          <Text mb="20px" textAlign="center">
            Em resumo, ser um entusiasta do desenvolvimento é uma parte
            intrínseca de quem eu sou. A paixão, a curiosidade e a vontade de
            aprender são o combustível que impulsiona minha jornada como
            desenvolvedor mobile e front-end. Estou constantemente em busca de
            novos desafios, projetos emocionantes e oportunidades para levar
            minhas habilidades a novos patamares.
          </Text>
          <Text textAlign="center">
            A paixão pelo desenvolvimento de software não se limita apenas à
            minha própria jornada, mas também à capacidade de influenciar
            positivamente aqueles que estão começando. Acredito que, ao
            compartilhar conhecimento e oferecer suporte, podemos criar um
            ambiente mais inclusivo e colaborativo, onde todos têm a
            oportunidade de crescer e prosperar como desenvolvedores.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
