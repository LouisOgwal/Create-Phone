import React, { useState } from 'react';

function EditPhoneForm({ phone, handleEdit, cancelEdit }) {
  const [name, setName] = useState(phone.name);
  const [review, setReview] = useState(phone.review);
  const [image, setImage] = useState(phone.image);

  const onSubmit = (e) => {
    e.preventDefault();
    handleEdit({ ...phone, name, review, image });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Edit Phone</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Phone Name"
      />
      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Review"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
}

export default EditPhoneForm;