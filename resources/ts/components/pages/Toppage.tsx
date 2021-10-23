import React, { memo, VFC } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';

export const Toppage: VFC = memo(() => {
  return (
    <Flex>
      <Box></Box>
      <Box boxSize="sm">
        <Image src={'/img/MainVIsualImg.png'} alt="main-visual-img" />
      </Box>
    </Flex>
  );
});
