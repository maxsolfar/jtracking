import React from 'react';
import moment from 'moment';
import { motion, transform } from 'framer-motion';
import {
  Button,
  Flex,
  Heading,
  HStack,
  useColorMode,
  Text,
  Link,
} from '@chakra-ui/react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link as NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import JobInfo from './JobInfo';
import { CgIfDesign } from 'react-icons/cg';
import { HiCode, HiServer } from 'react-icons/hi';
import { IoMdPin } from 'react-icons/io';
import { AiFillTag } from 'react-icons/ai';

const Job = ({
  _id,
  position,
  description,
  postUrl,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { colorMode } = useColorMode();
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');

  return (
    <NavLink
      to="/dashboard/add-job"
      onClick={() => setEditJob(_id)}
      className={'BoxJob'}
    >
      <Flex
        bg={colorMode === 'dark' ? 'brand.primary' : 'brand.clear'}
        direction={'column'}
        p={4}
        borderLeft={'3px solid'}
        borderColor={
          position === 'Front End Developer'
            ? 'brand.secondary'
            : position === 'Back End Developer'
            ? '#00AFB9'
            : 'brand.accent'
        }
        borderRadius={12}
        shadow={'md'}
      >
        <Flex justify={'space-between'} alignItems={'center'} py={1} mb={2}>
          <Heading fontSize={'2xl'} opacity={0.8}>
            {company}
          </Heading>
          <Text
            fontSize={'xs'}
            px={3}
            py={1}
            borderRadius={4}
            color={'brand.clear'}
            bg={
              status === 'Declined'
                ? '#FF5062'
                : status === 'Pending'
                ? 'brand.secondary'
                : '#00CCAA'
            }
          >
            {status}
          </Text>
          {/*  <Icon
          as={
            position === 'Front End Developer'
              ? HiCode
              : position === 'Back End Developer'
              ? HiServer
              : CgIfDesign
          }
          boxSize={
            position === 'Front End Developer'
              ? 8
              : position === 'Back End Developer'
              ? 8
              : 8
          }
          p={2}
          borderRadius={'50%'}
          borderWidth={'2px'}
        /> */}
        </Flex>
        <Flex mb={2} gap={2}>
          <Text opacity={0.7}>Position: </Text>
          <Text
          /* color={
            position === 'Front End Developer'
              ? 'brand.secondary'
              : position === 'Back End Developer'
              ? '#00AFB9'
              : 'brand.accent'
          } */
          >
            {position}
          </Text>
          {/*         <Text>
          {description}
        </Text> */}
        </Flex>
        {/* <Heading fontSize={'sm'}>{date}</Heading> */}
        <Flex direction={'column'} gap={2}>
          {/* <JobInfo icon={<IoMdPin />} text={jobLocation} /> */}
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<AiFillTag />} text={jobType} />
        </Flex>
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={2}
          pt={2}
          borderTopWidth={'1px'}
          borderColor={
            colorMode === 'dark' ? 'rgba(255,255,255,.1)' : 'rgba(21,21,21,.1)'
          }
        >
          {/*         <Button
          size={'md'}
          fontWeight={'normal'}
          color={'brand.secondary'}
          variant={'link'}
        >
          <Link to="/dashboard/add-job" onClick={() => setEditJob(_id)}>
            Edit Job
          </Link>
        </Button> */}
          <Text fontSize={'sm'} opacity={0.7}>
            <Link href={postUrl} isExternal>
              Link to Job Post
            </Link>
          </Text>
          <Button
            px={4}
            size={'sm'}
            fontWeight={'normal'}
            colorScheme={'mainBlue'}
            onClick={() => deleteJob(_id)}
            lineHeight={'1rem'}
            variant={'link'}
          >
            Delete
          </Button>
        </HStack>
      </Flex>
    </NavLink>
  );
};

export default Job;
