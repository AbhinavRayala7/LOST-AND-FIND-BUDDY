import React, { useEffect, useState } from 'react';
import API from '../api';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const load = async () => {
    const res = await API.get('/items', { params: { q: query, status: filter } });
    setItems(res.data);
  };

  useEffect(() => { load(); }, [query, filter]);

  return (
    <div>
      <h1>Lost & Found</h1>
      <div className="toolbar">
        <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
      </div>
      <ItemForm onCreate={load} />
      <div className="grid">
        {items.map(it => <ItemCard key={it._id} item={it} onDelete={load} />)}
      </div>
    </div>
  );
}