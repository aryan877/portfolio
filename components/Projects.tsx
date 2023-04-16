import { useColorMode } from '@chakra-ui/color-mode';
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ReactPlayer from 'react-player';
const projects = [
  {
    id: 1,
    title: 'Quiz Maker [Google Forms Clone]',
    description: `Quiz Taker App is a fun and interactive quiz application built with Next.js and TypeScript. Create, edit, and take quizzes with ease, and get immediate feedback on your score. Powered by Firebase and featuring a sleek Material-UI design, Quiz Taker App is the perfect choice for challenging yourself or your friends.`,
    datePosted: '2022-01-01',
    githubLink: 'https://github.com',
    liveProjectLink: 'https://liveproject.com',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
  {
    id: 2,
    title: 'SolPay - Send Tokens on Solana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget enim libero.',
    datePosted: '2022-01-02',
    githubLink: 'https://github.com',
    liveProjectLink: 'https://liveproject.com',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
  {
    id: 3,
    title: 'Full Stack ML Recommender',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget enim libero.',
    datePosted: '2022-01-03',
    githubLink: 'https://github.com',
    liveProjectLink: 'https://liveproject.com',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
];
function Projects() {
  const { colorMode } = useColorMode();
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    setVideo(
      <ReactPlayer
        width="100%"
        style={{}}
        url="https://d2wt0nnbyat85w.cloudfront.net/quiz_taker_demo.mp4"
        controls
      />
    );
  }, []);

  const hoverColor = colorMode === 'light' ? 'gray.100' : 'gray.700';

  return (
    <>
      <SimpleGrid spacingY={2}>
        {projects.map((project) => (
          <Box
            key={project.id}
            borderRadius="md"
            _hover={{ bg: hoverColor }}
            width="full"
            px={8}
            py={4}
          >
            {/* <Image src={project.imageUrl} alt={project.title} /> */}
            <Text fontSize="2xl" fontWeight="bold">
              {project.title}
            </Text>

            <Text mt={2} fontWeight="semibold">
              {project.description}
              <Text
                as="span"
                color="red"
                cursor="pointer"
                _hover={{
                  textDecoration: 'underline',
                  textDecorationThickness: '0.1em',
                }}
              >
                {' '}
                Checkout the live app here.
              </Text>
            </Text>

            <Flex mt={2} alignItems="center" justifyContent="space-between">
              <Text
                // fontWeight="semibold"
                fontSize="sm"
                color={colorMode == 'light' ? 'gray.600' : 'gray.400'}
              >
                Posted on {project.datePosted}
              </Text>

              <Box mt={2} alignItems="center">
                {/* <Text
                  as="span"
                  fontWeight="semibold"
                  color="red"
                  cursor="pointer"
                  mr={2}
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationThickness: '0.1em',
                  }}
                >
                  Explore the live app
                </Text> */}
                <Tooltip label="GitHub">
                  <IconButton
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    variant="ghost"
                    fontSize="2xl"
                    mr={2}
                    // href={project.githubLink}
                    // isExternal
                  />
                </Tooltip>
                <Tooltip label="Visit live app">
                  <IconButton
                    aria-label="Visit live app"
                    icon={<FaExternalLinkAlt />}
                    variant="ghost"
                    fontSize="2xl"
                    mr={2}
                  />
                </Tooltip>
              </Box>
            </Flex>

            {/* video */}
            <Flex
              mt="2"
              direction="column"
              alignItems="left"
              justifyContent="space-between"
            >
              {video}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Projects;
