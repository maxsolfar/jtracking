import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  HStack,
  useColorMode,
  Highlight,
} from '@chakra-ui/react';
import React from 'react';
import vector from '../../assets/images/jobSearch.svg';

const Overview = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={4}
    >
      {/* <HStack w={'100%'} as={'section'} gap={4}>
        <Image w={'170px'} src={vector} alt={'image vector heading'} />
        <VStack alignItems={'flex-start'}>
          <Heading fontSize={'2xl'} mb={2}>
            <Highlight
              query={['Search.']}
              styles={{
                px: '4',
                py: '2',
                rounded: '8',
                bg: 'brand.secondary',
                color: 'white',
              }}
            >
              Track your Job Search.
            </Highlight>
          </Heading>
          <Text w={'95%'} fontSize={'md'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu, Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Text>
        </VStack>
      </HStack> */}
      <Flex
        w={'100%'}
        h={'100px'}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
        borderRadius={16}
      ></Flex>
      <Box
        w={'100%'}
        h={'270px'}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
        borderRadius={16}
      ></Box>
    </Flex>
  );
};

export default Overview;
