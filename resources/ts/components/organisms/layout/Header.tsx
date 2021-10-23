import React, { memo, VFC } from 'react';
import {
  Flex,
  Heading,
  Link,
  Stack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

// humberger icon
import { MenuIconButton } from '../../atoms/MenuIconButton';
// drawer menu
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
        {/* menu */}
        <Flex display={{ base: 'none', md: 'flex' }}>
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
        {/* humberger icon for sm display */}
        <MenuIconButton onOpen={onOpen} />
        {/* drawer menu for sm display */}
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </>
  );
});
