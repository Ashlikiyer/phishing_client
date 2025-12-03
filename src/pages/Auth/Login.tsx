// Login Page - User authentication

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Store auth token (simplified for demo)
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);
      navigate("/dashboard");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <div className="brand-logo">
              <Shield size={48} />
            </div>
            <h1 className="brand-title">Phishing Detection Dashboard</h1>
            <p className="brand-description">
              Secure your organization with AI-powered email threat detection
              and real-time analysis.
            </p>
            <div className="security-badges">
              <div className="security-badge">
                <Lock size={16} />
                <span>256-bit Encryption</span>
              </div>
              <div className="security-badge">
                <Shield size={16} />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
          <div className="branding-background">
            <div className="grid-pattern"></div>
            <div className="glow-orb"></div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Welcome Back</h2>
              <p className="form-subtitle">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.email ? "input-error" : ""
                    }`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.password ? "input-error" : ""
                    }`}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Register Link */}
              <div className="form-footer">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="auth-link">
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* Branding Side */
        .auth-branding {
          position: relative;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          overflow: hidden;
        }

        .branding-content {
          position: relative;
          z-index: 10;
        }

        .brand-logo {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(19, 255, 160, 0.1);
          border: 2px solid rgba(19, 255, 160, 0.3);
          border-radius: 1.5rem;
          color: var(--color-primary);
          margin-bottom: 2rem;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(19, 255, 160, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(19, 255, 160, 0.6); }
        }

        .brand-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .brand-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .security-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .security-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(19, 255, 160, 0.05);
          border: 1px solid rgba(19, 255, 160, 0.2);
          border-radius: 0.5rem;
          color: var(--color-primary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .branding-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(19, 255, 160, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 255, 160, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        .glow-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: var(--color-primary);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        /* Form Side */
        .auth-form-container {
          padding: 3rem 4rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          min-height: 100vh;
          overflow-y: auto;
        }

        .auth-form-wrapper {
          width: 100%;
          max-width: 400px;
          padding: 2rem 0;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-primary);
          border-radius: 0.75rem;
          color: var(--text-primary);
          font-size: 0.9375rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 255, 160, 0.1);
        }

        .form-input.input-error {
          border-color: var(--color-danger);
        }

        .form-input.input-error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--color-danger);
          font-size: 0.8125rem;
          margin-top: -0.25rem;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          cursor: pointer;
        }

        .checkbox {
          width: 1rem;
          height: 1rem;
          cursor: pointer;
          accent-color: var(--color-primary);
        }

        .forgot-link {
          font-size: 0.875rem;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }

        .forgot-link:hover {
          opacity: 0.8;
        }

        .submit-button {
          width: 100%;
          padding: 1rem;
          background: var(--gradient-primary);
          color: var(--text-inverse);
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 20px rgba(19, 255, 160, 0.3);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(19, 255, 160, 0.5);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-footer {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-primary);
          font-size: 0.9375rem;
          color: var(--text-muted);
        }

        .auth-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .auth-link:hover {
          opacity: 0.8;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-container {
            padding: 2rem;
            min-height: auto;
          }

          .auth-form-wrapper {
            padding: 1rem 0;
          }
        }

        /* Custom scrollbar for form container */
        .auth-form-container::-webkit-scrollbar {
          width: 8px;
        }

        .auth-form-container::-webkit-scrollbar-track {
          background: var(--bg-primary);
        }

        .auth-form-container::-webkit-scrollbar-thumb {
          background: var(--border-primary);
          border-radius: 4px;
        }

        .auth-form-container::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
