import DisplayNumbers from "./DisplayNumbers"

const Persons = ({newSearch, persons}) => {
    const personsToShow = newSearch.length > 0
      ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
      : persons
    return (
      <div>
      {personsToShow.map(person => <DisplayNumbers key={person.id} person={person}/>)}
      </div>
    )
  }

export default Persons