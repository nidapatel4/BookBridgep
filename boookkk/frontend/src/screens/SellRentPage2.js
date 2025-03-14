import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  RadioGroup,
  Radio,
  HStack,
  Select,
  Image,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bookPlaceholder from "../assets/books.jpg";

const SellRentPage2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    condition: "",
    type: "sell",
    price: "",
    rentalPrice: "",
    rentalDuration: "",
    location: "",
    floor: "",
    mobile: "",
    email: "",
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0])
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    navigate("/success");
  };

  const handlePreview = () => {
    console.log("Preview Data:", formData);
    // Logic to show preview modal or page
  };

  return (
    <Box
      bgColor='whitesmoke'
      padding='20px'
      minH='100vh'
    >
      {/* Page Title */}
      <Heading
        textAlign='center'
        mb='8'
        fontWeight='bold'
      >
        Fill the Book Details
      </Heading>

      <Card
        maxW='xl'
        mx='auto'
      >
        <CardBody>
          <form>
            <Stack spacing='4'>
              {/* Book Title */}
              <FormControl isRequired>
                <FormLabel>Book Name</FormLabel>
                <Input
                  type='text'
                  name='title'
                  placeholder='Enter the book title'
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Author */}
              <FormControl isRequired>
                <FormLabel>Author Name</FormLabel>
                <Input
                  type='text'
                  name='author'
                  placeholder="Enter the author's name"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Description */}
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name='description'
                  placeholder='Add a description about the book'
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Book Condition */}
              <FormControl isRequired>
                <FormLabel>Condition</FormLabel>
                <Select
                  name='condition'
                  placeholder='Select condition'
                  value={formData.condition}
                  onChange={handleInputChange}
                >
                  <option value='good'>Good</option>
                  <option value='old'>Old</option>
                </Select>
              </FormControl>

              {/* Sell or Rent */}
              <FormControl
                as='fieldset'
                isRequired
              >
                <FormLabel as='legend'>Type</FormLabel>
                <RadioGroup
                  name='type'
                  value={formData.type}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                >
                  <HStack spacing='24px'>
                    <Radio value='sell'>Sell</Radio>
                    <Radio value='rent'>Rent</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              {formData.type === "sell" && (
                <>
                  {/* Price */}
                  <FormControl isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input
                      type='number'
                      name='price'
                      placeholder='Enter the price'
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  {/* Image Upload */}
                  <FormControl>
                    <FormLabel>Upload Image</FormLabel>
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                    />
                    {formData.image && (
                      <Image
                        src={formData.image}
                        alt='Uploaded Book'
                        mt='4'
                        borderRadius='md'
                        boxSize='150px'
                        objectFit='cover'
                      />
                    )}
                  </FormControl>
                </>
              )}

              {formData.type === "rent" && (
                <>
                  {/* Rental Price */}
                  <FormControl isRequired>
                    <FormLabel>Rental Price</FormLabel>
                    <Input
                      type='number'
                      name='rentalPrice'
                      placeholder='Enter the rental price'
                      value={formData.rentalPrice}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  {/* Rental Duration */}
                  <FormControl isRequired>
                    <FormLabel>Rental Duration</FormLabel>
                    <Select
                      name='rentalDuration'
                      placeholder='Select duration'
                      value={formData.rentalDuration}
                      onChange={handleInputChange}
                    >
                      <option value='3'>3 Months</option>
                      <option value='6'>6 Months</option>
                    </Select>
                  </FormControl>

                  {/* Image Upload */}
                  <FormControl>
                    <FormLabel>Upload Image</FormLabel>
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                    />
                    {formData.image && (
                      <Image
                        src={formData.image}
                        alt='Uploaded Book'
                        mt='4'
                        borderRadius='md'
                        boxSize='150px'
                        objectFit='cover'
                      />
                    )}
                  </FormControl>
                </>
              )}

              {/* Pickup Location */}
              <FormControl isRequired>
                <FormLabel>Pickup Location</FormLabel>
                <Select
                  name='location'
                  placeholder='Select pickup location'
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value='library'>Library</option>
                  <option value='canteen'>Canteen Area</option>
                  <option value='college_floor'>College Floor</option>
                </Select>
                {formData.location === "college_floor" && (
                  <Select
                    name='floor'
                    placeholder='Select floor'
                    mt='2'
                    value={formData.floor}
                    onChange={handleInputChange}
                  >
                    <option value='1'>1st Floor</option>
                    <option value='2'>2nd Floor</option>
                    <option value='3'>3rd Floor</option>
                  </Select>
                )}
              </FormControl>

              {/* Contact Details */}
              <FormControl isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type='tel'
                  name='mobile'
                  placeholder='Enter your mobile number'
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Buttons */}
              <HStack
                spacing='4'
                justifyContent='center'
              >
                <Button
                  colorScheme='gray'
                  onClick={handlePreview}
                >
                  Preview Listing
                </Button>
                <Button
                  colorScheme='blue'
                  onClick={handleSubmit}
                >
                  Post Listing
                </Button>
              </HStack>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SellRentPage2;
