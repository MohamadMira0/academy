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
import BlogsDashboard from './Dashboard/blogs';
import Content from './Dashboard/content';
import MainDashboard from './Dashboard/main';
import LoginAdmin from './Dashboard/Auth/LoginAdmin';
import Jobs from './Dashboard/training-and-employment';
import AddJob from './Dashboard/training-and-employment/add-employment';
import AddTraining from './Dashboard/Training/add-training';
import UpdateTraining from './Dashboard/Training/update-training';
import AddBlog from './Dashboard/blogs/add-blog';
import AddCourse from './Dashboard/courses/addCourse';
import { ToastContainer } from 'react-toastify';
import Lessons from './Dashboard/lessons';
import AddLesson from './Dashboard/lessons/addLesson';
import Quizes from './Dashboard/quizes';
import AddQuiz from './Dashboard/quizes/addQuiz';
import Offers from './Dashboard/offers';
import AddOffer from './Dashboard/offers/addOffers';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import CheckForgotPasswordToken from './Pages/Auth/ForgotPassword/CheckForgotPasswordToken';
import ResetPassword from './Pages/Auth/ForgotPassword/ResetPassword';
import Profile from './Pages/Profile';
import AddStudent from './Dashboard/students/addStudents';
import ShowStudent from './Dashboard/students/showStudent';
import RequireAuth from './functions/RequireAuth';

function App() {
  usePreventZoom();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="w-fit fixed z-30 right-0 bottom-[100px]">
        <img src={iconWhatsApp} alt="" className="w-11" />
      </div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/check-forgot-password-token"
          element={<CheckForgotPasswordToken />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
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
        <Route path="/payment/:id/:type" element={<Payment />} />
        <Route path="/course/:id" element={<ShowCourse />} />
        <Route path="/course/:id/exam" element={<Exam />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="main" index element={<MainDashboard />} />
            <Route path="training" element={<Jobs />} />
            <Route path="training/:id" element={<UpdateTraining />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="add-training" element={<AddTraining />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/add" element={<AddCourse />} />
            <Route path="courses/:id" element={<Lessons />} />
            <Route
              path="courses/:courseId/lessons/add"
              element={<AddLesson />}
            />
            <Route
              path="courses/:courseId/edit/:lessonId"
              element={<AddLesson />}
            />
            <Route path="courses/:id/show/:lessonId" element={<Quizes />} />
            <Route
              path="courses/:courseId/show/:lessonId/quizes/add"
              element={<AddQuiz />}
            />{' '}
            <Route
              path="courses/:courseId/show/:lessonId/edit/:quizId"
              element={<AddQuiz />}
            />
            <Route path="courses/edit/:id" element={<AddCourse />} />
            <Route path="offers" element={<Offers />} />
            <Route path="offers/add" element={<AddOffer />} />
            <Route path="offers/edit/:id" element={<AddOffer />} />
            <Route path="student" element={<Students />} />
            <Route path="student/add" element={<AddStudent />} />
            <Route path="student/:id" element={<ShowStudent />} />
            <Route path="student/edit/:id" element={<AddStudent />} />
            <Route path="blogs" element={<BlogsDashboard />} />
            <Route path="content" element={<Content />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
