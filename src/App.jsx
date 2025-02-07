import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter as Router , Routes  , Route} from 'react-router-dom'
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
import ProjectPage from './components/ProjectFile/ProjectPage/ProjectPage'
import Modal from 'react-modal';
Modal.setAppElement('#root');

const App = () => {
  return (
    <Router basename="/My-Portofolio">
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
        <Route path='/projects/firstProject' element={<ProjectPage   
        firstImage="/notessignup.png"
        secondImage="/noteslogin.png"
        thirdImage="/emptynotes.png"
        fourthImage="/notes.png"
        firstVideo="/videos/notesSignUp_fixed.mp4"
        secondVideo="/videos/notesLogin.mp4"
        thirdVideo="/videos/notes.mp4"
        note={true}
        noteText="This project is based entirely on a YouTube tutorial, where I followed along to create a fully functional notes app. Through this tutorial, I learned and practiced:
        Password Encryption: Using bcrypt to hash and verify passwords for secure user authentication.
        API Communication: Working with Axios to send and receive data between the frontend and backend.
        Authentication and Tokens: Implementing secure login and user authentication with JSON Web Tokens (JWT) to protect user data.
        While the code matches the tutorial, this project helped me understand these key concepts and their real-world application in building a full-stack application."
        firstImageText="The image highlights the clean and modern user interface of the sign-up page. The layout is intuitive, with clear labels and placeholders for each field, ensuring a smooth registration process. It includes input fields for the user's name, email, and password, along with a visually appealing sign-up button. Error messages are displayed in a user-friendly manner when inputs are invalid, maintaining usability."
        secondImageText="The image showcases the sleek design of the login page, featuring input fields for the user's email and password. The layout is minimalistic, ensuring ease of use for all users. Clear placeholder text and labels guide the user through the process. A prominent 'Login' button ensures quick access, and a 'Forgot Password?' link is included to assist users in recovering their accounts if needed."
        thirdImageText="This image illustrates how the main page appears when no notes have been created. A friendly message or icon is displayed to encourage users to get started. The minimalist design keeps the page uncluttered, ensuring a welcoming and intuitive experience for first-time users."
        fourthImageText="This image showcases the main page populated with notes. Each note is displayed in an organized grid or list layout, with features such as note titles, preview text, and timestamps. The interface supports easy browsing and emphasizes clarity to help users find their notes quickly."
        firstVideoText="The video demonstrates the functionality of the sign-up page in real-time. You'll see the process of filling out the form, including validation checks for email format, password strength, and required fields. Once the form is completed and submitted, the video showcases how the app communicates with the backend to create a new user account and provides feedback, such as success messages or error handling for issues like duplicate emails."
        secondVideoText="The video demonstrates the functionality of the login process step by step. You'll see the user entering their credentials, with client-side validation ensuring the fields are correctly filled before submission. The backend securely verifies the credentials and provides feedback, such as error messages for incorrect details or notifications for successful login. Additionally, the video highlights the integration of session management or token-based authentication to ensure secure access to user data once logged in."
        thirdVideoText="The video demonstrates the core functionality of the main page:
        Create Notes: Users can add new notes by clicking a clearly marked button. The video shows the form for entering note details and saving the note.
        Update Notes: The video illustrates how users can edit an existing note by selecting it, making changes, and saving updates.
        Delete Notes: Finally, the video demonstrates the ability to delete notes seamlessly, with visual feedback like confirmation prompts or instant removal from the list."
        />} />
        <Route path='/projects/secondProject' element={<ProjectPage   
        firstImage="/todomyday.png"
        secondImage="/todoimportant.png"
        thirdImage="/todoplanned.png"
        fourthImage="/todotasks.png"
        firstVideo="/todoImportant.mp4"
        secondVideo="/todoPlanned.mp4"
        thirdVideo="/todoTasks.mp4"
        firstImageText="The My Day page is designed to help users focus on tasks that matter today. It displays tasks that are scheduled for the current day or those manually added by the user for immediate attention. With an intuitive layout, users can easily plan and prioritize their daily responsibilities."
        secondImageText="The Important page keeps track of tasks marked as high-priority. By flagging tasks, users can quickly filter and view items that need their immediate focus. This page ensures that no critical tasks are overlooked."
        thirdImageText="The Planned page organizes tasks based on scheduled dates. It provides a clear overview of tasks planned for the upcoming days, weeks, or months. This page is perfect for long-term planning and staying ahead of deadlines."
        fourthImageText="The Tasks page serves as the central hub for all tasks. Here, users can view and manage their entire to-do list. It provides an efficient way to add, edit, or delete tasks while keeping everything neatly organized."
        firstVideoText="In this video, I demonstrate how the My Day page works, showing how users can create tasks specifically for today. I explain the steps to add, update, and delete tasks, making it easy for users to stay organized and focus on their daily priorities. and it highlights the functionality of the Important page. I walk through how to mark tasks as important, view high-priority items, and manage them efficiently by updating or deleting them as needed."
        secondVideoText="The Planned page video showcases how users can schedule tasks for future dates. I provide a detailed explanation of how to add tasks with due dates, update existing tasks, and delete ones that are no longer needed, helping users manage their long-term goals."
        thirdVideoText="In this video, I cover the Tasks page, which acts as the main hub for managing all tasks. I demonstrate how users can add new tasks, edit existing ones, and delete tasks with ease. This video also emphasizes how the Tasks page provides a comprehensive overview of the entire to-do list."
        />} />
        <Route path='/projects/thirdProject' element={<ProjectPage   
        firstImage=""
        secondImage=""
        thirdImage=""
        fourthImage=""
        firstVideo=""
        secondVideo=""
        thirdVideo=""
        firstImageText=""
        secondImageText=""
        thirdImageText=""
        fourthImageText=""
        firstVideoText=""
        secondVideoText=""
        thirdVideoText=""
        />} />
      </Routes>
    </Router>
  )
}

export default App