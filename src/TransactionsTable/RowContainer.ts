import styled from "react-emotion";
import colors from "../ui/colors";

interface Props {
  active: boolean;
}

const RowContainer = styled("div")({}, (props: Props) => ({
  backgroundColor: props.active ? colors.paleGrey : colors.white
}));

export default RowContainer;
