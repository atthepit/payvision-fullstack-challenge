import styled from "react-emotion";

interface Props {
  active: boolean;
}

const DetailsContainer = styled("div")(
  {
    overflow: "hidden",
    transition: "max-height 0.25s ease-in-out"
  },
  (props: Props) => ({
    maxHeight: props.active ? `50rem` : "0"
  })
);

export default DetailsContainer;
