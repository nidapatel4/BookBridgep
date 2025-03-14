//  import React, { useState } from "react";
// import {
//     Box,
//     Card,
//     CardBody,
//     Stack,
//     Heading,
//     Button,
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//   } from "@chakra-ui/react";
//   import { useNavigate } from "react-router-dom";
  
//   const AdminPanel = () => {
//     const navigate = useNavigate();
//     const [users, setUsers] = useState([
//       { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
//       { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
//     ]);
  
//     const handleLogout = () => {
//       console.log("Admin Logged Out");
//       navigate("/login"); // Redirect to login page
//     };
  
//     return (
//       <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//         <Heading textAlign="center" mb="20px">
//           Admin Dashboard
//         </Heading>
//         <Box display="flex">
//           {/* Sidebar */}
//           <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//             <Stack spacing={4}>
//               <Button colorScheme="blue" variant="ghost">
//                 Dashboard
//               </Button>
//               <Button colorScheme="blue" variant="ghost">
//                 Manage Users
//               </Button>
//               <Button colorScheme="blue" variant="ghost">
//                 Settings
//               </Button>
//               <Button colorScheme="red" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </Stack>
//           </Box>
  
//           {/* Main Content */}
//           <Box flex="1" p="6">
//             <Heading size="lg" mb="4">
//               User Management
//             </Heading>
  
//             {/* User Table */}
//             <Card>
//               <CardBody>
//                 <Table variant="simple">
//                   <Thead>
//                     <Tr>
//                       <Th>ID</Th>
//                       <Th>Name</Th>
//                       <Th>Email</Th>
//                       <Th>Role</Th>
//                     </Tr>
//                   </Thead>
//                   <Tbody>
//                     {users.map((user) => (
//                       <Tr key={user.id}>
//                         <Td>{user.id}</Td>
//                         <Td>{user.name}</Td>
//                         <Td>{user.email}</Td>
//                         <Td>{user.role}</Td>
//                       </Tr>
//                     ))}
//                   </Tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Box>
//         </Box>
//       </Box>
//     );
//   };
  
//   export default AdminPanel;





// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   SimpleGrid,
//   Icon,
//   Text,
// } from "@chakra-ui/react";
// import { FaUsers, FaBook, FaClipboardList, FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Heading textAlign="center" mb="20px">
//         Admin Dashboard
//       </Heading>
//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//             <Button colorScheme="blue" variant="ghost">
//               Dashboard
//             </Button>
//             <Button colorScheme="blue" variant="ghost">
//               Manage Users
//             </Button>
//             <Button colorScheme="blue" variant="ghost">
//               Settings
//             </Button>
//             <Button colorScheme="red" onClick={handleLogout}>
//               Logout
//             </Button>
//           </Stack>
//         </Box>

//         {/* Main Content */}
//         <Box flex="1" p="6">
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaUsers} boxSize={10} color="blue.500" />
//                 <Heading size="md" mt={3}>Users</Heading>
//                 <Text fontSize="xl" fontWeight="bold">1,234</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaClipboardList} boxSize={10} color="orange.500" />
//                 <Heading size="md" mt={3}>Pending Requests</Heading>
//                 <Text fontSize="xl" fontWeight="bold">45</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaBook} boxSize={10} color="green.500" />
//                 <Heading size="md" mt={3}>Total Books</Heading>
//                 <Text fontSize="xl" fontWeight="bold">5,678</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaShoppingCart} boxSize={10} color="red.500" />
//                 <Heading size="md" mt={3}>Books Sold/Rented</Heading>
//                 <Text fontSize="xl" fontWeight="bold">1,289</Text>
//               </CardBody>
//             </Card>
//           </SimpleGrid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminPanel;


// 


//2nd

// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   SimpleGrid,
//   Icon,
//   Text,
// } from "@chakra-ui/react";
// import {
//   FaUsers,
//   FaBook,
//   FaClipboardList,
//   FaShoppingCart,
//   FaList,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Heading textAlign="center" mb="20px">
//         Admin Dashboard
//       </Heading>
//       <Box display="flex">
//         {/* Sidebar */}
//         <Box w="250px" bg="white" p="5" shadow="md" h="100vh">
//           <Stack spacing={4}>
//           <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>

//             {/* /* <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button> */} 
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>Manage Book Listings</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/rental-management")}>Rental Management</Button>
//             <Button colorScheme="blue" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>
//             <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
//           </Stack>
//         </Box>

