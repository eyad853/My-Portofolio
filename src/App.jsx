import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter as Router , Routes  , Route, useLocation, Navigate} from 'react-router-dom'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import Services from './pages/Services/Services'
import FullStack from './components/ServicesPage/FullStack/FullStack'
import Frontend from './components/ServicesPage/FrontendPage/Frontend'
import Backend from './components/ServicesPage/Backend/Backend'
import DataBase from './components/ServicesPage/DataBase/DataBase'
import API_Development_Integration from './components/ServicesPage/API_Development_Integration/API_Development_Integration'
import Real_Time_Applications from './components/ServicesPage/Real-Time_Applications/Real_Time_Applications'
import Version_Control_Deployment from './components/ServicesPage/Version_Control_Deployment/Version_Control_Deployment.Version_Control_&_Deployment'
import SocketIo from './pages/SkillsPages/SocketIo/SocketIo'
import CssPage from './pages/SkillsPages/CssPage/CssPage'
import JavaScriptPage from './pages/SkillsPages/JavaScriptPage/JavaScriptPage'
import ReactPage from './pages/SkillsPages/ReactPage/ReactPage'
import NodePage from './pages/SkillsPages/NodePage/NodePage'
import ExpressPage from './pages/SkillsPages/ExpressPage/ExpressPage'
import MongoDb from './pages/SkillsPages/MnogoDb/MongoDb'
import Tailwind from './pages/SkillsPages/Tailwind/Tailwind'
import TypeScriptPage from './pages/SkillsPages/TypeScriptPage/TypeScriptPage'
import HtmlPage from './pages/SkillsPages/HtmlPage/HtmlPage'
import Modal from 'react-modal';
import F_FirstProject from './pages/EachProject/FrontEndProjects/FirstProject/F_FirstProject'
import F_SecondProject from './pages/EachProject/FrontEndProjects/SecondProject/F_SecondProject'
import F_ThirdProject from './pages/EachProject/FrontEndProjects/ThirdProject/F_ThirdProject'
import FS_FirstProject from './pages/EachProject/Full_Stack_Projects/FirstProject/FS_FirstProject'
import FS_SecondProject from './pages/EachProject/Full_Stack_Projects/SecondProject/FS_SecondProject'
import FS_ThirdProject from './pages/EachProject/Full_Stack_Projects/ThirdProject/FS_ThirdProject'
Modal.setAppElement('#root');

function RedirectToRoot() {
  const location = useLocation();
  if (location.pathname.startsWith("/My-Portofolio")) {
    return <Navigate to="/" replace />;
  }
  return null;
}

const App = () => {
  return (
    <Router basename="/">
      <RedirectToRoot />  {/* This ensures users are redirected if needed */}
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services  />} />
        <Route path='/services/fullstack_development' element={<FullStack   />} />
        <Route path='/services/frontend' element={<Frontend   />} />
        <Route path='/services/backend' element={<Backend   />} />
        <Route path='/services/database' element={<DataBase   />} />
        <Route path='/services/api_dev_int' element={<API_Development_Integration   />} />
        <Route path='/services/real_time_apps' element={<Real_Time_Applications   />} />
        <Route path='/services/v_c_d' element={<Version_Control_Deployment   />} />
        <Route path='/skills/socktIo' element={<SocketIo   />} />
        <Route path='/skills/css' element={<CssPage   />} />
        <Route path='/skills/JavaScript' element={<JavaScriptPage   />} />
        <Route path='/skills/reactJS' element={<ReactPage   />} />
        <Route path='/skills/nodeJs' element={<NodePage   />} />
        <Route path='/skills/expressJs' element={<ExpressPage   />} />
        <Route path='/skills/mongoDb' element={<MongoDb   />} />
        <Route path='/skills/tailwindCss' element={<Tailwind   />} />
        <Route path='/skills/Typescript' element={<TypeScriptPage   />} />
        <Route path='/skills/HTML' element={<HtmlPage   />} />

        {/* _______________________________________________________________________________________________________ */}
        
        <Route path='/frontend/projects/firstProject' element={<F_FirstProject/>} />
        <Route path='/frontend/projects/secondProject' element={<F_SecondProject />} />
        <Route path='/frontend/projects/thirdProject' element={<F_ThirdProject  />} />
        <Route path='/fullstack/projects/firstProject' element={<FS_FirstProject />} />
        <Route path='/fullstack/projects/secondProject' element={<FS_SecondProject />} />
        <Route path='/fullstack/projects/thirdProject' element={<FS_ThirdProject  />} />
      
        
{/* _________________________________________________________________________________________________________________ */}
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App