import styled from "react-emotion";
import colors, { hsl } from "./colors";

const Button = styled("button")`
  background-color: ${colors.avocado};
  border: none;
  color: ${colors.white};
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: hsl(
      ${hsl.avocado.h},
      ${hsl.avocado.s}%,
      ${hsl.avocado.l + 5}%
    );
  }
`;

export default Button;
