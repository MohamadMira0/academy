import Table from '../../components/Dashboard/Tables/Table';
import { AxiosWithToken } from '../../Api/axios';
import { base_url_admin, Courses as mainCourses, OFFERS } from '../../Api/Api';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import SubmitLoader from '../../components/Loader/SubmitLoader';

type Apply_Institutes = {
  id: number;
  title_ar: string;
  study_group: string;
  type_payment: string;
  number_months: string;
};

interface IFetchData {
  data: Apply_Institutes[];
  total: number;
  perPage: number;
}

const userColumns: Array<{ key: keyof Apply_Institutes; label: string }> = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'عنوان الإعلان' },

  { key: 'description', label: 'الوصف' },
];

const Offers = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      return AxiosWithToken.delete(`${base_url_admin}/${mainCourses}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    },
  });

  const { data: dataFetching, isLoading } = useQuery({
    queryFn: () =>
      AxiosWithToken.get(`${base_url_admin}/${OFFERS}?page=${page}`),
    queryKey: ['offers', page],
  });
  const data: IFetchData = dataFetching?.data.data;

  // ** Handle Jobs

  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="md:text-4xl font-bold">العروض</h1>
        <Link
          to={'/dashboard/offers/add'}
          className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
        >
          <span className="font-bold" style={{ fontSize: '24px' }}>
            +
          </span>
          <p> إضافة عرض</p>
        </Link>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center gap-3">
          <span>جار تحميل العروض</span>
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
          deleteAction={false}
        />
      )}
    </div>
  );
};

export default Offers;
