import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// AGORA Events Pages
import { HomePage } from './pages/agora-events/HomePage';
import { AboutPage } from './pages/agora-events/AboutPage';
import { ProjectsPage } from './pages/agora-events/ProjectsPage';
import { PartnersPage } from './pages/agora-events/PartnersPage';
import { ContactPage } from './pages/agora-events/ContactPage';
import { FAQPage } from './pages/agora-events/FAQPage';

// AGORA Circuit Pages
import { CircuitHomePage } from './pages/circuit/CircuitHomePage';
import { RankingsPage } from './pages/circuit/RankingsPage';
import { SchedulePage } from './pages/circuit/SchedulePage';
import { RegisterPage } from './pages/circuit/RegisterPage';
import { RulesPage } from './pages/circuit/RulesPage';
import { PrizesPage } from './pages/circuit/PrizesPage';
import { DashboardPage } from './pages/circuit/DashboardPage';
import { QRLandingPage } from './pages/circuit/QRLandingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* AGORA Events Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* AGORA Circuit Routes */}
            <Route path="/circuit" element={<CircuitHomePage />} />
            <Route path="/circuit/rankings" element={<RankingsPage />} />
            <Route path="/circuit/schedule" element={<SchedulePage />} />
            <Route path="/circuit/register" element={<RegisterPage />} />
            <Route path="/circuit/rules" element={<RulesPage />} />
            <Route path="/circuit/prizes" element={<PrizesPage />} />
            <Route path="/circuit/dashboard" element={<DashboardPage />} />
            <Route path="/circuit/qr" element={<QRLandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