//         {/* Main Content */}
//         <Box flex="1" p="6">
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaUsers} boxSize={10} color="blue.500" />
//                 <Heading size="md" mt={3}>Users</Heading>
//                 <Text fontSize="xl" fontWeight="bold">23</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaClipboardList} boxSize={10} color="orange.500" />
//                 <Heading size="md" mt={3}>Pending Requests</Heading>
//                 <Text fontSize="xl" fontWeight="bold">45</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaBook} boxSize={10} color="green.500" />
//                 <Heading size="md" mt={3}>Total Books</Heading>
//                 <Text fontSize="xl" fontWeight="bold">37</Text>
//               </CardBody>
//             </Card>
//             <Card>
//               <CardBody textAlign="center">
//                 <Icon as={FaShoppingCart} boxSize={10} color="red.500" />
//                 <Heading size="md" mt={3}>Books Sold/Rented</Heading>
//                 <Text fontSize="xl" fontWeight="bold">21</Text>
//               </CardBody>
//             </Card>
//           </SimpleGrid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminPanel;



//3rd

// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   SimpleGrid,
//   Icon,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   FaUsers,
//   FaBook,
//   FaClipboardList,
//   FaShoppingCart,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <Box bgColor="gray.100" minH="100vh" display="flex">
//       {/* Sidebar */}
//       <Box w="220px" bg="white" p={5} shadow="lg" h="100vh" borderRight="1px solid #ddd">
//         <VStack align="start" spacing={4}>
//           <Heading size="md" mb={4} color="blue.600">Admin Panel</Heading>
//           <Button w="full" colorScheme="blue" variant="ghost" onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//           <Button w="full" colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-users")}>Manage Users</Button>
//           <Button w="full" colorScheme="blue" variant="ghost" onClick={() => navigate("/manage-books")}>Manage Books</Button>
//           <Button w="full" colorScheme="blue" variant="ghost" onClick={() => navigate("/rental-management")}>Rentals</Button>
//           <Button w="full" colorScheme="blue" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>
//           <Button w="full" colorScheme="red" onClick={handleLogout}>Logout</Button>
//         </VStack>
//       </Box>

//       {/* Main Content */}
//       <Box flex={1} p={6}>
//         <Heading textAlign="center" mb={6} color="gray.700">Admin Dashboard</Heading>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
//           {[ 
//             { icon: FaUsers, label: "Users", value: "23", color: "blue.500" },
//             { icon: FaClipboardList, label: "Pending Requests", value: "45", color: "orange.500" },
//             { icon: FaBook, label: "Total Books", value: "37", color: "green.500" },
//             { icon: FaShoppingCart, label: "Books Sold/Rented", value: "21", color: "red.500" },
//           ].map((item, index) => (
//             <Card
//               key={index}
//               p={4}
//               shadow="md"
//               transition="transform 0.2s ease-in-out"
//               _hover={{ transform: "scale(1.05)" }}
//             >
//               <CardBody textAlign="center">
//                 <Icon as={item.icon} boxSize={10} color={item.color} mb={3} />
//                 <Heading size="md">{item.label}</Heading>
//                 <Text fontSize="xl" fontWeight="bold">{item.value}</Text>
//               </CardBody>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default AdminPanel;






//4th
// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   SimpleGrid,
//   Icon,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   FaUsers,
//   FaBook,
//   FaClipboardList,
//   FaShoppingCart,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <Box bgColor="gray.900" minH="100vh" display="flex" color="white">
//       {/* Sidebar */}
//       <Box w="220px" bg="gray.800" p={5} shadow="lg" h="100vh" borderRight="1px solid #444">
//         <VStack align="start" spacing={4}>
//           <Heading size="md" mb={4} color="blue.300">Admin Panel</Heading>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.600" }} onClick={() => navigate("/adminpanel")}>Dashboard</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.600" }} onClick={() => navigate("/manage-users")}>Manage Users</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.600" }} onClick={() => navigate("/manage-books")}>Manage Books</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.600" }} onClick={() => navigate("/rental-management")}>Rentals</Button>
//           <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.600" }} onClick={() => navigate("/settings")}>Settings</Button>
//           <Button w="full" colorScheme="red" _hover={{ bg: "red.600" }} onClick={handleLogout}>Logout</Button>
//         </VStack>
//       </Box>

