import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

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
    <>
    <Navbar />
    <Hero title="Become a React Dev Today!" subtitle="Find the React job that fits your skills and needs"/>
    <HomeCards />
    <JobListings />
    <ViewAllJobs />

   </>
  );
        
};

export default App;
