import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaTasks, FaRegUserCircle } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';

const links = [
  {
    id: 1,
    text: 'overview',
    path: '/dashboard/',
    icon: <MdDashboard />,
  },
  {
    id: 2,
    text: 'jobs',
    path: '/dashboard/all-jobs',
    icon: <FaTasks />,
  },
/*   {
    id: 3,
    text: 'add job',
    path: '/dashboard/add-job',
    icon: <AiOutlineAppstoreAdd />,
  }, */
  {
    id: 3,
    text: 'profile',
    path: '/dashboard/profile',
    icon: <FaRegUserCircle />,
  },
  {
    id: 4,
    text: 'reports',
    path: '/dashboard/add-job',
    icon: <BiStats />,
  },
  {
    id: 5,
    text: 'settings',
    path: '/dashboard/settings',
    icon: <FiSettings />,
  },
];

export default links;
