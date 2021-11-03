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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router';

export const Login: VFC = memo(() => {
  const history = useHistory();
  interface UserData {
    email: string;
    password: string;
  }

  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });

  // for a show/hide password functionality
  const [show, setShow] = useState(false);
  // for isLoading
  const [loading, setLoading] = useState(false);
  const handleClickShow = () => setShow(!show);

  const handleLogin = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    console.log(
      `submitbtn押されたよ！userDataの中身:${JSON.stringify(userData)}`
    );

    const res = await axios.post('http://localhost:8000/api/login', userData);
    if (res.data.status === 200) {
      console.log(res.data.message);
      setLoading(false);
      history.push('/mypage');
    } else {
      console.log(res.data.messege);
      setLoading(false);
    }
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
        <form action="POST" onSubmit={handleLogin}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel></FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                isRequired
                errorBorderColor="crimson"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel></FormLabel>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  isRequired
                  errorBorderColor="crimson"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
                <InputRightElement width="3rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickShow}>
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
            isLoading={loading}
            isDisabled={userData.email === '' || userData.password === ''}
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
        <Link to="/">
          <Circle size="40px" bg="teal.400">
            <ArrowLeftIcon color="white" />
          </Circle>
        </Link>
      </Box>
    </Flex>
  );
});
