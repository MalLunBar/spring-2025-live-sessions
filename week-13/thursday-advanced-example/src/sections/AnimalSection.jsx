import styled from "styled-components"

import Card from "../components/Card"

const SectionTitle = styled.h2`
  color: ${({ $animalType }) => $animalType === "Birds" ? "blue" : "green"}; 
`

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const AnimalSection = ({ animals, title }) => {
  return (
    <>
      <SectionTitle $animalType={title}>{title}</SectionTitle>
      <SectionWrapper>
        {animals.map((animal) => {
          return (
            <Card
            key={animal.name}
            title={animal.name}
            text={animal.tags.join(", ")}
            />
          )
        })}
      </SectionWrapper>
    </>
  )
}

export default AnimalSection