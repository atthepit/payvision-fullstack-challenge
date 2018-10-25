import styled from "react-emotion";

interface Props {
  span?: number;
}

const columnWidths = [6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94];

/**
 * Obtains the column width given across how many columns it should span
 *
 * @param props.span states how many columns it should span, index starts at 1
 */
function getColumnWidth(props: Props) {
  if (!props.span || props.span <= 1) {
    return columnWidths[0];
  }
  if (props.span >= columnWidths.length) {
    return columnWidths[columnWidths.length - 1];
  }
  return columnWidths[props.span - 1];
}

const Column = styled("div")`
  flex-basis: ${getColumnWidth}%;
  margin-left: 2%;
`;

export default Column;
