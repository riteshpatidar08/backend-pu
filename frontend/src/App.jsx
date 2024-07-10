import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
  });
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data1 = new FormData();

    data1.append('name', formData.name);
    data1.append('email', formData.email);
    data1.append('password', formData.password);
    data1.append('image', formData.image);

    try {
      const data = await axios.post(
        'http://localhost:3000/api/register',
        data1,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // console.log(data);
    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(files);
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <h1 style={{ color: 'red' }}>{error}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <label>Email</label>
        <input
          type="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <input type="file" onChange={handleChange} name="image" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
