import { useParams } from 'react-router-dom';
import { clubs } from '../data/club';
import { useEffect, useState } from 'react';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (joinedClubs.includes(clubId)) {
      setJoined(true);
    }
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    joinedClubs.push(clubId);
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
    setJoined(true);
    alert(`You joined ${club.name}!`);
  };

  if (!club) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold text-red-600">Club not found!</h1>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold text-blue-700 mb-2">{club.name}</h1>
      <p className="mb-4 text-gray-700">{club.description}</p>

      <h2 className="text-xl font-semibold mb-2">Upcoming Events:</h2>
      <ul className="list-disc list-inside mb-6">
        {club.events.map((event, idx) => (
          <li key={idx}>{event.name} – {event.date}</li>
        ))}
      </ul>

      {!joined ? (
        <button
          onClick={handleJoin}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded"
        >
          Join Club
        </button>
      ) : (
        <p className="text-green-700 font-semibold">✅ You have joined this club!</p>
      )}
    </div>
  );
}