//       {/* Main Content */}
//       <Box flex={1} p={6}>
//         <Heading textAlign="center" mb={6} color="blue.300">Admin Dashboard</Heading>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
//           {[ 
//             { icon: FaUsers, label: "Users", value: "23", color: "blue.400" },
//             { icon: FaClipboardList, label: "Pending Requests", value: "45", color: "orange.400" },
//             { icon: FaBook, label: "Total Books", value: "37", color: "green.400" },
//             { icon: FaShoppingCart, label: "Books Sold/Rented", value: "21", color: "red.400" },
//           ].map((item, index) => (
//             <Card
//               key={index}
//               p={4}
//               shadow="lg"
//               bg="gray.800"
//               transition="transform 0.2s ease-in-out"
//               _hover={{ transform: "scale(1.05)", bg: "gray.700" }}
//             >
//               <CardBody textAlign="center">
//                 <Icon as={item.icon} boxSize={10} color={item.color} mb={3} />
//                 <Heading size="md" color="white">{item.label}</Heading>
//                 <Text fontSize="xl" fontWeight="bold" color="gray.300">{item.value}</Text>
//               </CardBody>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default AdminPanel;



//5th
// import React from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   Stack,
//   Heading,
//   Button,
//   SimpleGrid,
//   Icon,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   FaUsers,
//   FaBook,
//   FaClipboardList,
//   FaShoppingCart,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Admin Logged Out");
//     navigate("/login"); // Redirect to login page
//   };

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
//           <Button w="full" colorScheme="red" _hover={{ bg: "red.500" }} onClick={handleLogout}>Logout</Button>
//         </VStack>
//       </Box>

//       {/* Main Content */}
//       <Box flex={1} p={6}>
//         <Heading textAlign="center" mb={6} color="blue.700">Admin Dashboard</Heading>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
//           {[ 
//             { icon: FaUsers, label: "Users", value: "23", color: "blue.500" },
//             { icon: FaClipboardList, label: "Pending Requests", value: "45", color: "orange.500" },
//             { icon: FaBook, label: "Total Books", value: "37", color: "green.500" },
//             { icon: FaShoppingCart, label: "Books Sold/Rented", value: "21", color: "red.500" },
//           ].map((item, index) => (
//             <Card
//               key={index}
//               p={4}
//               shadow="md"
//               bg="white"
//               transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
//               _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
//             >
//               <CardBody textAlign="center">
//                 <Icon as={item.icon} boxSize={10} color={item.color} mb={3} />
//                 <Heading size="md" color="black">{item.label}</Heading>
//                 <Text fontSize="xl" fontWeight="bold" color="gray.700">{item.value}</Text>
//               </CardBody>
//             </Card>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default AdminPanel;



//6th



import React from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Button,
  SimpleGrid,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaUsers,
  FaBook,
  FaClipboardList,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Admin Logged Out");
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box bgColor="gray.200" minH="100vh" display="flex" color="black">
      {/* Sidebar */}
      <Box w="240px" bg="gray.300" p={5} shadow="md" h="100vh" borderRight="1px solid #ccc">
        <VStack align="start" spacing={4}>
          <Heading size="md" mb={4} color="blue.600">Admin Panel</Heading>
          <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/adminpanel")}>Dashboard</Button>
          <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/manage-users")}>Manage Users</Button>
          <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/manage-books")}>Manage Books</Button>
          <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/rental-management")}>Rentals</Button>
          <Button w="full" colorScheme="blue" variant="solid" _hover={{ bg: "blue.500" }} onClick={() => navigate("/settings")}>Settings</Button>
          <Button w="full" colorScheme="red" _hover={{ bg: "red.500" }} onClick={handleLogout}>Logout</Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={6}>
        <Heading textAlign="center" mb={6} color="blue.700">Admin Dashboard</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {[ 
            { icon: FaUsers, label: "Users", value: "23", color: "blue.500", bg: "blue.100" },
            { icon: FaClipboardList, label: "Pending Requests", value: "45", color: "orange.500", bg: "orange.100" },
            { icon: FaBook, label: "Total Books", value: "37", color: "green.500", bg: "green.100" },
            { icon: FaShoppingCart, label: "Books Sold/Rented", value: "21", color: "red.500", bg: "red.100" },
          ].map((item, index) => (
            <Card
              key={index}
              p={4}
              shadow="md"
              bg={item.bg}
              transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
              _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
            >
              <CardBody textAlign="center">
                <Icon as={item.icon} boxSize={10} color={item.color} mb={3} />
                <Heading size="md" color="black">{item.label}</Heading>
                <Text fontSize="xl" fontWeight="bold" color="gray.700">{item.value}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AdminPanel;
