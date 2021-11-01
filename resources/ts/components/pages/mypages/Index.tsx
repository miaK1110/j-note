import React, { VFC } from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  name: string;
};

export const Mypage: VFC<Props> = (props) => {
  const { name } = props;
  return <Heading>{name}さんのマイページ！</Heading>;
};
