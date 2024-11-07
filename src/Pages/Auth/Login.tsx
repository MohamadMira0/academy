import { useState } from 'react';
import Cookie from 'cookie-universal';
import logo from '../../assets/logoAuth-removebg.png';
import lock from '../../assets/icons/lock.svg';
import message from '../../assets/icons/message (2).svg';
import TopBar2 from '../../components/TopBar2';
import image from '../../assets/background-home.svg';
import { Link } from 'react-router-dom';
import span from '../../assets/span.png';
import eye from '../../assets/icons/eye.svg';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { LoginValidation } from '../../Validation/auth/LoginValidation';
import SubmitLoader from '../../components/Loader/SubmitLoader';
import { base_url_student } from '../../Api/Api';
import axios from 'axios';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { lang } = useSelector((state: RootState) => state.language);
  type InitialValuesType = {
    email: string;
    password: string;
    remember: boolean;
  };

  const initialValues: InitialValuesType = {
    email: '',
    password: '',
    remember: false,
  };
  const [err, setErr] = useState('');
  const cookie = Cookie();

  // ** Handle Submit
  const handleSubmit = async (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    try {
      setErr('');
      const res = await axios.post(`${base_url_student}/auth/signin`, values);
      const token = res.data.data.token;
      cookie.set('Bearer', token);
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
  // ** Handle Submit Forgot Password
  const handleSubmitForgot = async (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    try {
      setErr('');
      const res = await axios.post(
        `${base_url_student}/auth/forgot-password`,
        values,
      );
      const token = res.data.data.token;
      cookie.set('Bearer', token);
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
    <>
      <TopBar2 />
      <div
        className="h-full z-0 bg-cover bg-center w-full bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16">
          <div className="bg-white rounded-3xl p-4 py-8">
            <div className=" grid grid-cols-1 lg:grid-cols-2 items-center content-center justify-center">
              <div className="sm:w-1/2 w-full mx-auto h-fit mt-4">
                <img src={logo} alt="logo" />
              </div>
              <div dir="rtl" className="flex flex-col justify-center">
                <div className="text-right ms-12 mb-8">
                  <h1 className="text-primary text-3xl">قم بتسجيل الدخول</h1>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={LoginValidation}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    isSubmitting,
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <Form>
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <img src={message} alt="person" className="w-8" />
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
                      </div>
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <img src={lock} alt="person" className="w-8" />
                        <div className="w-full">
                          <div className="w-full relative">
                            <Field
                              type={`${showPassword ? 'text' : 'password'}`}
                              placeholder="122254"
                              className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                              name="password"
                            />
                            <img
                              onClick={() => setShowPassword((prev) => !prev)}
                              src={eye}
                              alt="show"
                              className="w-6 absolute left-4 top-1/2 -translate-y-1/2	cursor-pointer"
                            />
                          </div>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-sm text-red-600 mt-2 "
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="ms-12 flex gap-2 items-center">
                          <Field
                            type="checkbox"
                            name="remember"
                            value="option1"
                            checked={values.remember}
                            onChange={() => {
                              setFieldValue('remember', !values.remember);
                              console.log(values.remember);
                            }}
                            id="remember"
                          />
                          <label
                            htmlFor="remember"
                            className="select-none text-lg"
                          >
                            تذكرني
                          </label>
                        </div>
                        <Link
                          to={''}
                          onClick={() => setForgotPassword(true)}
                          className="text-secondary3 hover:text-black duration-300 text-lg"
                          data-modal-target="default-modal"
                          data-modal-toggle="default-modal"
                        >
                          هل نسيت كلمة السر؟
                        </Link>
                      </div>
                      <div
                        className="text-center mt-16 my-4 flex gap-4 items-center"
                        dir="rtl"
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-primary text-center text-lg text-white rounded-lg px-8 py-1 hover:bg-black duration-300 hover:text-white shadow-md"
                        >
                          {isSubmitting ? (
                            <SubmitLoader className="w-8 h-7" />
                          ) : (
                            'تسجيل الدخول'
                          )}
                        </button>
                        <div className="flex">
                          <p className="text-lg">مستخدم جديد؟</p>
                          <Link
                            to={'/register'}
                            className="text-primary ms-2 hover:text-black duration-300 text-lg"
                          >
                            قم بالتسجيل
                          </Link>
                        </div>
                      </div>
                      {err !== '' && (
                        <p className="text-sm text-red-600 text-center">
                          {err}
                        </p>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

            <div className="flex items-start justify-center my-4">
              <img src={span} alt="span" />
            </div>
          </div>
        </div>
        {/* <!-- Main modal --> */}
        {forgotPassword && (
          <div className="h-full fixed top-0 left-0 w-full bg-neutral-800 opacity-25"></div>
        )}
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`${
            forgotPassword ? '' : 'hidden'
          } overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 z-50 justify-center items-center w-full md:inset-0`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blend-overlay">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {lang === 'en' ? 'Forgot Password' : 'نسيت كلمة المرور'}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                  onClick={() => setForgotPassword(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4">
                <Formik
                  initialValues={initialValues}
                  validationSchema={LoginValidation}
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
                          onClick={() => setForgotPassword(false)}
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
    </>
  );
}
