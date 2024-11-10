import { NavLink } from 'react-router-dom';
import { links } from '../../utils/dashboardNavlink';
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { navLinksAction } from '../../app/features/navlink-dashboard/navlinksSlice';
import Cookie from 'cookie-universal';

const Sidebar = () => {
  const cookie = Cookie();

  const dispatch = useDispatch();
  const handleLogout = () => {
    cookie.remove('BearerAdmin');
    cookie.remove('kalb');
    window.location.pathname = '/';
  };
  const sideLinks = links.map((link, idx) => (
    <li key={idx} className="mb-4">
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-2 px-1 py-2 rounded-md duration-200 bg-gold text-white select-none'
            : 'flex items-center gap-2 px-1 py-2 rounded-md duration-200 hover:bg-gold hover:text-white select-none'
        }
        onClick={() => {
          dispatch(navLinksAction(link.label));
        }}
      >
        <link.icons />
        <span className="hidden md:block">{link.label}</span>
      </NavLink>
    </li>
  ));
  return (
    <div className="fixed right-0 top-[85.30px]">
      <nav className="flex flex-col border-l border-indigo-300 bg-gray-800 md:w-50 w-fit h-[calc(100vh-85px)] relative text-indigo-900 ">
        <ul className="flex flex-col p-4">{sideLinks}</ul>
        <div
          onClick={handleLogout}
          className="absolute bottom-10 left-1/2 w-48 justify-center -translate-x-1/2 flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800 duration-300"
        >
          <IoMdLogOut />
          <p className="select-none hidden md:block">تسجيل الخروج</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
