import { ChangeEvent, useState } from 'react';
import Cookie from 'cookie-universal';
import logo from '../../assets/logoAuth-removebg.png';
import lock from '../../assets/icons/lock.svg';
import message from '../../assets/icons/message (2).svg';
import phone1 from '../../assets/icons/phone1.svg';
import profile from '../../assets/icons/profile.svg';
import TopBar2 from '../../components/TopBar2';
import image from '../../assets/background-home.svg';
import { Link } from 'react-router-dom';
import span from '../../assets/span.png';
import eye from '../../assets/icons/eye.svg';
import show from '../../assets/icons/show.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegisterValidation } from '../../Validation/auth/RegisterValidation';
import { useQuery } from 'react-query';
import { Axios } from '../../Api/axios';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  type InitialValuesType = {
    first_name: string;
    last_name: string;
    phone: number | null;
    email: string;
    password: string;
    password_confirmation: string | null;
  };

  const initialValues: InitialValuesType = {
    first_name: '',
    last_name: '',
    phone: null,
    email: '',
    password: '',
    password_confirmation: '',
  };

  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const cookie = Cookie();

  // const { data, isLoading } = useQuery({
  //   queryFn: () =>
  //     Axios.post(`${base_url_student}/${Contact_Us}`, {
  //       headers: {
  //         'x-api-key': 'mwDA9w',
  //       },
  //     }),
  //   queryKey: ['Contact_Us'],
  // });

  // Handle Submit
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const res = await axios.post(`${base_url_student}/${LOGIN}`, form);
  //     const token = res.data.data.token;
  //     cookie.set("Bearer", token);
  //     setLoading(false);
  //     window.location.pathname = "/dashboard/home";
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //     if (err.response.status === 401) {
  //       setErr("Email or Password is not Correct");
  //     } else {
  //       setErr("Internal Server ERR");
  //     }
  //   }
  // }

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
                  <h1 className="text-primary text-3xl">قم بإنشاء حساب</h1>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={RegisterValidation}
                  onSubmit={() => {}}
                >
                  {({
                    values,
                    errors,
                    isSubmitting,
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <Form>
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <img src={profile} alt="person" className="w-8" />
                        <div className="flex w-full gap-4">
                          <div className="w-1/2">
                            <Field
                              type="text"
                              placeholder="الاسم الأول"
                              className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                              name="first_name"
                            />
                            <ErrorMessage
                              name="first_name"
                              component="div"
                              className="text-sm text-red-600 mt-2 "
                            />
                          </div>
                          <div className="w-1/2">
                            <Field
                              type="text"
                              placeholder="الاسم الاخير"
                              className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                              name="last_name"
                            />
                            <ErrorMessage
                              name="last_name"
                              component="div"
                              className="text-sm text-red-600 mt-2 "
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-start gap-8 md:mb-6 mb-3">
                        <img src={phone1} alt="person" className="w-8" />
                        <div className="w-full">
                          <Field
                            // dir="rtl"
                            type="tel"
                            placeholder="01100000000"
                            pattern="^[0-9\-\+\s\(\)]*$"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setFieldValue(
                                'phone',
                                e.target.value.replace(/[^0-9-]/g, ''),
                              )
                            }
                            className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                            name="phone"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-sm text-red-600 mt-2 "
                          />
                        </div>
                      </div>
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
                      <div className="flex items-start gap-8 md:mb-6 mb-3">
                        <img src={lock} alt="person" className="w-8" />
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
                        className="text-center mt-16 my-4 flex gap-4 items-center"
                        dir="rtl"
                      >
                        <button className="bg-primary text-center text-lg text-white rounded-lg px-8 py-1 hover:bg-black duration-300 hover:text-white shadow-md">
                          تسجيل الدخول
                        </button>
                        <div className="flex">
                          <p className="text-lg">لديك حساب؟</p>
                          <Link
                            to={'/login'}
                            className="text-primary ms-2 hover:text-black duration-300 text-lg"
                          >
                            قم بتسجيل الدخول
                          </Link>
                        </div>
                      </div>
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
