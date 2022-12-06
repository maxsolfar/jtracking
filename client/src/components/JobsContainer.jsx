import React, { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Job from './Job';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Flex>
        <Heading> No jobs to display... </Heading>
      </Flex>
    );
  }
  return (
    <Flex direction={"column"} w={'full'}>
      <Heading>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </Heading>
      <SimpleGrid columns={3} columnGap={3} rowGap={6} w={'full'}>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default JobsContainer;
