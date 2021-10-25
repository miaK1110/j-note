import React, { memo, VFC } from 'react';
import {
  Flex,
  Image,
  Button,
  Text,
  Container,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Box, Center, Heading } from '@chakra-ui/layout';
import { CheckIcon } from '@chakra-ui/icons';

export const Toppage: VFC = memo(() => {
  return (
    <>
      {/* main visual */}
      <Flex mt={20} mx={10}>
        <Box
          w="50%"
          backGroundColor="teal"
          // lineHeight="tight"
          textAlign="center"
        >
          <Heading
            as="h2"
            fontSize={{ base: '16px', md: '28px', lg: '36px' }}
            fontWeight="bold"
            letterSpacing={1}
            mb={5}
          >
            エンジニア特化型
            <br />
            Markdown形式メモアプリ
          </Heading>
          <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} pb={5}>
            さっそく始めてみよう！
          </Text>
          <Button colorScheme="orange">会員登録する(無料)</Button>
        </Box>
        <Box w="50%">
          <Image src={'/img/MainVIsualImg.png'} alt="main-visual-img" />
        </Box>
      </Flex>
      {/* about section */}
      <Image src={'/img/wave4.svg'} alt="wave4" />
      <Box w="100%" bg="background.100" mh="300px">
        <Text
          textAlign="center"
          color="teal.400"
          fontWeight="bold"
          fontSize={{ base: '6px', md: '8px', lg: '10px' }}
          mb="-5px"
          pt={6}
        >
          WHAT WE DO
        </Text>
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          letterSpacing={1}
          mb={6}
        >
          Our Offer
        </Text>
        <Heading
          as="h3"
          fontSize={{ base: '14px', md: '16px', lg: '18px' }}
          fontWeight="bold"
          letterSpacing={1}
          mx={5}
          mb={5}
          textAlign="center"
        >
          こんな経験はありませんか？
        </Heading>
        <Flex mx={10}>
          <Box w={{ base: '0%', md: '30%' }}>
            <Image
              src={'/img/top.png'}
              alt=""
              display={{ base: 'none', sm: 'block', md: 'block' }}
            />
          </Box>
          <Box w={{ base: '100%', md: '70%' }} textAlign="left">
            <Stack spacing={3}>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} />
                このエラー前にも見たけどなんだったかな？
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} />
                環境構築あまりやらないから忘れたな。。
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} />
                この実装前にもやったけどどうやったんだっけ？
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} />
                オリジナルの関数作ったけどどこに置いたかな？
              </Text>
            </Stack>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              letterSpacing={1}
              mt={10}
            >
              私たちはそんなあなたのお悩みを解決します！
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* features section */}
      <Box bg="gray.100">
        <Box px={10}>
          <Box w="100%" textAlign="left" mb={5}>
            <Text
              color="teal.400"
              fontWeight="bold"
              fontSize={{ base: '6px', md: '8px', lg: '10px' }}
              mb="-5px"
              ml={7}
              pt={10}
            >
              LEARN MORE
            </Text>
            <Text
              textAlign="left"
              fontWeight="bold"
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              letterSpacing={1}
              mb={10}
            >
              Features
            </Text>
          </Box>
          <Wrap spacing="20px" justify="center">
            <WrapItem>
              <Center w="300px" h="300px" bg="white">
                Box 1
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="300px" h="300px" bg="white">
                Box 2
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="300px" h="300px" bg="white">
                Box 3
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="300px" h="300px" bg="white">
                Box 4
              </Center>
            </WrapItem>
          </Wrap>
        </Box>
        <Image src={'/img/wave2.svg'} alt="wave2" />
      </Box>
      {/* footer */}
      <Box h="200px" w="100%" bg="background.200">
        <Box h="200px">tmp</Box>
        <Box w="100%" bg="teal.500" h="30px" textAlign="center">
          <Text
            as="small"
            color="white"
            fontSize={{ base: '12px', md: '14px' }}
          >
            Copyright &copy; Mia All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
});
