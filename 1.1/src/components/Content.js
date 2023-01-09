import Part from './Part'

const Content = (props) => {
    return (
      <div>
        <ul>
          {props.parts.map(part =>
            <Part part={part} />
            )}
        </ul>
      </div>
    )
  }

export default Content