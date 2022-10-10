import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/jobs.css";
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobData, setJobData] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);

    useEffect(() =>{
        axios.get('https://remotive.com/api/remote-jobs')
            .then(res => {
                console.log(res);
                setJobData(res.data.jobs);
                setFilteredJobs(res.data.jobs)
                setDisplayedJobs(res.data.jobs.slice(0, 12));
                setIsLoading(false);
            });
        },[]
    );

    const loadMore = () =>{
        let moreJobs = filteredJobs.slice(displayedJobs.length, displayedJobs.length + 12);
        setDisplayedJobs(current => [...current, ...moreJobs]);
    };

    const onSearch = (value) => {
        if(!value) return setDisplayedJobs(jobData.slice(0,12));

        const result = jobData.filter(job => {
        return job.title.toLowerCase().includes(value.toLowerCase()) || job.company_name.toLowerCase().includes(value.toLowerCase()) || job.candidate_required_location.toLowerCase().includes(value.toLowerCase())
        });

        setFilteredJobs(result);
        setDisplayedJobs(result.slice(0,12));
    }

  return (
    <div className='jobs-page'>
        <main className="jobs-section">
            <FilterBar placeHolder='Filter by Job Title, Company Name, Location' onSearch={onSearch}  />

            {isLoading && <div className='loader'></div>}

            <div className="jobs-grid">
                {displayedJobs && displayedJobs.map(
                    job => <JobCard key={job.id} job={job}/>
                )}
            </div>

            <button onClick={loadMore}>Load More</button>
        </main>
    </div>
  )
}

export default Jobs