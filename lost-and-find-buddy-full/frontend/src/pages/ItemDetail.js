import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    API.get(`/items/${id}`).then(r => setItem(r.data)).catch(console.error);
  }, [id]);

  if (!item) return <div>Loading...</div>;
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <p><strong>Reporter:</strong> {item.reporter?.name} ({item.reporter?.email})</p>
      {item.imageUrl && <img src={item.imageUrl} alt="item" style={{ maxWidth: '300px' }} />}
    </div>
  );
}