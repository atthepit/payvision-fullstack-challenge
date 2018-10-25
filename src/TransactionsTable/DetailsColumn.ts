import styled from "react-emotion";
import breakPoints from "../ui/breakPoints";

const DetailsColumn = styled("div")`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: ${breakPoints.tablet}px) {
    flex-basis: 50%;
  }
`;

export default DetailsColumn;
