import styled from "react-emotion";
import Row from "../ui/Row";
import colors from "../ui/colors";
import font from "../ui/font";

interface Props {
  active: boolean;
}

const Transaction = styled(Row)(
  {
    padding: "1rem 0",
    margin: "0 1rem",
    borderTop: `1px solid ${colors.paleGreyTwo}`,
    "&:hover": {
      cursor: "pointer"
    }
  },
  (props: Props) => ({
    fontWeight: props.active ? font.bold.weight : font.primary.weight
  })
);

export default Transaction;
