import React, { useState, useEffect } from 'react';
import './App.css';
import AddPhone from './Components/AddPhone.jsx';
import PhoneList from './Components/PhoneList.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneDetails from './Components/PhoneDetails.jsx';
import NavBar from './Components/NavBar.jsx';

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/phones")
      .then(response => response.json())
      .then(data => setPhones(data))
      .catch(error => console.error("Error fetching phones:", error));
  }, []);

  const handleSubmit = (e, name, review, image) => {
    e.preventDefault();
    const newPhone = { name, review, image, likes: 0, dislikes: 0 };

    fetch("http://localhost:3002/phones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPhone),
    })
      .then(res => res.json())
      .then(data => setPhones([...phones, data]))
      .catch(error => console.error("Error adding phone:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/phones/${id}`, {
      method: "DELETE",
    })
      .then(() => setPhones(phones.filter(phone => phone.id !== id)))
      .catch(error => console.error("Error deleting phone:", error));
  };

  const handleLike = (id) => {
    const phone = phones.find(phone => phone.id === id);
    const updatedPhone = { ...phone, likes: phone.likes + 1 };

    fetch(`http://localhost:3002/phones/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: updatedPhone.likes }),
    })
      .then(() => {
        setPhones(phones.map(phone => phone.id === id ? updatedPhone : phone));
      })
      .catch(error => console.error("Error updating likes:", error));
  };

  const handleDislike = (id) => {
    const phone = phones.find(phone => phone.id === id);
    const updatedPhone = { ...phone, dislikes: (phone.dislikes || 0) + 1 };

    fetch(`http://localhost:3002/phones/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dislikes: updatedPhone.dislikes }),
    })
      .then(() => {
        setPhones(phones.map(phone => phone.id === id ? updatedPhone : phone));
      })
      .catch(error => console.error("Error updating dislikes:", error));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>
            <h3></h3>
            <AddPhone handleSubmit={handleSubmit} />
            <PhoneList phones={phones} handleDelete={handleDelete} handleLike={handleLike} handleDislike={handleDislike} />
          </div>
        } />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </Router>
  );
}

export default App;