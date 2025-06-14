import { useState } from 'react';
import { clubs } from '../data/club'
import { useNavigate } from 'react-router-dom';

export default function ClubList() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [view, setView] = useState('grid');
  const navigate = useNavigate();

  const sortedClubs = [...clubs].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Explore Campus Clubs</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>

        <div className="flex gap-2">
          <button onClick={() => setView('grid')} className={`px-4 py-2 border rounded ${view === 'grid' ? 'bg-blue-500 text-white' : ''}`}>
            Grid
          </button>
          <button onClick={() => setView('list')} className={`px-4 py-2 border rounded ${view === 'list' ? 'bg-blue-500 text-white' : ''}`}>
            List
          </button>
        </div>
      </div>

      {/* Club Cards */}
      <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
        {sortedClubs.map((club) => (
          <div key={club.id} className="border rounded shadow p-4 flex flex-col md:flex-row gap-4">
            <img src={club.image} alt={club.name} className="w-full md:w-32 h-32 object-cover rounded" />
            <div>
              <h2 className="text-xl font-bold">{club.name}</h2>
              <p className="text-sm text-gray-600">{club.shortDescription}</p>
              <button
                onClick={() => navigate(`/clubs/${club.id}`)}
                className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}