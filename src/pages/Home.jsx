import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div className="home-logo">
            <div>
              <h1 className="home-title">RealLives Dashboard</h1>
              <p className="home-subtitle">Experience life from different perspectives</p>
            </div>
          </div>
        </div>
        
        <div className="home-main">
          <div className="home-card">
            <h2 className="home-card-title">Welcome to RealLives</h2>
            <p className="home-card-description">
              Explore the world through immersive simulations and gain insights into 
              different lives, cultures, and experiences.
            </p>
            <button 
              className="home-cta-button"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
