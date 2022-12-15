import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const JobsInfo = ({ icon, text }) => {
  return (
    <Flex gap={2} alignItems={"center"}>
      <Text >{icon}</Text>
      <Text >{text}</Text>
    </Flex>
  )
}

export default JobsInfo;