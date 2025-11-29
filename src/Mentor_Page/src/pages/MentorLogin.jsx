import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MentorLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Temporary: Just navigate to home (no real auth)
    navigate("/mentor/home")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 text-center mb-3">Mentor Login</h1>
          <p className="text-slate-500 text-center mb-8">
            Sign in to manage your mentorship profile and sessions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-slate-900 placeholder-slate-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-800 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-slate-900 placeholder-slate-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm">
            Don't have a mentor account?{' '}
            <Link to="/mentor/signup" className="text-blue-600 hover:underline font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

