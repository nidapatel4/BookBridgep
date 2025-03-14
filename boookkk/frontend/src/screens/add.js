import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
    <Box bgColor="whitesmoke" padding="20px" minH="100vh">
      <Heading textAlign="center" mb="20px">Add New User</Heading>

      <Box width="400px" margin="auto" padding="20px" bg="white" shadow="md" borderRadius="md">
        <FormControl mb="4">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter user name" />
        </FormControl>
        
        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter email" />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Role</FormLabel>
          <Input placeholder="User / Admin" />
        </FormControl>

        <Button colorScheme="blue" width="full" mt="4">Add User</Button>
        <Button colorScheme="gray" width="full" mt="2" onClick={() => navigate("/manage-users")}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
