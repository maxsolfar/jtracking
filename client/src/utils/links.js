import { MdQueryStats } from 'react-icons/md';
import { ImStatsBars } from 'react-icons/im';
import { AiOutlineAppstoreAdd} from 'react-icons/ai';
import { RiProfileLine } from 'react-icons/ri';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/dashboard/',
    icon: <ImStatsBars />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: '/dashboard/all-jobs',
    icon: <MdQueryStats />,
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
    icon: <RiProfileLine />,
  },
];

export default links;
