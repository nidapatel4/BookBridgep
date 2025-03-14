import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  Button
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SellRentPage1 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/SellRentPage2"); // Redirects to the Sell/Rent page
  };

  return (
    <Box
      bgColor='whitesmoke'
      minH='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding='20px'
    >
      {/* Center-Aligned Heading */}
      <VStack
        spacing='4'
        textAlign='center'
        mb='10'
      >
        <Heading
          as='h1'
          size='xl'
        >
          List Your Book for Sale or Rent
        </Heading>
        <Text
          fontSize='lg'
          color='gray.600'
        >
          Fill out the details to create your listing.
        </Text>
      </VStack>

      {/* Dropdown Table */}
      <Box
        bgColor='white'
        borderRadius='md'
        boxShadow='lg'
        p='6'
        w={["90%", "60%", "40%"]}
      >
        <Heading
          as='h3'
          size='md'
          textAlign='center'
          mb='6'
        >
          Choose which year's book you want to sell or rent
        </Heading>

        {/* Dropdowns */}
        <VStack
          spacing='4'
          align='stretch'
        >
          {/* First Year */}
          <HStack>
            <Text
              flex='1'
              fontWeight='bold'
            >
              First Year:
            </Text>
            <Select
              placeholder='Select Semester'
              onChange={(e) => handleRedirect()}
            >
              <option value='sem1'>Semester 1</option>
              <option value='sem2'>Semester 2</option>
            </Select>
          </HStack>

          {/* Second Year */}
          <HStack>
            <Text
              flex='1'
              fontWeight='bold'
            >
              Second Year:
            </Text>
            <Select
              placeholder='Select Semester'
              onChange={(e) => handleRedirect()}
            >
              <option value='sem3'>Semester 3</option>
              <option value='sem4'>Semester 4</option>
            </Select>
          </HStack>

          {/* Third Year */}
          <HStack>
            <Text
              flex='1'
              fontWeight='bold'
            >
              Third Year:
            </Text>
            <Select
              placeholder='Select Semester'
              onChange={(e) => handleRedirect()}
            >
              <option value='sem5'>Semester 5</option>
              <option value='sem6'>Semester 6</option>
            </Select>
          </HStack>

          {/* Fourth Year */}
          <HStack>
            <Text
              flex='1'
              fontWeight='bold'
            >
              Fourth Year:
            </Text>
            <Select
              placeholder='Select Semester'
              onChange={(e) => handleRedirect()}
            >
              <option value='sem7'>Semester 7</option>
              <option value='sem8'>Semester 8</option>
            </Select>
          </HStack>
        </VStack>

        {/* Add More or Instructions */}
        <Text
          mt='4'
          textAlign='center'
          color='gray.500'
          fontSize='sm'
        >
          Select the semester and proceed to list your book for sale or rent.
        </Text>
      </Box>
    </Box>
  );
};

export default SellRentPage1;
