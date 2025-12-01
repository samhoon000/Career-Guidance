import React from 'react';

export default function MentorCard({ mentor, onOpen }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow hover:shadow-md cursor-pointer" onClick={onOpen}>
      <div className="flex items-center gap-4">
        <img src={mentor.avatarUrl || 'https://via.placeholder.com/96'} alt="" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <div className="text-xl font-semibold">{mentor.name}</div>
          <div className="text-sm text-gray-600">{mentor.title}</div>
          <div className="mt-2 text-sm text-gray-700">{(mentor.topics || []).slice(0,3).join(', ')}</div>
          <div className="mt-2 text-sm text-yellow-600">⭐ {mentor.rating ?? '—'}</div>
        </div>
      </div>
    </div>
  );
}

