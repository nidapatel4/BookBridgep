// import React, { useState } from "react";
// import {
//   Box,
//   Heading,
//   Input,
//   Button,
//   Switch,
//   Stack,
//   FormControl,
//   FormLabel,
//   Select,
//   Textarea,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Avatar,
//   IconButton,
//   useToast,
// } from "@chakra-ui/react";
// import { FaSave, FaUpload, FaDownload, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AdminSettings = () => {
//   const [username, setUsername] = useState("Admin");
//   const [email, setEmail] = useState("admin@example.com");
//   const [role, setRole] = useState("Super Admin");
//   const [notifications, setNotifications] = useState(true);
//   const toast = useToast();
//   const navigate = useNavigate();

//   const handleSave = () => {
//     toast({ title: "Settings Saved!", status: "success", duration: 2000 });
//   };

//   const handleRedirect = () => {
//     navigate("/adminpanel");
//   };

//   return (
//     <Box p={5} maxW="800px" mx="auto" bg="gray.50" boxShadow="md" borderRadius="md">
//       <Heading mb={4} textAlign="center">Admin Settings</Heading>

//       {/* Profile Management */}
//       <Stack spacing={4}>
//         <FormControl>
//           <FormLabel>Profile Picture</FormLabel>
//           <Avatar size="xl" name={username} src="https://via.placeholder.com/150" />
//           <Button leftIcon={<FaUpload />} mt={2}>Upload New</Button>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Username</FormLabel>
//           <Input value={username} onChange={(e) => setUsername(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Role</FormLabel>
//           <Select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option>Super Admin</option>
//             <option>Moderator</option>
//             <option>Editor</option>
//           </Select>
//         </FormControl>

//         {/* Security Settings */}
//         <FormControl display="flex" alignItems="center">
//           <FormLabel>Enable Two-Factor Authentication</FormLabel>
//           <Switch isChecked={notifications} onChange={() => setNotifications(!notifications)} />
//         </FormControl>

//         {/* System & Backup */}
//         <Button leftIcon={<FaDownload />}>Download Backup</Button>
//         <Button leftIcon={<FaUpload />} colorScheme="green">Restore Backup</Button>

//         {/* Activity Logs */}
//         <Heading size="md">Audit Logs</Heading>
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Action</Th>
//               <Th>Date</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             <Tr>
//               <Td>Deleted User #123</Td>
//               <Td>2025-02-09</Td>
//             </Tr>
//             <Tr>
//               <Td>Updated Book Listing</Td>
//               <Td>2025-02-08</Td>
//             </Tr>
//           </Tbody>
//         </Table>
//       </Stack>

//       <Button mt={4} colorScheme="blue" onClick={handleSave} leftIcon={<FaSave />}>Save Changes</Button>
//       <Button mt={4} colorScheme="teal" onClick={handleRedirect} ml={4}>Go to Admin Panel</Button>
//     </Box>
//   );
// };

// export default AdminSettings;
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Switch,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
} from "@chakra-ui/react";
import { FaSave, FaUpload, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminSettings = () => {
  const [username, setUsername] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [role, setRole] = useState("Super Admin");
  const [notifications, setNotifications] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSave = () => {
    toast({ title: "Settings Saved!", status: "success", duration: 2000 });
  };

  const handleRedirect = () => {
    navigate("/adminpanel");
  };

  return (
    <Box p={5} maxW="800px" mx="auto" bg="gray.50" boxShadow="md" borderRadius="md">
      <Heading mb={4} textAlign="center">Admin Settings</Heading>

      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Profile Picture</FormLabel>
          <Avatar size="xl" name={username} src="https://via.placeholder.com/150" />
          <Button leftIcon={<FaUpload />} mt={2}>Upload New</Button>
        </FormControl>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Super Admin</option>
            <option>Moderator</option>
            <option>Editor</option>
          </Select>
        </FormControl>

        <FormControl display="flex" alignItems="center">
          <FormLabel>Enable Two-Factor Authentication</FormLabel>
          <Switch isChecked={notifications} onChange={() => setNotifications(!notifications)} />
        </FormControl>

        <Button leftIcon={<FaDownload />}>Download Backup</Button>
        <Button leftIcon={<FaUpload />} colorScheme="green">Restore Backup</Button>

        <Heading size="md">Audit Logs</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Action</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Deleted User #123</Td>
              <Td>2025-02-09</Td>
            </Tr>
            <Tr>
              <Td>Updated Book Listing</Td>
              <Td>2025-02-08</Td>
            </Tr>
          </Tbody>
        </Table>
      </Stack>

      <Button mt={4} colorScheme="blue" onClick={handleSave} leftIcon={<FaSave />}>Save Changes</Button>
      <Button mt={4} colorScheme="teal" onClick={handleRedirect} ml={4}>Go to Admin Panel</Button>
    </Box>
  );
};

export default AdminSettings;