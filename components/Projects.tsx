import { useColorMode } from '@chakra-ui/color-mode';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Quiz Taking App ( Google Forms Clone )',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget enim libero.',
    datePosted: '2022-01-01',
    githubLink: 'https://github.com',
    liveProjectLink: 'https://liveproject.com',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
  {
    id: 2,
    title: 'Solana Token Sender',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget enim libero.',
    datePosted: '2022-01-02',
    githubLink: 'https://github.com',
    liveProjectLink: 'https://liveproject.com',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
  {
    id: 3,
    title: 'Quiz Taking App',
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

  const hoverColor = colorMode === 'light' ? 'gray.100' : 'gray.700';

  return (
    <Flex flexWrap="wrap" width="100%">
      {projects.map((project) => (
        <Box
          key={project.id}
          // borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          width="100%"
          _hover={{ bg: hoverColor }}
        >
          {/* <Image src={project.imageUrl} alt={project.title} /> */}

          <Box p="6">
            <Box alignItems="baseline">
              <Text fontSize="2xl" fontWeight="semibold" mr="2">
                {project.title}
              </Text>
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
              <Tooltip label="Live Project">
                <IconButton
                  aria-label="Live Project"
                  icon={<FaExternalLinkAlt />}
                  variant="ghost"
                  fontSize="2xl"
                  // href={project.liveProjectLink}
                  // isExternal
                />
              </Tooltip>
            </Box>

            <Text mt="2" fontSize="lg">
              {project.description}
            </Text>

            <Flex mt="2" alignItems="center" justifyContent="space-between">
              <Text fontSize="sm" color="gray.500">
                Posted on {project.datePosted}
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default Projects;
