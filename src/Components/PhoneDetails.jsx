import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PhoneDetails() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/phones/${id}`)
      .then(response => response.json())
      .then(data => setPhone(data))
      .catch(error => console.error("Error fetching phone details:", error));
  }, [id]);

  if (!phone) return <p>Loading...</p>;

  return (
    <div>
      <h2>{phone.name}</h2>
      <img src={phone.image} alt={phone.name} width="200" />
      <p>{phone.review}</p>
      <p>Likes: {phone.likes}</p>
    </div>
  );
}

export default PhoneDetails;