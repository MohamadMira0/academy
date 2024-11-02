import Background from './Background';
import Footer from '../../components/Footer';
import About from './About';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import ArmyCourses from './ArmyCourses';
import Institute from './Institute';
import Blogs from './Blogs';
import TopBar2 from '../../components/TopBar2';
import Employ from './Employ';
import Training from './Training';
import Courses from './Courses';

const index = () => {
  return (
    <div>
      <TopBar2 />
      <Background />
      <About />
      <Courses />
      {/* <FirstCourses /> */}
      {/* <SecCourses /> */}
      {/* <Sold /> */}
      {/* <ArmyCourses /> */}
      <Institute />
      <Employ />
      <Training />
      <Blogs />
      <Footer footer />
    </div>
  );
};

export default index;
