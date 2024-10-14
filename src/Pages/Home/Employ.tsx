import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import image1 from '../../assets/courses/image2.png';
import { TrainingType } from './Training';

export default function Employ({ data }: TrainingType) {
  return (
    <div className="mb-20">
      <TitleWithLogo title="إعلان التوظيف" />
      <div className="mx-auto lg:justify-between gap-4 container lg:px-16 md:px-8 px-3">
        <div className="custom-shadow px-10 py-6 flex flex-row-reverse flex-wrap-reverse rounded-3xl justify-center  lg:justify-between">
          <div className="text-right lg:w-3/5  items-center flex flex-col justify-center lg:gap-8 gap-4">
            <h3 className="text-primary font-bold text-2xl">{data?.title}</h3>
            <p className="text-text-gray text-lg text-center">
              {data?.details}
            </p>
          </div>
          <div className="flex lg:justify-start justify-center w-[276px]">
            <img className="w-full" src={data?.image} alt="" />
          </div>
        </div>
        <div className="text-center my-20">
          <Button
            to="/"
            className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
            title="المزيد"
          />
        </div>
      </div>
    </div>
  );
}
