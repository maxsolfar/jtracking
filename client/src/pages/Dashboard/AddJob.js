import {
  Heading,
  Stack,
  Button,
  Flex,
  useColorMode,
  GridItem,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FormRow, Alert, FormRowSelect, FormTextArea } from '../../components';
import { useAppContext } from '../../context/appContext';

const AddJob = () => {
  const { colorMode } = useColorMode();
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    description,
    postUrl,
    jobLocation,
    jobType,
    jobTypeOptions,
    positionOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
    clearValues();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Stack
      direction={['column', 'column', 'row', 'row']}
      alignItems={['center', 'center', 'center', 'center']}
      gap={8}
      w={'100%'}
    >
      <Flex
        w={'100%'}
        direction={'column'}
        shadow={'md'}
        borderRadius={16}
        p={12}
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
      >
        <form className="form">
          {showAlert && <Alert />}

          {/* position */}
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w={'full'}>
            <GridItem colSpan={2}>
              <Heading fontSize={'2xl'} color={'brand.secondary'}>
                {isEditing ? 'Edit Job' : 'Add New Job'}
              </Heading>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
{/*               <FormRow
                labelText="Position"
                type="text"
                name="position"
                value={position}
                handleChange={handleJobInput}
              /> */}
              <FormRowSelect
                labelText="Position"
                name="position"
                value={position}
                handleChange={handleJobInput}
                list={positionOptions}
              />
            </GridItem>
            {/* company */}
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                labelText="Company"
                type="text"
                name="company"
                value={company}
                handleChange={handleJobInput}
              />
            </GridItem>
            {/* description */}
            <GridItem colSpan={[2, 2, 2, 2]}>
              <FormTextArea
                labelText="Description"
                name="description"
                value={description}
                handleChange={handleJobInput}
              />
            </GridItem>
            {/* postUrl */}
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                labelText="Post URL"
                name="postUrl"
                value={postUrl}
                handleChange={handleJobInput}
              />
            </GridItem>
            {/* location */}
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRow
                type="text"
                labelText="Location"
                name="jobLocation"
                value={jobLocation}
                handleChange={handleJobInput}
              />
            </GridItem>
            {/* job status */}
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRowSelect
                labelText="Status"
                name="status"
                value={status}
                handleChange={handleJobInput}
                list={statusOptions}
              />
            </GridItem>
            {/* job type */}
            <GridItem colSpan={[2, 2, 2, 1]}>
              <FormRowSelect
                labelText="Type"
                name="jobType"
                value={jobType}
                handleChange={handleJobInput}
                list={jobTypeOptions}
              />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 2]} gap={8}>
              <HStack>
                <Button
                  variant={'solid'}
                  type="submit"
                  colorScheme={'mainBlue'}
                  color={'brand.clear'}
                  fontWeight={'medium'}
                  fontSize={'md'}
                  onClick={handleSubmit}
                  px={6}
                >
                  Submit
                </Button>
                <Button
                  variant={'solid'}
                  colorScheme={'mainPurple'}
                  color={'brand.clear'}
                  fontWeight={'medium'}
                  fontSize={'md'}
                  px={6}
                  onClick={(e) => {
                    e.preventDefault();
                    clearValues();
                  }}
                >
                  Clear
                </Button>
              </HStack>
            </GridItem>
          </SimpleGrid>
        </form>
      </Flex>
    </Stack>
  );
};

export default AddJob;
