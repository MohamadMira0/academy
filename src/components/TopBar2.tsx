import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logoSvg.svg';
import english from '../assets/english.svg';
import arabic from '../assets/arabic.svg';
import arrow from '../assets/icons/arrow.svg';
import person from '../assets/icons/person.svg';

export default function TopBar2() {
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [courses, setCourses] = useState(false);
  const [training, setTraining] = useState(false);

  // const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // setScreenSize(window.innerWidth);
      setCourses(false);
      setOpenLang(false);
      setTraining(false);
      setOpenProfile(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg"
      dir="rtl"
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="w-20" alt="Logo" />
        </Link>

        <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setOpenLang((prev) => !prev)}
            type="button"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                <span className="flex gap-1 items-center">
                  <img src={arabic} alt="icon" className="me-2" />
                  العربية
                  <img src={arrow} alt="icon" />
                </span>
              </div>
            </a>
          </button>

          {/* <!-- Dropdown --> */}
          {/* <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{' '}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  get started
                </a>{' '}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div> */}
          <div
            className={`${
              openLang ? 'block' : 'hidden'
            } w-[120px] z-50 lang-hover-custom absolute right-0 top-[20px]  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
            id="accordion-collapse-body-1"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img src={english} alt="english" />
                    English (US)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img src={arabic} alt="icon" />
                    العربية
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open
              ? 'w-full'
              : 'items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          }`}
          id="navbar-language"
        >
          <ul className="flex flex-col items-center text-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div className="relative">
                <p
                  className="cursor-pointer"
                  onClick={() => setOpenProfile((prev) => !prev)}
                >
                  <span className="flex gap-1">
                    <img src={person} alt="icon" />
                    محمد الأحمد
                    <img src={arrow} alt="icon" />
                  </span>
                </p>
                {/* <!-- Dropdown --> */}
                <div
                  className={`${
                    openProfile ? 'block top-0 right-[150px]' : 'hidden'
                  } w-[150px] z-50 lang-hover-custom lg:absolute lg:right-0 lg:top-[20px]  lg:my-4 text-base list-none lg:bg-white divide-y divide-gray-100 rounded-lg lg:shadow dark:bg-gray-700`}
                  id="language-dropdown-menu"
                >
                  <ul
                    className="lg:py-2 ps-2 md:ps-0 font-medium w-full"
                    role="none"
                  >
                    <li>
                      <Link
                        to={''}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        الصفحة الشخصية
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={''}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        تسجيل الخروج
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to={'/'}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                الرئسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                من نحن
              </NavLink>
            </li>
            <li className="relative">
              <a
                onClick={() => setCourses((prev) => !prev)}
                href={'#'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                <span className="flex gap-1 items-center">
                  كورسات
                  <img src={arrow} alt="icon" />
                </span>
              </a>
              {/* <!-- Dropdown --> */}
              <div
                className={`${
                  courses ? 'block top-0 right-[150px]' : 'hidden'
                } w-[120px] z-50 lang-hover-custom lg:absolute lg:right-0 lg:top-[20px]  lg:my-4 text-base list-none lg:bg-white divide-y divide-gray-100 rounded-lg lg:shadow dark:bg-gray-700`}
                id="language-dropdown-menu"
              >
                <ul
                  className="lg:py-2 ps-2 md:ps-0 font-medium w-full"
                  role="none"
                >
                  <li className="w-full">
                    <Link
                      to={'/courses/first-band'}
                      className=" w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      الفرقة الاولى
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/courses/second-band'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      الفرقة الثانية
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to={'/courses/navigation-officers'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                كورسات ضباط الملاحة
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/institute'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                التقديم بالمعهد
              </NavLink>
            </li>
            <li className="relative">
              <a
                onClick={() => setTraining((prev) => !prev)}
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <span className="flex gap-1 items-center">
                  التوظيف و التدريب
                  <img src={arrow} alt="icon" />
                </span>{' '}
              </a>
              {/* <!-- Dropdown --> */}
              <div
                className={`${
                  training ? 'block top-0 right-[150px]' : 'hidden'
                } w-[120px] z-50 lang-hover-custom lg:absolute lg:right-0 lg:top-[20px]  lg:my-4 text-base list-none lg:bg-white divide-y divide-gray-100 rounded-lg lg:shadow dark:bg-gray-700`}
                id="language-dropdown-menu"
              >
                <ul className="lg:py-2 ps-2 md:ps-0 font-medium" role="none">
                  <li>
                    <Link
                      to={'/employ'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      التوظيف
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/training'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      التدريب
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to={'/blogs'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                المدونات
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contact-us'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
