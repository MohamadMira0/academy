import Background from './Background';
import Footer from '../../components/Footer';
import About from './About';
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
      <Institute />
      <Employ />
      <Training />
      <Blogs />
      <Footer footer />
    </div>
  );
};

export default index;
