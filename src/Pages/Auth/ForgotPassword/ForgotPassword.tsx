import { useState } from 'react';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { base_url_student } from '../../../Api/Api';
import axios from 'axios';
import { ForgotValidation } from '../../../Validation/auth/ForgotPassword';
import { useNavigate } from 'react-router-dom';

type InitialValuesType = {
  email: string;
};

const initialValues: InitialValuesType = {
  email: '',
};
const ForgotPassword = () => {
  const { lang } = useSelector((state: RootState) => state.language);
  const [err, setErr] = useState('');
  const nav = useNavigate();

  // ** Handle Submit Forgot Password
  const handleSubmitForgot = async (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    try {
      console.log('forgot');
      setErr('');
      const res = await axios.post(
        `${base_url_student}/auth/forgot-password`,
        values,
      );
      nav('/check-forgot-password-token');
      // window.location.pathname = '/';
      console.log(res);
    } catch (err: any) {
      console.log(err);
      if (err.response.status === 400) {
        setErr('email or password incorrect');
      } else {
        setErr('Internal Server ERR');
      }
    }
  };

  return (
    <div className="container ">
      <div className="flex items-center w-full">
        <div className="p-4 h-screen flex-1 relative">
          {/* <!-- Modal content --> */}
          <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-11/12 md:w-3/4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white uppercase">
                {lang === 'en' ? 'Forgot Password' : 'نسيت كلمة المرور'}
              </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <Formik
                initialValues={initialValues}
                validationSchema={ForgotValidation}
                onSubmit={handleSubmitForgot}
              >
                {({
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form>
                    <div className="w-full">
                      <Field
                        type="email"
                        placeholder="name129@email.com"
                        className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-600 mt-2 "
                      />
                    </div>
                    <p className="text-sm text-red-600">{err}</p>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        disabled={isSubmitting}
                        data-modal-hide="default-modal"
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        {lang === 'en' ? 'Send' : 'ارسال'}
                      </button>
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => nav('/login')}
                      >
                        {lang === 'en' ? 'cancel' : 'الغاء'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
