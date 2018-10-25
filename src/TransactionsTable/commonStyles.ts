import { css } from "emotion";
import breakPoints from "../ui/breakPoints";

export const alignCenter = css`
  text-align: center;
`;

export const alignRight = css`
  text-align: right;
`;

export const capitalize = css`
  text-transform: capitalize;
`;

export const hidden = css`
  display: none;
`;

export const mobileHidden = css`
  @media (max-width: ${breakPoints.tablet - 1}px) {
    display: none;
  }
`;

export const showMobile = css`
  @media (min-width: ${breakPoints.tablet}px) {
    display: none;
  }
`;
