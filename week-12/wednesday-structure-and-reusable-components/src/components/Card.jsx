import "./Card.css"

const Card = ({ title, text }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

export default Card
