import React, { useState } from 'react';
import {
  Center,
  Box,
  Toast,
  Flex,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Link,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignupPage = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name) {
      return handleError('Name is required');
    }

    if (!email) {
      return handleError('Email is required');
    }

    if (!password) {
      return handleError('Password is required');
    }
    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        return handleError('User Already Existed');
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Box
      display='flex'
      bgColor='white'
      alignItems='center'
      justifyContent='center'>
      <Box
        bgColor='lightblue'
        height='500px'
        width='400px'
        color='black'
        margin='100px'
        padding='10px'
        alignItems='center'
        justifyContent='center'
        borderRadius='10px'
        align='center'>
        <FormLabel
          fontSize='x-large'
          fontWeight='bolder'
          alignItems='center'
          textAlign='center'
          margin='20px'>
          SIGN UP
        </FormLabel>

        {/* Name */}

        <FormLabel marginTop='10px'>Name: </FormLabel>
        <Input
          onChange={handleChange}
          type='text'
          name='name'
          _hover={{ border: '1px solid black' }}
          bgColor='white'
          placeholder='Name'
          value={signupInfo.name}
        />

        {/* Email */}

        <FormLabel marginTop='10px'>Email: </FormLabel>
        <Input
          onChange={handleChange}
          type='text'
          name='email'
          _hover={{ border: '1px solid black' }}
          bgColor='white'
          placeholder='Email'
          value={signupInfo.email}
        />

        {/* Password */}

        <FormLabel marginTop='10px'>Password: </FormLabel>
        <Input
          onChange={handleChange}
          type='text'
          name='password'
          _hover={{ border: '1px solid black' }}
          bgColor='white'
          placeholder='Password'
          value={signupInfo.password}
        />

        {/* SignUp Button */}

        <Button
          bgColor='whitesmoke'
          padding='0px 30px'
          borderRadius='20px'
          marginTop='50px'
          alignItems='center'
          border='0px solid black'
          _hover={{ border: '1px solid black' }}
          onClick={handleSignupPage}>
          SignUp
        </Button>
        <Text textAlign='center' marginTop='5px'>
          Have an account?
          <Link color='orange' onClick={() => navigate('/login')}>
            Login
          </Link>
        </Text>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default Signup;
