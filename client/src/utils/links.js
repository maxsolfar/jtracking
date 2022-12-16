import { BsQuestionCircle } from 'react-icons/bs';
import { FaTasks, FaUserEdit } from 'react-icons/fa';
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
    text: 'my jobs',
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
    icon: <FaUserEdit />,
  },
/*   {
    id: 4,
    text: 'reports',
    path: '/dashboard/stats',
    icon: <BiStats />,
  }, */
  {
    id: 5,
    text: 'support',
    path: '/dashboard/support',
    icon: <BsQuestionCircle />,
  },
];

export default links;
