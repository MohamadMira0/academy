import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { jobsWebsite } from '../../types';
import { useQuery } from 'react-query';
import { getJobsWebsite } from '../../functions';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

export default function Employ() {
  const lang: string = useSelector((state: RootState) => state.language.lang);

  // ** Handle Jobs
  const { data: jobs, isLoading } = useQuery(
    ['jobs', lang],
    () => getJobsWebsite(lang),
    {
      keepPreviousData: true,
    },
  );

  const jobsData: jobsWebsite[] = jobs?.data || [];

  const jobsShow = jobsData?.map((item, idx) => (
    <div
      key={idx}
      className="custom-shadow px-10 py-6 flex flex-row-reverse flex-wrap-reverse rounded-3xl justify-center  lg:justify-between"
    >
      <div className="text-right lg:w-3/5  items-center flex flex-col justify-center lg:gap-8 gap-4">
        <h3 className="text-primary font-bold text-2xl">{item?.title}</h3>
        <p className="text-text-gray text-lg text-center">
          {item?.description}
        </p>
      </div>
      <div className="flex lg:justify-start justify-center w-[276px]">
        <img className="w-full" src={item?.media.file_path} alt="" />
      </div>
    </div>
  ));

  if (isLoading) return <div>loading...</div>;
  return (
    <div className="mb-20">
      <TitleWithLogo title="إعلان التوظيف" />
      <div className="mx-auto lg:justify-between gap-4 container lg:px-16 md:px-8 px-3">
        {jobsShow}
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
