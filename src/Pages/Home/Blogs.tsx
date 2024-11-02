import Blog from '../../components/Blog';
import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { useQuery } from 'react-query';
import { formatDate, getBlogs } from '../../functions';
import { IBlogs } from '../../types';

export default function Blogs() {
  // ** Handle Jobs
  const { data, isLoading } = useQuery(['blogs'], getBlogs);
  const blogs: IBlogs[] = data?.data;
  const lastThreeArticles = blogs?.slice(0, 3);
  const showCourse = lastThreeArticles?.map((blog, idx) => (
    <Blog
      key={idx}
      img={blog.media.file_path}
      title={blog.title_ar}
      description={blog.description_ar}
      date={formatDate(blog.created_at)}
      show={200}
      message={10}
      button="المزيد"
    />
  ));

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="mb-20">
      <TitleWithLogo title="المدونات" />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showCourse}
          </div>

          <div className="text-center pt-20">
            <Button
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title="معرفة المزيد"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
