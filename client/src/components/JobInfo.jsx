import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const JobsInfo = ({ icon, text }) => {
  return (
    <Flex>
      <Text className='icon'>{icon}</Text>
      <Text className='text'>{text}</Text>
    </Flex>
  )
}

export default JobsInfo;