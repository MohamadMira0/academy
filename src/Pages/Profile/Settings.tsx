import { ErrorMessage, Field, Form, Formik } from 'formik';
import SubmitLoader from '../../components/Loader/SubmitLoader';
import { AxiosWithTokenStudent } from '../../Api/axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IInitialValuesAddUser } from '../../types';
import { showError, showSuccess } from '../../libs/ReactToastify';
import { AddStudentValidation } from '../../Validation/dashboard/AddStudentValidation';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import TopBar2 from '../../components/TopBar2';
import { useState } from 'react';

const Settings = () => {
  const { lang } = useSelector((state: RootState) => state.language);

  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const { data } = useQuery({
    queryFn: () => AxiosWithTokenStudent.get(`/student/show-profile`),
    queryKey: ['single-User'],
  });

  const finalData = data?.data.data;

  const initialValues: IInitialValuesAddUser = {
    first_name: finalData?.first_name,
    last_name: finalData?.last_name,
    phone: finalData?.phone,
    email: finalData?.email,
  };

  const handleSubmit = async (values: IInitialValuesAddUser) => {
    try {
      const res = await AxiosWithTokenStudent.put(
        `/student/update-profile`,
        values,
      );
      console.log(res);
      nav('/profile');
      showSuccess('تم تعديل البيانات بنجاح');
    } catch (err) {
      console.log(err);
    }
  };
  const changePassword = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (password === passwordConf) {
        const res = await AxiosWithTokenStudent.put(
          '/student/change-password',
          {
            password,
            password_confirmation: passwordConf,
          },
        );
        console.log(res);
        showSuccess('تم تغيير كلمة المرور بنجاح');
      } else {
        showError('كلمة المرور غير متطابقة');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setPassword('');
      setPasswordConf('');
    }
  };
  return (
    <>
      <TopBar2 />
      <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
        <h2 className="border-b-2 mb-4 text-3xl text-primary">
          {lang === 'en' ? 'User Info' : 'بيانات الطالب'}
        </h2>
        <Formik
          validationSchema={() => AddStudentValidation(false)}
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
        <div>
          <h2 className="border-b-2 mb-4 text-3xl text-primary">
            {lang === 'en' ? ' Change Password' : 'تعديل كلمة المرور'}
          </h2>
          <form onSubmit={changePassword}>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="password"
              >
                {lang === 'en' ? ' Password' : 'كلمة المرور'}
              </label>
              <input
                required
                min={6}
                type="password"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder=" كلمة المرور"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="password_confirmation"
              >
                {lang === 'en' ? ' Password_confirmation' : 'تأكيد كلمة المرور'}
              </label>
              <input
                required
                min={6}
                type="password_confirmation"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="تأكيد كلمة المرور"
                name="password_confirmation"
                id="password_confirmation"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            <button
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center mx-auto gap-2 mt-5"
              title="حفظ"
              type="submit"
            >
              <span> حفظ</span>
              {isLoading && (
                <span>
                  <SubmitLoader />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
