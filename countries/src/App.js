import './App.css';
import CountryDisplay from './components/CountryDisplay';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [newCountrySearch, setNewCountrySearch] = useState('')
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
  weatherUrl.concat(api_key)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
      axios
      .get(weatherUrl)
      .then(response => {
        setWeather(response.data)
      })
      console.log(weather)
  }, [])

  const handleCountrySearch = (event) => {
    setNewCountrySearch(event.target.value)
  }

  return (
    <div className="Countries">
      Find Countries: <input onChange={handleCountrySearch}
      />
      <ul>
        <CountryDisplay countrySearch={newCountrySearch} setNewCountrySearch={setNewCountrySearch} countries={countries} />
      </ul>
    </div>
  );
}

export default App;
