import { useAppContext } from '../context/appContext';
import StatsItem from './StatsItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { AiFillTags} from 'react-icons/ai';
import { Flex } from "@chakra-ui/react";

const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: 'Total Applications',
      count: stats.pending + stats.interview + stats.declined || 0,
      icon: <AiFillTags />,
      bg: '#3F62FE',
    },
    {
      title: 'Pending Applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      bg: '#ff9159',
    },
    {
      title: 'Interviews Scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      bg: '#A44CC4',
    },
    {
      title: 'Jobs Declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      bg: '#00CCAA',
    },
  ];
  return (
    <Flex direction={"row"} w={"100%"} gap={4} flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Flex>
  );
};

export default StatsContainer;
