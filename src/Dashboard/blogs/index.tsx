import Button from '../../components/Button';
import { TbMessageCircle } from 'react-icons/tb';
import { MdAccessTime } from 'react-icons/md';
import IconBxShow from '../../assets/svg/IconBxShow';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteBlog, formatDate, getBlogs } from '../../functions';
import { IBlogs } from '../../types';

const BlogsDashboard = () => {
  const queryClient = useQueryClient();

  // ** Handle Jobs
  const { data, isLoading } = useQuery(['blogs'], getBlogs);
  const blogs: IBlogs[] = data?.data;
  const deleteJobMutation = useMutation(deleteBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
    },
  });
  const handleDeleteJob = async (id: number) => {
    await deleteJobMutation.mutateAsync(id);
  };

  console.log(blogs);
  const blogsShow = blogs?.map((blog) => (
    <div className="bg-secondary2 rounded-md shadow-lg p-4 max-w-90">
      <div className="flex justify-end text-primary">
        <p className="cursor-pointer">تعديل البيانات</p>
        <FaRegEdit />
      </div>
      <div className=" rounded-md overflow-hidden py-4">
        <img
          src={blog.media.file_path}
          className="w-full rounded-md h-[275px]"
        />
        <div className="text-center p-4">
          <h3 className="text-primary text-2xl font-bold">{blog.title_ar}</h3>
        </div>
        <div className="flex justify-around flex-wrap gap-1">
          <div className="flex items-center justify-center gap-1 py-1 px-3 text-white bg-sky-700 rounded-full">
            <p className="text-xs">123 مشاهدة</p>
            <IconBxShow className="text-xs" />
          </div>
          <div className="flex items-center gap-1 justify-center py-1 px-3 text-white bg-sky-700 rounded-full">
            <p className="text-xs">456 تعليق</p>
            <TbMessageCircle className="text-xs" />
          </div>
          <div className="flex items-center justify-center self-center text-white gap-1 py-1 px-3 bg-sky-700 rounded-full">
            <p className="text-xs flex">{formatDate(blog.created_at)}</p>
            <MdAccessTime className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  ));

  if (isLoading) return <div>loading...</div>;
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <div className="flex justify-center items-center flex-wrap my-4 mb-10 gap-4">
        <Button
          title="تفعيل"
          className={`bg-sky-600 text-center text-white rounded-sm px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white`}
        />
        <Button
          title="حذف"
          className={`bg-transparent text-center text-sky-600 border border-sky-600 rounded-sm px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white`}
        />
        <Button
          title="إخفاء"
          className={`bg-transparent text-center text-sky-600 border border-sky-600 rounded-sm px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white `}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center-">
        {blogsShow}
      </div>
      <div className="flex justify-center items-center my-4 mt-8">
        <Link
          to={'/dashboard/add-blog'}
          className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
        >
          <span className="font-bold" style={{ fontSize: '24px' }}>
            +
          </span>
          <p> إضافة مدونة</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDashboard;
