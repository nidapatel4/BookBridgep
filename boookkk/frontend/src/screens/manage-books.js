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

// const ManageBooks = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login");
//   };

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Heading textAlign="center" mb="20px">
//         Manage Book Listings
//       </Heading>
//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>
//               Dashboard
//             </Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>
//               Manage Users
//             </Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>
//               Manage Book Listings
//             </Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/rental-management")}>
//               Rental Management
//             </Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/settings")}>
//               Settings
//             </Button>
//             <Button colorScheme="red" onClick={handleLogout}>
//               Logout
//             </Button>
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
//                     <Th>Title</Th>
//                     <Th>Author</Th>
//                     <Th>Price</Th>
//                     <Th>Stock</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   <Tr>
//                     <Td>1</Td>
//                     <Td>The Great Gatsby</Td>
//                     <Td>F. Scott Fitzgerald</Td>
//                     <Td>$10</Td>
//                     <Td>5</Td>
//                   </Tr>
//                   <Tr>
//                     <Td>2</Td>
//                     <Td>To Kill a Mockingbird</Td>
//                     <Td>Harper Lee</Td>
//                     <Td>$12</Td>
//                     <Td>8</Td>
//                   </Tr>
//                 </Tbody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ManageBooks;


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

// const ManageBooks = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login");
//   };

//   const books = [
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$10", stock: 5 },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: "$12", stock: 8 },
//     { id: 3, title: "1984", author: "George Orwell", price: "$15", stock: 3 },
//     { id: 4, title: "Moby-Dick", author: "Herman Melville", price: "$18", stock: 7 },
//     { id: 5, title: "Pride and Prejudice", author: "Jane Austen", price: "$9", stock: 10 },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Flex justify="space-between" align="center" mb="20px">
//         <Heading>Manage Book Listings</Heading>
//         <Stack direction="row" spacing={4}>
//           <Button colorScheme="green" onClick={() => navigate("/add-book")}>Add Book</Button>
//           <Button colorScheme="red">Delete Book</Button>
//           <Button colorScheme="blue">Update Book</Button>
//         </Stack>
//       </Flex>

//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="gray.800" color="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>Manage Book Listings</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/rental-management")}>Rental Management</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>
//             <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
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
//                     <Th>Title</Th>
//                     <Th>Author</Th>
//                     <Th>Price</Th>
//                     <Th>Stock</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {books.map((book, index) => (
//                     <Tr key={book.id} bg={index % 2 === 0 ? "white" : "gray.200"}>
//                       <Td>{book.id}</Td>
//                       <Td>{book.title}</Td>
//                       <Td>{book.author}</Td>
//                       <Td>{book.price}</Td>
//                       <Td>{book.stock}</Td>
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

// export default ManageBooks;





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

// const ManageBooks = () => {
//   const navigate = useNavigate();

//   const books = [
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$10", stock: 5 },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: "$12", stock: 8 },
//     { id: 3, title: "1984", author: "George Orwell", price: "$15", stock: 3 },
//     { id: 4, title: "Moby Dick", author: "Herman Melville", price: "$9", stock: 4 },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Flex justify="space-between" align="center" mb="20px">
//         <Heading>Manage Book Listings</Heading>
//         <Stack direction="row" spacing={4}>
//           <Button colorScheme="green">Add Book</Button>
//           <Button colorScheme="red">Delete Book</Button>
//           <Button colorScheme="blue">Update Book</Button>
//         </Stack>
//       </Flex>

//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="gray.800" color="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>Manage Book Listings</Button>
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
//                     <Th>Title</Th>
//                     <Th>Author</Th>
//                     <Th>Price</Th>
//                     <Th>Stock</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   {books.map((book, index) => (
//                     <Tr key={book.id} bg={index % 2 === 0 ? "white" : "gray.200"}>
//                       <Td>{book.id}</Td>
//                       <Td>{book.title}</Td>
//                       <Td>{book.author}</Td>
//                       <Td>{book.price}</Td>
//                       <Td>{book.stock}</Td>
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

// export default ManageBooks;
 


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

const ManageBooks = () => {
  const navigate = useNavigate();

  return (
    <Box bgColor="gray.200" padding="20px" minH="100vh">
      <Flex justify="space-between" align="center" mb="20px">
        <Heading color="blue.700">Manage Book Listings</Heading>
        <Stack direction="row" spacing={4}>
          <Button bg="green.300" _hover={{ bg: "green.400" }}>Add Book</Button>
          <Button bg="red.300" _hover={{ bg: "red.400" }}>Delete Book</Button>
          <Button bg="blue.300" _hover={{ bg: "blue.400" }}>Update Book</Button>
        </Stack>
      </Flex>

      <Box display="flex">
        {/* Sidebar */}
        <Box w="240px" bg="gray.300" p="5" shadow="md" h="100vh" borderRight="1px solid #ccc">
          <VStack align="start" spacing={4}>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-users")}>Manage Users</Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-books")}>Manage Book Listings</Button>
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
                    <Th>Title</Th>
                    <Th>Author</Th>
                    <Th>Price</Th>
                    <Th>Stock</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr _hover={{ bg: "gray.100" }}>
                    <Td>1</Td>
                    <Td>The Great Gatsby</Td>
                    <Td>F. Scott Fitzgerald</Td>
                    <Td>$10</Td>
                    <Td>5</Td>
                  </Tr>
                  <Tr _hover={{ bg: "gray.100" }}>
                    <Td>2</Td>
                    <Td>To Kill a Mockingbird</Td>
                    <Td>Harper Lee</Td>
                    <Td>$12</Td>
                    <Td>8</Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageBooks;
