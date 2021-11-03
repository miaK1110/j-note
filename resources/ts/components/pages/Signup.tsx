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
} from '@chakra-ui/react';
import {
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { ArrowLeftIcon } from '@chakra-ui/icons';

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

  // const handleSignup = async (e: any) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   console.log(
  //     `submitbtnが押されたよ！userDataの中身:${JSON.stringify(userData)}`
  //   );

  //   const res = await axios.post(
  //     'http://localhost:8000/api/add-user',
  //     userData
  //   );
  //   if (res.data.status === 200) {
  //     console.log(res.data.message);
  //     setLoading(false);
  //     history.push('/mypage');
  //   } else {
  //     console.log(res.data.messege);
  //     setLoading(false);
  //   }
  // };

  const handleSignup = (data: Object) => {
    axios
      .post('http://localhost:8000/api/add-user', data)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data);
          history.push('/mypage');
        } else {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error.data);
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
