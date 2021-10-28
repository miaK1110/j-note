import React, { memo, VFC } from 'react';
import { Link as ReactLink } from 'react-router-dom';
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
        color="gray.700"
        align="center"
        justify="space-between"
        w="100%"
        padding={{ base: 4, md: 6 }}
        position="fixed"
        top="1rem"
      >
        {/* logo */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'xl' }}>
            J note
          </Heading>
        </Flex>
        {/* menu */}
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Stack spacing={6} direction="row" align="center">
            <Link fontWeight="bold">Home</Link>
            <Link fontWeight="bold">About</Link>
            <ReactLink to="/login">
              <Button colorScheme="teal" size="sm">
                <Link textDecoration="none">ログイン</Link>
              </Button>
            </ReactLink>
            <ReactLink to="/signup">
              <Button colorScheme="orange" size="sm">
                <Link textDecoration="none">サインアップ</Link>
              </Button>
            </ReactLink>
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
