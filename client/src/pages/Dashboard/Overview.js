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
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import vector from '../../assets/images/jobSearch.svg';
import {
  Loading,
  StatsContainer,
  ChartsContainer,
  LastApplications,
} from '../../components';
import { useAppContext } from '../../context/appContext';

const Overview = () => {
  const { colorMode } = useColorMode();
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={4}
    >
      {/* <HStack w={'100%'} as={'section'} gap={4}>
        <Image w={'150px'} src={vector} alt={'image vector heading'} />
        <VStack alignItems={'flex-start'}>
          <Heading fontSize={'2xl'} mb={2}>
            {/* <Highlight
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
            </Highlight> */}
      {/* Track your Job Search.
          </Heading>
          <Text w={'100%'} fontSize={'md'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu, Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Text>
        </VStack>
      </HStack> */}
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
      <Flex w={"100%"}>
        <LastApplications />
      </Flex>
    </Flex>
  );
};

export default Overview;
