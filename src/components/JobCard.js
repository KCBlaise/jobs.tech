import React from 'react';

const JobCard = ({ job }) => {
  let jobType = '';
  if(job.job_type.toLowerCase() === "full_time"){
    jobType = "Full Time"
  };

  return (
    <a href={`${job.url}`} target='_blank' rel='noreferrer' className="job-card-item">
      <figure className="company-img">
        <img src={`${job.company_logo}`} alt={job.title}/>
      </figure>

      <div className="job-info">
        <span>{job.category}</span>
        <span>&#183;</span>
        <span className="job-type">{jobType}</span>
      </div>
        
      <div className="job-title">{job.title}</div>

      <div className="company">{job.company_name}</div>

      <div className="location">{job.candidate_required_location}</div>

    </a>    
  )
}

export default JobCard