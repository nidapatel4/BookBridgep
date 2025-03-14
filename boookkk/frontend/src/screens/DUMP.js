//     <Box
//       display='flex'
//       bgColor='white'
//       alignItems='center'
//       justifyContent='center'
//     >
//       <Box
//         bgColor='lightblue'
//         height='500px'
//         width='400px'
//         color='black'
//         margin='100px'
//         padding='10px'
//         alignItems='center'
//         justifyContent='center'
//         borderRadius='10px'
//         align='center'
//       >
//         <FormLabel
//           fontSize='x-large'
//           fontWeight='bolder'
//           alignItems='center'
//           textAlign='center'
//           margin='20px'
//         >
//           SIGN UP
//         </FormLabel>

//         {/* Name */}

//         <FormControl
//           isRequired
//           onSubmit={handleSignup}
//         >
//           <FormLabel marginTop='10px'>Name: </FormLabel>
//           <Input
//             onChange={handleChange}
//             type='text'
//             name='name'
//             _hover={{ border: "1px solid black" }}
//             bgColor='white'
//             placeholder='Name'
//             value={signupInfo.name}
//           />

//           {/* EMAIL */}

//           <FormLabel marginTop='10px'>Email: </FormLabel>
//           <Input
//             onChange={handleChange}
//             type='text'
//             name='email'
//             _hover={{ border: "1px solid black" }}
//             bgColor='white'
//             placeholder='Email'
//             value={signupInfo.email}
//           />

//           {/* Password */}

//           <FormLabel marginTop='10px'>Password: </FormLabel>
//           <Input
//             onChange={handleChange}
//             type='text'
//             name='password'
//             _hover={{ border: "1px solid black" }}
//             bgColor='white'
//             placeholder='Password'
//             value={signupInfo.password}
//           />

//           {/* SignUp Button */}

//           <Button
//             type='submit'
//             bgColor='whitesmoke'
//             padding='0px 30px'
//             borderRadius='20px'
//             marginTop='50px'
//             alignItems='center'
//             border='0px solid black'
//             _hover={{ border: "1px solid black" }}
//           >
//             SignUp
//           </Button>
//           <Text
//             textAlign='center'
//             marginTop='5px'
//           >
//             Have an account?
//             <Link
//               color='orange'
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </Link>
//           </Text>
//         </FormControl>
//       </Box>
//     </Box>
//   );
// }

// LOGIN

// import React, { useState } from "react";
// import {
//   Center,
//   Box,
//   Flex,
//   Text,
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Link,
//   Button
// } from "@chakra-ui/react";
// import { Navigate, useNavigate } from "react-router";

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <Box
//       display='flex'
//       bgColor='white'
//       alignItems='center'
//       justifyContent='center'
//     >
//       <Box
//         bgColor='lightblue'
//         height='500px'
//         width='400px'
//         color='black'
//         margin='100px'
//         padding='10px'
//         alignItems='center'
//         justifyContent='center'
//         borderRadius='10px'
//         align='center'
//       >
//         <FormLabel
//           fontSize='x-large'
//           fontWeight='bolder'
//           alignItems='center'
//           textAlign='center'
//           margin='20px'
//         >
//           LOGIN
//         </FormLabel>

//         {/* EMAIL */}

//         <FormControl isRequired>
//           <FormLabel marginTop='10px'>Email: </FormLabel>
//           <Input
//             _hover={{ border: "1px solid black" }}
//             bgColor='white'
//             placeholder='Email'
//           />
//         </FormControl>

//         {/* Password */}

//         <FormControl isRequired>
//           <FormLabel marginTop='10px'>Password: </FormLabel>
//           <Input
//             _hover={{ border: "1px solid black" }}
//             bgColor='white'
//             placeholder='Password'
//           />
//         </FormControl>

//         <Box display='grid'>
//           <Button
//             type='submit'
//             bgColor='whitesmoke'
//             padding='0px 30px'
//             borderRadius='20px'
//             marginTop='50px'
//             alignItems='center'
//             border='0px solid black'
//             _hover={{ border: "1px solid black" }}
//           >
//             Login
//           </Button>
//           <Text
//             textAlign='center'
//             marginTop='5px'
//           >
//             Need an account?{" "}
//             <Link
//               color='orange'
//               onClick={() => navigate("/signup")}
//             >
//               Register
//             </Link>
//           </Text>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Login;
