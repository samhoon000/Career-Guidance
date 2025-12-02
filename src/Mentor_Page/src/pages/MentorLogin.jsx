import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import { LOGIN_API_FALLBACK } from "@/api/endpoints"

export default function MentorLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await axios.post(`${LOGIN_API_FALLBACK}/api/mentor/login`, {
        email,
        password
      })

      if (response.data.message === "Login successful") {
        navigate("/mentor/home")
      } else {
        setError(response.data.message)
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-center mb-6">Mentor Login</h1>

        {error && (
          <p className="text-red-500 text-center mb-4 font-semibold">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have a mentor account?{' '}
            <Link to="/mentor/signup" className="text-blue-600 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}
