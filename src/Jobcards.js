import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Jobcards = () => {
  const [job, setJob] = useState({});
  const [jobsArray, setjobsArray] = useState([]);

  const [loading, setLoading] = useState(true);

  const formatter = new Intl.NumberFormat('en-US');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch('https://drab-tan-chimpanzee-hose.cyclic.app/api/job/recent', {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setjobsArray(data.jobs)
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return(
    <section id="jobs-container__main">
      {loading ? (
        <p>Loading...</p>
      ) : (jobsArray.map((job, index) => (
        <div className="job-card">
          <h2 className="job-card__title">{job.title}</h2>
    
          <div className="job-card__price">
            <h3 className="price">{`₦${formatter.format(job.offer.lowest)} - ₦${formatter.format(job.offer.highest)}`}</h3>
            <small className="section-name">Budget</small>
          </div>

          <p className="job-card__description">{job.desc}</p>

          <div className="job-card__tags-container">
            {job.keywords.map((keyword, index) => (
              <button key={index} className="tag">{keyword}</button>
            ))}
          </div>

          <Link key={index} to={`/dashboard/job/${job._id}/`}>Apply Now...</Link>
        </div>
      )))}
    </section>
  )
}

export default Jobcards;