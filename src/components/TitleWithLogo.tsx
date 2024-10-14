import React from 'react';
import logo from '../assets/InnerLogo.svg';
type props = {
  title: string;
};
const TitleWithLogo: React.FC<props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="font-[700] text-5xl text-primary">{title}</div>
      <img src={logo} />
    </div>
  );
};

export default TitleWithLogo;
