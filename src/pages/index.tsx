import { AtSignIcon, CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';

function MyComponent() {
  return (
    <Container centerContent>
      <Navbar />
      <Box maxW="2xl" width="2xl">
        <Image
          boxSize="100%"
          height="200px"
          objectFit="cover"
          src="https://fffuel.co/images/ffflux/ffflux-4.svg"
          alt="Dan Abramov"
        />
      </Box>
      <Box px={4} maxW="2xl" width="2xl">
        <Image
          borderRadius="full"
          boxSize="150px"
          marginTop="-12%"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          border="4px solid" // add this line to add a border
        />
        <Box>
          <Flex justifyContent="space-between">
            <Text fontSize="4xl">Aryan Kumar</Text>
          </Flex>
          <Flex justify="start" color="#888" alignItems="center">
            <AtSignIcon />
            <Text mr="4">aryan877</Text>
            {/* <LocationIcon mr="4" />
            <Text mr="4">Second Text</Text> */}
            <CalendarIcon mr={2} />
            <Text mr="4">2023</Text>
            <ViewIcon mr={2} />
            <Text>202 Views</Text>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}

export default MyComponent;
