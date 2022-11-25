import React from 'react';
import moment from 'moment';
import { Button, Flex, Heading, HStack, Box } from '@chakra-ui/react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import JobInfo from './JobInfo';

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
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  return (
    <Flex>
      <Heading>{company}</Heading>
      <Heading>{date}</Heading>
      <Box>
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />
        <JobInfo icon={<FaBriefcase />} text={jobType} />
        <div className={`status ${status}`}>{status}</div>
      </Box>
      <HStack>
        <Link to="/add-job" onClick={() => setEditJob(_id)}>
          Edit
        </Link>
        <Button onClick={() => deleteJob(_id)}>Delete</Button>
      </HStack>
    </Flex>
  );
};

export default Job;
