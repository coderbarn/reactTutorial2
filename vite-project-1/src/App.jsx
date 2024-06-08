import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(

  createRoutesFromElements(
        <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Route>
    
  )
);// Creates router

const App = () => {
  // Can only return a single element but you can have as much
  //    in that element that you want

  const name = 'Bill';
  const x = 10;
  const y = 7;
  const names = ['Crosby','Geno','Nala','Finn'];
  const loggedIn = true;
  const style1 = { // We dont need to do it this way since we are using Tailwind
    color:'green',
    fontSize: '55px'
  };

  return (
    <RouterProvider router={router} />

   
  );
        
};

export default App;
