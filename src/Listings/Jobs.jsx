import React, { useEffect, useState } from 'react';
import JobCard from '../App/Cards/Job';

const Jobs = () => {
  const [jobsArray, setjobsArray] = useState([]);
  const [loading, setLoading] = useState(true);

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
          setjobsArray(data.jobs);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="default_jobs">
      {loading ? (
        <p>Loading...</p>
      ) : (
        jobsArray.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      )}
    </section>
  );
}

export default Jobs;
