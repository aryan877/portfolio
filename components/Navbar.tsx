import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%" p={4}>
      <span>Aryan.</span>
      <IconButton
        aria-label="Toggle Mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        size="md"
      />
    </Flex>
  );
}

export default Navbar;
