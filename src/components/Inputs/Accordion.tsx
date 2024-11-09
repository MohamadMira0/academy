import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';

interface AccordionProps {
  title: string;
  content?: string;
  icon: number;
  children?: React.ReactNode;
}

export default function Accordion({
  title,
  content,
  icon,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-blue-2 rounded-lg mb-4">
      <div
        className={`flex justify-between bg-white rounded-lg items-center px-4 py-3 cursor-pointer`}
        onClick={toggleAccordion}
        style={{ cursor: 'pointer' }}
      >
        <div className="flex items-center gap-2">
          {icon === 0 ? (
            <FaCircleXmark className="text-red-600" />
          ) : (
            <FaCheckCircle className="text-success" />
          )}
          <h3 className="font-bold text-gray-800">{title}</h3>
        </div>
        <span
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <div
        className={`transition-max-height duration-300 overflow-hidden ${
          isOpen ? 'max-h-96  py-3' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
