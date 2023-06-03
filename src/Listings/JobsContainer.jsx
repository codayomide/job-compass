import DefaultJobs from "./Jobs";

const JobsContainer = () => {
  return ( 
    <main id="jobs_container" className="dashboardRoute">
      <div className="default">
        <h4 id="__header">Recent Jobs</h4>
        <DefaultJobs />
      </div>
      <div className="recommended">

      </div>
    </main>
  );
}
 
export default JobsContainer;