import Jobcards from "../App/Cards/Jobcards";

const JobsContainer = () => {
  return ( 
    <main id="jobs-container" className="dashboardRoute">
      <h1 id="jobs-container__header">Jobs</h1>
      <Jobcards />
    </main>
  );
}
 
export default JobsContainer;