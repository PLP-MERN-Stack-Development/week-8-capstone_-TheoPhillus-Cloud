// client/src/components/PostForm.jsx
import { useState } from 'react';
import { createPost } from '../api/posts';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createPost(form)
      .then(() => navigate('/'))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      {['title','slug','excerpt','content'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Create</button>
    </form>
  );
}