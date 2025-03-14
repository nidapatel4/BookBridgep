// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const ManageUsers = () => {
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Heading textAlign="center" mb="20px">
//         Manage Users
//       </Heading>
//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/admin")}>Dashboard</Button>
//             <Button colorScheme="blue" variant="ghost">Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost">Manage Book Listings</Button>
//             <Button colorScheme="blue" variant="ghost">Rental Management</Button>
//             <Button colorScheme="blue" variant="ghost">Settings</Button>
//             <Button colorScheme="red" onClick={() => navigate("/login")}>Logout</Button>
//           </Stack>
//         </Box>

//         {/* Main Content */}
//         <Box flex="1" p="6">
//           <Card>
//             <CardBody>
//               <Table variant="simple">
//                 <Thead>
//                   <Tr>
//                     <Th>ID</Th>
//                     <Th>Name</Th>
//                     <Th>Email</Th>
//                     <Th>Role</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {users.map((user) => (
//                     <Tr key={user.id}>
//                       <Td>{user.id}</Td>
//                       <Td>{user.name}</Td>
//                       <Td>{user.email}</Td>
//                       <Td>{user.role}</Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ManageUsers;
// 
// import React from "react"; 
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Flex,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const ManageUsers = () => {
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
//     { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
//     { id: 5, name: "Tom Hardy", email: "tom@example.com", role: "Admin" },
//     { id: 6, name: "Emma Watson", email: "emma@example.com", role: "User" },
//     { id: 7, name: "Michael Scott", email: "michael@example.com", role: "Admin" },
//     { id: 8, name: "Dwight Schrute", email: "dwight@example.com", role: "User" },
//     { id: 9, name: "Jim Halpert", email: "jim@example.com", role: "User" },
//     { id: 10, name: "Pam Beesly", email: "pam@example.com", role: "User" },
//     { id: 11, name: "Ryan Howard", email: "ryan@example.com", role: "User" },
//     { id: 12, name: "Kelly Kapoor", email: "kelly@example.com", role: "User" },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Flex justify="space-between" align="center" mb="20px">
//         <Heading>Manage Users</Heading>
//         <Stack direction="row" spacing={4}>
//           <Button colorScheme="green" onClick={() => navigate("/add")}>Add User</Button>
//           <Button colorScheme="red">Delete User</Button>
//           <Button colorScheme="blue">Update User</Button>
//         </Stack>
//       </Flex>

//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost"onClick={() => navigate("/manage-books")}>Manage Books Listings</Button>
//             <Button colorScheme="blue" variant="ghost"onClick={() => navigate("/rental-management")}>Rental Management</Button>
//             <Button colorScheme="blue" variant="ghost"onClick={() => navigate("/settings")}>Settings</Button>
//             <Button colorScheme="red" onClick={() => navigate("/login")}>Logout</Button>
//           </Stack>
//         </Box>

//         {/* Main Content */}
//         <Box flex="1" p="6">
//           <Card>
//             <CardBody overflowY="auto" maxH="500px">
//               <Table variant="simple">
//                 <Thead>
//                   <Tr>
//                     <Th>ID</Th>
//                     <Th>Name</Th>
//                     <Th>Email</Th>
//                     <Th>Role</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {users.map((user) => (
//                     <Tr key={user.id}>
//                       <Td>{user.id}</Td>
//                       <Td>{user.name}</Td>
//                       <Td>{user.email}</Td>
//                       <Td>{user.role}</Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ManageUsers;




// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Flex,
//   VStack,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const ManageUsers = () => {
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
//     { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
//     { id: 5, name: "Tom Hardy", email: "tom@example.com", role: "Admin" },
//     { id: 6, name: "Emma Watson", email: "emma@example.com", role: "User" },
//     { id: 7, name: "Michael Scott", email: "michael@example.com", role: "Admin" },
//     { id: 8, name: "Dwight Schrute", email: "dwight@example.com", role: "User" },
//     { id: 9, name: "Jim Halpert", email: "jim@example.com", role: "User" },
//     { id: 10, name: "Pam Beesly", email: "pam@example.com", role: "User" },
//     { id: 11, name: "Ryan Howard", email: "ryan@example.com", role: "User" },
//     { id: 12, name: "Kelly Kapoor", email: "kelly@example.com", role: "User" },
//   ];

//   return (
//     <Box bgColor="gray.200" minH="100vh" display="flex" color="black">
//       {/* Sidebar */}
//       <Box w="240px" bg="gray.300" p={5} shadow="md" h="100vh" borderRight="1px solid #ccc">
//         <VStack align="start" spacing={4}>
//           <Heading size="md" mb={4} color="blue.600">Admin Panel</Heading>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/manage-users")}>Manage Users</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/manage-books")}>Manage Books</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/rental-management")}>Rentals</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/settings")}>Settings</Button>
//           <Button w="full" colorScheme="red" _hover={{ bg: "red.500" }} onClick={() => navigate("/login")}>Logout</Button>
//         </VStack>
//       </Box>

//       {/* Main Content */}
//       <Box flex={1} p={6}>
//         <Flex justify="space-between" align="center" mb={6}>
//           <Heading color="blue.700">Manage Users</Heading>
//           <Stack direction="row" spacing={4}>
//             <Button colorScheme="green" _hover={{ bg: "green.500" }} onClick={() => navigate("/add")}>Add User</Button>
//             <Button colorScheme="red" _hover={{ bg: "red.500" }}>Delete User</Button>
//             <Button colorScheme="blue" _hover={{ bg: "blue.500" }}>Update User</Button>
//           </Stack>
//         </Flex>

//         <Card p={4} shadow="md" bg="white" transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out" _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}>
//           <CardBody overflowY="auto" maxH="500px">
//             <Table variant="striped" colorScheme="gray">
//               <Thead bg="gray.300">
//                 <Tr>
//                   <Th>ID</Th>
//                   <Th>Name</Th>
//                   <Th>Email</Th>
//                   <Th>Role</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {users.map((user) => (
//                   <Tr key={user.id} _hover={{ bg: "gray.100" }}>
//                     <Td>{user.id}</Td>
//                     <Td>{user.name}</Td>
//                     <Td>{user.email}</Td>
//                     <Td>{user.role}</Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </CardBody>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default ManageUsers;



import React from "react"; 
import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
    { id: 5, name: "Tom Hardy", email: "tom@example.com", role: "Admin" },
    { id: 6, name: "Emma Watson", email: "emma@example.com", role: "User" },
    { id: 7, name: "Michael Scott", email: "michael@example.com", role: "Admin" },
    { id: 8, name: "Dwight Schrute", email: "dwight@example.com", role: "User" },
    { id: 9, name: "Jim Halpert", email: "jim@example.com", role: "User" },
    { id: 10, name: "Pam Beesly", email: "pam@example.com", role: "User" },
    { id: 11, name: "Ryan Howard", email: "ryan@example.com", role: "User" },
    { id: 12, name: "Kelly Kapoor", email: "kelly@example.com", role: "User" },
  ];

  return (
    <Box bgColor="gray.200" padding="20px" minH="100vh">
      <Flex justify="space-between" align="center" mb="20px">
        <Heading color="blue.700">Manage Users</Heading>
        <Stack direction="row" spacing={4}>
          <Button bg="green.300" _hover={{ bg: "green.400" }} onClick={() => navigate("/add")}>Add User</Button>
          <Button bg="red.300" _hover={{ bg: "red.400" }}>Delete User</Button>
          <Button bg="blue.300" _hover={{ bg: "blue.400" }}>Update User</Button>
        </Stack>
      </Flex>

      <Box display="flex">
        {/* Sidebar */}
        <Box w="240px" bg="gray.300" p="5" shadow="md" h="100vh" borderRight="1px solid #ccc">
          <VStack align="start" spacing={4}>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-users")}>Manage Users</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-books")}>Manage Books Listings</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/rental-management")}>Rental Management</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/settings")}>Settings</Button>
            <Button w="full" colorScheme="red" onClick={() => navigate("/login")}>Logout</Button>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="6">
          <Card bg="whiteAlpha.900" shadow="md" p={4}>
            <CardBody overflowY="auto" maxH="500px">
              <Table variant="striped" colorScheme="gray">
                <Thead bg="gray.300">
                  <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Role</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((user) => (
                    <Tr key={user.id} _hover={{ bg: "gray.100" }}>
                      <Td>{user.id}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.role}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageUsers;



// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Flex,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const ManageUsers = () => {
//   const navigate = useNavigate();

//   const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
//     { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
//     { id: 5, name: "Tom Hardy", email: "tom@example.com", role: "Admin" },
//     { id: 6, name: "Emma Watson", email: "emma@example.com", role: "User" },
//     { id: 7, name: "Michael Scott", email: "michael@example.com", role: "Admin" },
//     { id: 8, name: "Dwight Schrute", email: "dwight@example.com", role: "User" },
//     { id: 9, name: "Jim Halpert", email: "jim@example.com", role: "User" },
//     { id: 10, name: "Pam Beesly", email: "pam@example.com", role: "User" },
//     { id: 11, name: "Ryan Howard", email: "ryan@example.com", role: "User" },
//     { id: 12, name: "Kelly Kapoor", email: "kelly@example.com", role: "User" },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Flex justify="space-between" align="center" mb="20px">
//         <Heading>Manage Users</Heading>
//         <Stack direction="row" spacing={4}>
//           <Button colorScheme="green" onClick={() => navigate("/add")}>Add User</Button>
//           <Button colorScheme="red">Delete User</Button>
//           <Button colorScheme="blue">Update User</Button>
//         </Stack>
//       </Flex>

//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="gray.800" color="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>Manage Books Listings</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/rental-management")}>Rental Management</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>
//             <Button colorScheme="red" onClick={() => navigate("/login")}>Logout</Button>
//           </Stack>
//         </Box>

//         {/* Main Content */}
//         <Box flex="1" p="6">
//           <Card bg="gray.100">
//             <CardBody overflowY="auto" maxH="500px">
//               <Table variant="striped" colorScheme="gray">
//                 <Thead bg="gray.300">
//                   <Tr>
//                     <Th>ID</Th>
//                     <Th>Name</Th>
//                     <Th>Email</Th>
//                     <Th>Role</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {users.map((user, index) => (
//                     <Tr key={user.id} bg={index % 2 === 0 ? "white" : "gray.200"}>
//                       <Td>{user.id}</Td>
//                       <Td>{user.name}</Td>
//                       <Td>{user.email}</Td>
//                       <Td>{user.role}</Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ManageUsers;
