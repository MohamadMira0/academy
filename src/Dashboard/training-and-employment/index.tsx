import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IJobs } from '../../types';
import { deleteJob, getJobs } from '../../functions';
import { BiSolidMessageAlt } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa';
import { ITraining } from '../../types';
import { deleteTraining, getTrainings } from '../../functions';
import { useState } from 'react';

const Jobs = () => {
  const [page, setPage] = useState('training');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // ** Handle Jobs
  const { data: jobs, isLoading, error } = useQuery(['jobs'], getJobs);
  const jobsData: IJobs[] = jobs?.data;
  const deleteJobMutation = useMutation(deleteJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobs']);
    },
  });
  const handleDeleteJob = async (id: number) => {
    await deleteJobMutation.mutateAsync(id);
  };

  const jobsShow = jobsData?.map((item) => (
    <div key={item.id} className="custom-shadow rounded-3xl mb-8  px-10 py-2">
      <div
        onClick={() => handleDeleteJob(item.id)}
        className="flex items-center justify-end cursor-pointer hover:text-red-500 duration-300 gap-1 text-sm w-fit ms-auto"
      >
        <p>ازالة الإعلان</p>
        <FaRegTrashCan />
      </div>
      <div className="flex flex-row-reverse flex-wrap items-center justify-center xl:justify-between">
        <div className="flex lg:justify-start justify-center w-[276px]">
          <img
            className="w-full"
            src={item.media.file_path}
            alt={item.media.title}
          />
        </div>
        <div className="text-right lg:w-3/5  flex flex-col justify-center lg:gap-8 gap-4">
          <h3 className="text-primary font-bold text-2xl text-center xl:text-right">
            {item.title_ar}
          </h3>
          <p className="text-text-gray text-lg text-center">
            {item.description_ar}
          </p>
        </div>
      </div>
    </div>
  ));

  // ** Handle Training
  const {
    data: training,
    isLoading: isLoadingTraining,
    error: errorTraining,
  } = useQuery(['training'], getTrainings);
  const trainingData: ITraining[] = training?.data;

  const deleteTrainingMutation = useMutation(deleteTraining, {
    onSuccess: () => {
      queryClient.invalidateQueries(['training']);
    },
  });
  const handleDeleteTraining = async (id: number) => {
    await deleteTrainingMutation.mutateAsync(id);
  };

  const trainingsShow = trainingData?.map((item) => (
    <div key={item.id} className="bg-secondary2 p-4 rounded-md">
      <div
        className="flex justify-end text-primary gap-1 text-sm duration-300 hover:text-gold"
        onClick={() => navigate(`/dashboard/training/${item.id}`)}
      >
        <p className="cursor-pointer">تعديل البيانات</p>
        <FaRegEdit />
      </div>
      <h3 className="text-xl text-primary font-bold mb-4 text-center mt-2">
        {item.title_ar}
      </h3>

      <div className="rounded-t-lg w-full">
        <img
          src={item.media.file_path}
          alt={item.media.title}
          className="rounded-t-lg w-full"
        />
      </div>
      <div className="p-4 text-center rounded-b-lg">
        <h3 className="text-xl text-primary font-bold mb-4">{item.title_ar}</h3>
        <p className="text-text-gray text-sm font-bold mb-4">
          {item.description_ar}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleDeleteTraining(item.id)}
          className="bg-primary text-white text-lg py-1 lg:px-10 md:px-6 px-4 rounded-md border border-transparent hover:bg-white hover:border-primary hover:text-primary duration-300 mb-4"
        >
          إزالة التدريب
        </button>
      </div>
    </div>
  ));

  if (isLoading || isLoadingTraining) return <p>Loading...</p>;
  if (error || errorTraining) return <p>Error loading data</p>;
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <div className="flex justify-center items-center my-4 mb-10 gap-4">
        <button
          onClick={() => setPage('training')}
          className={`${
            page === 'jobs'
              ? 'bg-sky-600 text-center text-white'
              : 'bg-transparent text-center text-sky-600 '
          } border border-sky-600 rounded-sm px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white`}
        >
          التدريب
        </button>
        <button
          onClick={() => setPage('jobs')}
          className={`${
            page === 'jobs'
              ? 'bg-transparent text-center text-sky-600 '
              : 'bg-sky-600 text-center text-white'
          } border border-sky-600 rounded-sm px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white`}
        >
          التوظيف
        </button>
      </div>
      {page !== 'training' ? (
        <>
          <div className="mt-4">{jobsShow}</div>
          <div className="flex justify-center items-center my-4">
            <Link
              to={'/dashboard/add-job'}
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
            >
              <FaPlus />
              <p> إضافة إعلان</p>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Training */}
          <div className="flex items-center text-indigo-900 justify-end mt-4">
            <p>طلبات التقديم على التدريب</p>
            <div className="relative">
              <BiSolidMessageAlt className="w-8 h-8" />
              <span className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 text-white">
                ?
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {trainingsShow}
          </div>
          <div className="flex justify-center items-center my-4 mt-8">
            <Link
              to={'/dashboard/add-training'}
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
            >
              <span className="font-bold" style={{ fontSize: '24px' }}>
                +
              </span>
              <p> إضافة تدريب</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Jobs;
