import { BookOpen, Calendar, FileText, Target } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Organize Study Materials",
    description:
      "Centralize all your notes, documents, and resources in one intelligent platform.",
  },
  {
    icon: FileText,
    title: "AI-Generated Summaries",
    description:
      "Transform lengthy materials into concise, easy-to-understand summaries instantly.",
  },
  {
    icon: Calendar,
    title: "Personalized Study Schedules",
    description:
      "Get custom study plans tailored to your learning pace and exam dates.",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description:
      "Practice with AI-generated quizzes and track your progress toward exam readiness.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Powerful Features for Smarter Learning
          </h2>
          <p className="section-description">
            Everything you need to excel in your studies, powered by artificial
            intelligence
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
