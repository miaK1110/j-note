import React, { VFC } from 'react';
import { Heading, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router';

export const Mypage: VFC = () => {
  const history = useHistory();
  const handleLogout = async (e: any) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:8000/api/logout');
    if (res.data.status === 200) {
      console.log('logoutしたよ！');
      history.push('/');
    }
  };

  return (
    <>
      <Heading>マイページ！</Heading>
      <Button onClick={handleLogout}>ログアウト</Button>
    </>
  );
};
