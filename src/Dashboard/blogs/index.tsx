import Button from '../../components/Button';
import img from '../../assets/courses/Radio.png';
import { TbMessageCircle } from 'react-icons/tb';
import { MdAccessTime } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import { LuView } from 'react-icons/lu';
import IconBxShow from '../../assets/svg/IconBxShow';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteBlog, getBlogs } from '../../functions';
import { IBlogs } from '../../types';

const BlogsDashboard = () => {
  const queryClient = useQueryClient();

  // ** Handle Jobs
  const { data, isLoading, error } = useQuery(['blogs'], getBlogs);
  const blogs: IBlogs[] = data?.data;
  const deleteJobMutation = useMutation(deleteBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
    },
  });
  const handleDeleteJob = async (id: number) => {
    await deleteJobMutation.mutateAsync(id);
  };

  // const jobsShow = jobsData?.map((item) => (
  //   <div key={item.id} className="custom-shadow rounded-3xl mb-8  px-10 py-2">
  //     <div
  //       onClick={() => handleDeleteJob(item.id)}
  //       className="flex items-center justify-end cursor-pointer hover:text-red-500 duration-300 gap-1 text-sm w-fit ms-auto"
  //     >
  //       <p>ازالة الإعلان</p>
  //       <FaRegTrashCan />
  //     </div>
  //     <div className="flex flex-row-reverse flex-wrap items-center justify-center xl:justify-between">
  //       <div className="flex lg:justify-start justify-center w-[276px]">
  //         <img
  //           className="w-full"
  //           src={item.media.file_path}
  //           alt={item.media.title}
  //         />
  //       </div>
  //       <div className="text-right lg:w-3/5  flex flex-col justify-center lg:gap-8 gap-4">
  //         <h3 className="text-primary font-bold text-2xl text-center xl:text-right">
  //           {item.title_ar}
  //         </h3>
  //         <p className="text-text-gray text-lg text-center">
  //           {item.description_ar}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // ));
  const dummyData = [
    {
      img: img,
      show: 123,
      message: 456,
      date: '12/12/2022',
      title: 'عنوان المدونة',
    },
    {
      img: img,
      show: 123,
      message: 456,
      date: '12/12/2022',
      title: 'عنوان المدونة',
    },
    {
      img: img,
      show: 123,
      message: 456,
      date: '12/12/2022',
      title: 'عنوان المدونة',
    },
  ];
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
            <p className="text-xs flex">12/12/2022</p>
            <MdAccessTime className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  ));
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
