import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data1 = new FormData();
    data1.append('name', formData.name);
    data1.append('email', formData.email);
    data1.append('password', formData.password);
    data1.append('image', formData.image);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/register',
        data1,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

  
      const imagePath = response.data.user.image;

      
      setPhoto(imagePath);
    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
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
          type="email"
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
      {photo && <img src={`http://localhost:3000/${photo}`} alt="Uploaded" />}
    </div>
  );
}

export default App;
