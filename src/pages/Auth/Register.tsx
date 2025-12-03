// Register Page - User registration

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
  User,
  CheckCircle,
} from "lucide-react";

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {
      username?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      localStorage.setItem("username", formData.username);
      navigate("/dashboard");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: "" };
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    const labels = ["", "Weak", "Fair", "Good", "Strong"];
    const colors = ["", "#ef4444", "#f59e0b", "#10b981", "#13ffa0"];
    return { strength, label: labels[strength], color: colors[strength] };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <div className="brand-logo">
              <Shield size={48} />
            </div>
            <h1 className="brand-title">Join Our Security Platform</h1>
            <p className="brand-description">
              Create your account and start protecting your organization from
              phishing threats with AI-powered detection.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Real-time threat detection</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Advanced email analytics</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>24/7 automated monitoring</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Comprehensive security reports</span>
              </div>
            </div>
          </div>
          <div className="branding-background">
            <div className="grid-pattern"></div>
            <div className="glow-orb"></div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Create Account</h2>
              <p className="form-subtitle">
                Get started with your free account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Username Field */}
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-wrapper">
                  <User className="input-icon" size={20} />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.username ? "input-error" : ""
                    }`}
                    placeholder="johndoe"
                    autoComplete="username"
                  />
                </div>
                {errors.username && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{errors.username}</span>
                  </div>
                )}
              </div>

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
                    autoComplete="new-password"
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
                {formData.password && passwordStrength.strength > 0 && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className="strength-segment"
                          style={{
                            background:
                              level <= passwordStrength.strength
                                ? passwordStrength.color
                                : "var(--border-primary)",
                          }}
                        ></div>
                      ))}
                    </div>
                    <span
                      className="strength-label"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
                {errors.password && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`form-input ${
                      errors.confirmPassword ? "input-error" : ""
                    }`}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="error-message">
                    <AlertCircle size={14} />
                    <span>{errors.confirmPassword}</span>
                  </div>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="terms-notice">
                <p>
                  By creating an account, you agree to our{" "}
                  <a href="#" className="terms-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="terms-link">
                    Privacy Policy
                  </a>
                </p>
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
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              {/* Login Link */}
              <div className="form-footer">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="auth-link">
                    Sign in
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

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-primary);
          font-size: 0.9375rem;
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
          gap: 1.25rem;
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

        .password-strength {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: -0.25rem;
        }

        .strength-bar {
          flex: 1;
          display: flex;
          gap: 0.25rem;
          height: 4px;
        }

        .strength-segment {
          flex: 1;
          border-radius: 2px;
          transition: background 0.3s ease;
        }

        .strength-label {
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 50px;
          text-align: right;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--color-danger);
          font-size: 0.8125rem;
          margin-top: -0.25rem;
        }

        .terms-notice {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .terms-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
        }

        .terms-link:hover {
          text-decoration: underline;
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
