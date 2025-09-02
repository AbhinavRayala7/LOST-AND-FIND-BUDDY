import React, { useState } from 'react';
import API from '../api';

export default function ItemForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('lost');
  const [imageUrl, setImageUrl] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/items', { title, description, location, status, imageUrl });
      setTitle(''); setDescription(''); setLocation(''); setImageUrl('');
      if (onCreate) onCreate();
    } catch (err) {
      alert(err.response?.data?.msg || 'Failed to create');
    }
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Report an item</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Image URL (optional)" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}