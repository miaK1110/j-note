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
  useBreakpointValue,
} from '@chakra-ui/react';
import { Box, Center, Heading } from '@chakra-ui/layout';
import { CheckIcon } from '@chakra-ui/icons';

export const Toppage: VFC = memo(() => {
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'md', md: 'lg' });
  return (
    <>
      {/* main visual */}
      <Flex
        mb={8}
        mt={{ base: '100px', sm: '150px', md: '200px' }}
        mx={10}
        pt="63x"
      >
        <Box
          w="50%"
          backGroundColor="teal"
          // lineHeight="tight"
          textAlign="center"
          mt={{ base: '0px', md: '30px', lg: '50px' }}
        >
          <Heading
            as="h2"
            fontSize={{ base: '16px', sm: '24px', md: '28px', lg: '36px' }}
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
          <Button colorScheme="orange" size={buttonSize}>
            会員登録する(無料)
          </Button>
        </Box>
        <Box w="50%">
          <Image src={'/img/MainVIsualImg.png'} alt="main-visual-img" />
        </Box>
      </Flex>
      {/* about section */}
      <Image src={'/img/wave1.svg'} alt="wave1" />
      <Box w="100%" bg="background.100" pb="100px">
        <Text
          textAlign="center"
          color="teal.400"
          fontWeight="bold"
          fontSize={{ base: '6px', md: '8px', lg: '10px' }}
          mb="-5px"
          pt={7}
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
          pb="60px"
          textAlign="center"
        >
          こんな経験はありませんか？
        </Heading>
        <Flex mx={10}>
          <Box w={{ base: '0%', md: '50%' }} align="center">
            <Image
              src={'/img/top.png'}
              alt="top-img"
              display={{ base: 'none', sm: 'block', md: 'block' }}
              maxH="350px"
            />
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Stack spacing={5}>
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} mr="8px" />
                このエラー前にも見たけどなんだったかな？
              </Text>
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} mr="8px" />
                環境構築あまりやらないから忘れたな。。
              </Text>
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} mr="8px" />
                この実装前にもやったけどどうやったんだっけ？
              </Text>
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontWeight="bold"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                letterSpacing={1}
              >
                <CheckIcon color="teal" boxSize={6} mr="8px" />
                オリジナルの関数作ったけどどこに置いたかな？
              </Text>
            </Stack>
            <Text
              textAlign={{ base: 'center', md: 'left' }}
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
      <Box bg="gray.100" pt="60px">
        <Box px={10}>
          <Box w="100%" textAlign="left" pos="relative" h="80px" mb="40px">
            <Text
              color="teal.400"
              fontWeight="bold"
              fontSize={{ base: '6px', md: '8px', lg: '10px' }}
              pos="absolute"
              top="20px"
              left="25px"
            >
              LEARN MORE
            </Text>
            <Text
              textAlign="left"
              fontWeight="bold"
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              letterSpacing={1}
              pos="absolute"
              top="25px"
            >
              Features
            </Text>
          </Box>
        </Box>
        <Wrap spacing="20px" justify="center" mb="100px">
          <WrapItem>
            <Container w="300px" h="360px" bg="white">
              <Image
                src={'/img/free.png'}
                alt="free"
                boxSize="100px"
                my="20px"
              />
              <Text letterSpacing={1} fontWeight="bold" pb="20px">
                j-noteは完全無料で利用可能！
              </Text>
              <Text letterSpacing={1}>
                j-noteは全ての機能を完全無料でお使いいただけます。
              </Text>
            </Container>
          </WrapItem>
          <WrapItem>
            <Container w="300px" h="360px" bg="white">
              <Image
                src={'/img/group.png'}
                alt="group"
                boxSize="100px"
                my="20px"
              />
              <Text letterSpacing={1} fontWeight="bold" pb="20px">
                j-noteはメモを共有できます。
              </Text>
              <Text letterSpacing={1}>
                記事を公開・非公開設定にすれば他の人がその記事を閲覧することが可能です。公開設定にしてない記事は他の人が見ることができないので安心です。
              </Text>
            </Container>
          </WrapItem>
          <WrapItem>
            <Container w="300px" h="360px" bg="white">
              <Image
                src={'/img/folder.png'}
                alt="floder"
                boxSize="100px"
                my="20px"
              />
              <Text letterSpacing={1} fontWeight="bold" pb="20px">
                簡単に管理ができる！
              </Text>
              <Text letterSpacing={1}>
                タグを自作して記事を管理できます。お気に入り登録すれば記事一覧でその記事が上に表示されるので更に簡単に記事を探すことができます。間違って削除してしまった場合でもゴミ箱機能により7日間保管されるので安心です。
              </Text>
            </Container>
          </WrapItem>
          <WrapItem>
            <Container w="300px" h="360px" bg="white">
              <Image
                src={'/img/folder.png'}
                alt="folder"
                boxSize="100px"
                my="20px"
              />
              <Text letterSpacing={1} fontWeight="bold" pb="20px">
                簡単に管理ができる！
              </Text>
              <Text letterSpacing={1}>
                タグを自作して記事を管理できます。お気に入り登録すれば記事一覧でその記事が上に表示されるので更に簡単に記事を探すことができます。間違って削除してしまった場合でもゴミ箱機能により7日間保管されるので安心です。
              </Text>
            </Container>
          </WrapItem>
        </Wrap>

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
