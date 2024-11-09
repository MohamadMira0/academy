import Table from '../../components/Dashboard/Tables/Table';
import { AxiosWithToken } from '../../Api/axios';
import { base_url_admin, OFFERS, USER } from '../../Api/Api';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import SubmitLoader from '../../components/Loader/SubmitLoader';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { showError, showSuccess } from '../../libs/ReactToastify';

type Apply_Institutes = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_active: string;
  courses: [];
};

interface IFetchData {
  data: Apply_Institutes[];
  total: number;
  perPage: number;
}

const userColumns: Array<{ key: keyof Apply_Institutes; label: string }> = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'العنوان' },
  { key: 'status', label: 'الحالة' },
];

const ShowStudent = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [chooseCourse, setChooseCourse] = useState('اختر احد الكورسات');

  const { data: dataFetching, isLoading } = useQuery({
    queryFn: () => AxiosWithToken.get(`${base_url_admin}/${USER}/show/${id}`),
    queryKey: ['showUser'],
  });
  const data: IFetchData = dataFetching?.data.data;

  const { data: coursesData } = useQuery({
    queryFn: () =>
      AxiosWithToken.get(
        `${base_url_admin}/${OFFERS}/index-courses?study_groups[0]=first group&study_groups[1]=second group&study_groups[2]=navigation and marine officers`,
      ),
    queryKey: ['list-courses'],
  });

  const finalCoursesData = coursesData?.data.data;

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading: AssignLoading } = useMutation({
    mutationFn: async (id: string) => {
      return AxiosWithToken.put(
        `${base_url_admin}/${USER}/assign-course/${id}`,
        { course_id: chooseCourse },
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['showUser']);
      showSuccess('تم إضافة الكورس للطالب بنجاح');
      setOpenModal((prev) => !prev);
      setChooseCourse('اختر احد الكورسات');
    },
    onError: () => {
      showError('إما ان الكورس غير موجود أو غير مفعل');
    },
  });
  // ** Handle Jobs
  const modal = openModal && (
    <>
      <div className="bg-black fixed top-0 left-0 w-full h-full z-10 opacity-60"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-3/4">
        {/* Main modal */}
        <div
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
          className="  justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full  h-full md:h-auto">
            {/* Modal content */}
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 "
                data-modal-toggle="deleteModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <h1 className="mb-4 md:text-3xl mt-8">تسجيل كورس</h1>
              <div className="my-8">
                <select
                  value={chooseCourse}
                  onChange={(e) => setChooseCourse(e.target.value)}
                  className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                >
                  <option disabled selected>
                    اختر احد الكورسات
                  </option>
                  {finalCoursesData?.map((item: any, key: number) => (
                    <option key={key} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center items-center space-x-4 gap-5">
                <button
                  type="submit"
                  disabled={AssignLoading}
                  className="py-2 px-16 text-sm font-medium text-center text-white bg-sky-600 rounded-lg flex items-center gap-2"
                  onClick={() => mutateAsync(id)}
                >
                  {AssignLoading && <SubmitLoader />}إضافة
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  data-modal-toggle="deleteModal"
                  type="button"
                  className="py-2 px-16 text-sm font-medium text-gray-500 bg-gray-8 rounded-md text-black "
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      {modal}
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="md:text-4xl font-bold">معلومات الطالب</h1>

        <div
          onClick={() => setOpenModal(true)}
          className="btn bg-sky-600 text-white px-6 py-2 rounded-md cursor-pointer"
        >
          تسجيل كورس
        </div>
      </div>

      <div className="my-8">
        <h1 className="md:text-2xl font-bold">
          <span className="text-sky-600"> الطالب/</span>
          {data?.first_name} {data?.last_name}
        </h1>
        <div className="mt-4 flex items-center flex-wrap gap-20">
          <div>
            <h1 className="text-sky-600">البريد اإلكتروني</h1>
            <span className="flex items-center gap-2">
              <AiOutlineMail className="text-sky-600" />
              {data?.email}
            </span>
          </div>{' '}
          <div>
            <h1 className="text-sky-600">رقم االهاتف</h1>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-sky-600" />

              {data?.phone}
            </span>
          </div>
        </div>
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
          data={data?.courses || []}
          columns={userColumns}
          perPage={data?.per_page}
          action={false}
        />
      )}
    </div>
  );
};

export default ShowStudent;
