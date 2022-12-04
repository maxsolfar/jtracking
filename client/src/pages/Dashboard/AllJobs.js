import {
  Stack,
  Flex,
  useColorMode,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { JobsContainer, SearchContainer } from '../../components';
import { BsSearch } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';

const AllJobs = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction={['column', 'column', 'column', 'column']}
      alignItems={['center', 'center', 'center', 'center']}
      gap={4}
    >
      <Flex
        w={'100%'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={16}
      >
        <Heading fontSize={'2xl'} color={'brand.secondary'}>
          My Jobs
        </Heading>
        <Stack direction={'row'}>
          <InputGroup w={'sm'} display={['none', 'none', 'none', 'flex']}>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="brand.clear" opacity={0.5} />}
            />
            <Input
              focusBorderColor="brand.secondary"
              type="tel"
              placeholder="Search here..."
              bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
            />
          </InputGroup>
          <NavLink
            to={'/dashboard/add-job'}
          >
            <Button
              variant={'solid'}
              type="submit"
              colorScheme={'mainBlue'}
              color={'brand.clear'}
              fontWeight={'medium'}
              fontSize={'md'}
              px={8}
              leftIcon={<BsPlusLg />}
            >
              Add Job
            </Button>
          </NavLink>
        </Stack>
      </Flex>
      <Flex
        w={'100%'}
        direction={'column'}
        shadow={'md'}
        borderRadius={16}
        p={12}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      >
        <SearchContainer />
        <JobsContainer />
      </Flex>
    </Flex>
  );
};

export default AllJobs;
