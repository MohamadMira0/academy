import { MdDashboard } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdWork } from 'react-icons/md';
import { FaFileSignature } from 'react-icons/fa6';
import { BiSolidBookContent, BiSolidOffer } from 'react-icons/bi';
import { MdOutlineDeveloperBoard } from 'react-icons/md';

export const links = [
  {
    label: ' لوحة التحكم',
    to: '/dashboard/main',
    icons: MdDashboard,
  },
  {
    label: 'الطلاب',
    to: '/dashboard/student',
    icons: FaPeopleGroup,
  },
  {
    label: 'الكورسات ',
    to: '/dashboard/courses',
    icons: MdOutlineDeveloperBoard,
  },
  {
    label: 'العروض ',
    to: '/dashboard/offers',
    icons: BiSolidOffer,
  },
  {
    label: 'التدريب والتوظيف ',
    to: '/dashboard/training',
    icons: MdWork,
  },
  {
    label: 'المدونات ',
    to: '/dashboard/blogs',
    icons: FaFileSignature,
  },
];
