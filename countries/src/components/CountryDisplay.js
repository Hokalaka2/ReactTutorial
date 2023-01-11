const CountryDisplay = ({setNewCountrySearch, countrySearch, countries}) => {
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))

    const handleShow = country => {
        console.log(country.name.common)
        setNewCountrySearch(country.name.common)
      }

    if(countriesToShow.length > 10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else if(countriesToShow.length === 1){
        const country = countriesToShow[0]
        const languages = Object.keys(country.languages)
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>

                <h3>Languages: </h3>
                <ul>
                    {languages.map(language => <li key={language}>{country.languages[language]}</li>)}
                </ul>
                <div>
                    {country.flag}
                </div>
                

            </div>
        )
    }
    else{
    return (
        <>
            {countriesToShow.map(country => <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => handleShow(country)}>Show</button>
                </li>)}
        </>
        )
    }
}

export default CountryDisplay