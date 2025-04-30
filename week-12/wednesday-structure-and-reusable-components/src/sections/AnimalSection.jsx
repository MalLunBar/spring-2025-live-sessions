import Card from "../components/Card"

const AnimalSection = ({ animals, title }) => {
  return (
    <>
      <h2>{title}</h2>
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