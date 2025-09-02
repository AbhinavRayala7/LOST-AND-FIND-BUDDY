import React from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function ItemCard({ item, onDelete }) {
  const del = async () => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await API.delete(`/items/${item._id}`);
      if (onDelete) onDelete();
    } catch (err) { alert('Delete failed'); }
  };

  return (
    <div className="card">
      <h4>{item.title}</h4>
      <p>{item.description?.slice(0,100)}</p>
      <p><small>{item.location} • {new Date(item.createdAt).toLocaleString()}</small></p>
      <Link to={`/items/${item._id}`}>View</Link>
      {item.reporter && <span style={{marginLeft:10}}>by {item.reporter.name}</span>}
      <button onClick={del} style={{float:'right'}}>Delete</button>
    </div>
  );
}