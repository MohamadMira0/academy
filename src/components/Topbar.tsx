import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo.png';
import { FaFlag, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className="lg:flex justify-evenly items-center text-primary  bg-white h-[100px]">
      <div>
        <button
          type="button"
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          aria-expanded="false"
        >
          <svg
            className="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <FaFlag />
          العربية
        </button>
        <button
          type="button"
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          aria-expanded="false"
        >
          <svg
            className="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <FaFlag />
          العربية
        </button>
      </div>
      <Link to={'/contact'}>تواصل معنا</Link>
      <Link to={'/notes'}>المدونات</Link>
      <Link to={'/'} className="flex items-center gap-x-1">
        <svg
          className="h-5 w-5 flex-none text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        التوظيف والتدريب
      </Link>
      <Link to={'/form-joining'}>التقديم بالمعهد</Link>
      <Link to={'/courses-special'}>كورسات ضباط الملاحة</Link>
      <Link to={'/courses'} className="flex items-center gap-x-1">
        <svg
          className="h-5 w-5 flex-none text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        كورسات
      </Link>
      <Link to={'/aboout'}>من نحن</Link>
      <Link to={'/home'}>الرئيسية</Link>
      <div className="hover-link" onClick={}>
        <button
          type="button"
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          aria-expanded="false"
        >
          <svg
            className="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          محمد أحمد
          <FaUser />
        </button>
        <div></div>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Topbar;
