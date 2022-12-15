import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';
import { Button, Flex, Heading, useColorMode } from '@chakra-ui/react';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { colorMode } = useColorMode();
  const { monthlyApplications: data } = useAppContext();
  return (
    <Flex
      direction={'column'}
      px={8}
      py={4}
      bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      borderRadius={16}
      w={"100%"}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading fontSize={'2xl'}>Monthly Applications</Heading>
        <Button
          type="button"
          variant={'solid'}
          bg={barChart ? 'brand.secondary' : '#2ABEB3'}
          color={'brand.clear'}
          fontWeight={'normal'}
          onClick={() => setBarChart(!barChart)}
        >
          {barChart ? 'AreaChart' : 'BarChart'}
        </Button>
      </Flex>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Flex>
  );
};

export default ChartsContainer;
