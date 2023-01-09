const Total = ({parts}) => {
    const total = parts.reduce((s,p) => s + p.exercises, 0)

    return (
      <p><b>Number of exercises {total}</b></p>
    )
  }

  export default Total