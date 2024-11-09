import Table from '../../components/Dashboard/Tables/Table';
import { AxiosWithToken } from '../../Api/axios';
import {
  base_url_admin,
  Courses as mainCourses,
  OFFERS,
  USER,
} from '../../Api/Api';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import SubmitLoader from '../../components/Loader/SubmitLoader';

type Apply_Institutes = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_active: string;
};

interface IFetchData {
  data: Apply_Institutes[];
  total: number;
  perPage: number;
}

const userColumns: Array<{ key: keyof Apply_Institutes; label: string }> = [
  { key: 'id', label: 'ID' },
  { key: 'first_name', label: 'الاسم الأول' },
  { key: 'last_name', label: 'الاسم الأخير' },
  { key: 'email', label: 'البريد الإلكتروني' },
];

const Students = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const [closeDialog, setCloseDialog] = useState(false);

  const { mutateAsync, isLoading: DeleteLoading } = useMutation({
    mutationFn: async (id: string) => {
      return AxiosWithToken.delete(`${base_url_admin}/${USER}/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setCloseDialog((prev) => !prev);
    },
  });

  const { data: dataFetching, isLoading } = useQuery({
    queryFn: () => AxiosWithToken.get(`${base_url_admin}/${USER}?page=${page}`),
    queryKey: ['users', page],
  });
  const data: IFetchData = dataFetching?.data.data;

  // ** Handle Jobs

  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="md:text-4xl font-bold">الطلاب</h1>
        <Link
          to={'/dashboard/student/add'}
          className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
        >
          <span className="font-bold" style={{ fontSize: '24px' }}>
            +
          </span>
          <p> إضافة طالب</p>
        </Link>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center gap-3">
          <span>جار تحميل الطلاب</span>
          <SubmitLoader className="w-8 h-8 text-gray-8" />
        </div>
      ) : (
        <Table
          setPage={setPage}
          totalPages={data?.total}
          data={data?.data || []}
          columns={userColumns}
          handleDelete={mutateAsync}
          perPage={data?.per_page}
          DeleteLoading={DeleteLoading}
          closeDialog={closeDialog}
        />
      )}
    </div>
  );
};

export default Students;
