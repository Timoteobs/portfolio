import { Box, Text, Fade } from "@chakra-ui/react";
import React from "react";

const { innerHeight, innerWidth } = window;

const About: React.FC = () => {
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
          <Text fontSize="6xl" mb="45px" textAlign="center">
            TIMÓTEO BARROS SILVEIRA
          </Text>
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
