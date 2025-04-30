import styled from "styled-components"

import { media } from "../styles/media"

const CardWrapper = styled.article`
  border: 2px solid blue;
  /* padding: ${props => props.theme.spacing.medium}; */
  padding: ${({ theme }) => theme.spacing.medium};
  /* Destructured 👆 */
  width: 200px;

  /* @media (min-width: 900px) {
    width: 250px;
  } */

  /* Regular media query 👆 */
  /* Media query from broken out breakpoints 👇*/
  @media ${media.desktop} {
    width: 250px;
  }
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
