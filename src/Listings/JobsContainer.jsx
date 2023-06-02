import DefaultJobs from "./Jobs";

const JobsContainer = () => {
  return ( 
    <main id="jobs-container" className="dashboardRoute">
      <h1 id="jobs-container__header">Recent Jobs</h1>
      <DefaultJobs />
    </main>
  );
}
 
export default JobsContainer;