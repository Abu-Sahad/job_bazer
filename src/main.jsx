import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Layout/Root';
import Home from './component/Home/Home';
import Statistics from './component/AppliedJobs/AppliedJobs';
import JobDetails from './component/JobDetails/JobDetails';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
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
        path: '/details/:id',
        element: <JobDetails />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)