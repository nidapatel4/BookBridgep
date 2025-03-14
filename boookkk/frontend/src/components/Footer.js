import { Box } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

const Footer = () => {
  const currentDate = moment().format("YYYY");
  return (
    <Box
      bgColor='whitesmoke'
      padding='10px'
      textAlign='center'
    >
      All rights reserved. Copyright {currentDate}
    </Box>
  );
};

export default Footer;
