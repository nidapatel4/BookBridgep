import React from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";
import books from "../assets/books.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      bgColor='whitesmoke'
      padding='20px'
    >
      {/* Title and Dropdown */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginBottom='20px'
      >
        <Text
          paddingLeft='600px'
          textAlign='center'
          fontSize='xx-large'
        >
          <strong>Want to Buy a Book?</strong>
        </Text>
        {/* <FormControl
          width='200px'
          alignItems='flex-end'
        >
          <Select placeholder='Categories'>
            <option value='year'>Year</option>
            <option value='sem'>Semester</option>
            <option value='subject'>Subject</option>
          </Select>
        </FormControl> */}
      </Box>

      {/* Search Bar */}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        margin='40px 0'
      >
        <FormControl width='50%'>
          <Input
            type='text'
            placeholder='Search'
            // borderRadius='20px'
            textAlign='center'
            borderColor='blackAlpha.500'
          />
        </FormControl>
        <FormControl
          width='200px'
          alignItems='flex-end'
          paddingLeft='10px'
        >
          <Select
            placeholder='Categories'
            borderColor='blackAlpha.500'
          >
            <option value='year'>Year</option>
            <option value='sem'>Semester</option>
            <option value='subject'>Subject</option>
          </Select>
        </FormControl>
      </Box>

      {/* Recommendations */}
      <Text
        fontSize='large'
        fontWeight='bold'
        marginBottom='10px'
      >
        Recommended Books:
      </Text>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing='10px'
        marginBottom='20px'
      >
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            onClick={() => navigate("/product")}
            cursor='pointer'
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out"
            }}
          >
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src={books}
                  alt='Books'
                  borderRadius='lg'
                />
                <Stack
                  mt='6'
                  spacing='3'
                >
                  <Heading size='md'>Book Title</Heading>
                  <Text>
                    Name: Book Title <br />
                    Author: Author Name <br />
                  </Text>
                  <Text
                    color='blue.600'
                    fontSize='2xl'
                  >
                    $Price
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>

      {/* Items */}
      {/* <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing='10px'
      >
        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            onClick={() => navigate("/product")}
            cursor='pointer'
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out"
            }}
          >
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src={books}
                  alt='Books'
                  borderRadius='lg'
                />
                <Stack
                  mt='6'
                  spacing='3'
                >
                  <Heading size='md'>Harry Potter</Heading>
                  <Text>
                    Name: Harry Potter <br />
                    Author: J. K. Rowling <br />
                  </Text>
                  <Text
                    color='blue.600'
                    fontSize='2xl'
                  >
                    $450
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid> */}
    </Box>
  );
};

export default Home;
