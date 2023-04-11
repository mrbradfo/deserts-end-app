import React, { useState } from 'react';
import { VolunteerFormProps } from '../types';
import './styles/Home.css';

const VolunteerForm: React.FC<VolunteerFormProps> = ({ onAddVolunteer }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddVolunteer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddVolunteer(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleAddVolunteer}>
      <span>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </span>
      <span>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </span>
      <button type="submit">Add Volunteer</button>
    </form>
  );
};

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <div className="home-title">Volunteer Manager</div>
      </header>
      <VolunteerForm
        onAddVolunteer={(name, phone) => {
          // eslint-disable-next-line no-console
          console.log(`Adding: ${name} & ${phone}`);
        }}
      />
    </div>
  );
}

export default Home;
