import { AiOutlineAppstoreAdd, AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaTasks } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';


const links = [
  {
    id: 1,
    text: 'overview',
    path: '/dashboard/',
    icon: <BiStats />,
  },
/*   {
    id: 2,
    text: 'stats',
    path: '/dashboard/stats',
    icon: <BiStats />,
  }, */
  {
    id: 2,
    text: 'all jobs',
    path: '/dashboard/all-jobs',
    icon: <FaTasks />,
  },
  {
    id: 3,
    text: 'add job',
    path: '/dashboard/add-job',
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    id: 4,
    text: 'profile',
    path: '/dashboard/profile',
    icon: <AiOutlineUser />,
  },
  {
    id: 5,
    text: 'settings',
    path: '/dashboard/settings',
    icon: <FiSettings />,
  },
];

export default links;
