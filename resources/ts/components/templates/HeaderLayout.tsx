import React, { memo, ReactNode, VFC } from 'react';
import { Box } from '@chakra-ui/layout';
import { Header } from '../organisms/layout/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
