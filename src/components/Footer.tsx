import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import tiktok from '../assets/icons/tiktok.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import youtube from '../assets/icons/youtube.svg';
import location from '../assets/icons/location.svg';
import phone from '../assets/icons/phone.svg';
import spanFooter from '../assets/spanFooter.png';
import { Axios } from '../Api/axios';
import { IContactUsType } from '../types';
import { ContactValidation } from '../Validation/pages/ContactValidation';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
interface IProps {
  footer: boolean;
}
const Footer = (props: IProps) => {
  const { lang } = useSelector((state: RootState) => state.language);

  const initialValues: IContactUsType = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };
  const [alert, setAlert] = useState('');

  const handleSubmit = async (
    values: IContactUsType,
    { setSubmitting }: FormikHelpers<IContactUsType>,
  ) => {
    try {
      const res = await Axios.post('/contact-us/send', values);
      console.log(res);
      if (res.status === 200) {
        setAlert('success');
        setTimeout(() => {
          setAlert('');
        }, 5000);
      }
    } catch (err) {
      console.log(err);
      setAlert('error');
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
              <h3 className="text-xl font-bold">
                {lang === 'en' ? 'Contact US' : 'تواصل معنا'}
              </h3>
              <p>info@gmdss-academy.com</p>
              {/* <div className="flex gap-4 text-2xl my-6">
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
              </div> */}
              <h3 className="font-bold text-xl mt-10">
                {lang === 'en' ? 'Contact Numbers' : 'ارقام التواصل'}
              </h3>
              <div className="flex my-4">
                <img src={phone} alt="" />
                <p
                  className="mr-4 md:block hidden"
                  onClick={() => {
                    navigator.clipboard.writeText('٠١٠١٠٥١٩٥٩٧');
                  }}
                >
                  ٠١٠١٠٥١٩٥٩٧
                </p>
                <a href={`tel:٠١٠١٠٥١٩٥٩٧`} className="mr-4 block md:hidden">
                  ٠١٠١٠٥١٩٥٩٧
                </a>
                <span>+</span>
              </div>
              <div className="flex m">
                <img src={phone} alt="" />
                <p
                  className="mr-4 md:block hidden"
                  onClick={() => {
                    navigator.clipboard.writeText('٠٢٢٧٠٦٦٨٥٠٥');
                  }}
                >
                  ٠٢٢٧٠٦٦٨٥٠٥
                </p>
                <a href={`tel:٠٢٢٧٠٦٦٨٥٠٥`} className="mr-4 block md:hidden">
                  ٠٢٢٧٠٦٦٨٥٠٥
                </a>
                <span>+</span>
              </div>
              <h3 className="font-bold text-xl mt-10">
                {lang === 'en' ? 'Location' : 'مقر الأكاديمية'}
              </h3>
              {/* <div className="flex my-4">
                <img src={location} alt="" />
                <p className="mr-4">{links?.address}</p>
              </div> */}
            </div>
            <div className="p-2">
              <Formik
                initialValues={initialValues}
                validationSchema={ContactValidation}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form>
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="name"
                        placeholder={lang === 'en' ? 'Name' : 'الأسم'}
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                      ></Field>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-sm text-red-600 mt-2 "
                      />
                    </div>

                    <div className="mb-6">
                      <Field
                        type="text"
                        name="email"
                        placeholder={
                          lang === 'en' ? 'Email' : 'البريد الإلكتروني'
                        }
                        className="bg-white py-2 px-4 rounded-lg w-full text-black"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-600 mt-2 "
                      />
                    </div>
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="phone"
                        placeholder={
                          lang === 'en' ? 'Number Phone' : 'رقم الهاتف'
                        }
                        className="bg-white py-2 px-4 rounded-lg w-full text-black "
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-sm text-red-600 mt-2 "
                      />
                    </div>
                    <div className="mb-6">
                      <Field
                        as="textarea"
                        name="message"
                        id=""
                        value={values.message}
                        placeholder={lang === 'en' ? 'Message' : 'رسالة'}
                        className="bg-white text-black py-2 px-4 rounded-lg w-full "
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
                    {alert === 'error' && (
                      <p className="text-sm text-center text-red-600">
                        {lang === 'en'
                          ? 'Error on sent form'
                          : 'فشل ارسال الفورم'}
                      </p>
                    )}
                    {alert === 'success' && (
                      <p className="text-sm text-center text-success">
                        {lang === 'en'
                          ? 'Success Sent form'
                          : 'تم ارسال الفورم'}
                      </p>
                    )}
                    <div className="text-center mt-4">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-white text-primary font-bold rounded-lg px-20 py-2 hover:bg-black duration-300 hover:text-white"
                      >
                        {lang === 'en' ? 'Sent' : 'ارسال'}
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
