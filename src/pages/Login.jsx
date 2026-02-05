import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [loginMethod, setLoginMethod] = useState('password') // 'magic-link' or 'password'

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="login-logo">
            <h1 className="login-title">RealLives Dashboard</h1>
          </div>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <div className="login-card">
          {/* Login Method Toggle */}
          <div className="login-method-toggle">
            <button
              type="button"
              className={`toggle-option ${loginMethod === 'password' ? 'active' : ''}`}
              onClick={() => setLoginMethod('password')}
            >
              Password
            </button>
            <button
              type="button"
              className={`toggle-option ${loginMethod === 'magic-link' ? 'active' : ''}`}
              onClick={() => setLoginMethod('magic-link')}
            >
              Magic Link
            </button>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {loginMethod === 'magic-link' ? 'Email' : 'Email or Username'}
              </label>
              <input
                type={loginMethod === 'magic-link' ? 'email' : 'text'}
                id="email"
                name="email"
                className="form-input"
                placeholder={loginMethod === 'magic-link' ? 'Enter your email address' : 'Enter your email or username'}
              />
            </div>

            {loginMethod === 'password' && (
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
            )}

            {loginMethod === 'magic-link' && (
              <div className="magic-link-info">
                <p className="magic-link-text">
                  We'll send you a magic link to sign in. No password needed!
                </p>
              </div>
            )}

            {loginMethod === 'password' && (
              <div className="form-options">
                <label className="form-checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a 
                  href="#" 
                  className="forgot-password-link"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/forgot-password')
                  }}
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <button type="submit" className="login-button">
              {loginMethod === 'magic-link' ? (
                'Send Magic Link'
              ) : (
                'Login'
              )}
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            {/* Social Login Buttons */}
            <div className="social-login-container">
              <button
                type="button"
                className="social-button google-button"
              >
                Continue with Google
              </button>
            </div>

            <div className="login-divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="signup-button"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
