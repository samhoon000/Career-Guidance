'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MentorSignupPage() {
  const router = useRouter()
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
    skills: '',
    
    // Mentorship Details
    mentorshipTopics: '',
    studentLevel: '',
    availability: '',
    mentoringMode: '',
    
    // Profile Information
    bio: '',
    linkedin: '',
    github: '',
    portfolio: '',
    resume: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("DEBUG — Loaded Web3Forms Key:", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      
      // Append all form fields with camelCase to snake_case conversion
      Object.entries(formData).forEach(([key, value]) => {
        // Convert camelCase to snake_case for Web3Forms compatibility
        const safeKey = key
          .replace(/([A-Z])/g, "_$1")   // add underscore before capital letters
          .toLowerCase();               // convert full string to lowercase

        if (safeKey === "resume" && value) {
          formDataToSend.append("resume", value as File);
        } else if (value) {
          formDataToSend.append(safeKey, value as string);
        }
      })

      // Load Web3Forms access key (must come from .env.local)
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

      if (!accessKey) {
        throw new Error(
          "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not defined. Add it to your .env.local file and restart the dev server."
        );
      }

      formDataToSend.append("access_key", accessKey);
      formDataToSend.append("subject", "New Mentor Application");
      formDataToSend.append("from_name", "Mentor Application Form");
      formDataToSend.append("redirect", `${window.location.origin}/mentor/submitted`);
      formDataToSend.append("message", "New mentor application received.");

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        router.push('/mentor/submitted')
      } else {
        alert('Submission failed. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mentor Application</h1>
          <p className="text-gray-600">Join our mentor community and help students grow</p>
        </div>

        <form onSubmit={handleSubmit} className="pastel-card p-8">
          {/* Basic Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Professional Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Job Title *
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization / Company / Institution *
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  type="number"
                  min="0"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Qualification *
                </label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., Master's in Computer Science"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="areaOfExpertise" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Expertise *
                </label>
                <input
                  id="areaOfExpertise"
                  name="areaOfExpertise"
                  type="text"
                  value={formData.areaOfExpertise}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., Software Engineering, Data Science"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Skills (comma-separated) *
                </label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., JavaScript, React, Node.js, Python"
                  required
                />
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Mentorship Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentorship Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="mentorshipTopics" className="block text-sm font-medium text-gray-700 mb-2">
                  Topics You Can Mentor On *
                </label>
                <textarea
                  id="mentorshipTopics"
                  name="mentorshipTopics"
                  value={formData.mentorshipTopics}
                  onChange={handleInputChange}
                  className="input-field"
                  rows={3}
                  placeholder="List the topics or areas you can mentor students on"
                  required
                />
              </div>
              <div>
                <label htmlFor="studentLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Student Level *
                </label>
                <select
                  id="studentLevel"
                  name="studentLevel"
                  value={formData.studentLevel}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability (days & time slots) *
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="input-field"
                  rows={3}
                  placeholder="e.g., Monday-Friday, 6 PM - 8 PM EST"
                  required
                />
              </div>
              <div>
                <label htmlFor="mentoringMode" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Mentoring Mode *
                </label>
                <select
                  id="mentoringMode"
                  name="mentoringMode"
                  value={formData.mentoringMode}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select mode</option>
                  <option value="Chat">Chat</option>
                  <option value="Video">Video</option>
                  <option value="Calls">Calls</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Multiple">Multiple (specify in bio)</option>
                </select>
              </div>
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Profile Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                  Short Bio (2-3 lines) *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="input-field"
                  rows={3}
                  placeholder="Tell us about yourself in 2-3 lines"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub URL
                  </label>
                  <input
                    id="github"
                    name="github"
                    type="url"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume Upload (PDF, DOC, DOCX)
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="input-field file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-pastel-blue file:text-white hover:file:bg-pastel-purple"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-center gap-4">
            <Link
              href="/mentor"
              className="px-6 py-3 rounded-lg font-semibold text-gray-700 border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
