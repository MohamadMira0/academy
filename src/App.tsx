import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import AboutUs from './Pages/AboutUs/AboutUs';
import FirstBand from './Pages/Courses/FirstBand';
import SecondBand from './Pages/Courses/SecondBand';
import NavigationOfficers from './Pages/Courses/NavigationOfficers';
import Payment from './Pages/Payment/Payment';
import ShowCourse from './Pages/ShowCourse/ShowCourse';
import usePreventZoom from './hooks/PreventZoom';
import { useEffect } from 'react';
import iconWhatsApp from './assets/icons/whatsapp.svg';
import Exam from './Pages/ShowCourse/Exam';
import InstitutePage from './Pages/Institute/InstitutePage';
import EmployPage from './Pages/Employ/EmployPage';
import TrainingPage from './Pages/Training/TrainingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Blogs from './Pages/Blogs/Blogs';
import Blog from './Pages/Blogs/Blog';
import Dashboard from './Dashboard';
import Students from './Dashboard/students';
import Courses from './Dashboard/courses';
import TrainingAndEmployment from './Dashboard/training-and-employment';
import BlogsDashboard from './Dashboard/blogs';
import Content from './Dashboard/content';
import MainDashboard from './Dashboard/main';

function App() {
  usePreventZoom();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="w-fit fixed right-0 bottom-[100px]">
        <img src={iconWhatsApp} alt="" className="w-11" />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/institute" element={<InstitutePage />} />
        <Route path="/employ" element={<EmployPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/courses/first-band" element={<FirstBand />} />
        <Route path="/courses/second-band" element={<SecondBand />} />
        <Route
          path="/courses/navigation-officers"
          element={<NavigationOfficers />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/course/:id" element={<ShowCourse />} />
        <Route path="/course/:id/exam" element={<Exam />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" index element={<MainDashboard />} />
          <Route
            path="training-and-employment"
            element={<TrainingAndEmployment />}
          />
          <Route path="courses" element={<Courses />} />
          <Route path="student" element={<Students />} />
          <Route path="blogs" element={<BlogsDashboard />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
