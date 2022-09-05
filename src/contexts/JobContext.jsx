import React from 'react'

const JobController = () => {
  const [job, setJobs] = React.useState({})

  return {
    job,
    setJobs,
  }
}

const JobContext = React.createContext({
  job: {},
  setJobs: () => {},
})

export const JobContextProvider = ({ children }) => {
  return <JobContext.Provider value={JobController()}>{children}</JobContext.Provider>
}

export const useJob = () => React.useContext(JobContext)
