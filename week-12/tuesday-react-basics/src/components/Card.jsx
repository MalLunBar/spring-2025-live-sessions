// const Card = () => <article>My card component</article>

// const Card = () => (
//   <article>
//     <h2>My card</h2>
//   </article>
// )

// const Card = () => {
//   return (
//     <article>
//       <h2>My card</h2>
//     </article>
//   )
// }

// const Card = () => {
//   return (
//     <article>
//       <h2>JSX is {50 + 50} times cooler than HTML</h2>
//     </article>
//   )
// }

// const Card = (props) => {
//   return (
//     <article>
//       <h2>{props.title}</h2>
//     </article>
//   )
// }

const Card = ({ title, text }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

export default Card
