import styled from "styled-components"

const CardWrapper = styled.article`
  border: 2px solid blue;
  padding: 1rem;
  width: 400px;
`

const Card = ({ title, text }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </CardWrapper>
  )
}

export default Card
