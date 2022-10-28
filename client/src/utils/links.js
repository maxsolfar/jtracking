import { MdQueryStats } from 'react-icons/md';
import { ImStatsBars } from 'react-icons/im';
import { AiOutlineAppstoreAdd, AiOutlineUser } from 'react-icons/ai';
import { RiProfileLine } from 'react-icons/ri';
import { BsStackOverflow } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaTasks } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';




const links = [
  {
    id: 1,
    text: 'overview',
    path: '/dashboard/',
    icon: <BsStackOverflow />,
  },
  {
    id: 2,
    text: 'stats',
    path: '/dashboard/stats',
    icon: <BiStats />,
  },
  {
    id: 3,
    text: 'all jobs',
    path: '/dashboard/all-jobs',
    icon: <FaTasks />,
  },
  {
    id: 4,
    text: 'add job',
    path: '/dashboard/add-job',
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    id: 5,
    text: 'profile',
    path: '/dashboard/profile',
    icon: <AiOutlineUser />,
  },
  {
    id: 6,
    text: 'settings',
    path: '/dashboard/settings',
    icon: <FiSettings />,
  },
];

export default links;
