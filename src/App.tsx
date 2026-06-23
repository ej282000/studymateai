import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="app">
      <Header onGetStarted={() => setShowDashboard(true)} />
      {showDashboard ? (
        <Dashboard onBack={() => setShowDashboard(false)} />
      ) : (
        <>
          <Hero onGetStarted={() => setShowDashboard(true)} />
          <Features />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
