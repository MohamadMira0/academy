import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/janzzerBlue.png';
import { useMutation, useQuery } from 'react-query';
import { Axios } from '../../Api/axios';
import { Contact_Us, base_url_student } from '../../Api/Api';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import tiktok from '../../assets/icons/tiktok.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import youtube from '../../assets/icons/youtube.svg';
import location from '../../assets/icons/location.svg';
import phone from '../../assets/icons/phone.svg';
import { Link } from 'react-router-dom';
import Location from '../../assets/svg/Location';
import image3 from '../../assets/contactUs/Contact us-amico 1.svg';
import profile from '../../assets/icons/profile.svg';
import Phone from '../../assets/svg/Phone';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FooterValidation } from '../../Validation/pages/FooterValidation';
import { ChangeEvent, useState } from 'react';
import Profile from '../../assets/svg/Profile';
import Cookie from 'cookie-universal';
import logo from '../../assets/logoAuth-removebg.png';
import lock from '../../assets/icons/lock.svg';
import frame from '../../assets/icons/Frame.svg';
import message from '../../assets/icons/message (2).svg';
import phone1 from '../../assets/icons/phone1.svg';
import image from '../../assets/background-home.svg';
import span from '../../assets/span.png';
import eye from '../../assets/icons/eye.svg';
import show from '../../assets/icons/show.svg';
import axios from 'axios';
import { ContactValidation } from '../../Validation/pages/ContactValidation';

export default function ContactUs() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  type InitialValuesType = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  const initialValues: InitialValuesType = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  type SocialMediaData = {
    TikTok: string;
    address: string;
    facebook: string;
    id: number;
    instagram: string;
    phone: string;
    whatsapp: string;
    youtube: string;
  };
  const { data: contact, isLoading } = useQuery({
    queryFn: () =>
      Axios.get(`${base_url_student}/${Contact_Us}`, {
        headers: {
          'x-api-key': 'mwDA9w',
        },
      }),
    queryKey: ['Contact_Us'],
  });
  const links: SocialMediaData = contact?.data?.data;

  const sendForm = async (formData: InitialValuesType) => {
    try {
      const response = await axios.post(
        `${base_url_student}/Send-Message`,
        formData,
        {
          headers: {
            'x-api-key': 'mwDA9w',
          },
        },
      );
      console.log(formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  };

  const { mutateAsync } = useMutation(sendForm);

  const onSubmit = async (values: InitialValuesType) => {
    try {
      console.log(values);
      await mutateAsync(values);
      // هنا يمكنك التعامل مع النجاح مثل إظهار رسالة نجاح
      console.log('Form submitted successfully');
    } catch (error) {
      // هنا يمكنك التعامل مع الأخطاء مثل إظهار رسالة خطأ
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16" dir="rtl">
        <div className="flex justify-start relative">
          <div className="absolute top-[-4rem] left-0">
            <img
              src={janzeer}
              alt="span"
              className="lg:h-[350px] md:h-[300px] sm:h-[250px] h-[250px]"
            />
          </div>
          <div className="w-10/12 lg:mb-16 md:mb-8 mb-6">
            <h1 className="text-gold text-5xl font-bold">تواصل معنا</h1>
            <p className="font-bold text-gray-7 text-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 grid-cols-1 flex-row-reverse lg:my-20 my-10"
          dir="rtl"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary">تواصل معنا</h3>
            <div className="flex gap-4 text-2xl my-6">
              <Link to={links?.facebook} className="text-primary">
                <img src={facebook} alt="" />
              </Link>
              <Link to={links?.instagram} className="text-primary">
                <img src={instagram} alt="" />
              </Link>
              <Link to={links?.TikTok} className="text-primary">
                <img src={tiktok} alt="" />
              </Link>
              <Link to={links?.youtube} className="text-primary">
                <img src={youtube} alt="" />
              </Link>
              <Link to={links?.whatsapp} className="text-primary">
                <img src={whatsapp} alt="" />
              </Link>
            </div>
            <h3 className="font-bold text-2xl mt-10 text-primary">
              ارقام التواصل
            </h3>
            <div className="flex my-4">
              <Phone fill="#001f5d" />
              <p
                className="mr-4 md:block hidden"
                onClick={() => {
                  navigator.clipboard.writeText(links?.phone);
                }}
              >
                {links?.phone}
              </p>
              <a href={`tel:${links?.phone}`} className="mr-4 block md:hidden">
                {links?.phone}
              </a>
              <span className="text-primary">+</span>
            </div>
            <div className="flex m">
              <Phone fill="#001f5d" />
              <p
                className="mr-4 md:block hidden"
                onClick={() => {
                  navigator.clipboard.writeText(links?.phone);
                }}
              >
                {links?.phone}
              </p>
              <a href={`tel:${links?.phone}`} className="mr-4 block md:hidden">
                {links?.phone}
              </a>
              <span className="text-primary">+</span>
            </div>
            <h3 className="font-bold text-2xl mt-10 text-primary">
              مقر الأكاديمية
            </h3>
            <div className="flex my-4">
              <Location fill="#001F5D" />
              <p className="mr-4">{links?.address}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={image3} alt="img" />
          </div>
        </div>
        <div className="p-2">
          <Formik
            initialValues={initialValues}
            validationSchema={ContactValidation}
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
                    <div className="w-full">
                      <Field
                        type="text"
                        placeholder="الاسم الأول"
                        className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none w-full border-2 duration-300 border-primary"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-sm text-red-600 mt-2 "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8 md:mb-6 mb-3">
                  <img src={message} alt="person" className="w-8" />
                  <div className="w-full">
                    <Field
                      type="email"
                      placeholder="name129@email.com"
                      className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none w-full border-2 duration-300 border-primary"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <img src={phone1} alt="person" className="w-8" />
                  <div className="w-full">
                    <Field
                      type="tel"
                      placeholder="01100000000"
                      pattern="^[0-9\-\+\s\(\)]*$"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFieldValue(
                          'phone',
                          e.target.value.replace(/[^0-9-]/g, ''),
                        )
                      }
                      className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none w-full border-2 border-primary"
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
                  <img src={frame} alt="person" className="w-8" />
                  <div className="w-full">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="رسالة"
                      className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none w-full border-2 border-primary"
                      cols="30"
                      rows="6"
                      maxLength="300"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className="mt-16 my-4 flex justify-center" dir="rtl">
                  <button className="bg-primary text-center text-lg text-white rounded-lg lg:px-24 lg:py-3 px-8 py-1 hover:bg-black duration-300 hover:text-white shadow-md">
                    إرسال
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}
