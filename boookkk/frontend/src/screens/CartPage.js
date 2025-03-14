import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  Button,
  VStack,
  HStack
} from "@chakra-ui/react";
import books from "../assets/books.jpg";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  // Mock data: Replace with dynamic data in a real application
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Harry Potter",
      author: "J. K. Rowling",
      price: 450,
      image: books,
      quantity: 1
    }
  ]);

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box
      bgColor='whitesmoke'
      padding='20px'
    >
      <Heading
        textAlign='center'
        marginBottom='20px'
      >
        Your Cart
      </Heading>

      {cartItems.length > 0 ? (
        <VStack
          spacing='20px'
          align='stretch'
        >
          {cartItems.map((item) => (
            <Box
              key={item.id}
              bg='white'
              borderRadius='lg'
              boxShadow='md'
              padding='20px'
            >
              <HStack spacing='20px'>
                <Image
                  src={item.image}
                  alt={item.name}
                  borderRadius='lg'
                  width='150px'
                />
                <Box>
                  <Heading size='md'>{item.name}</Heading>
                  <Text>
                    <strong>Author:</strong> {item.author}
                  </Text>
                  <Text
                    color='blue.600'
                    fontSize='lg'
                  >
                    Price: ${item.price}
                  </Text>
                  <Text>
                    <strong>Quantity:</strong> {item.quantity}
                  </Text>
                  <Button
                    colorScheme='red'
                    variant='outline'
                    size='sm'
                    marginTop='10px'
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </HStack>
            </Box>
          ))}

          <Divider />

          <Box textAlign='right'>
            <Text
              fontSize='xl'
              fontWeight='bold'
            >
              Total: ${totalPrice}
            </Text>
          </Box>
          <HStack justify='space-between'>
            <Button
              colorScheme='blue'
              onClick={() => navigate("/home")}
            >
              Continue Shopping
            </Button>
            <Button colorScheme='green'>Checkout</Button>
          </HStack>
        </VStack>
      ) : (
        <Text
          textAlign='center'
          fontSize='lg'
        >
          Your cart is empty. <br />
          <Button
            colorScheme='blue'
            marginTop='10px'
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </Text>
      )}
    </Box>
  );
};

export default CartPage;
