import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/icons/janzzer-2.svg';
import cart from '../../assets/payments/cart.svg';
import InputRadio from '../../components/Inputs/InputRadio';
import Button from '../../components/Button';
import axios from 'axios';
import { base_url_student } from '../../Api/Api';
import { AxiosWithTokenStudent } from '../../Api/axios';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

interface IItem {
  media_path: string;
  price: number | string;
  title: string;
}
interface IData {
  item: IItem;
}
export default function Payment() {
  const { lang } = useSelector((state: RootState) => state.language);

  const { id, type } = useParams();
  const [data, setData] = useState<IData>();
  const [payment_method, setPayment_method] = useState(1);
  useEffect(() => {
    axios
      .get(`${base_url_student}/courses/click-booking?id=${id}&type=${type}`)
      .then((res) => setData(res.data.data));
  }, []);
  console.log(data);

  const handlePayment = async () => {
    const config = {
      type: type,
      payment_method_id: payment_method,
      item_id: id,
    };
    try {
      const res = await AxiosWithTokenStudent.post(`/booking/send`, config);
      const url = res?.data?.data?.url;
      window.location.replace(url);
      console.log(res);
    } catch (err: any) {
      console.log(err);
      if (err.response.status) {
        window.location.pathname = '/login';
      }
    }
  };
  return (
    <>
      <TopBar2 />
      <div
        className="container lg:px-16 md:px-8 px-3 pt-20 pb-10 mx-auto"
        dir="rtl"
      >
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
                  style={{
                    backgroundImage: `url('${data?.item?.media_path}')`,
                  }}
                  className="z-0 bg-cover bg-center w-full bg-no-repeat h-[275px]"
                >
                  <div className="flex items-end h-full px-3 justify-between flex-wrap pb-8 z-20 text-white relative">
                    <div className="flex items-center gap-1">
                      <span>{lang === 'en' ? 'EGP' : 'ج.م'}</span>
                      <p className="text-xl ">{data?.item?.price}</p>
                    </div>
                  </div>
                  <div className="w-full h-full absolute top-0 left-0  bg-gradient-to-b from-gray-4 from-0% via-gray-5 via-50%  to-gray-6 to-100% "></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-3 flex items-center lg:border-r lg:border-gray-8 lg:ps-10 h-full">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-7">
                    {lang === 'en' ? 'Course name' : 'اسم الكورس'}
                  </h3>
                  <p>{data?.item?.title}</p>
                </div>
                <div className="flex justify-center my-8">
                  <div className="h-[1px] w-3/4 bg-gray-8"></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-7">
                    {lang === 'en' ? 'Course price' : 'قيمة الكورس'}
                  </p>
                  <p className="text-gray-7">
                    <span>{lang === 'en' ? 'EGP' : 'ج.م'}</span>
                    {data?.item?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-3xl text-primary font-bold">
              {lang === 'en' ? 'payment method' : 'طريقة الدفع'}
            </h3>
            <div className="mt-8">
              <span onClick={() => setPayment_method(1)}>
                <InputRadio onClick text="Paymob Credit" icon={cart} id="1" />
              </span>
              <span onClick={() => setPayment_method(2)}>
                <InputRadio text="Paymob Wallet" icon={cart} id="2" />
              </span>
            </div>
          </div>
          <div className="flex justify-center my-16">
            <Button
              className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title={lang === 'en' ? 'Complete payment' : 'إتمام عملية الدفع'}
              onClick={handlePayment}
            />
          </div>
        </>
      </div>
      <Footer footer={false} />
    </>
  );
}
