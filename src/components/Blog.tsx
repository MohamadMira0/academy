import Button from './Button';
import show from '../assets/icons/show.svg';
import message from '../assets/icons/message.svg';
import time from '../assets/icons/time.svg';

export default function Blog(props: any) {
  return (
    <>
      <div className="bg-white relative rounded-md shadow-lg">
        <div className="relative rounded-md overflow-hidden">
          <img src={props.img} className="w-full h-[275px]" />
          <div className="flex justify-around">
            <div className="flex items-center gap-1 pt-4">
              <p className="text-xs  gap-1">
                <span> مشاهدة </span> <span>{props.show}</span>
              </p>
              <span>
                <img src={show} alt="" />
              </span>
            </div>
            <div className="flex items-center  gap-1 pt-4">
              <p className="text-xs flex flex-row gap-1">
                <span>تعليق</span>
                <span>{props.message}</span>
              </p>
              <span>
                <img src={message} alt="" />
              </span>
            </div>
            <div className="flex items-center self-center gap-1 pt-4">
              <p className="text-xs flex">{props.date}</p>
              <span>
                <img src={time} alt="" />
              </span>
            </div>
          </div>
          <div className="text-center p-4">
            <h3 className="text-primary text-2xl font-bold">{props.title}</h3>
            <p className="text-md text-text-gray font-bold py-4">
              {props.description}
            </p>
            <div className="my-8">
              <Button
                title={props.button}
                className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-black duration-300 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
