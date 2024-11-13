import React from 'react';
import { Link } from 'react-router-dom';

function PhoneList({ phones, handleDelete, handleLike, handleDislike }) {
  return (
    <div>
      <h2>Available Phones</h2>
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
          <Link to={`/phones/${phone.id}`}>
            <h3>{phone.name}</h3>
            <img src={phone.image} alt={phone.name} width="100" />
          </Link>
          <p>Review: {phone.review}</p>
          <p>Likes: {phone.likes}</p>
          <p>Dislikes: {phone.dislikes}</p>
          <button className="like-btn" onClick={() => handleLike(phone.id)}>Like</button>
          <button className="dislike-btn" onClick={() => handleDislike(phone.id)}>Dislike</button>
          <button onClick={() => handleDelete(phone.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;