import { Outlet } from 'react-router-dom';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

interface IProps {}
const LayoutDashboard = ({}: IProps) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="md:m-12  p-2 flex-1 overflow-x-auto mt-30 md:mt-30 md:mr-[250px] mr-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
