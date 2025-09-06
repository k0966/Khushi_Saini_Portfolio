import React, { useEffect, useState } from "react";

const AdminDashboard = ({ token, onLogout }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 5;

  // 🔹 Fetch contacts
  const fetchContacts = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://khushi-saini-portfolio.onrender.com/api/contact?page=${pageNumber}&limit=${ITEMS_PER_PAGE}&search=${search}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setContacts(data.contacts || data); // backend might return array directly
        setTotalPages(data.totalPages || 1);
      } else {
        setError(data.error || "Failed to load contacts");
      }
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete a contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setContacts(contacts.filter((c) => c._id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete contact");
      }
    } catch (err) {
      alert("Error deleting contact: " + err.message);
    }
  };

  useEffect(() => {
    fetchContacts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 my-20">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={onLogout}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* 🔹 Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="flex-1 border rounded-lg px-4 py-2"
        />
      </div>

      {/* 🔹 Contacts List */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && contacts.length === 0 && (
        <p className="text-center text-gray-500">No messages found.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {contacts.map((c) => (
          <div
            key={c._id}
            className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-600 mb-2">{c.email}</p>
            <p className="text-gray-700 mb-4">{c.message}</p>
            <button
              onClick={() => handleDelete(c._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 rounded-lg ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>
          <span className="text-lg">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className={`px-4 py-2 rounded-lg ${
              page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
