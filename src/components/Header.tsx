import { GraduationCap } from "lucide-react";

interface HeaderProps {
  onGetStarted: () => void;
}

export default function Header({ onGetStarted }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <GraduationCap size={32} />
            <span className="logo-text">StudyMate AI</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button className="btn-primary" onClick={onGetStarted}>
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
