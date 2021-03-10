import React from 'react';
import { useHistory } from 'react-router-dom';
import bins from '../services/bins'

const Home = () => {
  const history = useHistory();

  const createBin = (e) => {
    e.preventDefault();
    const url = bins.create();
    history.push(url);
  }

  return (
    <div>
      <h1>Request Bin</h1>
      <p>Welcome! Click "Create Bin" to get started.</p>
      <button onClick={createBin}>Create Bin</button>
    </div>
  )
};

export default Home;