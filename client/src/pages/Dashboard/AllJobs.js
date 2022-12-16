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
import { BsSearch, BsPlusLg } from 'react-icons/bs';
import { useAppContext } from '../../context/appContext';

const AllJobs = () => {
  const { colorMode } = useColorMode();
  const { isLoading, search, handleChange } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Flex
      direction={['column', 'column', 'column', 'column']}
      alignItems={['center', 'center', 'center', 'center']}
      gap={4}
    >
      <Flex
        w={'100%'}
        direction={'column'}
        shadow={'md'} 
        borderRadius={16}
        gap={8}
        py={6}
        px={[4,4,8,12]}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      >
        <Flex
          w={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          borderRadius={16}
        >
          <Heading fontSize={'2xl'} color={'brand.secondary'}>
            My Applications
          </Heading>
          <Stack direction={'row'}>
            <InputGroup w={'sm'} display={['none', 'none', 'none', 'flex']}>
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch color="brand.clear" opacity={0.5} />}
              />
              <Input
                focusBorderColor="brand.secondary"
                type="text"
                placeholder="Search here..."
                name="search"
                value={search}
                onChange={handleSearch}
                bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
              />
            </InputGroup>
            <NavLink to={'/dashboard/add-job'}>
              <Button
                variant={'solid'}
                type="submit"
                colorScheme={'mainBlue'}
                color={'brand.clear'}
                fontWeight={'medium'}
                fontSize={'md'}
                px={8}
                leftIcon={<BsPlusLg />}
                lineHeight={'1rem'}
              >
                Add Job
              </Button>
            </NavLink>
          </Stack>
        </Flex>
        <SearchContainer />
      </Flex>
      <Flex w={'100%'}>
        <JobsContainer />
      </Flex>
    </Flex>
  );
};

export default AllJobs;
