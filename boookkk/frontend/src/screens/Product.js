import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Stack,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import books from "../assets/books.jpg";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      bgColor='whitesmoke'
      padding='20px'
    >
      <Heading
        textAlign='center'
        marginBottom='20px'
      >
        Product Details
      </Heading>
      <SimpleGrid
        columns={[1, 2]}
        spacing='20px'
      >
        {/* Product Image */}
        <Image
          src={books}
          alt='Harry Potter'
          borderRadius='lg'
          maxWidth='400px'
          margin='auto'
        />
        {/* Product Info */}
        <Box>
          <Heading size='lg'>Harry Potter</Heading>
          <Text
            fontSize='lg'
            marginY='10px'
          >
            <strong>Author:</strong> J. K. Rowling
          </Text>
          <Text
            fontSize='lg'
            marginY='10px'
          >
            <strong>Description:</strong> A magical tale of friendship and
            bravery.
          </Text>
          <Text
            fontSize='2xl'
            color='blue.600'
            marginY='20px'
          >
            Price: $450
          </Text>
          <Divider marginY='20px' />
          <Stack
            direction='row'
            spacing='10px'
          >
            <Button
              onClick={() => navigate("/CartPage")}
              colorScheme='blue'
              variant='solid'
            >
              Add to Cart
            </Button>
            <Button
              colorScheme='blue'
              variant='outline'
              onClick={() => navigate("/home")}
            >
              Back to Home
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductPage;
