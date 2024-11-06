import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { useQuery } from 'react-query';
import { getTrainingsWebsite } from '../../functions';
import { trainingsWebsite } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function Training() {
  const lang: string = useSelector((state: RootState) => state.language.lang);

  // ** Handle Training
  const { data: training, isLoading } = useQuery(
    ['training', lang],
    () => getTrainingsWebsite(lang),
    {
      keepPreviousData: true,
    },
  );
  const trainingData: trainingsWebsite[] = training?.data.trainings;

  const trainingsShow = trainingData?.map((item, idx) => (
    <div key={idx}>
      <div className="flex lg:justify-start justify-center w-[276px]">
        <img
          className="w-full h-65 object-cover"
          src={item?.media.file_path}
          alt=""
        />
      </div>
      <div className="text-center mt-4 grid items-center gap-4">
        <h3 className="text-primary font-bold text-2xl">{item?.title}</h3>
        <p className="text-text-gray text-lg">{item.description}</p>
        <div>
          <Button
            to="/"
            className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
            title={lang === 'en' ? 'join us' : 'انضم الينا'}
          />
        </div>
      </div>
    </div>
  ));

  if (isLoading) return <div>loading...</div>;
  return (
    <div className="mb-20">
      <TitleWithLogo title={lang === 'en' ? 'training' : 'تدريب'} />
      <div className="flex flex-row-reverse flex-wrap-reverse container justify-center mx-auto lg:justify-between gap-4 lg:px-16 md:px-8 px-3">
        {trainingsShow}
      </div>
    </div>
  );
}
