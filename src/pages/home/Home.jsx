import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/barchart">BarChart</Link>
        </li>

        <li>
          <Link to="/barchart2">BarChart2</Link>
        </li>

        <li>
          <Link to="/linechart">LineChart</Link>
        </li>

        <li>
          <Link to="/linechart2">LineChart2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
