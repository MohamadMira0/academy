import logo from '../../assets/logoSvg.svg';
import { CiSearch } from 'react-icons/ci';
import { BsPersonFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface IProps {}
const Navbar = ({}: IProps) => {
  const { title } = useSelector((state: RootState) => state.navLinks);
  return (
    <div className="fixed left-0 top-0 w-screen">
      <div className="flex items-center justify-evenly bg-indigo-900 text-white py-2">
        <img src={logo} width={75} />
        <h1 className="hidden md:block">{title}</h1>

        <div className="relative hidden md:block">
          <input
            type="search"
            placeholder="بحث"
            className="ps-6 rounded-md p-1 text-black outline-none"
          />
          <CiSearch className="text-sky-500 absolute start-1 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <BsPersonFill className="w-8 h-8 text-sky-500 p-1 border bottom-2 border-sky-500 rounded-full bg-slate-200" />
              <p className="text-sm">المسؤول</p>
            </div>
            <IoMdArrowDropdown />
          </div>
          <IoIosNotifications className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
