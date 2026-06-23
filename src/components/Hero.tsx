import { Sparkles } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>AI-Powered Learning</span>
          </div>
          <h1 className="hero-title">Your Personal AI Study Assistant</h1>
          <p className="hero-description">
            StudyMate AI helps you organize study materials, generate
            intelligent summaries, create personalized study schedules, and
            prepare for exams efficiently with the power of AI.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-large" onClick={onGetStarted}>
              Start Learning
            </button>
            <button className="btn-secondary btn-large">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
