import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';

export type JobAndTraining = {
  details: string;
  id: string | number;
  image: string;
  title: string;
};

export type TrainingType = {
  data: JobAndTraining;
};

export default function Training({ data }: TrainingType) {
  return (
    <div className="mb-20">
      <TitleWithLogo title="تدريب" />
      <div className="flex flex-row-reverse flex-wrap-reverse container justify-center mx-auto lg:justify-between gap-4 lg:px-16 md:px-8 px-3">
        <div className="text-right lg:w-3/5  grid items-center gap-4">
          <h3 className="text-primary font-bold text-2xl">{data?.title}</h3>
          <p className="text-text-gray text-lg">
            {data?.details === null
              ? 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها'
              : data?.details}
          </p>
          <div>
            <Button
              to="/"
              className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title="انضم الينا"
            />
          </div>
        </div>
        <div className="flex lg:justify-start justify-center w-[276px]">
          <img className="w-full" src={data?.image} alt="" />
        </div>
      </div>
    </div>
  );
}
