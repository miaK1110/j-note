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

export const Login: VFC = memo(() => {
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
        <Heading as="h1">Log in</Heading>
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
            ログイン
          </Button>
          <Divider my={7} />
          <Stack spacing={4} mb={5}>
            <Button py={6} w="100%" colorScheme="red" leftIcon={<FaGoogle />}>
              Googleでログイン
            </Button>
            <Button py={6} w="100%" colorScheme="gray" leftIcon={<FaGithub />}>
              Githubでログイン
            </Button>
            <Button
              py={6}
              w="100%"
              colorScheme="twitter"
              leftIcon={<FaTwitter />}
            >
              Twitterでログイン
            </Button>
            <VStack>
              <Box>
                <Checkbox>ログイン状態を保持する</Checkbox>
              </Box>
              <Box>
                <Link>パスワードをお忘れですか？</Link>
              </Box>
            </VStack>
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
