// import React from "react";
// import {
//   Box,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Button,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const RentalManagement = () => {
//   const navigate = useNavigate();

//   // Sample Data
//   const rentalData = [
//     { id: 1, name: "John Doe", book: "The Great Gatsby", type: "Rented", date: "2025-02-01" },
//     { id: 2, name: "Jane Smith", book: "1984", type: "Sold", date: "2025-01-28" },
//     { id: 3, name: "Emily Johnson", book: "To Kill a Mockingbird", type: "Rented", date: "2025-01-30" },
//     { id: 4, name: "Michael Brown", book: "Moby Dick", type: "Sold", date: "2025-02-02" },
//   ];

//   return (
//     <Box bgColor="whitesmoke" padding="20px" minH="100vh">
//       <Heading textAlign="center" mb="20px">
//         Rental Management
//       </Heading>
//       <Button colorScheme="blue" mb={4} onClick={() => navigate("/adminpanel")}>
//         Back to Dashboard
//       </Button>
//       <TableContainer bg="white" p="4" shadow="md">
//         <Table variant="simple">
//           <Thead bg="gray.100">
//             <Tr>
//               <Th>ID</Th>
//               <Th>Name</Th>
//               <Th>Book</Th>
//               <Th>Type</Th>
//               <Th>Date</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {rentalData.map((record) => (
//               <Tr key={record.id}>
//                 <Td>{record.id}</Td>
//                 <Td>{record.name}</Td>
//                 <Td>{record.book}</Td>
//                 <Td>{record.type}</Td>
//                 <Td>{record.date}</Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default RentalManagement;





import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RentalManagement = () => {
  const navigate = useNavigate();

  // Sample Data
  const rentalData = [
    { id: 1, name: "John Doe", book: "The Great Gatsby", type: "Rented", date: "2025-02-01" },
    { id: 2, name: "Jane Smith", book: "1984", type: "Sold", date: "2025-01-28" },
    { id: 3, name: "Emily Johnson", book: "To Kill a Mockingbird", type: "Rented", date: "2025-01-30" },
    { id: 4, name: "Michael Brown", book: "Moby Dick", type: "Sold", date: "2025-02-02" },
  ];

  return (
    <Box bgColor="gray.200" padding="20px" minH="100vh">
      <Flex justify="space-between" align="center" mb="20px">
        <Heading color="blue.700">Rental Management</Heading>
        <Button colorScheme="blue" onClick={() => navigate("/adminpanel")}>
          Back to Dashboard
        </Button>
      </Flex>

      <Box display="flex">
        {/* Sidebar */}
        <Box w="240px" bg="gray.300" p="5" shadow="md" h="100vh" borderRight="1px solid #ccc">
          <VStack align="start" spacing={4}>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/adminpanel")}>
              Dashboard
            </Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-users")}>
              Manage Users
            </Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/manage-books")}>
              Manage Books Listings
            </Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/rental-management")}>
              Rental Management
            </Button>
            <Button w="full" colorScheme="blue" variant="solid" onClick={() => navigate("/settings")}>
              Settings
            </Button>
            <Button w="full" colorScheme="red" onClick={() => navigate("/login")}>
              Logout
            </Button>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="6">
          <TableContainer bg="white" p="4" shadow="md">
            <Table variant="striped" colorScheme="gray">
              <Thead bg="gray.300">
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Book</Th>
                  <Th>Type</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {rentalData.map((record) => (
                  <Tr key={record.id} _hover={{ bg: "gray.100" }}>
                    <Td>{record.id}</Td>
                    <Td>{record.name}</Td>
                    <Td>{record.book}</Td>
                    <Td>{record.type}</Td>
                    <Td>{record.date}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default RentalManagement;