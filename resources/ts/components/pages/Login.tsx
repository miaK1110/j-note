import React, { memo, useState, VFC } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormErrorMessage,
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
  Text,
} from '@chakra-ui/react';
import {
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { ArrowLeftIcon } from '@chakra-ui/icons';

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
  const handleClickShow = () => setShow(!show);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [apiError, setApiError] = useState('');

  const handleLogin = (data: Object) => {
    axios
      .post('http://localhost:8000/api/login', data)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          history.push('/mypage');
        }
        if (res.data.status === 401) {
          setApiError('Emailとパスワードが一致しません');
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('response error');
          console.log(error.response.status);
          // console.log(error.response.headers);

          const responseErr = error.response.data.errors;

          if (error.response.status === 401) {
          }
          // if (responseErr.email) {
          //   setApiError(responseErr.email);
          // } else if (responseErr.password) {
          //   setApiError(responseErr.password);
          // }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log('request error');
          console.log(error.request);
          setApiError('サーバーエラーです');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setApiError('サーバーエラーです');
        }
        console.log(error.config);
      });
  };

  return (
    <Flex bg="gray.100" w="100vw">
      <Box
        w={{ base: '300px', sm: '460px' }}
        maxW="460px"
        minH=""
        my={20}
        mx="auto"
        px={6}
        py={10}
        bg="white"
        rounded="2xl"
        boxShadow="md"
      >
        <Heading as="h1" mb={2}>
          Log in
        </Heading>
        <form action="POST" onSubmit={handleSubmit(handleLogin)}>
          <Stack spacing={2}>
            {apiError && (
              <Text fontSize="sm" color="crimson">
                {apiError}
              </Text>
            )}
            <FormControl isInvalid={errors.email}>
              {/* フィールドネストしてるのでname属性は必要ない */}
              <Input
                type="email"
                id="email"
                {...register('email', {
                  required: '入力してください',
                  maxLength: {
                    value: 255,
                    message: '255文字以内で入力してください',
                  },
                })}
                placeholder="Email"
                defaultValue={userData.email}
                isRequired
                errorBorderColor="crimson"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <InputGroup>
                {/* フィールドネストしてるのでname属性は必要ない */}
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  {...register('password', {
                    required: '入力してください',
                    minLength: {
                      value: 8,
                      message: '8文字以上で入力してください',
                    },
                    maxLength: {
                      value: 255,
                      message: '255文字以内で入力してください',
                    },
                  })}
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
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
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
            isLoading={isSubmitting}
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
              <Link to="/sign-in/github">Githubでログイン</Link>
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
        <Circle size="40px" bg="teal.400">
          <Link to="/">
            <ArrowLeftIcon color="white" />{' '}
          </Link>
        </Circle>
      </Box>
    </Flex>
  );
});
