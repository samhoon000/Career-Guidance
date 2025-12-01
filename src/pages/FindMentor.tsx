import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorList from "@/components/mentor_search/MentorList";
import MentorProfileModal from "@/components/mentor_search/MentorProfileModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FindMentor = () => {
  console.log("FindMentor page rendered");
  const navigate = useNavigate();
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [domain, setDomain] = useState("all");
  const [q, setQ] = useState("");

  const onReset = () => {
    setDomain("all");
    setQ("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Find a Mentor</h1>
            <p className="text-slate-600">Filter by domain and click any mentor to view details.</p>
          </header>

          <section className="mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="domainSelect" className="block text-sm font-medium text-slate-700 mb-2">
                  Domains
                </label>
                <select
                  id="domainSelect"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                >
                  <option value="all">All domains</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="devops">DevOps</option>
                  <option value="data-science">Data Science</option>
                  <option value="machine-learning">Machine Learning</option>
                </select>
              </div>

              <div>
                <label htmlFor="searchInput" className="block text-sm font-medium text-slate-700 mb-2">
                  Search
                </label>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search mentors by name or topic..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onReset}
                className="px-6 py-2 border border-slate-300 rounded-lg bg-white text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </section>

          <section>
            <MentorList
              domain={domain}
              q={q}
              onOpenProfile={(mentorObj) => setSelectedMentor(mentorObj)}
            />
          </section>

          {selectedMentor && (
            <MentorProfileModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindMentor;

