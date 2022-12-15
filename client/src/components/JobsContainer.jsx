import React, { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Job from './Job';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Flex py={4}>
        <Heading> No jobs to display... </Heading>
      </Flex>
    );
  }
  return (
    <Flex direction={'column'} w={'full'}>
      <Heading fontSize={"xl"} py={4}>
        {totalJobs} Job{jobs.length > 1 && 's'} found
      </Heading>
      <SimpleGrid columns={[1,2,2,3]} columnGap={4} rowGap={4} w={'full'}>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </SimpleGrid>
      {numOfPages > 1 && <PageBtnContainer />}
    </Flex>
  );
};

export default JobsContainer;
