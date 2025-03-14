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
  Input
} from "@chakra-ui/react";
import books from "../assets/books.jpg";
import { useNavigate } from "react-router-dom";

const BuyPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      bgColor='whitesmoke'
      padding='20px'
    >
      {/* Search Bar */}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginBottom='40px'
      >
        <FormControl width='50%'>
          <Input
            type='text'
            placeholder='Search for Books'
            borderRadius='20px'
            textAlign='center'
          />
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

      {/* All Books */}
      <Text
        fontSize='large'
        fontWeight='bold'
        marginBottom='10px'
      >
        All Books:
      </Text>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing='10px'
      >
        {[...Array(12)].map((_, index) => (
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
    </Box>
  );
};

export default BuyPage;
