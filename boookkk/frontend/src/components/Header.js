import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import Login from "../screens/Login";
import {
  Box,
  List,
  ListItem,
  Text,
  Image,
  Link,
  Stack,
  Avatar
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged Out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const navigate = useNavigate();
  return (
    <Box
      display='grid'
      gridTemplateColumns='13fr 1fr 1fr '
      bgColor='lightblue'
    >
      <Image
        src={logo}
        alt='Dan Abramov'
        boxSize='90px'
        width='150px'
        borderRadius='200px'
        padding='5px'
        onClick={() => navigate("/home")}
      />
      <List
        display='flex'
        gap='30px'
        marginRight='40px'
        padding='10px'
        fontSize='large'
        marginTop='20px'
      >
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={() => navigate("/home")}
        >
          Home
        </ListItem>
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={() => navigate("/SellRentPage1")}
        >
          Sell/Rent
        </ListItem>
        /
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={() => navigate("/BuyPage")}
        >
          Buy
        </ListItem>
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
        >
          About
        </ListItem>
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={() => navigate("/CartPage")}
        >
          Cart
        </ListItem>
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </ListItem>
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "all 0.9s ease-in"
          }}
          onClick={handleLogout}
        >
          Logout
        </ListItem>
      </List>
      <Stack
        display='grid'
        marginTop='20px'
        direction='row'
      >
        <Avatar
          src='https://bit.ly/broken-link'
          alignItems='center'
        />
        <Text
          marginBottom='2px'
          textAlign='left'
          fontSize='xs'
        >
          <strong>{loggedInUser}</strong>
        </Text>
      </Stack>
      <ToastContainer />
    </Box>
  );
};
export default Header;
