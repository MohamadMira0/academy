import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logoSvg.svg';
import english from '../assets/english.svg';
import arabic from '../assets/arabic.svg';
import arrow from '../assets/icons/arrow.svg';
import person from '../assets/icons/person.svg';
import { useDispatch, useSelector } from 'react-redux';
import { languageAction } from '../app/features/languages/langSlice';
import { RootState } from '../app/store';
import Cookie from 'cookie-universal';

export default function TopBar2() {
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [courses, setCourses] = useState(false);
  const [training, setTraining] = useState(false);
  const dispatch = useDispatch();
  const language: string = useSelector(
    (state: RootState) => state.language.lang,
  );
  const [lang, setLang] = useState(language);

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const cookie = Cookie();
  const token = cookie.get('Bearer');
  const username = cookie.get('username');
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setCourses(false);
      setOpenLang(false);
      setTraining(false);
      setOpenProfile(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  const handleLogout = () => {
    cookie.remove('Bearer');
    window.location.pathname = '/';
  };

  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg"
      dir="rtl"
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-center 2xsm:justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="w-20 md:w-24 xl:w-30" alt="Logo" />
        </Link>

        <div className="relative flex items-center lg:order-2 space-x-1 lg:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-1">
            <div>
              {token ? (
                <div className="relative ">
                  <p
                    className="cursor-pointer select-none "
                    onClick={() => {
                      setOpenProfile((prev) => !prev);
                      setTraining(false);
                      setCourses(false);
                      setOpenLang(false);
                    }}
                  >
                    <span className="flex gap-1">
                      <img src={person} alt="icon" />
                      <span className="lg:hidden xl:block">{username}</span>
                      <img src={arrow} alt="icon" />
                    </span>
                  </p>
                  {/* <!-- Dropdown --> */}
                  <div
                    className={`${
                      openProfile ? 'block' : 'hidden'
                    } w-[150px] z-50 lang-hover-custom absolute right-0 top-[20px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                    id="language-dropdown-menu"
                  >
                    <ul
                      className="lg:py-2 ps-2 md:ps-0 font-medium w-full"
                      role="none"
                    >
                      <li>
                        <Link
                          to={'/profile'}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          {lang === 'en' ? 'Profile' : 'الصفحة الشخصية'}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={'/settings'}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          {lang === 'en' ? 'Settings' : 'الإعدادت'}
                        </Link>
                      </li>
                      <li>
                        <a
                          onClick={handleLogout}
                          className="block px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          {lang === 'en' ? 'logout' : 'تسجيل الخروج'}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  className="bg-primary text-white  rounded-lg px-8 py-1 mb-20 hover:text-white hover:bg-black duration-300"
                  to={'/login'}
                >
                  {lang === 'en' ? 'Login' : 'تسجيل الدخول'}
                </Link>
              )}
            </div>
            <div className="relative h-fit flex items-center">
              <button
                onClick={() => {
                  setOpenLang((prev) => !prev);
                  setCourses(false);
                  setOpenProfile(false);
                  setTraining(false);
                }}
                type="button"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                className="inline-flex items-center font-medium justify-center text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <div className="inline-flex items-center">
                  <span className="flex gap-1 items-center">
                    <img
                      src={language === 'ar' ? arabic : english}
                      alt="icon"
                    />
                    <span className="lg:hidden xl:block">
                      {language === 'ar' ? 'العربية' : 'English'}
                    </span>
                    <img src={arrow} alt="icon" />
                  </span>
                </div>
              </button>
              {openLang && (
                <div
                  className={`w-[120px] z-50 lang-hover-custom absolute transform left-1/2 -translate-x-1/2 top-[20px]  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                  id="accordion-collapse-body-1"
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <ul className="py-2 font-medium" role="none">
                    <li
                      onClick={() => {
                        setLang('en');
                        dispatch(languageAction('en'));
                        setOpenLang(false);
                      }}
                    >
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
                    <li
                      onClick={() => {
                        setLang('ar');
                        dispatch(languageAction('ar'));
                        setOpenLang(false);
                      }}
                    >
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
              )}
            </div>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              : 'items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
          }`}
          id="navbar-language"
        >
          <ul className="flex flex-col items-center text-center font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-2 xl:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to={'/'}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                style={({ isActive }) => {
                  return isActive ? { color: '#1d4ed8' } : {};
                }}
              >
                {lang === 'en' ? 'Home' : 'الرئسية'}
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
                {lang === 'en' ? 'About Us' : 'من نحن'}
              </NavLink>
            </li>
            <li className="relative">
              <a
                onClick={() => {
                  setCourses((prev) => !prev);
                  setOpenLang(false);
                  setOpenProfile(false);
                  setTraining(false);
                }}
                href={'#'}
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                <span className="flex gap-1 items-center">
                  {lang === 'en' ? 'Courses' : 'كورسات'}
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
                      {lang === 'en' ? 'First Group' : 'الفرقة الاولى'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/courses/second-band'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      {lang === 'en' ? 'Second Group' : 'الفرقة الثانية'}
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
                {lang === 'en' ? 'Navigation Courses' : 'كورسات ضباط الملاحة'}
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
                {lang === 'en' ? 'Apply Institutes' : 'التقديم بالمعهد'}
              </NavLink>
            </li>
            <li className="relative">
              <a
                onClick={() => {
                  setTraining((prev) => !prev);
                  setCourses(false);
                  setOpenLang(false);
                  setOpenProfile(false);
                }}
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <span className="flex gap-1 items-center">
                  {lang === 'en'
                    ? 'Recruitment and training'
                    : 'التوظيف و التدريب'}
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
                      {lang === 'en' ? 'Recruitment' : 'التوظيف'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/training'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      {lang === 'en' ? 'Training' : 'التدريب'}
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
                {lang === 'en' ? 'Blogs' : 'المدونات'}
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
                {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
