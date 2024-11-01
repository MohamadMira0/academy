import Button from './Button';
import janzeer from '../assets/icons/janzzer-2.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertPopUp from './AlertPopUp';

export default function Course(props: any) {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <div className="bg-white relative py-6 px-7 rounded-md shadow-lg">
        <div className="absolute bg-white pt-2 pe-4 right-0 top-[-40px] w-3/4  rounded-md text-right text-secondary3 font-bold">
          <div className="me-auto flex items-center justify-end gap-2">
            <span> {props.name}</span>
            <img src={janzeer} alt="icon" />
          </div>
        </div>
        <div className="relative rounded-md overflow-hidden">
          <div
            style={{ backgroundImage: `url('${props.img}')` }}
            className="z-0 bg-cover bg-center w-full bg-no-repeat h-[275px]"
          >
            <div className="flex items-end h-full px-3 justify-between flex-wrap pb-8 z-20 text-white relative">
              <div className="flex items-center gap-1">
                <span>{props.currency}</span>
                <p className="text-xl ">{props.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  to="/"
                  className="bg-gray-1 text-primary py-1 px-2 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                  title="المزيد من المعلومات"
                  data-modal-target="static-modal"
                  data-modal-toggle="static-modal"
                  onClick={() => setOpenDetails((prev) => !prev)}
                />
                <Link
                  to={'/payment'}
                  className="bg-secondary3 text-white py-1 px-5 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                >
                  حجز الكورس
                </Link>
              </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0  bg-gradient-to-b from-gray-4 from-0% via-gray-5 via-50%  to-gray-6 to-100% "></div>
          </div>
        </div>
      </div>
      <AlertPopUp
        name={props.name}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </>
  );
}
