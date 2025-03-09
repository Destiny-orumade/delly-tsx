import { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const jobListings: Job[] = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "New York, NY", description: "We are looking for a skilled Frontend Developer with React experience." },
  { id: 2, title: "Backend Developer", company: "Innovate Ltd.", location: "San Francisco, CA", description: "Seeking a Backend Developer proficient in Node.js and databases." },
  { id: 3, title: "UI/UX Designer", company: "Creative Minds", location: "Remote", description: "A talented UI/UX Designer is needed to create user-friendly interfaces." },
  { id: 4, title: "Project Manager", company: "Business Solutions", location: "Chicago, IL", description: "Looking for a Project Manager with Agile experience." },
  { id: 5, title: "Data Analyst", company: "DataWorld", location: "Seattle, WA", description: "Seeking a Data Analyst with strong SQL and visualization skills." },
  { id: 6, title: "DevOps Engineer", company: "CloudOps", location: "Austin, TX", description: "Hiring a DevOps Engineer experienced in AWS and CI/CD pipelines." },
  { id: 7, title: "Marketing Specialist", company: "BrandBoost", location: "Los Angeles, CA", description: "A Marketing Specialist is needed to drive digital campaigns." },
  { id: 8, title: "Cybersecurity Expert", company: "SecureNet", location: "Washington, DC", description: "Looking for a Cybersecurity Expert to enhance security protocols." },
  { id: 9, title: "QA Engineer", company: "QualityFirst", location: "Miami, FL", description: "Seeking a QA Engineer with automation testing experience." },
  { id: 10, title: "Full Stack Developer", company: "CodeCrafters", location: "Denver, CO", description: "Hiring a Full Stack Developer with experience in MERN stack." },
  { id: 11, title: "Product Manager", company: "InnovateNow", location: "Boston, MA", description: "Seeking a Product Manager to lead cross-functional teams." },
  { id: 12, title: "Machine Learning Engineer", company: "AI Solutions", location: "San Diego, CA", description: "Hiring a Machine Learning Engineer with experience in Python and TensorFlow." },
  { id: 13, title: "Technical Writer", company: "DocuTech", location: "Remote", description: "Looking for a Technical Writer to create clear documentation." }
];

const JobCard: React.FC<{ job: Job; expanded: boolean; onToggle: () => void }> = ({ job, expanded, onToggle }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor: "#ffffff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#222" }}>{job.title}</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>{job.company} - {job.location}</p>
        </div>
        <button
          style={{ backgroundColor: "#0056b3", color: "white", padding: "8px 16px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "14px" }}
          onClick={onToggle}
        >
          {expanded ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {expanded && <p style={{ marginTop: "12px", color: "#444", fontSize: "14px", lineHeight: "1.5" }}>{job.description}</p>}
    </div>
  );
};

const JobList: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJobDetails = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} expanded={expandedJob === job.id} onToggle={() => toggleJobDetails(job.id)} />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#555", fontSize: "18px", fontWeight: "500" }}>No jobs available at the moment.</p>
      )}
    </div>
  );
};

const JobListingPage: React.FC = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "30px", backgroundColor: "#f4f4f4", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px", color: "#222", textAlign: "center" }}>Delly's 🤓Job Listings</h1>
      <JobList jobs={jobListings} />
    </div>
  );
};

export default JobListingPage;
