import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, useFormik, Form, Field } from 'formik';
import { FooterValidation } from '../Validation/FooterValidation';
import { useMutation, useQuery } from 'react-query';
import { useQueryClient } from 'react-query';

import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import tiktok from '../assets/icons/tiktok.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import youtube from '../assets/icons/youtube.svg';
import location from '../assets/icons/location.svg';
import phone from '../assets/icons/phone.svg';
import spanFooter from '../assets/spanFooter.png';
import axios from 'axios';
import { Contact_Us, base_url_student } from '../Api/Api';
import { Axios } from '../Api/axios';
const Footer = (props: any) => {
  const queryClient = useQueryClient();

  type InitialValuesType = {
    full_name: string;
    email: string;
    phone: string;
    message: string;
  };

  const initialValues: InitialValuesType = {
    full_name: '',
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
    <div className="w-full  bottom-0 text-stroke font-extralight bg-primary py-20 gap-4 flex flex-wrap items-center justify-between">
      {props.footer ? (
        <div className="container lg:px-16 md:px-8 px-3 mx-auto">
          <div
            className="grid lg:grid-cols-2 grid-cols-1 flex-row-reverse "
            dir="rtl"
          >
            <div>
              <h3 className="text-xl font-bold">تواصل معنا</h3>
              <div className="flex gap-4 text-2xl my-6">
                <Link to={links?.facebook} className="text-stroke">
                  <img src={facebook} alt="" />
                </Link>
                <Link to={links?.instagram} className="text-stroke">
                  <img src={instagram} alt="" />
                </Link>
                <Link to={links?.TikTok} className="text-stroke">
                  <img src={tiktok} alt="" />
                </Link>
                <Link to={links?.youtube} className="text-stroke">
                  <img src={youtube} alt="" />
                </Link>
                <Link to={links?.whatsapp} className="text-stroke">
                  <img src={whatsapp} alt="" />
                </Link>
              </div>
              <h3 className="font-bold text-xl mt-10">ارقام التواصل</h3>
              <div className="flex my-4">
                <img src={phone} alt="" />
                <p
                  className="mr-4 md:block hidden"
                  onClick={() => {
                    navigator.clipboard.writeText(links?.phone);
                  }}
                >
                  {links?.phone}
                </p>
                <a
                  href={`tel:${links?.phone}`}
                  className="mr-4 block md:hidden"
                >
                  {links?.phone}
                </a>
                <span>+</span>
              </div>
              <div className="flex m">
                <img src={phone} alt="" />
                <p
                  className="mr-4 md:block hidden"
                  onClick={() => {
                    navigator.clipboard.writeText(links?.phone);
                  }}
                >
                  {links?.phone}
                </p>
                <a
                  href={`tel:${links?.phone}`}
                  className="mr-4 block md:hidden"
                >
                  {links?.phone}
                </a>
                <span>+</span>
              </div>
              <h3 className="font-bold text-xl mt-10">مقر الأكاديمية</h3>
              <div className="flex my-4">
                <img src={location} alt="" />
                <p className="mr-4">{links?.address}</p>
              </div>
            </div>
            <div className="p-2">
              <Formik
                initialValues={initialValues}
                validationSchema={FooterValidation}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  errors,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form>
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="full_name"
                        placeholder="الأسم"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                      ></Field>
                      {/* <input
                        type="text"
                        name="full_name"
                        placeholder="الأسم"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                        value={values.full_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}

                      <p className="text-sm text-red-600 h-5">
                        {errors.full_name ? errors.full_name : ''}
                      </p>
                    </div>

                    <div className="mb-6">
                      <Field
                        type="text"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                      ></Field>
                      {/* <input
                        type="text"
                        name="email"
                        placeholder="البريد الإلكتروني"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}

                      <p className="text-sm text-red-600 h-5">
                        {errors.email ? errors.email : ''}
                      </p>
                    </div>
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="رقم الهاتف"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black "
                      ></Field>
                      {/* <input
                        type="text"
                        name="phone"
                        placeholder="رقم الهاتف"
                        className="bg-white py-2 px-4 rounded-lg w-full text-black "
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
                      <p className="text-sm text-red-600 h-5">
                        {errors.phone ? errors.phone : ''}
                      </p>
                    </div>
                    <div className="mb-6">
                      <Field
                        as="textarea"
                        name="message"
                        id=""
                        value={values.message}
                        placeholder="رسالة"
                        className="bg-white text-black py-2 px-4 rounded-lg w-full "
                        cols="30"
                        rows="6"
                        maxLength="300"
                      ></Field>
                      <p className="text-sm text-red-600 h-5">
                        {errors.message ? errors.message : ''}
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-white text-primary font-bold rounded-lg px-20 py-2 hover:bg-black duration-300 hover:text-white"
                      >
                        ارسال
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full mt-4">
        <img className="w-full" src={spanFooter} alt="span" />
      </div>
    </div>
  );
};
export default Footer;
