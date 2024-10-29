import { IoMdBookmarks } from 'react-icons/io';
import { FaPeopleGroup } from 'react-icons/fa6';
import { CgDollar } from 'react-icons/cg';
import Table from '../../components/Dashboard/Tables/Table';
import Button from '../../components/Button';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { useQueryClient } from 'react-query';
import { base_url_admin, DASHBOARD } from '../../Api/Api';
import { AxiosWithToken } from '../../Api/axios';

interface Apply_Institutes {
  id: number;
  name: string;
  email: string;
  educational_qualification: string;
  phone: string;
  read_at: number;
}
interface IFetchData {
  number_courses: number;
  number_students: number;
  revenue: number;
  apply_institutes: Apply_Institutes[];
}

// const userData: Apply_Institutes[] = [
//   {
//     id: 1,
//     name: 'احمد محمد التنجي',

//     phone: '+20 000000000',
//     email: 'example@example.com',
//   },
//   {
//     id: 2,
//     name: 'احمد محمد التنجي',

//     phone: '+20 000000000',
//     email: 'example@example.com',
//   },
//   {
//     id: 3,
//     name: 'احمد محمد التنجي',

//     phone: '+20 000000000',
//     email: 'example@example.com',
//   },
// ];

const userColumns: Array<{ key: keyof Apply_Institutes; label: string }> = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'الاسم' },
  { key: 'educational_qualification', label: 'المؤهل التعليمي' },
  { key: 'phone', label: 'رقم الهاتف' },
  { key: 'email', label: 'البريد الإلكتروني ' },
];

const MainDashboard = () => {
  const queryClient = useQueryClient();
  const { data: dataFetching } = useQuery({
    queryFn: () => AxiosWithToken.get(`${base_url_admin}/${DASHBOARD}`),
    queryKey: ['Contact_Us'],
  });
  const data: IFetchData = dataFetching?.data.data;
  return (
    <div>
      <h1 className="text-gold font-bold lg:text-6xl md:text-4xl text-2xl	text-center">
        الأكاديمية العربية
      </h1>
      <h2 className="mt-4 text-indigo-900 font-bold lg:text-4xl md:text-2xl text-xl	text-center">
        للإتصالات اللاسلكية والاستغاثات البحرية
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4 lg:mt-16 mt-8">
        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-md ">
          <div className="rounded-full bg-gold p-4">
            <IoMdBookmarks className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-body">عدد الكورسات</p>
            <p className="text-indigo-900 font-bold text-3xl">
              {data?.number_courses}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-md ">
          <div className="rounded-full bg-gold p-4">
            <FaPeopleGroup className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-body">عدد الطلاب</p>
            <p className="text-indigo-900 font-bold text-3xl">
              {data?.number_students}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-md ">
          <div className="rounded-full bg-gold p-4">
            <CgDollar className="w-10 h-10 text-white" />
          </div>
          <div>
            <p className="text-body">الأرباح </p>
            <p className="text-indigo-900 font-bold text-3xl">
              {data?.revenue}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-8">
        <Table data={data?.apply_institutes || []} columns={userColumns}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HiOutlineMailOpen className="text-indigo-900 w-8 h-8" />
              <p className="text-indigo-900 text-lg font-bold">
                طلبات التقديم بالمعهد
              </p>
            </div>
            <Button
              title="المزيد"
              className="bg-gold text-center text-white rounded-lg px-14 py-1 hover:bg-black duration-300 hover:text-white"
            />
          </div>
        </Table>
      </div>
    </div>
  );
};

export default MainDashboard;
