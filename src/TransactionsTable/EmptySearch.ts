import styled from "react-emotion";

const EmptySearch = styled("p")`
  text-align: center;
  margin: 0 1rem;
  border-top: 1px solid #e8ebf3;
  padding: 1rem 0;
  font-size: 18px;

  &:before {
    content: "🤦🏾‍";
    font-size: 20px;
  }
`;

export default EmptySearch;
