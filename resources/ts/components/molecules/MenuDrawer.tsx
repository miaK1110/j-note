import React, { memo, VFC } from 'react';
import {
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <>
      <Drawer placement="right" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Flex flexDirection="column">
                <Button w="100%" mt={8} p={4}>
                  Home
                </Button>
                <Button w="100%" p={4}>
                  About
                </Button>
                <Button w="100%">ログイン</Button>
                <Button w="100%">サインアップ</Button>
                <DrawerCloseButton />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
