const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age}</p>
    </div>
  )
}
const App = () => {
  const name = "Otis"
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='George' age='10'/>
      <Hello name={name} age={age}/>
    </>
  )
  }

export default App;
