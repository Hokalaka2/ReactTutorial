const PersonForm = ({formSubmit, nameValue, handleNameChange, numberValue, handleNumberChange}) => (
    <form onSubmit={formSubmit}>
      <div>
        name: <input 
        value={nameValue}
        onChange = {handleNameChange}
        />
        <br/>
        number: <input 
        value={numberValue}
        onChange = {handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )

  export default PersonForm