import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="bottom-home-section">
      <h1 className="home-heading">Find The Job That Fits Your Life</h1>
      <p className="description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <button className="find-jobs-button" type="button">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
