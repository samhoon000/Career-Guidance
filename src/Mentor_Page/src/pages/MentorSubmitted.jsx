import { Link } from 'react-router-dom'

export default function MentorSubmitted() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Your mentor application has been submitted!
            <br />
            Please wait while our team evaluates your profile.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/mentor/login"
            className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg inline-block text-center"
          >
            Go to Mentor Login Page
          </Link>
        </div>
      </div>
    </div>
  )
}

