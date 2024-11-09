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
      const username = res.data.data.user.first_name;
      cookie.set('Bearer', token);
      cookie.set('username', username);
      window.location.pathname = '/';
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
                  <h1 className="text-primary text-3xl">
                    {lang === 'en' ? 'Login' : 'قم بتسجيل الدخول'}
                  </h1>
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
                            {lang === 'en' ? 'remember me' : 'تذكرني'}
                          </label>
                        </div>
                        <Link
                          to={'/forgot-password'}
                          className="text-secondary3 hover:text-black duration-300 text-lg"
                          data-modal-target="default-modal"
                          data-modal-toggle="default-modal"
                        >
                          {lang === 'en'
                            ? 'Forgot your password?'
                            : 'هل نسيت كلمة السر؟'}
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
                          ) : lang === 'en' ? (
                            'Login'
                          ) : (
                            'تسجيل الدخول'
                          )}
                        </button>
                        <div className="flex">
                          <p className="text-lg">
                            {lang === 'en' ? 'New User' : 'مستخدم جديد؟'}
                          </p>
                          <Link
                            to={'/register'}
                            className="text-primary ms-2 hover:text-black duration-300 text-lg"
                          >
                            {lang === 'en' ? 'Register' : 'قم بالتسجيل'}
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
      </div>
    </>
  );
}
