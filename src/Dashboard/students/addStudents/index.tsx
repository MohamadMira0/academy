import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IInitialValuesAddUser } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosWithToken } from '../../../Api/axios';
import { base_url_admin, USER } from '../../../Api/Api';

import { showSuccess } from '../../../libs/ReactToastify';
import SubmitLoader from '../../../components/Loader/SubmitLoader';
import { useQuery } from 'react-query';
import { AddStudentValidation } from '../../../Validation/dashboard/AddStudentValidation';

const AddStudent = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => AxiosWithToken.get(`${base_url_admin}/${USER}/show/${id}`),
    queryKey: ['singleUser' + id],
    enabled: id ? true : false,
  });

  const finalData = data?.data.data;

  const initialValues: IInitialValuesAddUser = {
    first_name: id ? finalData?.first_name : '',
    last_name: id ? finalData?.last_name : '',
    phone: id ? finalData?.phone : '',
    email: id ? finalData?.email : '',
    password: '',
  };

  const handleSubmit = async (values: IInitialValuesAddUser) => {
    try {
      const store = id ? AxiosWithToken.put : AxiosWithToken.post;

      const url = id
        ? `${base_url_admin}/${USER}/update/${id}`
        : `${base_url_admin}/${USER}/store`;
      await store(url, values);
      nav('/dashboard/student');
      showSuccess(id ? 'تم تعديل الطالب بنجاح' : 'تم إضافة الطالب بنجاح');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={() => AddStudentValidation()}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="first_name"
              >
                الاسم الأول
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="الاسم الأول"
                name="first_name"
                id="first_name"
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="error text-red-600 text-sm mt-3"
              />
            </div>{' '}
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="last_name"
              >
                الاسم الأخير
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="الاسم الأخير"
                name="last_name"
                id="last_name"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="error text-red-600 text-sm mt-3"
              />
            </div>{' '}
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="phone"
              >
                رقم الهاتف
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="رقم الهاتف"
                name="phone"
                id="phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error text-red-600 text-sm mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="email"
              >
                البريد الإلكتروني
              </label>
              <Field
                type="email"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="البريد الإلكتروني"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-red-600 text-sm mt-3"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="password"
              >
                كلمة المرور
              </label>
              <Field
                type="password"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="كلمة المرور"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error text-red-600 text-sm mt-3"
              />
            </div>
            <button
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center mx-auto gap-2 mt-5"
              title="حفظ"
              type="submit"
              disabled={isSubmitting}
            >
              <span> حفظ</span>

              {isSubmitting && (
                <span>
                  <SubmitLoader />
                </span>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStudent;
