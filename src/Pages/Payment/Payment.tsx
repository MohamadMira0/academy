import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/icons/janzzer-2.svg';
import paycorse from '../../assets/payCorse.png';
import cart from '../../assets/payments/cart.svg';
import etsalat from '../../assets/payments/etsalat.svg';
import faore from '../../assets/payments/faore.svg';
import fodafon from '../../assets/payments/fodafon.svg';
import instapay from '../../assets/payments/instapay.svg';
import paypal from '../../assets/payments/paypal.svg';
import master from '../../assets/payments/Mastercard.svg';
import visa from '../../assets/payments/Visa.svg';
import InputRadio from '../../components/Inputs/InputRadio';
import Button from '../../components/Button';
import CardNumberInput from '../../components/Inputs/CardNumberInput';
import ExpirationDateInput from '../../components/Inputs/ExpirationDateInput';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PaymentValidation } from '../../Validation/pages/PaymentValidation';

export default function Payment() {
  const [complete, setComplete] = useState(false);

  type InitialValuesType = {
    numberCard: string;
    finishDate: string;
    password: string;
  };

  const initialValues: InitialValuesType = {
    numberCard: '',
    finishDate: '',
    password: '',
  };

  // Card Number
  const [cardNumber, setCardNumber] = useState<string>('');

  const formatCardNumber = (value: string): string => {
    // Remove non-digit characters
    let formattedValue = value.replace(/\D/g, '');

    // Add spaces after every 4 digits
    formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1  ');

    return formattedValue;
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCardNumber = formatCardNumber(event.target.value);

    return newCardNumber;
  };
  // Date
  const [expirationDate, setExpirationDate] = useState<string>('');

  const formatExpirationDate = (value: string): string => {
    // Remove non-digit characters
    let formattedValue = value.replace(/\D/g, '');

    // Limit to 2 digits for month, 2 digits for day, and 4 digits for year
    if (formattedValue.length > 4) {
      let month = parseInt(formattedValue.slice(0, 2));
      let day = parseInt(formattedValue.slice(2, 4));
      let year = parseInt(formattedValue.slice(4, 8));

      // Validate month and day
      if (month < 1) {
        month = 1;
      } else if (month > 12) {
        month = 12;
      }
      if (day < 1) {
        day = 1;
      } else if (day > 30) {
        day = 30;
      }

      formattedValue = `${String(month).padStart(2, '0')}/${String(
        day,
      ).padStart(2, '0')}/${String(year)}`;
    } else if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
      )}`;
    }

    return formattedValue;
  };

  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newExpirationDate = formatExpirationDate(event.target.value);
    return newExpirationDate;
  };

  return (
    <>
      <TopBar2 />
      <div
        className="container lg:px-16 md:px-8 px-3 pt-20 pb-10 mx-auto"
        dir="rtl"
      >
        {complete ? (
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={PaymentValidation}
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
                  <div>
                    <label className="text-primary text-2xl" htmlFor="pay-cart">
                      رقم كارت الدفع
                    </label>
                    <div className="md:mt-6 mt-4">
                      <div className="flex items-center" dir="ltr">
                        <Field
                          type="text"
                          maxLength={22}
                          placeholder="XXXX - XXXX - XXXX - XXXX"
                          pattern="\d{4} - \d{4} - \d{4} - \d{4"
                          className="text-lg px-8 py-4 bg-gray-100 outline-none border-2 border-transparent shadow-switch-1 w-full max-w-full rounded-xl focus:border-2 focus:border-secondary3"
                          name={'numberCard'}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setFieldValue(
                              'numberCard',
                              handleCardNumberChange(e),
                            );
                          }}
                          id={'pay-cart'}
                        ></Field>
                      </div>
                      <ErrorMessage
                        name="numberCard"
                        component="div"
                        className="text-sm text-red-600 mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-6 mt-4">
                    <div>
                      <label
                        className="text-primary text-2xl"
                        htmlFor="endCart"
                      >
                        تاريخ الإنتهاء
                      </label>
                      <div className="md:mt-6 mt-4 md:px-4">
                        <Field
                          type="text"
                          maxLength={10}
                          placeholder="MM/DD/YYYY"
                          pattern="\d{2}/\d{2}/\d{4}"
                          className="text-lg px-8 py-4 bg-gray-100 outline-none border-2 border-transparent shadow-switch-1 rounded-xl focus:border-2 focus:border-secondary3 w-full"
                          name="finishDate"
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setFieldValue(
                              'finishDate',
                              handleExpirationDateChange(e),
                            )
                          }
                          id="endCart"
                        />
                        <ErrorMessage
                          name="finishDate"
                          component="p"
                          className="text-sm text-red-600 mt-2 ms-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-primary text-2xl"
                        htmlFor="password"
                      >
                        الرقم السري
                      </label>
                      <div
                        className="flex flex-col gap-y-2  md:mt-6 mt-4 md:px-4"
                        dir="ltr"
                      >
                        <Field
                          type="text"
                          maxLength={5}
                          placeholder="XXXXX"
                          className="text-lg px-8 py-4 bg-gray-100 outline-none border-2 border-transparent shadow-switch-1 w-full max-w-full rounded-xl focus:border-2 focus:border-secondary3"
                          name="password"
                          id="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-sm text-red-600 ms-auto"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-around">
                      <img src={visa} alt="icon-visa" />
                      <img src={master} alt="icon-master" />
                    </div>
                  </div>
                  <div className="flex justify-center my-8">
                    <button className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300">
                      إتمام عملية الدفع
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <div className="lg:grid-cols-3 md:grid-cols-5 grid justify-center items-center md:gap-20 gap-y-4 grid-cols-1">
              <div className="md:col-span-2 lg:col-span-1 bg-white relative lg:py-6 lg:px-7 p-3 rounded-md shadow-lg">
                <div className="absolute bg-white pt-2 pe-4 right-0 top-[-40px] w-2/4  rounded-md text-right text-secondary3 font-bold">
                  <div className="me-auto flex items-center justify-end gap-2">
                    <img src={janzeer} alt="icon" />
                  </div>
                </div>
                <div className="relative rounded-md overflow-hidden">
                  <div
                    style={{ backgroundImage: `url('${paycorse}')` }}
                    className="z-0 bg-cover bg-center w-full bg-no-repeat h-[275px]"
                  >
                    <div className="flex items-end h-full px-3 justify-between flex-wrap pb-8 z-20 text-white relative">
                      <div className="flex items-center gap-1">
                        <span>ج.م</span>
                        <p className="text-xl ">500</p>
                      </div>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0  bg-gradient-to-b from-gray-4 from-0% via-gray-5 via-50%  to-gray-6 to-100% "></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 md:col-span-3 flex items-center lg:border-r lg:border-gray-8 lg:ps-10 h-full">
                <div className="w-full">
                  <h3 className="text-gray-7">اسم الكورس</h3>
                  <div className="flex justify-center my-8">
                    <div className="h-[1px] w-3/4 bg-gray-8"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-7">قيمة الكورس</p>
                    <p className="text-gray-7">
                      <span>ج.م</span>
                      500
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="text-3xl text-primary font-bold">طريقة الدفع</h3>
              <div className="mt-8">
                <InputRadio text="الدفع بالبطاقة" icon={cart} id="id-1" />
                <InputRadio text="paypal" icon={paypal} id="id-2" />
                <InputRadio text="فوري" icon={faore} id="id-3" />
                <InputRadio text="Instapay" icon={instapay} id="id-4" />
                <InputRadio text="فودافون كاش" icon={fodafon} id="id-5" />
                <InputRadio text="اتصالات كاش" icon={etsalat} id="id-6" />
              </div>
            </div>
            <div className="flex justify-center my-16">
              <Button
                className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
                title="إتمام عملية الدفع"
                onClick={() => setComplete((prev) => !prev)}
              />
            </div>
          </>
        )}
      </div>
      <Footer footer={false} />
    </>
  );
}
