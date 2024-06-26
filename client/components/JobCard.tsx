import { Link } from 'react-router-dom'
import { Job } from '../../models/job'

export default function JobCard(job: Job) {
  return (
    <>
      <div
        className={`bg-white shadow-md rounded-md border border-gray-200 overflow-hidden p-4`}
      >
        <div
          className="rounded-md h-16 w-16 flex items-center justify-center p-1"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img src={job.logo} alt={job.company} className="w-16 rounded-md" />
        </div>
        <span className="text-gray-700">
          {job.postedAt} - {job.contract}
        </span>
        <Link to={`/${job.id}`}>
          <h3 className="font-bold text-xl">{job.position}</h3>
        </Link>
        <p className="text-gray-700">{job.company}</p>
        <p className="text-purple-700">{job.location}</p>
      </div>
    </>
  )
}
