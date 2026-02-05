import { useNavigate } from 'react-router-dom'
import './ForgotPassword.css'

function ForgotPassword() {
  const navigate = useNavigate()

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <div className="forgot-password-header">
          <div className="forgot-password-logo">
            <h1 className="forgot-password-title">RealLives Dashboard</h1>
          </div>
          <p className="forgot-password-subtitle">Reset your password</p>
        </div>

        <div className="forgot-password-card">
          <form className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email address"
              />
            </div>

            <div className="forgot-password-info">
              <p className="forgot-password-text">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <button type="submit" className="forgot-password-button">
              Send Reset Link
            </button>

            <div className="forgot-password-divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="back-to-login-button"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
