import React, { memo, VFC } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
  Checkbox,
  Link,
  Button,
  Divider,
  Circle,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { ArrowLeftIcon } from '@chakra-ui/icons';

export const Signup: VFC = memo(() => {
  return (
    <Flex bg="gray.100" w="100vw" h="100vh">
      <Box
        w={{ base: '300px', sm: '460px' }}
        maxW="460px"
        maxH="650px"
        my={20}
        mx="auto"
        px={6}
        py={10}
        bg="white"
        rounded="2xl"
        boxShadow="md"
      >
        <Heading as="h1">Sign up</Heading>
        <form>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel></FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </Stack>
          <Button
            py={6}
            w="100%"
            mt={5}
            bg="teal.400"
            color="white"
            _hover={{ bg: 'teal.300' }}
          >
            会員登録
          </Button>
          <Divider my={7} />
          <Stack spacing={4} mb={8}>
            <Button
              aria-label="google"
              py={6}
              w="100%"
              colorScheme="red"
              leftIcon={<FaGoogle />}
            >
              Googleで会員登録
            </Button>
            <Button
              aria-label="github"
              py={6}
              w="100%"
              colorScheme="gray"
              leftIcon={<FaGithub />}
            >
              Githubで会員登録
            </Button>
            <Button
              aria-label="twitter"
              py={6}
              w="100%"
              colorScheme="twitter"
              leftIcon={<FaTwitter />}
            >
              Twitterで会員登録
            </Button>
          </Stack>
        </form>
        <Link>
          <Circle size="40px" bg="teal.400">
            <ArrowLeftIcon color="white" />
          </Circle>
        </Link>
      </Box>
    </Flex>
  );
});
