import { useAppContext } from '../context/appContext';
import {
  Button,
  Flex,
  Heading,
  useColorMode,
  Text,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { AiFillAccountBook } from 'react-icons/ai'

const LastJobs = () => {
  const { colorMode } = useColorMode();
  const { lastApplications: jobs } = useAppContext();
  return (
    <Flex
      direction={'column'}
      px={8}
      py={4}
      bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      borderRadius={16}
      w={'100%'}
    >
      <Heading fontSize={'2xl'} mb={8}>
        Last {jobs.length} Applications
      </Heading>
      <SimpleGrid
        columns={[3,4,4,5]}
        columnGap={4}
        w={'full'}
        justifyItems={'center'}
        mb={4}
        pb={2}
        borderBottomWidth={'1px'}
        borderBottomColor={colorMode === "dark" ? 'rgba(255,255,255,.2)' : 'rgba(21,21,21,.2)'}
        opacity={0.9}
        color={'brand.secondary'}
        fontWeight={'bold'}
      >
        <Text fontSize={["sm", "sm", "sm", "md"]}>Company</Text>
        <Text fontSize={["sm", "sm", "sm", "md"]} display={["none","flex", "flex", "flex"]}>Position</Text>
        <Text fontSize={["sm", "sm", "sm", "md"]}>Job Type</Text>
        <Text fontSize={["sm", "sm", "sm", "md"]} display={["none","none", "none", "flex"]}>Post Url</Text>
        <Text fontSize={["sm", "sm", "sm", "md"]}>Status</Text>
      </SimpleGrid>
      {jobs.map((job, index) => (
        <SimpleGrid
          key={index}
          columns={[3,4,4,5]}
          columnGap={4}
          w={'full'}
          justifyItems={'center'}
          mb={4}
          pb={2}
          borderBottomWidth={'1px'}
          borderBottomColor={colorMode === "dark" ? 'rgba(255,255,255,.1)' : 'rgba(21,21,21,.1)'}
        >
          <Text fontSize={["sm", "md", "md", "md"]}>{job.company}</Text>
          <Text display={["none","flex", "flex", "flex"]}>{job.position}</Text>
          <Text fontSize={["sm", "md", "md", "md"]}>{job.jobType}</Text>
          <Link display={["none","none", "none", "flex"]} href={job.postUrl} isExternal>
            Post Link
          </Link>
          <Text
            fontSize={'xs'}
            px={3}
            py={1}
            borderRadius={4}
            color={'brand.clear'}
            bg={
              job.status === 'Declined'
                ? '#FF5062'
                : job.status === 'Pending'
                ? 'brand.secondary'
                : '#00CCAA'
            }
          >
            {job.status}
          </Text>
        </SimpleGrid>
      ))}
    </Flex>
  );
};

export default LastJobs;
