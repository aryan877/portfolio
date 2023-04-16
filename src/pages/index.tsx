import { useColorMode } from '@chakra-ui/color-mode';
import {
  Badge,
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import {
  FaAt,
  FaCalendarAlt,
  FaCheckCircle,
  FaCode,
  FaCoins,
  FaEye,
  FaGithub,
  FaKeyboard,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import About from '../../components/About';
import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects';
import Wall from '../../components/Wall';
function MyComponent() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const borderColor = isDarkMode ? 'gray.700' : 'gray.200';
  return (
    <Container
      maxW="720px"
      width="100%"
      px="0"
      minHeight="100vh"
      borderWidth="1px"
      borderColor={borderColor}
      borderStyle="solid"
      borderTop="none"
      borderBottom="none"
    >
      <Navbar />
      <Box width="100%">
        <Image
          boxSize="100%"
          height="200px"
          mx={0}
          objectFit="cover"
          src="./cover.jpeg"
          alt="Dan Abramov"
        />
      </Box>
      <Box px={4} width="full">
        <Image
          borderRadius="full"
          boxSize="150px"
          marginTop="-12%"
          src="./pfp.jpeg"
          alt="Profile Picture"
          border="4px solid"
          position="relative"
          zIndex="1"
        />
        <Box>
          <Flex alignItems="center">
            <Text fontSize="4xl" mr={2}>
              Aryan Kumar
            </Text>
            <FaCheckCircle color="red" size={24} />
          </Flex>
          <Spacer h={4} />
          <Flex
            fontWeight="semibold"
            justify="start"
            color={colorMode == 'light' ? 'gray.600' : 'gray.400'}
            alignItems="center"
          >
            <FaAt size={18} />
            <Text mr="4">aryan877</Text>
            <FaEye size={18} style={{ marginRight: '8px' }} />
            <Text mr="4">202 Views</Text>
            <FaMapMarkerAlt size={18} style={{ marginRight: '8px' }} />
            <Text mr="4">Global</Text>
            <FaCalendarAlt size={18} style={{ marginRight: '8px' }} />
            <Text mr="4">2023</Text>
          </Flex>
          <Spacer h={4} />
          <Text width="80%" fontWeight="semibold">
            Web wizard. Debugging ninja. Adventure seeker. Ready to tackle any
            coding challenge thrown my way.
          </Text>
          <Spacer h={4} />
          <Flex flexWrap="wrap" mt={4}>
            <Badge
              display="flex"
              alignItems="center"
              padding="0.5em"
              mr={2}
              mb={2}
            >
              <FaCode
                color="#8f8f8f"
                style={{ marginRight: '4px', fontSize: '1.2em' }}
              />
              Developer
            </Badge>
            <Badge
              display="flex"
              alignItems="center"
              padding="0.5em"
              mr={2}
              mb={2}
              colorScheme="green"
            >
              <FaLaptopCode
                color="#4da54d"
                style={{ marginRight: '4px', fontSize: '1.2em' }}
              />
              Software Engineer
            </Badge>
            <Badge
              display="flex"
              alignItems="center"
              padding="0.5em"
              mr={2}
              mb={2}
              colorScheme="red"
            >
              <FaKeyboard
                color="#d93c3c"
                style={{ marginRight: '4px', fontSize: '1.2em' }}
              />
              Competitive Programmer
            </Badge>
            <Badge
              display="flex"
              alignItems="center"
              padding="0.5em"
              mr={2}
              mb={2}
              colorScheme="purple"
            >
              <FaCoins
                color="#b44dff"
                style={{ marginRight: '4px', fontSize: '1.2em' }}
              />
              Blockchain Enthusiast
            </Badge>
            <Badge
              display="flex"
              alignItems="center"
              padding="0.5em"
              mr={2}
              mb={2}
              colorScheme="yellow"
            >
              <FaCode
                color="#d9d93c"
                style={{ marginRight: '4px', fontSize: '1.2em' }}
              />
              Open Source
            </Badge>
          </Flex>
          {/* ////// */}
          <Spacer h={4} />
          <Flex>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="gray"
              fontSize="24px"
              _hover={{ color: 'gray.400' }}
              mr={2}
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              colorScheme="gray"
              fontSize="24px"
              _hover={{ color: 'gray.400' }}
              mr={2}
            />
            <IconButton
              aria-label="LeetCode"
              icon={<SiLeetcode />}
              variant="ghost"
              colorScheme="gray"
              fontSize="24px"
              _hover={{ color: 'gray.400' }}
              mr={2}
            />
          </Flex>
          <Spacer h={4} />
          {/* ////// */}
        </Box>
      </Box>
      <Tabs colorScheme="red" minHeight={400}>
        <TabList>
          <Tab
            fontWeight="semibold"
            _selected={{ borderBottom: '4px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            Projects
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ borderBottom: '4px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            About
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ borderBottom: '4px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            Freelance Projects
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ borderBottom: '4px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            Wall
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ borderBottom: '4px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            Contact
          </Tab>
        </TabList>

        <TabPanels py={2}>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <p>Upcoming</p>
          </TabPanel>
          <TabPanel>
            <Wall />
          </TabPanel>
          <TabPanel>
            <p>Upcoming</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default MyComponent;
