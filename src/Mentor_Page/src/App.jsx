import { Routes, Route } from "react-router-dom"
import MentorLogin from "./pages/MentorLogin"
import MentorSignup from "./pages/MentorSignup"
import MentorHome from "./pages/MentorHome"
import MentorSubmitted from "./pages/MentorSubmitted"
import MentorStudents from "./pages/MentorStudents"
import MentorSessions from "./pages/MentorSessions"
import MentorProfile from "./pages/MentorProfile"

function MentorApp() {
  return (
    <Routes>
      <Route index element={<MentorLogin />} />
      <Route path="login" element={<MentorLogin />} />
      <Route path="signup" element={<MentorSignup />} />
      <Route path="home" element={<MentorHome />} />
      <Route path="submitted" element={<MentorSubmitted />} />
      <Route path="students" element={<MentorStudents />} />
      <Route path="sessions" element={<MentorSessions />} />
      <Route path="profile" element={<MentorProfile />} />
    </Routes>
  )
}

export default MentorApp

