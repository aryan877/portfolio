import { Button, Input, Stack, useColorMode } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

function Comments() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const bgColor = isDarkMode ? 'gray.700' : 'red.500';
  const borderColor = isDarkMode ? 'gray.600' : 'gray.300';
  const inputBgColor = isDarkMode ? 'gray.700' : 'white';
  const color = isDarkMode ? 'white' : 'white';

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [comment, setComment] = useState('');

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };

  const handleCommentCancel = () => {
    setComment('');
    inputRef.current?.blur();
  };

  const handleCommentSubmit = () => {
    if (comment.trim().length > 0) {
      // Add your code to submit the comment here
      setComment('');
      inputRef.current?.blur();
    }
  };

  const isCommentEnabled = comment.trim().length > 0;

  return (
    <Stack spacing={4} p={4}>
      <Button
        leftIcon={<FaGoogle />}
        color={color}
        bgColor={bgColor}
        _hover={{
          bgColor: isDarkMode ? 'gray.600' : 'red.600',
        }}
      >
        Sign in with Google
      </Button>
      <Input
        ref={inputRef}
        value={comment}
        onChange={handleCommentChange}
        placeholder="Type your comment here..."
        bg={inputBgColor}
        // color={isDarkMode ? 'white' : 'gray.800'}
        borderColor={borderColor}
        borderWidth="2px"
        borderRadius="md"
        _focus={{
          borderColor: 'red.500',
          boxShadow: 'none',
        }}
      />
      <Stack direction="row" justify="flex-end" spacing={2}>
        <Button
          disabled={!comment || comment.trim().length === 0}
          onClick={handleCommentSubmit}
        >
          Comment
        </Button>
        <Button onClick={handleCommentCancel}>Cancel</Button>
      </Stack>
    </Stack>
  );
}

export default Comments;
