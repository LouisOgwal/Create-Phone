import React, { useState } from 'react';

function AddPhone({ handleSubmit }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [image, setImage] = useState('');


  const onSubmit = (e) => {
    handleSubmit(e, name, review, image);
    setName(''); 
    setReview('');
    setImage('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a New Phone</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
     
      <button type="submit">Add Phone</button>
    </form>
  );
}

export default AddPhone;