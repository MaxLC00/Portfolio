import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Add Tailwind CSS import
import './index.css'

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';



const projectList = [
  {
    title: 'Book Club App',
    description: 'A web application to manage members, books, and clubs using React, Node.js, Express, and Sequelize.',
    githubLink: 'https://github.com/Team-we-dont-know-yet/Bookclub'
  },
  {
    title: '',
    description: '',
    githubLink: ''
  },
  {
    title: '',
    description: '',
    githubLink: ''
  },
];

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio projectList ={projectList} />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);