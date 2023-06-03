import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const formatter = new Intl.NumberFormat('en-US');

  return (
    <div className="job-card">
      <h2 className="job-card__title">{job.title}</h2>

      <div className="job-card__price">
        <h3 className="price">{`₦${formatter.format(job.offer.lowest)} - ₦${formatter.format(job.offer.highest)}`}</h3>
        <small className="section-name">~Budget</small>
      </div>

      <p className="job-card__description">{job.desc}</p>

      <div className="job-card__tags-container">
        {job.keywords.map((keyword, index) => (
          <button key={index} className="tag">{keyword}</button>
        ))}
      </div>

      <Link to={`/dashboard/job/${job._id}/`}>Apply Now...</Link>
    </div>
  );
}

export default Job;
