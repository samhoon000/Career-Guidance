import { useNavigate } from 'react-router-dom'

export default function MentorHome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Welcome back, Mentor
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Manage your mentees, sessions, and profile from a single, simple dashboard.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Connect to Students */}
          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Connect to Students
            </h3>
            <p className="text-slate-600 mb-6">
              View and respond to mentorship requests.
            </p>
            <button
              onClick={() => navigate("/mentor/students")}
              className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Open Student Requests
            </button>
          </div>

          {/* Card 2: Manage Mentorship Sessions */}
          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Manage Mentorship Sessions
            </h3>
            <p className="text-slate-600 mb-6">
              Track meetings, progress, and upcoming sessions.
            </p>
            <button
              onClick={() => navigate("/mentor/sessions")}
              className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              View Sessions
            </button>
          </div>

          {/* Card 3: Edit Mentor Profile */}
          <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Edit Mentor Profile
            </h3>
            <p className="text-slate-600 mb-6">
              Update your bio, skills, availability, and more.
            </p>
            <button
              onClick={() => navigate("/mentor/profile")}
              className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
