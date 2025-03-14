import React, { useState } from "react";
import {
  Box,
  Input,
  FormLabel,
  Button,
  Text,
  Link,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const [adminLoginInfo, setAdminLoginInfo] = useState({
    adminId: "",
    password: ""
  });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "user") {
      setLoginInfo((prev) => ({ ...prev, [name]: value }));
    } else if (type === "admin") {
      setAdminLoginInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async (e, type) => {
    e.preventDefault();
    const url =
      type === "user"
        ? `http://localhost:8080/auth/login`
        : `http://localhost:8080/admin/login`;
    const data = type === "user" ? loginInfo : adminLoginInfo;

    // if (!data.email || !data.password || (type === "admin" && !data.adminId)) {
    //   return handleError("All fields are required");
    // } else
    if (loginInfo.password !== data.password) {
      return handleError("Wrong password or email");
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        if (type === "user") {
          localStorage.setItem("loggedInUser", name);
          navigate("/home");
        } else {
          localStorage.setItem("admin", name);
          navigate("/adminpanel");
        }
      }
    } catch (err) {
      handleError(err);
    }
  };

  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Box
      display='flex'
      flexDirection='row'
      bgColor='white'
      alignItems='center'
      justifyContent='center'
      padding='50px'
    >
      {/* User Login Box */}
      <Box
        bgColor='lightblue'
        height='500px'
        width='400px'
        color='black'
        margin='20px'
        padding='20px'
        borderRadius='10px'
        align='center'
      >
        <FormLabel
          fontSize='x-large'
          fontWeight='bolder'
          textAlign='center'
        >
          Login as User
        </FormLabel>

        {/* Email */}
        <FormLabel marginTop='10px'>Email: </FormLabel>
        <Input
          onChange={(e) => handleChange(e, "user")}
          type='text'
          name='email'
          bgColor='white'
          placeholder='Email'
          value={loginInfo.email}
        />

        {/* Password */}
        <FormLabel marginTop='10px'>Password: </FormLabel>
        <Input
          onChange={(e) => handleChange(e, "user")}
          type='password'
          name='password'
          bgColor='white'
          placeholder='Password'
          value={loginInfo.password}
        />

        {/* Login Button */}
        <Button
          bgColor='whitesmoke'
          padding='0px 30px'
          borderRadius='20px'
          marginTop='50px'
          onClick={(e) => handleLogin(e, "user")}
        >
          Login
        </Button>
        <Text
          textAlign='center'
          marginTop='5px'
        >
          Don't have an account?
          <Link
            color='orange'
            onClick={() => navigate("/signup")}
          >
            {" "}
            Register here!
          </Link>
        </Text>
      </Box>

      {/* Admin Login Box */}
      <Box
        bgColor='lightcoral'
        height='500px'
        width='400px'
        color='black'
        margin='20px'
        padding='20px'
        borderRadius='10px'
        align='center'
      >
        <FormLabel
          fontSize='x-large'
          fontWeight='bolder'
          textAlign='center'
        >
          Login as Admin
        </FormLabel>

        {/* Admin ID */}
        <FormLabel marginTop='10px'>Admin ID: </FormLabel>
        <Input
          onChange={(e) => handleChange(e, "admin")}
          type='text'
          name='adminId'
          bgColor='white'
          placeholder='Admin ID'
          value={adminLoginInfo.adminId}
        />

        {/* Password */}
        <FormLabel marginTop='10px'>Password: </FormLabel>
        <Input
          onChange={(e) => handleChange(e, "admin")}
          type='password'
          name='password'
          bgColor='white'
          placeholder='Password'
          value={adminLoginInfo.password}
        />

        {/* Login Button */}
        <Button
          bgColor='whitesmoke'
          padding='0px 30px'
          borderRadius='20px'
          marginTop='50px'
          onClick={(e) => handleLogin(e, "admin")}
        >
          Login
        </Button>
      </Box>

      <ToastContainer />
    </Box>
  );
}

export default Login;
