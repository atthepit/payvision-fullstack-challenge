import styled from "react-emotion";
import colors from "../ui/colors";
import breakPoints from "../ui/breakPoints";

const Details = styled("div")`
  margin: 0 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${colors.paleGreyTwo};
  @media (min-width: ${breakPoints.tablet}px) {
    display: flex;
    flex-flow: row nowrap;
    max-height: 16rem;
  }
`;

export default Details;
