import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MentorSignup() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: '',
    email: '',
    phone: '',
    password: '',
    
    // Professional Details
    jobTitle: '',
    organization: '',
    yearsOfExperience: '',
    qualification: '',
    areaOfExpertise: '',
    
    // Mentorship Details
    mentorshipTopics: '',
    availability: '',
    
    // Profile Information
    bio: '',
    linkedin: '',
    github: '',
    portfolio: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // Append all mentor form fields (except password)
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'password' && value) {
          formDataToSend.append(key, value)
        }
      })

      // Add a message field (Formspree needs something like "message")
      formDataToSend.append("message", "New mentor application submission")

      const response = await fetch("https://formspree.io/f/xpwgrpzq", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      })

      const result = await response.json()

      if (result.ok) {
        navigate("/mentor/submitted")
      } else {
        alert("Submission failed")
        console.error(result)
      }
    } catch (err) {
      console.error(err)
      alert("Error submitting form")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Mentor Application</h1>
          <p className="text-slate-600">
            Join our mentor community and help students grow in their careers.
          </p>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-800 mb-2">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-800 mb-2">
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
            </div>
          </section>

          {/* Professional Details */}
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-800 mb-2">
                  Current Job Title *
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-800 mb-2">
                  Organization / Company / Institution *
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-slate-800 mb-2">
                  Years of Experience *
                </label>
                <input
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  min="0"
                  type="number"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-slate-800 mb-2">
                  Highest Qualification *
                </label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  placeholder="e.g., Master's in Computer Science"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="areaOfExpertise" className="block text-sm font-medium text-slate-800 mb-2">
                  Area of Expertise *
                </label>
                <input
                  id="areaOfExpertise"
                  name="areaOfExpertise"
                  type="text"
                  value={formData.areaOfExpertise}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  placeholder="e.g., Software Engineering, Data Science"
                  required
                />
              </div>
            </div>
          </section>

          {/* Mentorship Details */}
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Mentorship Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="mentorshipTopics" className="block text-sm font-medium text-slate-800 mb-2">
                  Topics You Can Mentor On *
                </label>
                <textarea
                  id="mentorshipTopics"
                  name="mentorshipTopics"
                  value={formData.mentorshipTopics}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  rows={3}
                  placeholder="List the topics or areas you can mentor students on"
                  required
                />
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-slate-800 mb-2">
                  Availability (days & time slots) *
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  rows={3}
                  placeholder="e.g., Monday-Friday, 6 PM - 8 PM EST"
                  required
                />
              </div>
            </div>
          </section>

          {/* Profile Information */}
          <section>
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-slate-800 mb-2">
                  Short Bio (2-3 lines) *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                  rows={3}
                  placeholder="Tell us about yourself in 2-3 lines"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-slate-800 mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-slate-800 mb-2">
                    GitHub URL
                  </label>
                  <input
                    id="github"
                    name="github"
                    type="url"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-slate-800 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-slate-900"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/mentor/login"
              className="border border-slate-300 text-slate-700 hover:bg-slate-100 transition rounded-lg px-6 py-3 font-semibold"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-black font-semibold py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

