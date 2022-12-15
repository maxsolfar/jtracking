import { Flex, Text, Heading, VStack, useColorMode } from '@chakra-ui/react';

const StatsItem = ({ count, title, icon, bg }) => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      py={6}
      borderRadius={12}
      w={'100%'}
      borderStartWidth={'4px'}
      borderColor={bg}
    >
      <Flex alignItems={'center'} gap={4}>
        <Text fontSize={'2xl'} fontWeight={"bold"} color={bg}>{count}</Text>
        <Text fontSize={'xl'} bg={bg} color={"brand.clear"} p={2} borderRadius={8}>
          {icon}
        </Text>
      </Flex>
      <Heading fontSize={'xl'} opacity={.85}>{title}</Heading>
    </VStack>
  );
};

export default StatsItem;
