import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { getJobsWebsitePage } from '../../functions';
import { jobsWebsite } from '../../types';

export default function EmployPage() {
  const { lang } = useSelector((state: RootState) => state.language);
  // ** Handle Jobs
  const { data, isLoading } = useQuery(
    ['blogs', lang],
    () => getJobsWebsitePage(lang),
    {
      keepPreviousData: true,
    },
  );
  const jobs: jobsWebsite[] = data?.data;

  // const showJobs = jobs;

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <SubmitLoader className="!w-10 !h-10" />
      </div>
    );
  const showJobs = jobs?.map((job) => (
    <div className="flex justify-start flex-row-reverse items-center">
      <div key={job?.id} className=" top-0 left-0">
        <img src={job?.media.file_path} alt="span" className="w-60" />
      </div>
      <div className="w-10/12 lg:mb-16 md:mb-8 mb-6">
        <h1 className="text-gold text-5xl font-bold">{job?.title}</h1>
        <p className="font-bold text-gray-7 text-2xl">{job?.description}</p>
      </div>
    </div>
  ));
  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16" dir="rtl">
        {showJobs}
      </div>
      <Footer footer />
    </>
  );
}
