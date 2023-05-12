import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Layout/Root';
import Home from './component/Home/Home';
import JobDetails from './component/JobDetails/JobDetails';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import NotFound from './component/NotFound/NotFound';
import Statistics from './component/Statistics/Statistics';
//import JobDetails from './component/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/job-catagorie.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/details/:id',
        element: <JobDetails />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)