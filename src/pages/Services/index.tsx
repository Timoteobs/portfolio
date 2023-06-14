import { Box } from "@chakra-ui/react";
import React from "react";

const { innerHeight, innerWidth } = window;

const Services: React.FC = () => {
  return (
    <Box h={innerHeight + "px"} id="services">
      <h2>Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </Box>
  );
};

export default Services;
