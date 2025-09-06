import { useEffect, useState } from 'react';

function AdminPanel({ token }) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('http://localhost:5000/api/contact', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setMessages(await res.json());
      } else {
        setError('Failed to fetch messages');
      }
    };
    fetchMessages();
  }, [token]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Contact Messages</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {messages.map(msg => (
          <li key={msg._id} className="mb-4 p-4 border rounded">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AdminPanel;