
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import DayOptions from './DayOptios';
import HoroscopeResults from './HoroscopeResults';
import SignButtons from './SignButtons';
import Footer from './Footer';
import Header from './Header';

function App(props) {
  const [horoscope, setHoroscope] = useState([]);
  const [userChoice, setUserChoice] = useState('');
  const [dateChoice, setDateChoice] = useState('');
  const [horoscopeResult, setHoroscopeResult] = useState(false);
  
  const signSelection = (sign) => {
    setUserChoice(sign)
    setHoroscopeResult(false)
  }
  const dateSelection = (date) => {
    setDateChoice(date)
    setHoroscopeResult(true)
  }

  useEffect(() => {
    if (userChoice !== '' && dateChoice !== '') {
      axios({
        url: 'https://aztro.sameerkumar.website/',
        method: 'POST',
        responseType: 'json',
        params: {
          sign: userChoice,
          day: dateChoice
        }

      })
        .then(response => {
          console.log(response.data);
           setHoroscope(response.data)
        })
    }
  }, [userChoice, dateChoice])
  console.log(userChoice, dateChoice, horoscope)
  return (
    <div className="app">
      <div className="wrapper">
      <Header />

      <SignButtons handleSignSelection={signSelection} />
      {userChoice 
        ? <DayOptions handleDateSelection={dateSelection} /> 
        : null}
        {horoscopeResult
          ? <HoroscopeResults getHoroscope={horoscope} />
        :null
        }

      
        {/* <HoroscopeResults getHoroscope={horoscope} /> */}
       
      
      <Footer />
      </div>
    </div>

  );
}

export default App;