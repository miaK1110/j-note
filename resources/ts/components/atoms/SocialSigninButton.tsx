import React, { VFC } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';

type Props = {
  str: string;
};

export const SocialSigninButton: VFC<Props> = (props) => {
  {
    /* strには[ログイン/登録する]が入る */
  }
  const { str } = props;
  return (
    <>
      <Button py={6} w="100%" colorScheme="red" leftIcon={<FaGoogle />}>
        Googleで{str}
      </Button>
      <Button py={6} w="100%" colorScheme="gray" leftIcon={<FaGithub />}>
        Githubで{str}
      </Button>
      <Button py={6} w="100%" colorScheme="twitter" leftIcon={<FaTwitter />}>
        Twitterで{str}
      </Button>
    </>
  );
};
