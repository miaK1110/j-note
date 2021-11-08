import React, { memo, useState, VFC } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
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
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { SocialSigninButton } from '../atoms/SocialSigninButton';

interface UserData {
  name: string;
  email: string;
  password: string;
}

export const Signup: VFC = memo(() => {
  const history = useHistory();
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
  });

  // for a show/hide password functionality
  const [show, setShow] = React.useState(false);
  const handleClickShow = () => setShow(!show);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [apiError, setApiError] = useState(null);

  const handleSignup = (data: Object) => {
    axios
      .post('http://localhost:8000/api/add-user', data)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          history.push('/mypage');
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

          if (responseErr.email) {
            setApiError(responseErr.email);
          } else if (responseErr.name) {
            setApiError(responseErr.name);
          } else if (responseErr.password) {
            setApiError(responseErr.password);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log('request error');
          console.log(error.request);
          setApiError(error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setApiError(error.message);
        }
        console.log(error.config);
      });
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
        <Heading as="h1" mb={2}>
          Sign up
        </Heading>
        <form action="POST" onSubmit={handleSubmit(handleSignup)}>
          <Stack spacing={2}>
            {apiError && (
              <Text fontSize="sm" color="crimson">
                {apiError}
              </Text>
            )}
            <FormControl isInvalid={errors.name}>
              <Input
                type="text"
                placeholder="Username"
                id="name"
                {...register('name', {
                  required: '入力してください',
                  maxLength: {
                    value: 100,
                    message: '100文字以内で入力してください',
                  },
                })}
                defaultValue={userData.name}
                isRequired
                errorBorderColor="crimson"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                {...register('email', {
                  required: '入力してください',
                  maxLength: {
                    value: 255,
                    message: '255文字以内で入力してください',
                  },
                })}
                value={userData.email}
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
            isDisabled={
              userData.name === '' ||
              userData.email === '' ||
              userData.password === ''
            }
          >
            会員登録
          </Button>
          <Divider my={7} />
          <Stack spacing={4} mb={8}>
            <SocialSigninButton str={'登録する'} />
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
