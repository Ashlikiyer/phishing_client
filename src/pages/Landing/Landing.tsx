// Landing Page - Professional introduction to the Phishing Detection Dashboard

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Mail,
  BarChart3,
  Lock,
  Zap,
  Eye,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Bell,
  Database,
  Activity,
  LogIn,
} from "lucide-react";

export function Landing() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Shield size={32} />,
      title: "AI-Powered Detection",
      description:
        "Advanced machine learning algorithms analyze emails in real-time to detect phishing attempts with high accuracy.",
      color: "var(--color-primary)",
    },
    {
      icon: <Mail size={32} />,
      title: "Email Intelligence",
      description:
        "Comprehensive email analysis including headers, authentication results, and threat intelligence from multiple sources.",
      color: "var(--color-info)",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Advanced Analytics",
      description:
        "Deep insights into threat trends, domain intelligence, and IP reputation with interactive visualizations.",
      color: "var(--color-warning)",
    },
    {
      icon: <Lock size={32} />,
      title: "Security First",
      description:
        "Built with security best practices, featuring SPF, DKIM, and DMARC validation for maximum protection.",
      color: "var(--color-danger)",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-Time Processing",
      description:
        "Instant email analysis and threat detection with automated workflows powered by n8n integration.",
      color: "var(--color-primary)",
    },
    {
      icon: <Eye size={32} />,
      title: "Detailed Insights",
      description:
        "View comprehensive threat reports with AI reasoning, CTI analysis, and actionable recommendations.",
      color: "var(--color-info)",
    },
  ];

  const stats = [
    {
      value: "99.8%",
      label: "Detection Accuracy",
      icon: <TrendingUp size={20} />,
    },
    { value: "< 1s", label: "Analysis Time", icon: <Activity size={20} /> },
    { value: "24/7", label: "Active Monitoring", icon: <Bell size={20} /> },
    { value: "100K+", label: "Emails Analyzed", icon: <Database size={20} /> },
  ];

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Shield size={32} />
            <span className="nav-brand">PhishGuard</span>
          </div>
          <div className="nav-actions">
            <button className="nav-link" onClick={() => navigate("/login")}>
              <LogIn size={18} />
              Sign In
            </button>
            <button
              className="nav-btn-primary"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-badge">
            <Shield size={20} />
            <span>AI-Powered Threat Detection</span>
          </div>

          <h1 className="hero-title">
            Protect Your Organization from
            <span className="gradient-text"> Phishing Attacks</span>
          </h1>

          <p className="hero-description">
            Advanced email security powered by artificial intelligence and
            real-time threat intelligence. Detect, analyze, and prevent phishing
            attempts before they reach your inbox.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background */}
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Comprehensive Email Security</h2>
          <p className="section-description">
            Everything you need to protect your organization from sophisticated
            phishing attacks
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Simple, automated, and effective email security in three steps
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Email Collection</h3>
              <p>
                Automated email ingestion from your mail servers via n8n
                workflows
              </p>
              <div className="step-icon">
                <Mail size={40} />
              </div>
            </div>
          </div>

          <div className="process-arrow">
            <ArrowRight size={32} />
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>
                Real-time threat detection using machine learning and CTI
                databases
              </p>
              <div className="step-icon">
                <Shield size={40} />
              </div>
            </div>
          </div>

          <div className="process-arrow">
            <ArrowRight size={32} />
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Actionable Insights</h3>
              <p>
                Detailed reports with threat analysis and security
                recommendations
              </p>
              <div className="step-icon">
                <BarChart3 size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Enhance Your Email Security?</h2>
          <p className="cta-description">
            Start protecting your organization today with AI-powered phishing
            detection
          </p>
          <button
            className="btn-primary btn-large"
            onClick={() => navigate("/register")}
          >
            Get Started Free
            <ArrowRight size={24} />
          </button>
        </div>
        <div className="cta-features">
          <div className="cta-feature">
            <CheckCircle size={20} />
            <span>Real-time threat detection</span>
          </div>
          <div className="cta-feature">
            <CheckCircle size={20} />
            <span>Comprehensive analytics</span>
          </div>
          <div className="cta-feature">
            <CheckCircle size={20} />
            <span>24/7 automated monitoring</span>
          </div>
        </div>
      </section>

      <style>{`
        .landing-page {
          min-height: 100vh;
          background: var(--bg-primary);
          overflow-x: hidden;
        }

        /* Navigation Bar */
        .landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-primary);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-primary);
        }

        .nav-brand {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: transparent;
          color: var(--text-primary);
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: rgba(19, 255, 160, 0.05);
          color: var(--color-primary);
        }

        .nav-btn-primary {
          padding: 0.625rem 1.5rem;
          background: var(--gradient-primary);
          color: var(--text-inverse);
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(19, 255, 160, 0.2);
        }

        .nav-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(19, 255, 160, 0.4);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          padding-top: 6rem;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-content.fade-in {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(19, 255, 160, 0.1);
          border: 1px solid rgba(19, 255, 160, 0.3);
          border-radius: 2rem;
          color: var(--color-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--gradient-primary);
          color: var(--text-inverse);
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(19, 255, 160, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(19, 255, 160, 0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-primary);
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: var(--color-primary);
          background: rgba(19, 255, 160, 0.05);
          transform: translateY(-2px);
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
        }

        .stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2rem;
          background: rgba(26, 26, 26, 0.5);
          border: 1px solid var(--border-primary);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(19, 255, 160, 0.1);
          border-radius: 0.75rem;
          color: var(--color-primary);
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        /* Hero Background */
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(19, 255, 160, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 255, 160, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .glow-orb-1 {
          width: 400px;
          height: 400px;
          background: var(--color-primary);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .glow-orb-2 {
          width: 300px;
          height: 300px;
          background: var(--color-info);
          bottom: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .glow-orb-3 {
          width: 250px;
          height: 250px;
          background: var(--color-warning);
          top: 50%;
          left: 50%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Features Section */
        .features-section {
          padding: 6rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: 1rem;
          transition: all 0.3s ease;
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 40px rgba(19, 255, 160, 0.2);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(19, 255, 160, 0.1);
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .feature-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* Process Section */
        .process-section {
          padding: 6rem 2rem;
          background: var(--bg-secondary);
        }

        .process-steps {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .process-step {
          flex: 1;
          min-width: 250px;
          max-width: 350px;
          padding: 2rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-primary);
          border-radius: 1rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          border-color: var(--color-primary);
          transform: scale(1.05);
        }

        .step-number {
          position: absolute;
          top: -20px;
          left: 2rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          color: var(--text-inverse);
          font-weight: 700;
          border-radius: 0.5rem;
        }

        .step-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .step-content p {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          opacity: 0.3;
        }

        .process-arrow {
          color: var(--color-primary);
          opacity: 0.5;
          display: flex;
          align-items: center;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 2rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cta-content {
          margin-bottom: 3rem;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .cta-features {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-size: 0.9375rem;
        }

        @media (max-width: 768px) {
          .process-arrow {
            display: none;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
