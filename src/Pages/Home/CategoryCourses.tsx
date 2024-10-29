import { useQuery } from 'react-query';
import ArmyCourses from './ArmyCourses';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import { base_url_student, category_Courses } from '../../Api/Api';
import { Axios } from '../../Api/axios';

export type oneCourseType = {
  id: number;
  title: string;
  course_type: string;
  days: number;
  course_category_id: number;
  price_egp: string;
  price_sar: string;
  image: string;
  certificate: string;
};
export type CategoryCoursesType = {
  id: number;
  title: string;
  courses?: oneCourseType[];
};

export default function CategoryCourses() {
  const { data: categoryCourses, isLoading } = useQuery({
    queryFn: () =>
      Axios.get(`${base_url_student}/${category_Courses}`, {
        headers: {
          'x-api-key': 'mwDA9w',
        },
      }),
    queryKey: ['categoryCourses'],
  });
  console.log(categoryCourses);

  return (
    <>
      <FirstCourses data={categoryCourses?.data[3]} />
      <SecCourses data={categoryCourses?.data[2]} />
      <Sold data={categoryCourses?.data[0]} />
      <ArmyCourses data={categoryCourses?.data[1]} />
    </>
  );
}
