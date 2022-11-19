import {  Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';

const Clock = () => {
  const [clockState, setClockState] = useState();
  const dateF = new Date().toLocaleDateString();
  useEffect(() => {
    setInterval(() => {
      let date = new Date().toLocaleTimeString();
      setClockState(date);
    }, 1000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <Flex alignItems={"flex-end"} direction={"column"} justifyContent={"center"}>
      <Heading fontSize={"xl"}  letterSpacing={1}>{clockState}</Heading>
      <Text fontSize={"sm"} lineHeight={4} color={"brand.secondary"}>{dateF}</Text>
    </Flex>
  );
};

export default Clock;
