import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="p-12 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
  );
}
