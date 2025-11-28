import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InterviewHome } from './pages/InterviewHome';
import { Round_HR } from './pages/Round_HR';
import { Round_Technical } from './pages/Round_Technical';
import { Round_Case } from './pages/Round_Case';
import { Round_Viz } from './pages/Round_Viz';
import { Round_Behavioral } from './pages/Round_Behavioral';
import { Round_Managerial } from './pages/Round_Managerial';
import { MockInterview } from './pages/mock-interview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InterviewHome />} />
        <Route path="/interview-home" element={<InterviewHome />} />
        <Route path="/interview/hr" element={<Round_HR />} />
        <Route path="/interview/technical" element={<Round_Technical />} />
        <Route path="/interview/case" element={<Round_Case />} />
        <Route path="/interview/viz" element={<Round_Viz />} />
        <Route path="/interview/behavioral" element={<Round_Behavioral />} />
        <Route path="/interview/managerial" element={<Round_Managerial />} />
        <Route path="/mock-interview" element={<MockInterview />} />
      </Routes>
    </Router>
  );
}

export default App;

