import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/jobs.css";
import FilterBar from '../components/FilterBar';
import LoadMoreBtn from '../components/LoadMoreBtn';
import Loader from '../components/Loader';
import JobsGrid from '../components/JobsGrid';

const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobData, setJobData] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [allJobsDisplayed, setAllJobsDispalyed] = useState(false);

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
        if(displayedJobs.length === filteredJobs.length){
            setAllJobsDispalyed(true);
            setTimeout(() => setAllJobsDispalyed(false) , 3000);
        };
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
            <FilterBar placeHolderLarge='Filter by Job Title, Company Name, Location' placeHolderMobile='Job Title, Company Name, Location' onSearch={onSearch}  />
            <Loader isLoading={isLoading} />
            <JobsGrid displayedJobs={displayedJobs}/>
            <LoadMoreBtn loadMore={loadMore} allJobsDisplayed={allJobsDisplayed}/>
        </main>
    </div>
  );
};

export default Jobs