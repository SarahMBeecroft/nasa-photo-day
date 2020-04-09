import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import DateSelection from './components/DateSelection';
import Content from './components/Content';
import Footer from './components/Footer';
import 'react-datepicker/dist/react-datepicker.css';

function App(props) {
  /* Sets start date to today with moment js */
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(Date.now());

  const handleChange = (date) => {
    setStartDate(date);
  };

  useEffect(() => {
    const date = moment(startDate).format('YYYY-MM-DD');
    const keyString = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${keyString}&date=${date}`
      )
      .then((res) => {
        console.log('RESPONSE DATA:', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log('ERROR Fetching API:', err);
      });

    console.log('StartDateProps', startDate);
  }, [startDate]);

  return (
    <div className='App'>
      <div className='App-content'>
        <h1 className='header'>NASA Photo of the Day</h1>
        <h3 className='dateSelection'>select date:</h3>
        <DateSelection
          selected={startDate}
          handleChange={handleChange}
          data={data}
        />
        <Content selected={startDate} handleChange={handleChange} data={data} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
