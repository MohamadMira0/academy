import { useQuery } from 'react-query';
import { Axios } from '../../Api/axios';
import Employ from './Employ';
import Training from './Training';
import { JobsTraining, baseURL } from '../../Api/Api';

export const TrainingAndJobs = () => {
  const { data: training, isLoading } = useQuery({
    queryFn: () =>
      Axios.get(`${baseURL}/${JobsTraining}`, {
        headers: {
          'x-api-key': 'mwDA9w',
        },
      }),
    queryKey: ['training'],
  });

  return (
    <>
      <Employ data={training?.data?.data.jobs[0]} />
      <Training data={training?.data?.data.training[0]} />
    </>
  );
};
