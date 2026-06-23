import { useState } from "react";
import {
  ArrowLeft,
  Upload,
  BookOpen,
  Calendar,
  Brain,
  CheckCircle,
} from "lucide-react";

interface DashboardProps {
  onBack: () => void;
}

type Tab = "materials" | "summaries" | "schedule" | "practice";

export default function Dashboard({ onBack }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("materials");

  const tabs = [
    { id: "materials" as Tab, label: "Study Materials", icon: BookOpen },
    { id: "summaries" as Tab, label: "AI Summaries", icon: Brain },
    { id: "schedule" as Tab, label: "Study Schedule", icon: Calendar },
    { id: "practice" as Tab, label: "Practice", icon: CheckCircle },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="dashboard-header">
          <h1>Your Learning Dashboard</h1>
          <p>Manage your study materials and track your progress</p>
        </div>

        <div className="dashboard-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="dashboard-content">
          {activeTab === "materials" && (
            <div className="content-section">
              <div className="upload-area">
                <Upload size={48} />
                <h3>Upload Study Materials</h3>
                <p>Drag and drop your notes, PDFs, or documents here</p>
                <button className="btn-primary">Choose Files</button>
              </div>
              <div className="materials-list">
                <h3>Recent Materials</h3>
                <div className="empty-state">
                  <p>
                    No materials uploaded yet. Start by uploading your first
                    document!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "summaries" && (
            <div className="content-section">
              <div className="summary-generator">
                <h3>Generate AI Summary</h3>
                <p>Select a document to generate an intelligent summary</p>
                <button className="btn-primary">Generate Summary</button>
              </div>
              <div className="summaries-list">
                <h3>Saved Summaries</h3>
                <div className="empty-state">
                  <p>No summaries generated yet. Upload materials first!</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="content-section">
              <div className="schedule-builder">
                <h3>Create Your Study Schedule</h3>
                <div className="schedule-form">
                  <div className="form-group">
                    <label>Exam Date</label>
                    <input type="date" className="input" />
                  </div>
                  <div className="form-group">
                    <label>Study Hours Per Day</label>
                    <input
                      type="number"
                      className="input"
                      placeholder="2-8 hours"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subjects to Cover</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Math, Physics, Chemistry..."
                    />
                  </div>
                  <button className="btn-primary">Generate Schedule</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "practice" && (
            <div className="content-section">
              <div className="practice-area">
                <h3>Practice & Quizzes</h3>
                <p>Test your knowledge with AI-generated questions</p>
                <div className="practice-stats">
                  <div className="stat-card">
                    <h4>0</h4>
                    <p>Quizzes Taken</p>
                  </div>
                  <div className="stat-card">
                    <h4>0%</h4>
                    <p>Average Score</p>
                  </div>
                  <div className="stat-card">
                    <h4>0</h4>
                    <p>Topics Mastered</p>
                  </div>
                </div>
                <button className="btn-primary">Start Practice Quiz</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
