import styled from "styled-components"

import Card from "../components/Card"

const SectionTitle = styled.h2`
  /* color: ${props => props.$animalType === "Birds" ? "blue" : "green"}; */
  color: ${({ $animalType }) => $animalType === "Birds" ? "blue" : "green"}; /*Destructured props*/
`

const AnimalSection = ({ animals, title }) => {
  return (
    <>
      <SectionTitle $animalType={title}>{title}</SectionTitle>
      {animals.map((animal) => {
        return (
          <Card
            key={animal.name}
            title={animal.name}
            text={animal.tags.join(", ")}
          />
        )
      })}
    </>
  )
}

export default AnimalSection