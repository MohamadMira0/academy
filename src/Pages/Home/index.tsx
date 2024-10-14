import React, { useEffect } from 'react';
import Background from './Background';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import About from './About';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import ArmyCourses from './ArmyCourses';
import Institute from './Institute';
import Employ from './Employ';
import Training from './Training';
import Blogs from './Blogs';
import TopBar2 from '../../components/TopBar2';
import { TrainingAndJobs } from './TrainingAndJobs';

const index = () => {
  return (
    <div>
      <TopBar2 />
      <Background />
      <About />
      <FirstCourses />
      <SecCourses />
      <Sold />
      <ArmyCourses />
      <Institute />
      <TrainingAndJobs />
      <Blogs />
      <Footer footer />
    </div>
  );
};

export default index;
