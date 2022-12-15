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
        columns={5}
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
        <Text>Company</Text>
        <Text>Position</Text>
        <Text>Job Type</Text>
        <Text>Post Url</Text>
        <Text>Status</Text>
      </SimpleGrid>
      {jobs.map((job) => (
        <SimpleGrid
          columns={5}
          columnGap={4}
          w={'full'}
          justifyItems={'center'}
          mb={4}
          pb={2}
          borderBottomWidth={'1px'}
          borderBottomColor={colorMode === "dark" ? 'rgba(255,255,255,.1)' : 'rgba(21,21,21,.1)'}
        >
          <Text>{job.company}</Text>
          <Text>{job.position}</Text>
          <Text>{job.jobType}</Text>
          <Link href={job.postUrl} isExternal>
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
