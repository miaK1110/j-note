import React, { memo, VFC } from 'react';
import { Flex, Heading, Link, Stack, Button } from '@chakra-ui/react';

import { MenuIconButton } from '../components/atoms/MenuIconButton';

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="orange.50"
      color="gray.700"
      align="center"
      justify="space-between"
      w="100%"
      padding={{ base: 4, md: 6 }}
    >
      {/* logo */}
      <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
        <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
          J note
        </Heading>
      </Flex>

      <Flex>
        {/* <MenuIconButton onOpen={onOpen} /> */}
        <Stack spacing={6} direction="row" align="center">
          <Link fontWeight="bold">Home</Link>
          <Link fontWeight="bold">About</Link>
          <Button colorScheme="teal" size="sm">
            <Link>ログイン</Link>
          </Button>
          <Button colorScheme="orange" size="sm">
            <Link>サインアップ</Link>
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
});
