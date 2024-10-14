import React from 'react';
import image from '../../assets/background-home.svg';
import janzeer from '../../assets/janzeer.svg';
import { useQuery } from 'react-query';
import { AboutUs_Background, baseURL } from '../../Api/Api';
import { Axios } from '../../Api/axios';

const Background = () => {
  type background = {
    id: number;
    image: string;
  };
  type about_home = {
    id: number;
    title: string;
    details: string;
  };
  type landing = {
    background: background;
    about_home: about_home;
  };

  const { data, isLoading } = useQuery({
    queryFn: () =>
      Axios.get(`${baseURL}/${AboutUs_Background}`, {
        headers: {
          'x-api-key': 'mwDA9w',
        },
      }),
    queryKey: ['background'],
  });
  const landing: landing = data?.data;
  return (
    <div className=" mb-8">
      <div className="relative">
        <img
          src={landing?.background?.image}
          className="w-screen h-auto max-h-[90vh] object-cover"
          alt="Background Image"
        />
        <img
          src={janzeer}
          className="absolute top-0 left-8 lg:h-[450px] md:h-[350px] sm:h-[250px] h-[150px] "
          alt="Foreground Image"
        />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 flex flex-col font-[700] text-[66px] leading-[103px] text-center p-2 rounded-md">
          <span className="text-gold text-3xl">
            {landing?.about_home?.title}
          </span>
          <span className="text-white text-2xl">
            {landing?.about_home?.details}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Background;
