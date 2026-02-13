import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import Home from './pages/Home';
import Rules from './pages/Rules.tsx';
import Skills from './pages/Skills.tsx';

import Workflow from './pages/Workflow';
import DeployGuide from './pages/DeployGuide';
import MobileGuide from './pages/MobileGuide';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/deploy" element={<DeployGuide />} />
          <Route path="/mobile" element={<MobileGuide />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
