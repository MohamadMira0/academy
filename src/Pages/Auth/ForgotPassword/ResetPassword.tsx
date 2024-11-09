import { useState } from 'react';
import logo from '../../../assets/logoAuth-removebg.png';
import TopBar2 from '../../../components/TopBar2';
import image from '../../../assets/background-home.svg';
import span from '../../../assets/span.png';
import eye from '../../../assets/icons/eye.svg';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import axios from 'axios';
import { base_url_student } from '../../../Api/Api';
import SubmitLoader from '../../../components/Loader/SubmitLoader';
import { MdLockReset } from 'react-icons/md';
import { ResetPasswordValidation } from '../../../Validation/auth/ForgotPassword';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { CgCode } from 'react-icons/cg';
import { BiLogoGmail } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

type InitialValuesType = {
  token: number | null;
  email: string;
  password: string;
  password_confirmation: string | null;
};
const ResetPassword = () => {
  const { lang } = useSelector((state: RootState) => state.language);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const initialValues: InitialValuesType = {
    token: null,
    email: '',
    password: '',
    password_confirmation: '',
  };

  const [err, setErr] = useState('');

  const nav = useNavigate();
  // ** Handle Submit
  const handleSubmit = async (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    try {
      setErr('');
      const res = await axios.post(
        `${base_url_student}/auth/reset-password`,
        values,
      );
      nav('/login');
    } catch (err: any) {
      console.log(err);
      if (err.response.status === 422) {
        setErr('code or email is incorrect| try again');
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
                    {lang === 'en' ? 'Change Password' : 'تغيير كلمة المرور'}
                  </h1>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={ResetPasswordValidation}
                  onSubmit={handleSubmit}
                >
                  {({
                    isSubmitting,
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <Form>
                      <div className=" flex items-start gap-8 md:mb-6 mb-3">
                        <CgCode className="text-4xl text-[#5BA3D4]" />
                        <div className="w-full">
                          <Field
                            type="text"
                            placeholder="1234"
                            className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                            name="token"
                          />
                          <ErrorMessage
                            name="token"
                            component="div"
                            className="text-sm text-red-600 mt-2 "
                          />
                        </div>
                      </div>
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <BiLogoGmail className="text-4xl text-[#5BA3D4]" />
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
                        <MdLockReset className="text-4xl text-[#5BA3D4]" />
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
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <MdLockReset className="text-4xl text-[#5BA3D4]" />
                        <div className="w-full">
                          <div className="w-full relative">
                            <Field
                              type={`${
                                showPasswordConfirm ? 'text' : 'password'
                              }`}
                              placeholder="122254"
                              className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                              name="password_confirmation"
                            />
                            <img
                              onClick={() =>
                                setShowPasswordConfirm((prev) => !prev)
                              }
                              src={eye}
                              alt="show"
                              className="w-6 absolute left-4 top-1/2 -translate-y-1/2	cursor-pointer"
                            />
                          </div>
                          <ErrorMessage
                            name="password_confirmation"
                            component="div"
                            className="text-sm text-red-600 mt-2 "
                          />
                        </div>
                      </div>
                      <div
                        className="text-center mt-16 mb-4 flex gap-4 items-center justify-center"
                        dir="rtl"
                      >
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="bg-primary text-center text-lg text-white rounded-lg px-8 py-1 hover:bg-black duration-300 hover:text-white shadow-md"
                        >
                          {isSubmitting ? (
                            <SubmitLoader className="w-8 h-7" />
                          ) : lang === 'en' ? (
                            'Save changes'
                          ) : (
                            'حفظ التغييرات'
                          )}
                        </button>
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
};

export default ResetPassword;
