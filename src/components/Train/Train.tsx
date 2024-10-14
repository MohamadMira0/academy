// import radio from '../../assets/courses/Radio.png';
export default function Train({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <>
      <div>
        <div className="rounded-t-lg w-full">
          <img src={img} alt="image-course" className="rounded-t-lg w-full" />
        </div>
        <div className="p-4 bg-white text-center rounded-b-lg">
          <h3 className="text-xl text-primary font-bold mb-4">{title}</h3>
          <p className="text-text-gray text-sm font-bold mb-4">{description}</p>
          <button className="bg-primary text-white text-lg py-1 lg:px-16 px-8 rounded-md border border-transparent hover:bg-white hover:border-primary hover:text-primary duration-300 mb-4">
            انضم الينا
          </button>
        </div>
      </div>
    </>
  );
}
