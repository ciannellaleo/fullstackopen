import { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log(countries)
      })
  }, [])

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    countriesToShow(search)

  }

  const countriesToShow = (text) => {
    const resultsTemp = countries.filter(country => {
      return country.name.common.includes(text)
    })
    setResults(resultsTemp)
  }

  const languageArray = [];

  if (results.length === 1){
    results.map(item => {
      for(const [key, value] of Object.entries(item.languages)){
        languageArray.push(value)
      }
    })
  }
console.log(languageArray)


  return (
    <div>
      <p>
        find countries
        <input
          value={search}
          onChange={handleSearch}
        />
      </p>
      <div>
        {results.length > 10
          ? <p>Too many matches, specify another filter</p>
          : results.length === 1
            ?
            results.map((country, index) => {
              return (
                <div>
                  <h1>
                    {country.name.common}
                  </h1>
                  <p>capital:{country.capital}</p>
                  <p>area:{country.area}</p>
                  <div>
                    <h4>languages:</h4>
                    <ul>
                      {languageArray.map((lang, subindex) => <li key={subindex}>{lang}</li>)}
                    </ul>
                    <img src={country.flags.png}></img>
                  </div>
                </div>
              )
            })
            : results.map(country => {
              return (
                <li key={country.name.common}>
                  {country.name.common}
                </li>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
