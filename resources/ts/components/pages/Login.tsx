import React, { ChangeEvent, memo, useState, VFC } from 'react';
import axios from 'axios';
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
  interface UserData {
    email: string;
    password: string;
  }

  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    alert(JSON.stringify(userData));

    // axios
    //   .post('http://localhost:8000/user-login', [userData])
    //   .then((res) => {
    //     if (res.data) {
    //     } else {
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

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
              <Input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </FormControl>
          </Stack>
          <Button
            type="submit"
            py={6}
            w="100%"
            mt={5}
            bg="teal.400"
            color="white"
            _hover={{ bg: 'teal.300' }}
            onClick={handleLogin}
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
